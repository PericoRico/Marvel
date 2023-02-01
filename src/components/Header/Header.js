import { useState } from "react";
import { Menu } from "semantic-ui-react";
import "./Header.scss";
import { useNavigate, useLocation } from 'react-router';

export default function Header() {

    const currentPath = useLocation();
    const finalCurrentPath = currentPath.pathname.replace("/", "");
    const history = useNavigate();


    const [activeItem, setActiveItem] = useState(finalCurrentPath);

    console.log(activeItem);

    const handleItemClick = (e, { name }) => {
        setActiveItem(name);
        history(name);
    };


    return (
        <div className="header-menu">
            <Menu secondary>
                <Menu.Item name="inicio" active={activeItem === "inicio"} onClick={handleItemClick} />
                <Menu.Item name="series" active={activeItem === "series"} onClick={handleItemClick} />
                <Menu.Item name="comics" active={activeItem === "comics"} onClick={handleItemClick} />

            </Menu>
        </div>
    )
}
