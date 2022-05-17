import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import NotFound from './containers/ErrorPages/404'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route exact path="/" element={<ProductListing/>} />
          <Route exact path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
