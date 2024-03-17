import { Flex, Box, Heading, Button, Image, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import FirebaseIcon from "../assets/firebase.svg";
import PotatoBlob from "../assets/blobPotato.svg";
import BeastBlob from "../assets/blobBeast.svg";
import { useState } from 'react';

export function Startup() {
    const navigate = useNavigate();
    const [potatoBlobSize, setPotatoBlobSize] = useState(2.5);
    const [potatoZIndex, setPotatoZIndex] = useState(-1);
    const [beastBlobSize, setBeastBlobSize] = useState(2); // Set the initial size of the beast blob to be the same as the potato blob
    const [beastZIndex, setBeastZIndex] = useState(-1);
    function navToRoute(route: string) {
        setTimeout(function () {
            navigate(route);
        }, 1000);
    }

    return (
        <>
            <Heading
                textAlign={"center"}
                mt={10}
            >
                Do you think your Maschine is good enough?
            </Heading>

            <Flex
                justifyContent={"space-evenly"}
                flexDirection={{ base: "column", sm: "row" }}
                mt={"20vh"}
                position="relative" // Added to make the Blob position relative
            >
                <Box
                    cursor="pointer"
                    onClick={() => navToRoute("/home")}
                    position="relative"
                    onMouseEnter={() => setPotatoBlobSize(3.5)}
                    onMouseDown={(e) => {
                        setPotatoBlobSize(50);
                        setPotatoZIndex(3);
                    }}
                    onMouseLeave={() => setPotatoBlobSize(2.5)}
                >
                    <Image
                        
                        cursor="pointer"

                        src={PotatoBlob}
                        position="absolute"
                        transform={`scale(${potatoBlobSize})`}
                        zIndex={potatoZIndex}
                        top={"-20px"} // Adjust the position as needed
                        transition="transform 1s"
                    />
                    {/* Button */}
                    <Text
                        color="text.base"
                        zIndex={potatoZIndex}
                    >
                        Nah, Its a Potato
                    </Text>
                </Box>

                <Box
                    cursor="pointer"
                    onClick={() => navToRoute("/3d")} // Change the route to "/3d" to match the potato button
                    position="relative" // Added to make the Blob position relative
                    onMouseEnter={() => setBeastBlobSize(3)} // Set the size of the beast blob on mouse enter
                    onMouseDown={(e) => {
                        setBeastBlobSize(50); // Set the size of the beast blob on mouse down
                        setBeastZIndex(3);
                    }}
                    onMouseLeave={() => setBeastBlobSize(2)} // Set the size of the beast blob on mouse leave
                >
                    <Image
                        src={BeastBlob}
                        position="absolute"
                        transform={`scale(${beastBlobSize})`}
                        zIndex={beastZIndex}
                        top={"-20px"} // Adjust the position as needed
                        transition="transform 1s"
                    />
                    {/* Button */}
                    <Text
                        color="text.base"
                        zIndex={beastZIndex}
                    >
                        Sure, I have a Beast
                    </Text>
                </Box>

            </Flex>
        </>
    );
}
