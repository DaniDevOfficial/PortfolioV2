import React, { useEffect, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Container, Spinner, Text } from '@chakra-ui/react';
import LoadingImage from '../assets/loading.gif';
import LoadingGif from '../assets/loading.gif';
import LoadingGifv2 from '../assets/LoadingGifRealLife.gif';
export function SplineComp() {
    const [loading, setLoading] = useState(true)
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const canvas = document.querySelector('canvas');
            if (canvas && getComputedStyle(canvas).display !== 'none') {
                console.log('canvas found');
                setLoading(false);
                clearInterval(interval);
            } else {
                console.log('canvas not found');
                setLoading(true);
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Container
            w={"100vw"}
            maxW={"100vw"}
            h={"100vh"}
            maxH={"100vh"}
            bg={"RGB(230, 152, 168)"}
            position="relative"
        >

            {loading && (
                <>
                    <div
                        className={isVisible ? 'fadeIn' : ''}
                        style={{
                            opacity: isVisible ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                        }}
                    >

                        <img
                            src={LoadingGifv2}
                            alt="loading gif"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "50%",
                                height: "50%",
                                minWidth: "300px",
                            }}
                        />
                        <Text
                            position="absolute"
                            top="50%"
                            left="50%"
                            transform="translate(-50%, -50%)"
                            color="white"
                            width={"50%"}
                            bg="rgba(0, 0, 0, 0.6)"
                            padding={"0.1rem"}
                            boxShadow="md"
                            textAlign={"center"}
                        >
                            hollup... Let him cook
                        </Text>
                    </div>
                </>

            )
            }
            <Spline scene="https://prod.spline.design/Q5SXVE-0rHNlhupG/scene.splinecode" />

        </Container >
    );
}
