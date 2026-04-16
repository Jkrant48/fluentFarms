//this is the footer component

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2026 Fluent Farms</p>

        <ul className="social-links">
          <li>
            <a
              className="social-icon"
              href="https://www.tiktok.com/@fluentfarmsgh?_r=1&_t=ZS-95BAKvmiLsj"
            >
              <i class="fa-brands fa-tiktok"></i>
            </a>
          </li>
          <li>
            <a className="social-icon" href="https://wa.me/+233533238004">
              <i class="fa-brands fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a
              className="social-icon"
              href="https://www.instagram.com/fluentfarmsgh?igsh=YTZidjl1amdzdTN2"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
