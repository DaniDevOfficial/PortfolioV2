import React, { useState, useEffect } from 'react';
import { Container, Box } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export function StarryBackground() {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateRandomStars = () => {
            const newStars = Array.from({ length: 10 }, () => ({
                x: Math.random() * 100, // Random x-coordinate between 0 and 100
                y: Math.random() * 100, // Random y-coordinate between 0 and 100
                delay: Math.random() * 2, // Random delay between 0 and 2 seconds
                duration: Math.random() * 4 + 1, // Random duration between 1s and 5s
            }));
            setStars(newStars);
        };



        generateRandomStars();

    }, []);

    return (
        <Container
            maxW="100vw"
            minH="100vh"
            bg="gray.900"
            position="relative"
        >
            {stars.map((star, index) => (
                <Box
                    key={index}
                    position="absolute"
                    top={`${star.y}%`}
                    left={`${star.x}%`}
                    fontSize="10px"
                    color="white"
                    animation={`glitter ${star.duration}s linear infinite ${star.delay}s`}
                >
                    <FaStar />
                </Box>
            ))}
            <style jsx global>{`
                @keyframes glitter {
                    0% { opacity: 0; }
                    50% { opacity: 1; }
                    100% { opacity: 0; }
                }
            `}</style>

        </Container>
    );
}
