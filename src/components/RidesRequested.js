import React from 'react'
import {db} from '../config'
import { collection, getDocs } from 'firebase/firestore'
import { useEffect , useState} from 'react'
import "../style/profile_style.css"

export default function RidesRequested() {
  const [list, setlist] = useState([])
  let name = localStorage.getItem("name")
  let email = localStorage.getItem("email")
  let authenticated = localStorage.getItem("Authenticated")
  const collection_ref = collection(db,"Requests")
  

  useEffect(() => {
    const getList = async () =>{
        const data = await getDocs(collection_ref);
        setlist(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
    getList()
    
  })
  

  return (
    <div>
      
      
      <div className="rides_offered">
        <h2>Seats Requested From You</h2>
        <div className="rides_offered_div" >

        {list.map((post) =>{
                if (email == post.owner_mail) {
                    return <div className="post_request">
                        <h2>{post.name}</h2>
                        <p>Start Location : {post.start_location}</p>
                        <p>End Location : {post.end_location}</p>
                        <p>Phone Number : {post.phone_number}</p>
                        
                    </div>
                }
            })}
        </div>
      </div>
      

     
    </div>
  )
}
