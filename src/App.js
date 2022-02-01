import { Outlet } from "react-router-dom";

import './assets/css/index.css';

import Header from './components/Parts/Header';
import Footer from './components/Parts/Footer';

function App() {
  return (
    <div>
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
}

export default App;
