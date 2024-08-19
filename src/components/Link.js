import { useContext } from "react";
import NavigationContext from "../context/navigation.js";

function Link({ to, children, className }) {
    const { navigate } = useContext(NavigationContext);

    const handleClick = (event) => {
        event.preventDefault();

        navigate(to);
    };

    return <button className={className} onClick={handleClick}>{children}</button>
}

export default Link;