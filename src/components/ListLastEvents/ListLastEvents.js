import { Header, Card } from "semantic-ui-react";
import './ListLastEvents.scss'
import Container from "../Container/Container";
import useFetch from "../../hooks/useFetch";
import LastEvent from "../LastEvent/LastEvent";

//Mas abajo en el container le pasa unas props para reutilizar el container con fondo blanco

export default function ListLastEvents() {

    const lastEventsFetch = useFetch(
        `${process.env.REACT_APP_URL_BASE}/events?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startDate&limit=5`
    );
    return (
        <div className="container-list-last-events">
            <Header size="large">Últimos eventos</Header>

            <Container bg="light">
                <Card.Group itemsPerRow={5}>
                    <LastEvent lastEventsFetch={lastEventsFetch} />
                </Card.Group>
            </Container>

        </div>
    )
}
