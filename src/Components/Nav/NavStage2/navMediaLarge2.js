import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const NavMediaLarge2 = () => {
    return (
        <nav className="menu-st-2">
            <NavLink
                className={({ isActive }) => "menu-st-2-link" + (isActive ? " activated" : "")}
                to="journee34"                    
            >
                <Button className="button-st2" inverted fluid color='green'>34</Button>                   
            </NavLink>

            <NavLink
                className={({ isActive }) => "menu-st-2-link" + (isActive ? " activated" : "")}
                to="journee35"                    
            >
                <Button className="button-st2" inverted fluid color='green'>35</Button>                   
            </NavLink>

            <NavLink
                className={({ isActive }) => "menu-st-2-link" + (isActive ? " activated" : "")}
                to="journee36"                    
            >
                <Button className="button-st2" inverted fluid color='green'>36</Button>                   
            </NavLink>

            <NavLink
                className={({ isActive }) => "menu-st-2-link" + (isActive ? " activated" : "")}
                to="journee37"                    
            >
                <Button className="button-st2" inverted fluid color='green'>37</Button>                   
            </NavLink>

            <NavLink
                className={({ isActive }) => "menu-st-2-link" + (isActive ? " activated" : "")}
                to="journee38"                    
            >
                <Button className="button-st2" inverted fluid color='green'>38</Button>                   
            </NavLink>          
        </nav>
    )
}
export default NavMediaLarge2;