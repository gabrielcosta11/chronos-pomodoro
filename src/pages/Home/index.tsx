import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { TimerComponent } from "../../components/TimerComponent";
import { MainTemplate } from "../../templates/MainTemplate";


export function Home() {
    return (
        <MainTemplate>

            <Container>
                <TimerComponent>00:00</TimerComponent>
            </Container>

            <Container>
                <Form></Form>
            </Container>

        </MainTemplate>
    )
}