import React, {useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateUsers() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(result => {
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch(err => console.log(err));
  }, [id]);

  const update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`, {
      name,
      email,
      age
    })
    .then(res => {
      navigate("/"); // Go back to users list after update
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="d-flex v-100 justify-content-center align-items-center bg-primary">
      <div className="bg-white rounded  p-5 w-50">
        <form onSubmit={update}>
          <h1>Update user</h1>
          <div className="mb-2">
            <label htmlFor="name"></label>
            <input type="text" className="form-control" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="email"></label>
            <input type="email" className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="mb-2">
            <label htmlFor="age"></label>
            <input type="number" className="form-control" placeholder="Enter Age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUsers;