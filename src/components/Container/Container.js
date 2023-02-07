import { Container as Content } from "semantic-ui-react";
//Llama a container y le dice que se va a llamar a partir de ahora Content.
//Porque sino ya existe el container de la funcion
// le pasa el bg que viene desde ListLastEvents

import "./Container.scss";

export default function Container({ children, bg }) {
    return (
        <div className={bg !== 'light' ? 'container-bg' : null}>
            <Content>{children}</Content>
        </div>
    )
}
