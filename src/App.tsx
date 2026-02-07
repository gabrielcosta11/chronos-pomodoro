import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
import { Logo } from "./components/Logo";

import "./styles/theme.css";
import "./styles/global.css";
import { IconMenu } from "./components/IconMenu";
import { HouseIcon } from "lucide-react";
import { Menu } from "./components/Menu";
import { TimerComponent } from "./components/TimerComponent";
import { Form } from "./components/Form";
import { Footer } from "./components/Footer";


export function App() {
    return (
        <>
            <Container>
                <Logo/>
            </Container>

            <Container>
                <Menu/>
            </Container>

            <Container>
                <TimerComponent>00:00</TimerComponent>
            </Container>

            <Container>
                <Form></Form>
            </Container>

            <Container>
                <Footer/>
            </Container>
        </>
    )
}; 