import styles from "./Section.module.css"
export default function Section (props) {
    return (
      <div className={styles["section-container"]}>
        <div className={styles["title-container"]}>
          <span className={styles.title}>{props.title}</span>
        </div>
        <div className={styles["children-container"]}>
            {props.children}
        </div>
      </div>
    );

}