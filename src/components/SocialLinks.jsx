/* eslint-disable react/prop-types */
import { socialLinks } from "../utils/links";
import { SocialLink } from "./SocialLink";

export const SocialLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map((link) => {
        return (
          <SocialLink
            key={link.id}
            link={link.href}
            icon={link.icon}
            itemClass={itemClass}
          />
        );
      })}
    </ul>
  );
};
