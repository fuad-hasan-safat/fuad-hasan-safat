import React from 'react'
import styles from "./Loader.module.css";

const Loader = () => {

    return (

        <div className={`${styles.loader} md:text-[30px] text-[20px] min-w-[20px] md:min-w-[40px]`}>
            <span  style={{ "--d": "100ms" } as React.CSSProperties}>F</span>
            <span style={{ "--d": "250ms" } as React.CSSProperties}>U</span>
            <span style={{ "--d": "400ms" } as React.CSSProperties}>A</span>
            <span style={{ "--d": "550ms" } as React.CSSProperties}>D</span>
            <span style={{ "--d": "700ms" } as React.CSSProperties}>H</span>
            <span style={{ "--d": "850ms" } as React.CSSProperties}>A</span>
            <span style={{ "--d": "1000ms" } as React.CSSProperties}>S</span>
            <span style={{ "--d": "1050ms" } as React.CSSProperties}>A</span>
            <span style={{ "--d": "1150ms" } as React.CSSProperties}>N</span>
        </div>
    );
};

export default Loader;