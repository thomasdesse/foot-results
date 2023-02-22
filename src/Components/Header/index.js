import { Header, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import './styles.scss';

const HeaderPage = ( {title, nav} ) => {
    return (

        <header className="App-header">
            <Header as='h1' color= 'black'>{title}
                <Icon name='futbol' />
            </Header>
        </header>
    )
}

HeaderPage.propTypes = {
    title: PropTypes.string.isRequired,
    //nav: PropTypes.string.isRequired,

  };

export default HeaderPage;