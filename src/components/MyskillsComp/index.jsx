import React from "react";
import styles from './index.module.css';
const SkillComp = ({ logo, name }) => {
    return <>
        <div className={styles.skillcompcont}>
            <img style={{ width: "100px", height: "100px" }} src={logo} alt="logo" />
            <span>{name}</span>
        </div>
    </>
};

export default SkillComp;
