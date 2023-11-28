import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);
  return !isLoading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet /> Todo
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
