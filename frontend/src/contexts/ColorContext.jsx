import { createContext, useEffect, useState } from "react";
import { FastAverageColor } from 'fast-average-color';

export const ColorContext = createContext();

export function ColorContextProvider({ children }) {

    const [color, setColor] = useState('#0000');
    const [colorIsDarkOrLight, setColorIsDarkOrLight] = useState('light');
    const [colorIsWhiteOrBlack, setColorIsWhiteOrBlack] = useState('black');

    useEffect(() => {
        document.body.style.setProperty('--colorIsWhiteOrBlack', `${colorIsWhiteOrBlack}`);
        document.body.style.setProperty('--color', `${color}`);
    }, [color, colorIsWhiteOrBlack]);

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

    const fixColor = (color) => {
        color === 'white' ? setColorIsDarkOrLight('light') : setColorIsDarkOrLight('dark');
        color === 'white' ? setColorIsWhiteOrBlack('white') : setColorIsWhiteOrBlack('black');
    }

    return (
        <ColorContext.Provider
            value={{
                color,
                colorIsDarkOrLight,
                colorIsWhiteOrBlack,
                getColor,
                fixColor
            }}
        >
            {children}
        </ColorContext.Provider>
    );
}