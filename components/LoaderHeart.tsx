import styles from "@/components/LoaderHeart.module.css";

const LoaderHeart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.preloader}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={styles.shadow}></div>
    </div>
  );
};

export default LoaderHeart;
