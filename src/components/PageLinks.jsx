/* eslint-disable react/prop-types */
import { pageLinks } from "../utils/links";
import { PageLink } from "./PageLink";

export const PageLinks = ({ parentClass, itemClass, linksref }) => {
  return (
    <ul className={parentClass} ref={linksref}>
      {pageLinks.map((link) => {
        return <PageLink key={link.id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};
