import { collection, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../config'
import "../style/find_style.css"
import { useHistory} from 'react-router-dom'


export default function Find() {
    let history = useHistory()
    const [list, setlist] = useState([])
    const collection_ref = collection(db,"Rides")
    let authenticated = localStorage.getItem("Authenticated")
    let email = ""
    useEffect(() => {
        const getList = async () =>{
            const data = await getDocs(collection_ref);
            setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getList()
    })
    return (
        <div className="find">
            {list.map((post) =>{
                return <div className="post">
                    <h2>{post.name}, {post.country}, {post.state}</h2>
                    <p>Start Location : {post.start_location}</p>
                    <p>End Location : {post.end_location}</p>
                    <p>Number Of Seats : {post.seat_number}</p>
                    {authenticated?
                    <button className="ask" onClick={()=>{
                        localStorage.setItem("owner_mail",post.email)
                        history.push("./seat-request")
                        window.location.reload()
                    }}>Ask For A Seat</button>
                    :
                    <button className="ask" onClick={()=>{
                        history.push("./login")
                        window.location.reload()
                    }}>Ask For A Seat</button>
                }
                </div>
            })}
        </div>
    )
}