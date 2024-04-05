import React from "react";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  const copyToClipboard = () => {
    const textToCopy = "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN";
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          $PWIF
        </motion.span>
        <div className="social">
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
        
      </div>
      <div className="copy-text" onClick={copyToClipboard}>
          JUPyiwrYJFskUPeFoSYbKedZNsDvCN
        </div>
    </div>
  );
};

export default Navbar;
