import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { History } from "../../components/History";
import { MainTemplate } from "../../templates/MainTemplate";

export function HistoryPage() {
    return (
        <>
            <MainTemplate>
                <Container>
                    <Heading>Histórico</Heading>
                </Container>
                <Container>
                    <History/>
                </Container>
            </MainTemplate>
        </>
    )
}