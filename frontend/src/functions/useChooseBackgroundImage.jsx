import { dataBackgrounds } from '../data/dataBackgrounds';

import { useState } from 'react'

export function useChooseBackgroundImage() {

    const data = dataBackgrounds[0];
    const [imageNumber, SetImageNumber] = useState(0);
    const [
        bannerInPortraitOrLandscapeMode,
        SetBannerInPortraitOrLandscapeMode
    ] = useState(data.portrait);

    const WhatOrientationIsTheScreenInNow = (mainOrientation) => {
        var screenWidth = window.screen.width;

        mainOrientation === 'portrait'
            ?
            screenWidth > 992
                ? SetBannerInPortraitOrLandscapeMode(data.portrait)
                : SetBannerInPortraitOrLandscapeMode(data.landscape)
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