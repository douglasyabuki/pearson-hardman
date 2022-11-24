import styles from "./Banners.module.css";
import BannerList from "./banner-list";

export default function Banners({ bannerId }) {
  const banners = BannerList.map((banner) => (
    <div className={styles.banner} key={banner.id}>
      <h2 className={styles.bannerTitle}>{banner.title}</h2>
      <p className={styles.bannerContent}>{banner.content}</p>
    </div>
  ));

  return <div className={styles.bannersContainer}>{banners[bannerId]}</div>;
}
