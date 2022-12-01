import { createContext, useEffect, useState } from "react";
import { FastAverageColor } from 'fast-average-color';

export const ColorContext = createContext();

export function ColorContextProvider({ children }) {

    const [color, setColor] = useState('#0000');
    const [colorIsDarkOrLight, setColorIsDarkOrLight] = useState('light');
    const [colorIsWhiteOrBlack, setColorIsWhiteOrBlack] = useState('white');

    useEffect(() => {
        document.body.style.setProperty('--colorIsWhiteOrBlack', `${colorIsWhiteOrBlack}`);
        document.body.style.setProperty('--color', `${color}`);
    }, [color, colorIsWhiteOrBlack]);

    const getColor = (Img, fixColor) => {
        const fac = new FastAverageColor();
        fac.getColorAsync(Img)
            .then(color => {
                setColor(color.hex);

                if(fixColor) {
                    setColorIsDarkOrLight('light');
                    setColorIsWhiteOrBlack('white');
                } else {
                    color.isDark ? setColorIsDarkOrLight('light') : setColorIsDarkOrLight('dark');
                    color.isDark ? setColorIsWhiteOrBlack('white') : setColorIsWhiteOrBlack('black');
                }
            })
            .catch(() => {
                setColorIsWhiteOrBlack('white');
                setColorIsDarkOrLight('light');
                setColor('#000');
            });
    }

    console.log(colorIsDarkOrLight);
    
    return (
        <ColorContext.Provider
            value={{
                color,
                setColor,
                colorIsDarkOrLight,
                colorIsWhiteOrBlack,
                getColor,
            }}
        >
            {children}
        </ColorContext.Provider>
    );
}