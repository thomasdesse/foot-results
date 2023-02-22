import 'semantic-ui-css/semantic.min.css'
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './Components/App';
import store from './store';


const rootReactElement = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);


const target = document.getElementById('root');
render(rootReactElement, target);