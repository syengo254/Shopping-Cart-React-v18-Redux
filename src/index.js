//import ReactDOM from 'react-dom';
import { createRoot }  from 'react-dom/client'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { fetchProducts } from './features/productsSlice';

const appContainer = document.getElementById('root');
const root = createRoot(appContainer);

store.dispatch(fetchProducts())

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
