import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddItem() {
  
  const [name, setName] = useState()
  const [quantity, setQuantity] = useState()
  const [price, setPrice] = useState()

  const navigate = useNavigate()

  
  const addItem = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/api/items',{name,quantity,price})
    .then(result =>{
      console.log(result);
      navigate("/");
      
}).catch(error => console.log(error));
  }

  return (
      <form onSubmit={addItem}>
      <table className="hrtt">
        <div class="container">
          <h1 id="pro">ADD ITEM</h1>
          <hr />
          
          <div class="row">
            <div class="col-25">
              <label for="fname">Name :</label>
            </div>
            <div class="col-75">
              <input type="text" id="name" name="name" onChange={(e) => {setName(e.target.value)}} />
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="fname">Quantity :</label>
            </div>
            <div class="col-75">
              <input type="text" id="qnt" name="qnt" onChange={(e) => {setQuantity(e.target.value)}}/>
            </div>
          </div>

          <div class="row">
            <div class="col-25">
              <label for="fname">Price :</label>
            </div>
            <div class="col-75">
              <input type="text" id="price" name="price" onChange={(e) => {setPrice(e.target.value)}}/>
            </div>
          </div>

          <div class="row">
          <button className='btn3'>Save</button>
          </div>
        </div>
      </table>
      </form>

  );
}

export default AddItem;

