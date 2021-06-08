import styles from '../styles/Couse.module.css'
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'
import axios from 'axios';
function Couse() {
    const id = useParams().id;
    const [bill, setbill] = useState([])

    useEffect(() => {
        axios({
            method : "POST",
            url : `http://localhost:5000/databill/${id}`,
            headers: { "Content-Type": "application/json" },
            data: JSON.stringify({})
        }).then (res => {
            setbill(res.data.bill)
        })
    }, [])
    return (
        <div className = {styles.bg}>
            <div className = {styles.hearder}>
                <h2 className = {styles.title}>รายการคอร์ส</h2>
            </div>
            <div className = {styles.content}>
                {bill.map((item, index) =>
                    <div key = {index} className = {styles.listbill}>
                    <h3>{item.namecouse}</h3>
                    {item.level.map((item1, index) => 
                        <div key = {index}>
                            <p>เลเวล {item1.level} : {item1.name} </p>
                        </div>
                    )}
                    <div className = {styles.btn}>
                        <button>อนุญาติสิทธิ์</button>
                    </div>
                </div>
                
                )}
                
            </div>
        </div>
    )
}
export default Couse;