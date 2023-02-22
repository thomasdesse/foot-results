import PropTypes from 'prop-types';
import {  Icon } from 'semantic-ui-react';
import './styles.scss';


const Footer = ( {contacts} ) => { 
    return (
        <footer className="footer">{contacts}
            <a href="https://www.linkedin.com/in/thomas-desse-a8ba85225/" target="_blank" rel="noreferrer">
            <Icon link name='linkedin' color='blue'/>
            </a>
            <a href="https://github.com/thomasdesse" target="_blank" rel="noreferrer">
                <Icon link name='github' color='black'/>
            </a>

        </footer>
    )
};

Footer.propTypes = {
    contacts: PropTypes.string.isRequired,
  };

export default Footer;