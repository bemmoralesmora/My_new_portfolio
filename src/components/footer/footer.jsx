import "./footer.css";
import React from "react";

export function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; 2024 My Application. All rights reserved.</p>
      <nav>
        <ul className="footer-links">
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="#terms">Terms of Service</a>
          </li>
          <li>
            <a href="#help">Help</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
