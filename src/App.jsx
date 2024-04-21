import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AdScreen from './components/AdScreen/AdScreen';

const App = () => {
  return (
    <>
      <Header />

      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/more-info/:id" element={<AdScreen />} />
          </Routes>
        </BrowserRouter>
      </main>

      <Footer />
    </>
  );
};

export default App;
