import { Container } from "../../components/Container";
import { Form } from "../../components/Form";
import { TimerComponent } from "../../components/TimerComponent";
import type { TaskStateModel } from "../../Models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";


export function Home() {

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