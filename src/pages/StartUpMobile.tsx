import { Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
export function StartUpMobile() {
    const navigate = useNavigate();
    return (
        <>
            <Heading textAlign={"center"} mt={10}>
                Do you think your Maschine is good enough?
            </Heading>

            <Button
                onClick={() => navigate("/home")}
                mt={"20vh"}
                w={"50%"}
                mx={"25%"}
            >
                Its a Potato
            </Button>
            <Button
                onClick={() => navigate("/3d")}
                mt={5}
                w={"50%"}
                mx={"25%"}
            >
                Its a Beast
            </Button>

        </>
    )
}