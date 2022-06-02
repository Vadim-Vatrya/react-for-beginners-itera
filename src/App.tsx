import { FC } from 'react';
import {Route, Routes } from 'react-router-dom';
import  LanguageContext  from './context/LanguageContext';


import HomePage from './pages/HomePage';
import Footer  from './components/Footer/Footer';
import Header  from './components/Header/Header';
import AboutPage from './pages/AboutPage';

import './scss/._main.scss';

const App: FC = () => {
  return (
    <>
     <LanguageContext>
     <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
        <Footer />
     </LanguageContext>
    </>
      
   
  );
}

export default App;
