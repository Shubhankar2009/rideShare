import React from 'react'
import {db} from '../config'
import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore'
import { useEffect , useState} from 'react'
import "../style/profile_style.css"

export default function RidesOffered() {
  const [list, setlist] = useState([])
  let name = localStorage.getItem("name")
  let email = localStorage.getItem("email")
  let authenticated = localStorage.getItem("Authenticated")
  const collection_ref = collection(db,"Rides")
  const deletePost = async (id) =>{
    const postDoc = doc(db, "Rides", id)
    await deleteDoc(postDoc)
}

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
        <h2>Rides Offered By You</h2>
        <div className="rides_offered_div">

        {list.map((post) =>{
                if (email == post.email) {
                    return <div className="post">
                        <h2>{post.name}, {post.country}, {post.state}</h2>
                        <p>Start Location : {post.start_location}</p>
                        <p>End Location : {post.end_location}</p>
                        <p>Number Of Seats : {post.seat_number}</p>
                        <button className='danger_btn' onClick={()=>{deletePost(post.id)}}>Delete</button>
                        
                    </div>
                }
            })}
        </div>
      </div>
      

     
    </div>
  )
}
