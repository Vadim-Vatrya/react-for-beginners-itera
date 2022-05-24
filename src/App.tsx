import {Route, Routes } from 'react-router-dom';


import MyCard from './components/MyCard';
import { Footer } from './components/Footer/Footer';
import Header  from './components/Header/Header';

function App() {
  return (
    <div >
        <Header />
        <Routes>
          <Route path="/:ln" element={<MyCard />} />
        </Routes>
        <Footer copyright ="C" />
      </div>
      
   
  );
}

export default App;
