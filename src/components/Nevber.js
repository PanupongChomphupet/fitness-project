import styles from '../styles/Navber.module.css'
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi'
import { HiUserCircle } from 'react-icons/hi'
import { text } from 'body-parser';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
function Navber(props) {
    const { rights } = props 
    const token = localStorage.getItem("token");
    const history = useHistory()
    function myLinks() {
        var x = document.getElementById("myLinks")
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    function ppath() {
        history.push('/login')
        localStorage.removeItem('token')
    }
    function user() {
        return (
            <nav>
                <div className={styles.bg_navber}>
                    <div className={styles.content}>
                        <h1 className={styles.nav_title}>VPilates</h1>
                        <div className={styles.nav_menu} id="myLinks">
                            <a onClick={(e) => history.push('/home')} >คอร์สเรียนทั้งหมด</a>
                            <a onClick={(e) => history.push('/dasborad')} >คอร์ดรียนของฉัน</a>
                        </div>
                        <div className={styles.icon}>
                            <a className={styles.iconuser} onClick={(e) => { history.push('/profile') }} ><HiUserCircle /></a>
                            <a className={styles.iconmenu} onClick={myLinks}><FiMenu /></a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
    function admin() {
        return (
            <nav>
                <div className={styles.bg_navber}>
                    <div className={styles.content}>
                        <h1 className={styles.nav_title}>VPilates</h1>
                        <div className={styles.nav_menu} id="myLinks">
                            <a onClick={(e) => history.push('/dasboradadmin')}>รายการคอร์ส</a>
                            <a onClick={(e) => history.push('/userdata')}>รายการสั่งซื้อ</a>
                            <a onClick={(e) => history.push('/insertdata')}>เพิ่มคอร์ส</a>
                            <a onClick={(e) => history.push('/addlevel')}>เพิ่มเลเวล</a>
                            <a onClick={ppath}>ออกจากระบบ</a>
                        </div>
                        <div className={styles.icon}>
                            <a className={styles.iconmenu} onClick={myLinks}><FiMenu /></a>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
    function login () {
        return (
            <nav>
                <div className={styles.bg_navber}>
                    <div className={styles.content}>
                        <h1 className={styles.nav_title}>VPilates</h1>
                        {/* <div className={styles.nav_menu} id="myLinks">
                            <a onClick={(e) => history.push('/dasboradadmin')}>รายการคอร์ส</a>
                            <a onClick={(e) => history.push('/userdata')}>รายการสั่งซื้อ</a>
                            <a onClick={(e) => history.push('/insertdata')}>เพิ่มคอร์ส</a>
                            <a onClick={(e) => history.push('/addlevel')}>เพิ่มเลเวล</a>
                            <a onClick={ppath}>ออกจากระบบ</a>
                        </div> */}
                        {/* <div className={styles.icon}>
                            <a className={styles.iconmenu} onClick={myLinks}><FiMenu /></a>
                        </div> */}
                    </div>
                </div>
            </nav>
        ); 
    }

    if (rights === "user") {
        return user()
    }else if (rights === "admin") {
        return admin()
    }else {
        return user()
    }


}
export default Navber
