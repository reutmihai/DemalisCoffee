import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SharedLayout from "./SharedLayout";
import PageNotFound from "./PageNotFound";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./components/Menu/Menu";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter basename="DemalisCoffee">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
