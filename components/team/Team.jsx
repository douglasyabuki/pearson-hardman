import styles from "./Team.module.css";
import Square from "../square/Square"; 
import Slider from "../slider/Slider";
import { useState } from "react";
import Employees from "./employees/Employees";
import employeeList from "./employees/employee-list";

export default function Team() {
  const [selectedId, setSelectedId] = useState(0);

  function onClickPrevious() {
    if (selectedId > 0) {
      setSelectedId(selectedId - 1);
    } 
  }
  function onClickNext() {
    if (selectedId < employeeList.length-1) {
      setSelectedId(selectedId + 1);
    }
  }

  return (
    <div className={styles.sectionContainer} id="team">
      <Square></Square>
      <h2 className={styles.title}>
        A Pearson Hardman tem um time de especialistas à sua disposição
      </h2>
      <div className={styles.cardsContainerMobile}>
      <Employees employeesData={ employeeList } selectedId={ selectedId }></Employees>
        <Slider event1={onClickPrevious} event2={onClickNext}></Slider>
      </div>
      <div className={styles.cardsContainerDesktop}>
        <Employees employeesData={ employeeList }></Employees>
      </div>
    </div>
  );
}
