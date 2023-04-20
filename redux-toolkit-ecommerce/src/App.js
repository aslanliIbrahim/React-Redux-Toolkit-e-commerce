import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/footer";
import PageContainer from "./Containers/PageContainer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Detail from "./Pages/Detail";
import Card from "./Pages/Card";
import Search from "./Components/Search";
function App() {
  return (
    <PageContainer>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/card" element={<Card />} />
          <Route path="/products/:search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </PageContainer>
  );
}

export default App;
