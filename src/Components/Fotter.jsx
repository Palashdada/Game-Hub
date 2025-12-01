import React from "react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-300 text-base-content flex gap-5 justify-between">
      {/* ----------------- LOGO & COPYRIGHT ----------------- */}
      <div>
        <p>Game-Hub</p>
        <p>
          Copyright © {new Date().getFullYear()} <br />
          All rights reserved by GameHub Ltd
        </p>
      </div>

      {/* ----------------- LINKS ----------------- */}
      <div>
        <span className="footer-title">Links</span>
        <div
          className="flex gap-7
        "
        >
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/support" className="link link-hover">
            Support
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/about" className="link link-hover">
            About Us
          </Link>
        </div>
      </div>

      {/* ----------------- SOCIAL LINKS ----------------- */}
      <div>
        <span className="footer-title">Follow Us</span>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/palash.dada"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 12C22 6.48 17.52 2 12 2S2 6.48 2 12c0 4.84 3.66 8.85 8.44 9.8v-6.93H7.9v-2.87h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.87h-2.34V21.8C18.34 20.85 22 16.84 22 12z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/moshiwur-rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.29h-3v-4.5c0-1.07-.02-2.44-1.49-2.44-1.49 0-1.72 1.16-1.72 2.36v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.72z"></path>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
