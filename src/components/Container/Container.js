import { Container as Content } from "semantic-ui-react";
//Llama a container y le dice que se va a llamar a partir de ahora Content.
//Porque sino ya existe el container de la funcion

import "./Container.scss";

export default function Container({ children }) {
    return (
        <div className='container-bg'>
            <Content>{children}</Content>
        </div>
    )
}
