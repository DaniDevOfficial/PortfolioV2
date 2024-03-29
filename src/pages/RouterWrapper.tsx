import { Navigate, Route, Routes } from "react-router-dom";
import {
    Container,

} from "@chakra-ui/react";
import { ParallaxLanding } from "./ParallaxLanding";
import { StarryBackground } from "./StaryBackground";
import { SplineComp } from "./SplineComp";
import { Projects } from "./Projects";
import { StartUp } from "./Startup";
import { StartUpDesktop } from "./StartUpDesktop";


export function RouterWrapper() {


    return (
        <>


                <Routes>
                    <Route path="/" element={<StartUp />} />
                    <Route path="/home" element={<ParallaxLanding />} />
                    <Route path="/star" element={<StarryBackground />} />
                    <Route path="/3d" element={<SplineComp />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>

        </>
    );

}
