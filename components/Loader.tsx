import React from 'react'
import styles from "./Loader.module.css";

export default function Loader() {
    return (
        <div className={`${styles.loader} flex w-full h-screen items-center justify-center top-[50%]`}>
            <div data-glitch="Loading..." className={styles.glitch}>Loading...</div>
        </div>
    )
}
