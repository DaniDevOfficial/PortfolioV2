import { Flex, Box, Heading, Button, Image } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import FirebaseIcon from "../assets/firebase.svg";
export function Startup() {
    const navigate = useNavigate()
    function navToRoute(route: string) {
        setTimeout(function(){ 
            navigate(route)
        }, 1000);
    }
    return (
        <>
            <Heading
                textAlign={"center"}
                mt={10}
            >
                Do you think your Maschine is good enough?
            </Heading >
            <Flex
                justifyContent={"space-evenly"}
                flexDirection={{ base: "column", sm: "row" }}
                mt={"20vh"}
            >
                <Box
                >
                    <Button
                        onClick={() => navToRoute("/home")}

                    >
                        Its a Potato
                    </Button>

                </Box>
                <Box>
                    <Button
                        onClick={() => navigate("/3d")}
                    >
                        I have a Beast
                    </Button>
                </Box>
            </Flex>
        </>
    )
}