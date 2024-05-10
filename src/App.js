import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import BookDetails  from './components/BookDetails';
import BookList from './components/BookList';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<BookList/>}/>
        <Route path="/book/:id" element={<BookDetails/>}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
