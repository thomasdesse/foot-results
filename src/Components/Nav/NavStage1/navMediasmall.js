import { NavLink } from 'react-router-dom';
import { Button, Dropdown, Menu } from 'semantic-ui-react';

const NavMediaSmall = () => {
    return (
        <Menu horizontal="true">
        <Dropdown item text='Journée'>
          <Dropdown.Menu className="dropdownMenu">
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee1"                    
              >
                  <Button compact className="button-st1" fluid color='green'>1</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee2"                    
              >
                  <Button compact className="button-st1" fluid color='green'>2</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee3"                    
              >
                  <Button compact className="button-st1" fluid color='green'>3</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee4"                    
              >
                  <Button compact className="button-st1" fluid color='green'>4</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee5"                    
              >
                  <Button compact className="button-st1" fluid color='green'>5</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee6"                    
              >
                  <Button compact className="button-st1" fluid color='green'>6</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee7"                    
              >
                  <Button compact className="button-st1" fluid color='green'>7</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee8"                    
              >
                  <Button compact className="button-st1" fluid color='green'>8</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee9"                    
              >
                  <Button compact className="button-st1" fluid color='green'>9</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee10"                    
              >
                  <Button compact className="button-st1" fluid color='green'>10</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee11"                    
              >
                  <Button compact className="button-st1" fluid color='green'>11</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee12"                    
              >
                  <Button compact className="button-st1" fluid color='green'>12</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee13"                    
              >
                  <Button compact className="button-st1" fluid color='green'>13</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee14"                    
              >
                  <Button compact className="button-st1" fluid color='green'>14</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee15"                    
              >
                  <Button compact className="button-st1" fluid color='green'>15</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee16"                    
              >
                  <Button compact className="button-st1" fluid color='green'>16</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee17"                    
              >
                  <Button compact className="button-st1" fluid color='green'>17</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee18"                    
              >
                  <Button compact className="button-st1" fluid color='green'>18</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee19"                    
              >
                  <Button compact className="button-st1" fluid color='green'>19</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee20"                    
              >
                  <Button compact className="button-st1" fluid color='green'>20</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee21"                    
              >
                  <Button compact className="button-st1" fluid color='green'>21</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee22"                    
              >
                  <Button compact className="button-st1" fluid color='green'>22</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee23"                    
              >
                  <Button compact className="button-st1" fluid color='green'>23</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee24"                    
              >
                  <Button compact className="button-st1" fluid color='green'>24</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee25"                    
              >
                  <Button compact className="button-st1" fluid color='green'>25</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee26"                    
              >
                  <Button compact className="button-st1" fluid color='green'>26</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee27"                    
              >
                  <Button compact className="button-st1" fluid color='green'>27</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee28"                    
              >
                  <Button compact className="button-st1" fluid color='green'>28</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee29"                    
              >
                  <Button compact className="button-st1" fluid color='green'>29</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee30"                    
              >
                  <Button compact className="button-st1" fluid color='green'>30</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee31"                    
              >
                  <Button compact className="button-st1" fluid color='green'>31</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee32"                    
              >
                  <Button compact className="button-st1" fluid color='green'>32</Button>                   
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="item">
              <NavLink
                  className={({ isActive }) => "menu-st-1-link" + (isActive ? " activated" : "")}
                  to="journee33"                    
              >
                  <Button compact className="button-st1" fluid color='green'>33</Button>                   
              </NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu>
    )
}

export default NavMediaSmall;