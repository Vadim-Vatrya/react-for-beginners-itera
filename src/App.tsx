import MyCard from './components/MyCard';
import { Footer } from './components/Footer/Footer';
import Header  from './components/Header/Header';

function App() {
  return (
    <div>
      <div >
        <Header />
        <MyCard />
        <Footer copyright ="C" />
      </div>
      
    </div>
  );
}

export default App;
