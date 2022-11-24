import styles from "./Navbar.module.css";
import Links from "./links/Links";
import linkList from "./links/link-list";
import Logo from "../logo/Logo";
import { useState } from "react";
import MenuButton from "./menu-button/MenuButton";
import Banners from "./banners/Banners";
import Square from "../square/Square";
import Dots from "./dots/Dots";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isChosen, setChosen] = useState(0);

  return (
    <div className={styles.headerContainer} id="header">
      <div className={styles.navbarContainer}>
        <div>
          <Logo></Logo>
        </div>
        <MenuButton
          event={() => {
            setIsVisible(!isVisible);
          }}
        ></MenuButton>
        <div className={isVisible ? styles.visible : styles.invisible}>
          <Links linkList={linkList}></Links>
        </div>
      </div>
      <div className={styles.bannersContainer}>
        <Square />
        <Banners bannerId={isChosen}></Banners>
        <div className={styles.dots}>
          <Dots event={() => setChosen(0)} />
          <Dots event={() => setChosen(1)} />
          <Dots event={() => setChosen(2)} />
        </div>
      </div>
    </div>
  );
}
