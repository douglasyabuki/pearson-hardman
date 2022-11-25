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
  const [isSelected, setIsSelected] = useState({
    firstDot: true,
    secondDot: false,
    thirdDot: false,
  });

  const handleClick = (chosenId) => {
    setChosen(chosenId);
    if (chosenId === 0) {
      setIsSelected({ [0]: true, [1]: false, [2]: false });
    } else if (chosenId === 1) {
      setIsSelected({ [0]: false, [1]: true, [2]: false });
    } else {
      setIsSelected({ [0]: false, [1]: false, [2]: true });
    }
  };

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
          <Dots status={isSelected[0]} event={() => handleClick(0)} />
          <Dots status={isSelected[1]} event={() => handleClick(1)} />
          <Dots status={isSelected[2]} event={() => handleClick(2)} />
        </div>
      </div>
    </div>
  );
}
