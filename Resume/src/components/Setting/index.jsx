import React, { useRef, useState } from "react";
import styles from './index.module.css';
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineSettings } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
const Setting = () => {
    const display = useRef()
    const [toggle, setToggle] = useState(false);
    const click = () => {
        setToggle(!toggle);
    };
    return <div className={styles.maincont}>
        <span onClick={click}><IoIosArrowForward size="50px"></IoIosArrowForward></span>
        <div className={styles.icon} style={{ display: toggle ? "block" : "none" }} ref={display}>
            {/* <span><IoSettingsOutline size="20px" /></span>
            <span><MdOutlineSettings size="20px" /></span> */}
        </div>
    </div>
};
export default Setting;
