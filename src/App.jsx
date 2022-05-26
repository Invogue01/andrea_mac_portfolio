import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import Product from "./components/product/Product";
import ProductList from "./components/productList/ProductList";

const App = () => {
  return <div><Intro/> 
  <About/>
  <ProductList/>
  <Product/>
  
  
  </div>;
};

export default App;