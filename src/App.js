import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProducts from "./pages/SingleProducts";
import Posts from "./pages/Posts";
import Error from "./pages/Error";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />
      <Route path="products/:productId" element={<SingleProducts />} />
      <Route path="posts" element={<Posts />} />
      <Route path="*" element={<Error />} />
     </Routes>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
