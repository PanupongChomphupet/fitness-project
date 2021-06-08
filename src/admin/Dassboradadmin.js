import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import styles from '../styles/Dassboradadmin.module.css'

function Dassborad() {
    const history = useHistory();
    const [itemcouse, setitemcouse] = useState([]);

    function loadpage() {
        axios({
            method: "GET",
            url: "http://localhost:5000/course",
            headers: { "Content-Type": "application/json" }
        }).then(res => {
            setitemcouse(res.data.cos)
        })
    }
    useEffect(() => {
        loadpage()
    }, [])
    function deletes(ids) {
        const id = ids;
        axios({
            method: "POST",
            url: "http://localhost:5000/deletecouse",
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({ id })
        }).then(res => {
            if (res.data === "สำเร็จ") {
                loadpage()
            }
        })
    }
    
    return (
        <div className={styles.bg}>
            {/* <div className={styles.adddata} >
                <button onClick={() => { history.push('/insertdata') }}>เพิ่มคอร์ส</button>
                <button onClick={() => { history.push('/addlevel') }}>เพิ่มเลเวล</button>
                <button onClick={() => { history.push('/userdata') }}>รายการ</button>
            </div> */}
            
            {itemcouse.map((item, index) =>
                <div key={index} className={styles.couse}>
                    <div onClick={() => { history.push(`/datacouse/${item._id}`) }} style={{ background: `url(https://storage.googleapis.com/video-course/${item.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className={styles.img}></div>
                    <div className={styles.page}>
                        <div className = {styles.name}>
                            <h2 className={styles.title}>{item.name}</h2>
                        </div>
                        <div className={styles.btn}>
                            <button onClick={() => { history.push(`/updatecouse/${item._id}`)}} >แก้ไข</button>
                            <button onClick={() => { deletes(item._id) }}>ลบ</button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}
export default Dassborad;