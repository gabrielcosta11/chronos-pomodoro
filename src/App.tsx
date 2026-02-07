import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";
import { IconMenu } from "./components/IconMenu";
import { HouseIcon } from "lucide-react";
import { Menu } from "./components/Menu";


export function App() {
    return (
        <>
            <Container>
                <Logo/>
            </Container>

            <Container>
                <Menu/>
            </Container>
        </>
    )
}; 