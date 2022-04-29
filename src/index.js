//import ReactDOM from 'react-dom';
import { createRoot }  from 'react-dom/client'
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { fetchProducts } from './features/productsSlice';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import HistoryPage from './pages/HistoryPage';

const appContainer = document.getElementById('root');
const root = createRoot(appContainer);

store.dispatch(fetchProducts())

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/history" element={<HistoryPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
);
