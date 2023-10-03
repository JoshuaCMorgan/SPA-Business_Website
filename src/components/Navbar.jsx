import { useState, useRef } from "react";
import logo3 from "../assets/images/logo3.svg";
import { PageLinks } from "./PageLinks";
import { pageLinks } from "../utils/links";
import { SocialLinks } from "./SocialLinks";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo3} className="nav-logo" alt="guardians" />
          <button type="button" className="nav-toggle" onClick={toggleLinks}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {pageLinks.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a className="nav-link" href={url}>
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <PageLinks
            parentClass="nav-links"
            itemClass="nav-link"
            linksref={linksRef}
          /> */}
        </div>
        <SocialLinks parentClass="nav-icons" itemClass="nav-icon" />
      </div>
    </nav>
  );
};
