import React, { useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'
import { db } from '../config'
import { useHistory } from 'react-router'
import "../style/add_style.css"

export default function Add() {

    const [seat_number, setNumber] = useState("")
    const [start_location, setStart_location] = useState("")
    const [end_location, setEnd_location] = useState("")
    const [phone_number, setPhone_number] = useState("")
    const [country, setCountry] = useState("")
    const [state, setState] = useState("")
    

    const email = localStorage.getItem("email")
    const authenticated = localStorage.getItem("Authenticated")
    const name = localStorage.getItem("name")
    let history = useHistory()

    const Login_redirect = () => {
        history.push("./login")
        window.location.reload()
    }

    const collection_ref = collection(db,"Rides")
    const Sumbit =  async() =>{
        if (seat_number !== "" & start_location !=="" & end_location !== "" & phone_number!=="" & country!=="" & state!=="") {
            await addDoc(collection_ref, {seat_number, start_location, end_location, phone_number, name, country,state, email})
            history.push("./")
            window.location.reload()
        }else{
            alert("all fields are mandatory")
        }
    }

    return (
        <div className="Add">
            <div className="Container">
                <h1 className="maintitle">Wanna Offer Other People Rides ?</h1>
                <h3 className="subtitle">Fill The Following Data Carefully</h3>
                <div className="inputs_parent">
                        <label id="seat-number-label">
                            <h5 className="input_label" id="seat-number-label-h5">Number Of Seats Available : </h5>
                            <input className="input_form" type="text" placeholder="How Many Seats Are Available In Your Car ?" name="seat-number" id="seat-number" onChange={(event)=>{setNumber(event.target.value)}} />
                        </label>
                        <label id="country-label">
                            <h5 className="input_label" id="country-label-h5">Your Country : </h5>
                            <input className="input_form" type="text" placeholder="Your Country" name="country" id="country" onChange={(event)=>{setCountry(event.target.value)}} />
                        </label>
                        <label id="sstate-label">
                            <h5 className="input_label" id="state-label-h5">In Which State Do You Live ? </h5>
                            <input className="input_form" type="text" placeholder="In Which State Do You Live ?" name="stater" id="state" onChange={(event)=>{setState(event.target.value)}} />
                        </label>
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
                        {authenticated? <button id="submit-btn" onClick={Sumbit}name="action">Submit
                        </button> : <button id="submit-btn" onClick={Login_redirect} >Submit
                        </button>}
            </div>
        </div>
    )
}