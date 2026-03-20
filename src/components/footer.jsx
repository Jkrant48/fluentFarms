//this is the footer component

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 Fluent Farms.</p>
        <ul className="social-links">
          <li>
            <a className="social-icon" href="#">
              <img src="/images/tiktok-icon.png" alt="TikTok" />
            </a>
          </li>
          <li>
            <a className="social-icon" href="#">
              <img
                className="social-icon"
                src="/images/instagram-icon.png"
                alt="Instagram"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
