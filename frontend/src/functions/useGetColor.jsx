import React, { useEffect, useState } from 'react'

import { FastAverageColor } from 'fast-average-color';

export function useGetColor() {
    const [color, setColor] = useState('#0000');
    const [colorIsDarkOrLight, setColorIsDarkOrLight] = useState('light');
    const [colorIsWhiteOrBlack, setColorIsWhiteOrBlack] = useState('black');

    useEffect(() => {
        document.body.style.setProperty('--colorIsWhiteOrBlack', `${colorIsWhiteOrBlack}`);
        document.body.style.setProperty('--color', `${color}`);
    }, [color])

    const getColor = (Img) => {
        const fac = new FastAverageColor();
        fac.getColorAsync(Img)
            .then(color => {
                setColor(color.hex);
                color.isDark ? setColorIsDarkOrLight('light') : setColorIsDarkOrLight('dark');
                color.isDark ? setColorIsWhiteOrBlack('white') : setColorIsWhiteOrBlack('black');
            })
            .catch(e => {
                setColorIsDarkOrLight('light');
                setColor('#000');
            });
    }

    return {
        color,
        colorIsDarkOrLight,
        colorIsWhiteOrBlack,
        getColor,
    }
}
