import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Illustrations from "./pages/Illustrations";
import Admin from "./pages/Admin";
import backgroundImage from './assets/background.png'

const Layout = () => {
  return (
    <>
      <div
        className="absolute z-[-1] inset-0 bg-repeat bg-center"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundSize: '106%',
          opacity: 0.12,
          zIndex: 0,
        }}
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
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
        </Route>
        <Route path="admin" element={<Admin />} />
      </Routes>
    </HashRouter>
  );
}
