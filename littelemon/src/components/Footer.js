function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <img
            src="/icons_assets/Logo.svg"
            alt="Little Lemon footer logo"
            className="footer-logo"
          />
        </div>

        <div>
          <h3>Navigation</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="/booking">Reservations</a>
            </li>
            <li>
              <a href="#order-online">Order Online</a>
            </li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <p>123 Citrus Avenue, Chicago, IL</p>
          <p>(312) 555-0142</p>
          <p>hello@littlelemon.com</p>
        </div>

        <div>
          <h3>Social Media</h3>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>X</p>
        </div>
      </div>
      <small className="container footer-note">
        © {new Date().getFullYear()} Little Lemon. All rights reserved.
      </small>
    </footer>
  );
}

export default Footer;
