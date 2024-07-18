import './App.css';
import "bootstrap/dist/js/bootstrap.bundle";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './components/header/Header';
import Home from './pages/home/Home';
import Future from './pages/future page/Future';

function App() {
  return (
    <>
   <section className='bg'>
   <Header/>
     <Home/>
  </section>
     <Future/>
    </>
  );
}

export default App;
