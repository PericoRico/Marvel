import { Icon, Card, Image, Dimmer, Loader, Button, CardContent, CardHeader, CardMeta, CardDescription, ButtonContent } from "semantic-ui-react";
import './LastEvent.scss';

export default function LastEvent({ lastEventsFetch }) {
    const { loading, result } = lastEventsFetch;

    //Si esta cargand o y result vacio:
    if (loading || !result) return <Dimmer active inverted>
        <Loader inverted>Cargando...</Loader>
    </Dimmer>

    const { results } = result.data;

    return results.map((event, index) => (

        <Card key={index} className="last-event">
            <Image src={`${event.thumbnail.path}.${event.thumbnail.extension}`} wrapped ui={false}></Image>
            <CardContent>
                <CardHeader>{event.title}</CardHeader>
                <CardMeta>
                    <span>
                        <Icon name="book" />
                        {event.comics.available} Comics
                    </span>
                </CardMeta>
                <CardDescription>
                    {event.description}
                </CardDescription>
            </CardContent>
            <CardContent extra>
                <Button animated fluid as="a" href={event.urls[0].url} target="_blank" color="black">
                    <ButtonContent visible>Ver Evento</ButtonContent>
                    <ButtonContent hidden>
                        <Icon name="arrow right" />
                    </ButtonContent>
                </Button>
            </CardContent>
        </Card>

    ))
}