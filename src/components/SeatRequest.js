import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../config'
import { useHistory } from 'react-router'
import "../style/add_style.css"

export default function Add() {

    const [start_location, setStart_location] = useState("")
    const [end_location, setEnd_location] = useState("")
    const [phone_number, setPhone_number] = useState("")
    
    

    const email = localStorage.getItem("email")
    const owner_mail = localStorage.getItem("owner_mail")
    const name = localStorage.getItem("name")
    let history = useHistory()

    const collection_ref = collection(db,"Requests")
    const Sumbit =  async() =>{
        if ( start_location !=="" & end_location !== "" & phone_number!=="") {
            await addDoc(collection_ref, { start_location, end_location, phone_number, name, email, owner_mail})
            history.push("./")
            window.location.reload()
            localStorage.removeItem("owner_mail")
        }else{
            alert("all fields are mandatory")
        }
    }

    return (
        <div className="Add">
            <div className="Container">
                <h1 className="maintitle">Request A Seat</h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        
                        
                        <label id="start-location-label">
                            <h5 className="input_label" id="start-location-label-h5">Your Start Location : </h5>
                            <input className="input_form" type="text" placeholder="Your Start Location ?" name="start-location" id="start-location" onChange={(event)=>{setStart_location(event.target.value)}} />
                        </label>
                        <label id="end-location-label">
                            <h5 className="input_label" id="end-location-label-h5">Your End Location : </h5>
                            <input className="input_form" type="text" placeholder="Your End Location ?" name="end-location" id="end-location" onChange={(event)=>{setEnd_location(event.target.value)}} />
                        </label>
                        <label id="phone-number-label">
                            <h5 className="input_label" id="phone-number-label-h5">Your Phone Number : </h5>
                            <input className="input_form" type="text" placeholder="Your Phone Number ?" name="phone-number" id="phone-number" onChange={(event)=>{setPhone_number(event.target.value)}} />
                        </label>
                        
                        

                        
                </div>
                        <button id="submit-btn" onClick={Sumbit}name="action">Submit
                        </button>
            </div>
        </div>
    )
}