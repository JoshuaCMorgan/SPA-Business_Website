import { PageLinks } from "./PageLinks";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <section className="section footer" id="footer">
      <div className="footer-center">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />
        <SocialLinks parentClass="footer-icons" itemClass="footer-icon" />
        <p className="copyright">
          copyright &copy; Guardians Detailing Company
          <span id="date">{new Date().getFullYear()}</span>. all rights reserved
        </p>
      </div>
    </section>
  );
};
