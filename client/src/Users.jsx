import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Users() {
    const [users,setUsers] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3001')
      .then(result => (setUsers(result.data)))
    }, []);
    // ...existing code...
const handleDelete = (id) => {
  axios.delete(`http://localhost:3001/deleteUser/${id}`)
    .then(result => {
      // Remove the deleted user from the users state
      setUsers(users.filter(user => user._id !== id));
    })
    .catch(err => console.log(err));
};
// ...existing code...
  return (
    <div className="d-flex v-100 justify-content-center align-items-center bg-primary">
      <div className="bg-white rounded  p-5 w-50">
        <Link to="/create" className="btn btn-success">CREATE NEW</Link>
       
        
       
       <h3>USERS</h3>
        <table className="table">
            <thead>
<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
    <th>Action</th>
</tr>

            </thead>
            <tbody>
                
            {users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <button><Link to={`/update/${user._id}`} className="btn btn-success">UPDATE</Link></button>
                                    <button className="btn btn-danger" onClick={(e)=> handleDelete(user._id)}>DELETE</button>
                                </td>
                            </tr>
                        ))}
            </tbody>
        </table>
      </div>
     
    </div>
  );
}
export default Users;