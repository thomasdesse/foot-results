import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

const NavMediaSmall2 = () => {
    return (
        <Menu className="menu2" horizontal="true">
        <Dropdown item text='Journée'>
          <Dropdown.Menu className="dropdownMenu">
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-2-link" + (isActive ? " activated" : "")}
                  to="journee34"                    
              >
                  <Button compact className="button-st2" fluid color='green'>34</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-2-link" + (isActive ? " activated" : "")}
                  to="journee35"                    
              >
                  <Button compact className="button-st2" fluid color='green'>35</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-2-link" + (isActive ? " activated" : "")}
                  to="journee36"                    
              >
                  <Button compact className="button-st2" fluid color='green'>36</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-2-link" + (isActive ? " activated" : "")}
                  to="journee37"                    
              >
                  <Button compact className="button-st2" fluid color='green'>37</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-2-link" + (isActive ? " activated" : "")}
                  to="journee38"                    
              >
                  <Button compact className="button-st2" fluid color='green'>38</Button>                   
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
}

export default NavMediaSmall2;