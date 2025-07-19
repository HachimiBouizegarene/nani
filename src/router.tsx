import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Illustrations from "./pages/Illustrations";
import Admin from "./pages/Admin";
import backgroundImage from './assets/background.png'
import AboutMe from "./pages/AboutMe";

const Layout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="illustrations" element={<Illustrations />} />
          <Route path="aboutMe" element={<AboutMe />} />
        </Route>
        <Route path="admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  );
}
