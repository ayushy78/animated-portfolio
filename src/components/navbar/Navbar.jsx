import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
      <div className="container">
        <Sidebar className="d-lg-none" />
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          $PWIF
        </motion.span>
        <div className="social ml-auto">
          <a href="#">
            <img src="/PwerryInsta.png" alt="" />
          </a>
          <a href="#">
            <img src="/PwerryMedium.png" alt="" />
          </a>
          <a href="#">
            <img src="/PwerryTelegram.png" alt="" />
          </a>
          <a href="#">
            <img src="/PwerryTwitter.png" alt="" />
          </a>
        </div>
        <Sidebar className="d-none d-lg-block" />
      </div>
    </nav>
  );
};

export default Navbar;
