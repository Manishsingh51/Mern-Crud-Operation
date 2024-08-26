import axios from "axios";
import React, { useRef } from "react";
import { useLocation , useNavigate} from "react-router-dom";

function UpdateItem() {
  const location = useLocation();
  const data = location.state;
  const inputNameRef = useRef();
  const inputQntRef = useRef();
  const inputPriceRef = useRef();

  const navigate = useNavigate()


  const handleChange = () =>{
    
    data.name = inputNameRef.current.value;
    data.quantity = inputQntRef.current.value;
    data.price = inputPriceRef.current.value;
    console.log('final data: ',data);

    // calll the put api
    axios.put('http://localhost:3001/update-item/'+data._id, data)
    .then(result =>{
                 console.log(result.data);
                 navigate("/"); 
  }).catch(error => console.log(error));

  }

  return (
    <div className="tbl">
      <div id="bdr">
        <h1 id="pro"> UPDATE ITEM </h1>
        <form>
        <table className="hrt">
          <thead class="row">
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          
          <tbody class="body">
          
            <tr>
              
             <td><span> Name : </span><input id="name" ref={inputNameRef} className="form-control" type="text" name="name" defaultValue={data.name} /></td>
             <td><span> Quantity : </span><input id="qnt" type="text" ref={inputQntRef} name="quantity" defaultValue={data.quantity} /></td>
             <td><span> Price : </span><input id="price" type="text" ref={inputPriceRef} name="price" defaultValue={data.price} /></td>
            </tr>
            
              <td><button class="butn" id="btn" type="button" onClick={handleChange}>Update</button></td>
           
            
          </tbody>
          
        </table>
        </form>
        
      </div>
    </div>
  );
}

export default UpdateItem;
