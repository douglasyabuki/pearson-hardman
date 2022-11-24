import styles from "./Links.module.css";
import Link from "next/link";

export default function Links({ linkList }) {
  const links = linkList.map((link) => (
    <Link key={link.id} href={link.href} scroll={link.scroll}>
      {link.content}
    </Link>
  ));

  return <div className={styles.linksContainer}>{links}</div>;
}
