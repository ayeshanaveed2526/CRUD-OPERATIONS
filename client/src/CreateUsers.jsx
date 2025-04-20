
import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateUsers() {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [age, setAge] = useState()
  const navigate = useNavigate()
  
const Submit = (e)=> {
  e.preventDefault()
  axios.post("http://localhost:3001/createUser", {
    name,
    email,
    age
  })
.then(result => { console.log(result); navigate('/'); })
.catch(err => console.log(err))}
  return (
    <div>
        <div className="d-flex v-100 justify-content-center align-items-center bg-primary">
        <div className="bg-white rounded  p-5 w-50">
   <form onSubmit={Submit}>
   <h1>Create user</h1>
   <div className="mb-2">
    <label htmlFor="Name"></label>
    <input type="text" className="form-control" placeholder="Enter Name" 
    onChange={(e) => setName(e.target.value)} />
   </div>
   <div className="mb-2">
    <label htmlFor="Email"></label>
    <input type="email" className="form-control" placeholder="Enter Email"
    onChange={(e) => setEmail(e.target.value)} />
   </div>
    <div className="mb-2">
     <label htmlFor="Age"></label>
     <input type="number" className="form-control" placeholder="Enter Age" 
     onChange={(e) => setAge(e.target.value)}/>
     </div>
     <button className="btn btn-success">Submit</button>
   </form>

   </div>    </div>    </div>
  );
}
export default CreateUsers;