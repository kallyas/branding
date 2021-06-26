import logo from "../../assets/images/default-logo.png"


const Header = () => {
  return (
    <header className="u-clearfix u-header u-header" id="sec-4ca3">
      <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
        <a href="/" className="u-image u-logo u-image-1">
          <img
            src={logo}
            className="u-logo-image u-logo-image-1"
            alt="logo"
          />
        </a>
        <nav
          className="u-menu u-menu-dropdown u-offcanvas u-menu-1"
          data-responsive-from="XL"
        >
          <div
            className="menu-collapse"
            style={{ fontSize: "1rem", letterSpacing: 0 }}
            wfd-invisible="true"
          >
            <a
              className="
          u-button-style
          u-custom-left-right-menu-spacing
          u-custom-padding-bottom
          u-custom-top-bottom-menu-spacing
          u-nav-link
          u-text-active-palette-1-base
          u-text-hover-palette-2-base
        "
              href="."
            >
              <svg>
                <use xlinkHref="#menu-hamburger" />
              </svg>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <symbol
                    id="menu-hamburger"
                    viewBox="0 0 16 16"
                    style={{ width: "16px", height: "16px" }}
                  >
                    <rect y={1} width={16} height={2} />
                    <rect y={7} width={16} height={2} />
                    <rect y={13} width={16} height={2} />
                  </symbol>
                </defs>
              </svg>
            </a>
          </div>
          <div className="u-custom-menu u-nav-container">
            <ul className="u-nav u-unstyled u-nav-1">
              <li className="u-nav-item">
                <a
                  className="
              u-button-style
              u-nav-link
              u-text-active-palette-1-base
              u-text-hover-palette-2-base
            "
                  href="Home.html"
                  data-page-id={117349}
                  style={{ padding: "10px 20px" }}
                >
                  Home
                </a>
                <div className="u-nav-popup fake u-hidden">
                  <ul className="u-nav u-unstyled">
                    <li className="u-nav-item">
                      <a href="." className="u-nav-link">Menu Item 1</a>
                    </li>
                    <li className="u-nav-item">
                      <a href="." className="u-nav-link">Menu Item 2</a>
                    </li>
                    <li className="u-nav-item">
                      <a href="." className="u-nav-link">Menu Item 3</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="u-nav-item">
                <a
                  className="
              u-button-style
              u-nav-link
              u-text-active-palette-1-base
              u-text-hover-palette-2-base
            "
                  href="Page-1.html"
                  data-page-id={117703}
                  style={{ padding: "10px 20px" }}
                >
                  Page 1
                </a>
              </li>
            </ul>
          </div>
          <div
            className="u-custom-menu u-nav-container-collapse"
            wfd-invisible="true"
          >
            <div
              className="
          u-black
          u-container-style
          u-inner-container-layout
          u-opacity
          u-opacity-95
          u-sidenav
        "
            >
              <div className="u-menu-close" />
              <ul
                className="
            u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2
          "
              >
                <li className="u-nav-item">
                  <a
                    className="u-button-style u-nav-link"
                    href="Home.html"
                    data-page-id={117349}
                    style={{ padding: "10px 20px" }}
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
