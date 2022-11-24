import styles from "./Employees.module.css";
import Image from "next/image";
import { useMemo } from "react";

export default function Employees({ employeesData, selectedId }) {

  const employees = employeesData.map((employee) => (
    <div className={styles.cardContainer} key={employee.id}>
      <div className={styles.cardImageContainer}>
        <Image
          src={employee.imgSrc}
          alt={employee.imgAlt}
          layout="fill"
        ></Image>
      </div>
      <h4 className={styles.cardName}>{employee.name}</h4>
      <h3 className={styles.cardRole}>{employee.role}</h3>
    </div>
  ));

  const employee = useMemo(() => {
    return  employees[selectedId]}, [employees, selectedId]);

  return (
    <div className={styles.cardsContainer}>
      {selectedId > -1 ? employee : employees}
    </div>
  );
}
