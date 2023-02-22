
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


import './styles.scss';

const NavHeader = () => {
    const dispatch = useDispatch();
    const showLinks = useSelector ((state) => state.burger.menu);
    const handleShowLinks = () => {
        dispatch({
            type: 'TOGGLE_MENU',
        });
    }
    const handleCloseNav = () => {
        dispatch({
            type: 'CLOSE_MENU',
        });
    }

    return (
        <nav className={`menu ${showLinks ? "show-nav" : "hiden-nav"}`}>
            <div className="menu-links">
            <NavLink
                className={({ isActive }) => "menu-link" + (isActive ? " activated" : "")}
                to="/"                    
            >
                <Button className='link-button' onClick= {handleCloseNav} fluid>Home</Button>                   
            </NavLink>

            <NavLink
                className={({ isActive }) => "menu-link" + (isActive ? " activated" : "")}
                to="/1erphase"                    
            >
                <Button className='link-button' onClick= {handleCloseNav} fluid>1er phase</Button>                   
            </NavLink>

            <NavLink
                className={({ isActive }) => "menu-link" + (isActive ? " activated" : "")}
                to="/2emephase"                    
            >
                <Button className='link-button' onClick= {handleCloseNav} fluid>2ème phase</Button>                   
            </NavLink>

            <NavLink
                className={({ isActive }) => "menu-link" + (isActive ? " activated" : "")}
                to="/coupe-ecosse"                    
            >
                <Button className='link-button' onClick= {handleCloseNav} fluid>coupe d'écosse</Button>                   
            </NavLink>

            <NavLink
                className={({ isActive }) => "menu-link" + (isActive ? " activated" : "")}
                to="/coupe-ligue"                    
            >
                <Button className='link-button' onClick= {handleCloseNav} fluid>coupe de la ligue</Button>                   
            </NavLink>
            </div> 
            <button className="nav-burger"
                    onClick= {handleShowLinks}
            >
                <span className="burger-bar"></span>
            </button>
                        
        </nav> 
    )
}

export default NavHeader;