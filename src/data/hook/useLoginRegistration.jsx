import { dataBackgrounds } from '../../data/dataBackgrounds';

import React, { useEffect, useState } from 'react'

export function useLoginRegistration() {

    const data = dataBackgrounds[0];
    const [imageNumber, SetImageNumber] = useState(0);
    const [
        bannerInPortraitOrLandscapeMode,
        SetBannerInPortraitOrLandscapeMode
    ] = useState(data.portrait);

    const WhatOrientationIsTheScreenInNow = (itIsForLoginOrRegistration) => {
        var screenWidth = window.screen.width;

        itIsForLoginOrRegistration === 0
            ?
            screenWidth < 992
                ? SetBannerInPortraitOrLandscapeMode(data.landscape)
                : SetBannerInPortraitOrLandscapeMode(data.portrait)
            :
            screenWidth > 992
                ? SetBannerInPortraitOrLandscapeMode(data.landscape)
                : SetBannerInPortraitOrLandscapeMode(data.portrait);
    }

    const getRandomInt = (maxValue) => Math.floor(Math.random() * maxValue)

    const ChooseImageForTheBanner = () => {
        var numberOfImagesAvailable = bannerInPortraitOrLandscapeMode.length;

        SetImageNumber(getRandomInt(numberOfImagesAvailable));
    }

    const ShowPassword = (inputPassword, iconFillEyeVisible, iconFillEyeInvisible) => {
        var inputPasswordAux = document.getElementById(`${inputPassword}`);
        var iconFillEyeVisibleAux = document.getElementById(`${iconFillEyeVisible}`);
        var iconFillEyeInvisibleAux = document.getElementById(`${iconFillEyeInvisible}`);

        if (iconFillEyeVisibleAux.style.display === 'flex') {
            inputPasswordAux.setAttribute('type', 'text');
            iconFillEyeVisibleAux.style.display = 'none';
            iconFillEyeInvisibleAux.style.display = 'flex';
        }
        else {
            inputPasswordAux.setAttribute('type', 'password');
            iconFillEyeVisibleAux.style.display = 'flex';
            iconFillEyeInvisibleAux.style.display = 'none';
        }
    }

    return {
        data,
        imageNumber,
        SetImageNumber,
        bannerInPortraitOrLandscapeMode,
        SetBannerInPortraitOrLandscapeMode,
        WhatOrientationIsTheScreenInNow,
        ChooseImageForTheBanner,
        ShowPassword,
    }
}