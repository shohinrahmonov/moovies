
import { useState, useEffect } from 'react';

export function useScreenSize() {
    const [width, screenWidth] = useState(null);

    useEffect(() => {
        screenWidth(window.innerWidth);
        
        window.addEventListener('resize', () => {
            screenWidth(window.innerWidth);
        });

        return () => {
            window.removeEventListener('resize', screenWidth());
        }
    },[width]);

    return width;
} 