import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SocialMedia from './components/footer/SocialMedia';
import NavbarSection from './components/header/NavbarSection';
import ProductCarousel from './components/productcarousel/ProductCarousel';
import { fetchApi } from './config/ApiLogic';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

function App() {
  const api = JSON.parse(localStorage.getItem("api"))

    useEffect(() => {
      const handleFetch = async () => {
        await fetchApi();
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
      {api ? (
        <ProductCarousel />
      ) : (
        <>
        <h2 style={{color:"white"}}>LOADING...</h2>
          <img src="https://media.giphy.com/media/1bKvCVN187FCKXfapZ/giphy.gif" />
        </>
      )}

      <SocialMedia />
    </div>
  );
}

export default App;
