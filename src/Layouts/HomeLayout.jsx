import React from "react";
import NavBar from "../Components/NavBar";
import { Outlet, useLocation } from "react-router";
import Fotter from "../Components/Fotter";
import { AnimatePresence, motion } from "framer-motion";

const HomeLayout = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <nav className="h-fit sticky top-0 z-50">
        <NavBar></NavBar>
      </nav>
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <footer>
        <Fotter></Fotter>
      </footer>
    </div>
  );
};

export default HomeLayout;
