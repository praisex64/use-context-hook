import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
    const { isLightTheme, light, dark} = useContext(ThemeContext); 
    const theme = isLightTheme ? light : dark; 
    return (
        <div className="book-list" style={{ color: theme.style, background: theme.bg}}>
            <ul>
                <li style={{background: theme.ui}}>The Wolf of Wall street</li>
                <li style={{background: theme.ui}}>Harmlet</li>
                <li  style={{background: theme.ui}}>A farewell to harms</li>
            </ul>

        </div>
    )
}

export default BookList; 