import { LinksProps } from "./types";
import { container, link as linkClass } from "./styles.module.css";

function Links({ links }: LinksProps) {
  return (
    <ul className={container}>
      {links.map((link) => (
        <a
          className={linkClass}
          target="_blank"
          href={link.url}
          key={link.url}
          rel="noreferrer"
        >
          {link.text}
        </a>
      ))}
    </ul>
  );
}

export default Links;
