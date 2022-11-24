import styles from "./OtherServices.module.css";
import { useState } from "react";
import Slider from "../slider/Slider";
import serviceList from "./services/service-list";
import Services from "./services/Services";

export default function OtherServices() {
  const [selectedId, setSelectedId] = useState(0);

  function onClickPrevious() {
    if (selectedId > 0) {
      setSelectedId(selectedId - 1);
    }
  }
  
  function onClickNext() {
    if (selectedId < serviceList.length - 1) {
      setSelectedId(selectedId + 1);
    }
  }

  return (
    <div className={styles.sectionContainer}>
      <div className={styles.servicesMobileContainer}>
        <Services serviceData={serviceList} selectedId={selectedId}></Services>
        <Slider event1={onClickPrevious} event2={onClickNext}></Slider>
      </div>
      <div className={styles.servicesDesktopContainer}>
        <Services serviceData={serviceList}></Services>
      </div>
    </div>
  );
}
