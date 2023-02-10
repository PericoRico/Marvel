import { useState } from "react"
import { Grid, GridColumn, Header } from "semantic-ui-react";
import Container from "../components/Container/Container";
import ListComic from "../components/ListComic/ListComic";
import useFetch from "../hooks/useFetch";

export default function Comics() {
    const [renderComics, setRenderComics] = useState(10);

    const listComics = useFetch(
        `${process.env.REACT_APP_URL_BASE}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=focDate&limit=${renderComics}`
    );

    return (
        <div className="comics-page">
            <div id="slide-comics-image" />
            <Grid>
                <GridColumn>
                    <Container bg="light">
                        <Header as="h2">Los mejores comics</Header>
                        <ListComic listComics={listComics} renderComics={renderComics} setRenderComics={setRenderComics}></ListComic>
                    </Container>
                </GridColumn>
            </Grid>
        </div>
    );
}
