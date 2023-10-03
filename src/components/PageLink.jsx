/* eslint-disable react/prop-types */
export const PageLink = ({ link, itemClass }) => {
  return (
    <li key={link.id}>
      <a className={itemClass} href={link.href}>
        {link.text}
      </a>
    </li>
  );
};
