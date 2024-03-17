import React, { useEffect, useState } from 'react'
import { StartUpMobile } from './StartUpMobile';
import { StartUpDesktop } from './StartUpDesktop';
import { useBreakpointValue } from "@chakra-ui/react";

export function StartUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const isMobile = useBreakpointValue({ base: true, md: false });

    return (
        <>
            <div
                className={isVisible ? 'fadeIn' : ''}
                style={{
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.3s ease-in-out',
                }}
            >

                {isMobile ? (
                    <StartUpMobile />
                ) : (
                    <StartUpDesktop />
                )}
            </div>
        </>
    );
}