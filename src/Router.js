import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';

import Home from './components/Pages/Home';
import Tenor from './components/Pages/Tenor';
import Giphy from './components/Pages/Giphy';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<Home />} />
                    <Route path='/tenor' element={<Tenor />} />
                    <Route path='/giphy' element={<Giphy />} />
                    <Route path='*' element={<Home />} />
                </Route>
            </Routes> 
        </BrowserRouter>
    )
}