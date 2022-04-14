import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SocialMedia from './components/footer/SocialMedia';
import NavbarSection from './components/header/NavbarSection';
import ProductCarousel from './components/productcarousel/ProductCarousel';
import { fetchApi } from './config/ApiLogic';
import { ApiState } from './context/ApiProvider';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {

    const { api,setApi } = ApiState();
    const apiLocal = JSON.parse(localStorage.getItem("api"))

    // fetchData
    useEffect(() => {
      const handleFetch = async () => {
        await fetchApi(api,setApi);
      };
      handleFetch();
    }, []);
    
  return (
    <div className="App">
      <NavbarSection />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
        <ProductCarousel />
      <SocialMedia />
    </div>
  );
}

export default App;
