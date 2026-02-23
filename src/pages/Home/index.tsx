import { useEffect } from "react";
import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { TimerComponent } from "../../components/TimerComponent";
import { MainTemplate } from "../../templates/MainTemplate";


export function Home() {

    useEffect(() => {
        document.title = 'Chronos Pomodoro'
    }, [])


    return (
        <MainTemplate>

            <Container>
                <TimerComponent></TimerComponent>
            </Container>

            <Container>
                <Form></Form>
            </Container>

        </MainTemplate>
    )
}