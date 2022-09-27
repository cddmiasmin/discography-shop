import { dataBannerLoginRegistration } from '../../data/dataBannerLoginRegistration';

import React, { useEffect, useState } from 'react'

export function useLoginRegistration() {

    const data = dataBannerLoginRegistration[0];
    const [imageNumber, SetImageNumber] = useState(0);
    const [
        bannerInPortraitOrLandscapeMode,
        SetBannerInPortraitOrLandscapeMode
    ] = useState(data.portrait);

    const WhatOrientationIsTheScreenInNow = () => {
        var screenWidth = window.screen.width;

        screenWidth < 992
            ? SetBannerInPortraitOrLandscapeMode(data.landscape)
            : SetBannerInPortraitOrLandscapeMode(data.portrait);
    }

    const getRandomInt = (maxValue) => Math.floor(Math.random() * maxValue)

    const ChooseImageForTheBanner = () => {
        var numberOfImagesAvailable = bannerInPortraitOrLandscapeMode.length;

        SetImageNumber(getRandomInt(numberOfImagesAvailable));
    }

    return {
        data,
        imageNumber,
        SetImageNumber,
        bannerInPortraitOrLandscapeMode,
        SetBannerInPortraitOrLandscapeMode,
        WhatOrientationIsTheScreenInNow,
        ChooseImageForTheBanner,
    }
}