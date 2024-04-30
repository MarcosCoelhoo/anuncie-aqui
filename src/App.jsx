import './App.css';
import Header from './components/Global/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Global/Footer/Footer';
import AdScreen from './components/AdScreen/AdScreen';
import Search from './components/Search/Search';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/more-info/:id" element={<AdScreen />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </>
  );
};

export default App;
