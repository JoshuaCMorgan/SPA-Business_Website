/* eslint-disable react/prop-types */
export const SocialLink = ({ itemClass, href, icon }) => {
  return (
    <li>
      <a className={itemClass} href={href} target="_blank" rel="noreferrer">
        <i className={icon}></i>
      </a>
    </li>
  );
};
