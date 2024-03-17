import { Flex, Text, Icon, Container, Button, chakra, Tooltip, Stack, Fade, Box } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { FaGithub, FaReact } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiUser } from "react-icons/ci";

import FirebaseIcon from "../assets/firebase.svg";
import ProjectIcon from "../assets/project.svg";
import { Link } from 'react-router-dom';
export function ParallaxLanding() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);
    const [offset1, setOffset1] = useState({ x: 0, y: 0 });
    const [offset2, setOffset2] = useState({ x: 0, y: 0 });
    const [offset3, setOffset3] = useState({ x: 0, y: 0 });
    const [offset4, setOffset4] = useState({ x: 0, y: 0 });
    const [offset5, setOffset5] = useState({ x: 0, y: 0 });
    const [clientX, setClientX] = useState(0);
    const [clientY, setClientY] = useState(0);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const { clientX, clientY } = event;
            setClientX(clientX);
            setClientY(clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => {
        const maxOffset = 50;
        setOffset1(calculateOffset(100, maxOffset));
        setOffset2(calculateOffset(80, maxOffset));
        setOffset3(calculateOffset(40, maxOffset));
        setOffset4(calculateOffset(30, maxOffset));
        setOffset5(calculateOffset(20, maxOffset));
    }, [clientX, clientY]);

    function calculateOffset(speed: number, maxOffset: number) {
        const offsetX = (clientX / window.innerWidth - 0.5) * speed;
        const offsetY = (clientY / window.innerHeight - 0.5) * speed;

        const boundedOffsetX = Math.min(Math.max(offsetX, -maxOffset), maxOffset);
        const boundedOffsetY = Math.min(Math.max(offsetY, -maxOffset), maxOffset);

        return { x: boundedOffsetX, y: boundedOffsetY };
    }

    return (
        <>


            <Container
                maxW="100vw"
                h="100vh"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                bg="background.base"

            >
                <div
                    className={isVisible ? 'fadeIn' : ''}
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.5s ease-in-out',
                    }}
                >


                    <chakra.div>
                        <Flex
                            justifyContent="center"
                            alignItems="center"
                            flexDirection="column"
                            style={{
                                transform: `translate(${offset1.x}px, ${offset1.y}px)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                        >

                            <Text

                                color={'text.base'}
                                fontSize="6xl"
                                fontWeight="bold"
                            >
                                Dani Dev
                            </Text>
                            <Button
                                as="a"
                                bgColor="background.300"
                                color="primary.base"
                                href="mailto:bischof.david.db@gmail.com"
                                _hover={{ bgColor: "background.400" }}
                            >
                                Contact now
                                <Icon
                                    as={MdOutlineMailOutline}
                                    color="primary.base"
                                    mt="4px"
                                    ml="10px"
                                />
                            </Button>


                        </Flex>
                    </chakra.div>
                    <Text
                        style={{
                            transform: `translate(${offset2.x}px, ${offset2.y}px)`,
                            transition: 'transform 0.1s ease-out, color 0.3s ease' // Add color transition
                        }}
                        position="absolute"
                        bottom="20%"
                        left="40%"
                        color={'text.base'}
                        fontSize="4xl"
                        cursor="pointer"
                        _hover={{ color: "text.900" }}

                    >
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                            <Tooltip
                                label={
                                    <Flex alignItems="center" justifyContent="center" flexDirection="column">
                                        <Text>Most of my Projects are Created with React</Text>
                                        <Text>Click for more</Text>
                                    </Flex>
                                }
                                placement="bottom"
                            >
                                <chakra.div>
                                    <Icon as={FaReact} />
                                </chakra.div>
                            </Tooltip>
                        </a>
                    </Text>
                    <Text
                        style={{
                            transform: `translate(${offset3.x}px, ${offset3.y}px)`,
                            transition: 'transform 0.1s ease-out, color 0.3s ease' // Add color transition
                        }}
                        position="absolute"
                        top="45%"
                        left="30%"
                        color={'text.base'}
                        _hover={{ color: "text.900" }}
                        fontSize="4xl"
                        cursor="pointer"
                    >
                        <a href="https://github.com/DaniDevOfficial" target="_blank" rel="noopener noreferrer">
                            <Tooltip
                                label={
                                    <Flex alignItems="center" justifyContent="center" flexDirection="column">
                                        <Text>Explore all of my projects on GitHub</Text>
                                        <Text>Click for more</Text>
                                    </Flex>
                                }
                                placement="bottom"
                            >
                                <span>
                                    <Icon as={FaGithub} />
                                </span>
                            </Tooltip>
                        </a>
                    </Text>
                    <Text
                        style={{
                            transform: `translate(${offset4.x}px, ${offset4.y}px)`,
                            transition: 'transform 0.1s ease-out, color 0.3s ease' // Add color transition
                        }}
                        position="absolute"
                        top="20%"
                        left="40%"
                        color={'text.base'}
                        _hover={{ color: "text.900" }}
                        fontSize="4xl"
                        cursor="pointer"
                    >
                        <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                            <Tooltip
                                label={
                                    <Flex alignItems="center" justifyContent="center" flexDirection="column">
                                        <Text>Firebase is my main Backend Provider</Text>
                                        <Text>Click for more</Text>
                                    </Flex>
                                }
                                placement="bottom"
                            >
                                <span>
                                    <img src={FirebaseIcon} style={{
                                        width: "40px",
                                        height: "40px",
                                        filter: "grayscale(100%)",
                                    }} />
                                </span>
                            </Tooltip>
                        </a>
                    </Text>
                    <Link to="/projects">
                        <Text
                            style={{
                                transform: `translate(${offset5.x}px, ${offset5.y}px)`,
                                transition: 'transform 0.1s ease-out, color 0.3s ease' // Add color transition
                            }}
                            position="absolute"
                            top="20%"
                            right="40%"
                            color={'text.base'}
                            _hover={{ color: "text.900" }}
                            fontSize="4xl"
                            cursor="pointer"
                        >
                            <Tooltip
                                label={
                                    <Flex alignItems="center" justifyContent="center" flexDirection="column">
                                        <Text>Take a Look at My Featured Projects</Text>
                                        <Text>Click for more</Text>
                                    </Flex>
                                }
                                placement="bottom"
                            >
                                <span>
                                    <img src={ProjectIcon} style={{
                                        width: "40px",
                                        height: "40px",
                                        filter: "invert(100%)",
                                    }} />
                                </span>
                            </Tooltip>
                        </Text>
                    </Link>
                    <Text
                        style={{
                            transform: `translate(${offset3.x}px, ${offset3.y}px)`,
                            transition: 'transform 0.1s ease-out, color 0.3s ease' // Add color transition
                        }}
                        position="absolute"
                        bottom="20%"
                        right="40%"
                        color={'text.base'}
                        _hover={{ color: "text.900" }}
                        fontSize="4xl"
                        cursor="pointer"
                    >
                        <Tooltip
                            label={
                                <Flex alignItems="center" justifyContent="center" flexDirection="column">
                                    <Text>Learn a bit more about me</Text>
                                    <Text>Click for more</Text>
                                </Flex>
                            }
                            placement="bottom"
                        >
                            <chakra.div>
                                <Icon as={CiUser} />
                            </chakra.div>
                        </Tooltip>
                    </Text>
                </div>

            </Container >
        </>
    );
}
