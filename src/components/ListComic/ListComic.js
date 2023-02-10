import './ListComic.scss'
import { Card, Dimmer, Image, Loader, Icon, Button } from "semantic-ui-react";

export default function ListComic({ listComics, renderComics, setRenderComics }) {

    const { loading, result } = listComics;
    console.log(loading)
    console.log(result)

    if (loading || !result) {
        return (
            <Dimmer active inverted>
                <Loader inverted>Cargando comics</Loader>
            </Dimmer>
        );
    }

    const { results } = result.data;

    const loadMoreComics = () => {
        const comicsNumber = renderComics;
        setRenderComics(comicsNumber + 10);
    }

    return (
        <Card.Group itemsPerRow={5}>
            {results.map((res, index) => (
                <Card key={index} className="list-comics">
                    <Image
                        src={`${res.images[0].path}.${res.images[0].extension}`}
                        wrapped
                        alt={res.title}
                        ui={false}
                    />
                    <Card.Content>
                        <Card.Header>{res.title}</Card.Header>
                        <Card.Meta>
                            <span>
                                Digital ID:  {res.digitalId}
                            </span>
                        </Card.Meta>
                        <Card.Description>{res.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <Button
                            animated
                            fluid
                            as="a"
                            href={res.urls[0].url}
                            target="_blank"
                            color="black"
                        >
                            <Button.Content visible>Más información</Button.Content>
                            <Button.Content hidden>
                                <Icon name="arrow right" />
                            </Button.Content>
                        </Button>
                    </Card.Content>
                </Card>
            ))}
            <div className='container-button'>
                <Button color="red" onClick={() => loadMoreComics()}>
                    <Icon name='plus' />
                    Cargar más
                </Button>
            </div>
        </Card.Group>
    )
}
