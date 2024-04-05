import "./Footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <main className="footer__main__section">
        <hr className="footer__baseline" />
        <div className="footer__flex__container">
          <div className="footer__details">&copy; 2024 Dipesh Haldar</div>
          <div className="footer__social__links">
            <a
              target="_blank"
              href="https://x.com/HaldarDipesh?t=5bT_OpgsonHtp2PVX0i9bA&s=08"
            >
              <img
                className="footer__social__links__image"
                src="/Twitter.png"
                alt="Twitter"
              />
            </a>
            <a
              target="_blank"
              href="https://in.linkedin.com/in/dipesh-haldar-b59788257"
            >
              <img
                className="footer__social__links__image"
                src="/LinkedIn.png"
                alt="LinkedIn"
              />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/dipesh12484?igsh=MTQ2enBtNmxjenZwbg=="
            >
              <img
                className="footer__social__links__image"
                src="/Instagram.png"
                alt="Instagram"
              />
            </a>
            <a target="_blank" href="https://github.com/Dipeshhaldar">
              <img
                className="footer__social__links__image"
                src="/Github.png"
                alt="Github"
              />
            </a>
          </div>
          <div>
            <a
              className="footer__back-to-top__link"
              href="#"
              onClick={scrollToTop}
            >
              Back To Top
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
