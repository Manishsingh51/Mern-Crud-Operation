import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';



function Table() {

    const [item, setItem] = useState();
    const [count, setCount] = useState();
    const navigate = useNavigate();

  useEffect(() => {

    const fetchItems = async () => {

      // Fetch all items when the component loads
      axios.get('http://localhost:3001/getItem')
          .then(result =>{
            console.log(result.data.data.item); 
              //var jsonObject = JSON.parse(result.data);
              console.log(result.data.data.count);
            setItem(result.data.data.item)
            setCount(result.data.data.count)})
          .catch(error => console.log(error));
        };

        fetchItems();
  }, []);
 
   const handleClick = (itemData) => {
      console.log('jkdkcjdk,d', itemData);
      navigate("/update", { state: itemData });
    }
    const handleDeleteClick = (itemData) => {
      console.log('jkdkcjdk,d', itemData);

      //navigate("/update", { state: itemData });

      axios.delete('http://localhost:3001/delete-item/'+itemData._id)
      .then(result =>{
        window.location.reload();
        console.log(result.data);
        
}).catch(error => console.log(error));


    }
    
  return (
    <div className="tbl">    
      <div id='bdr'>
      <h1 id='pro'>ITEMS LIST </h1>
        <table className='hrt'>
          
          <thead>
            <tr class="row">    
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody class="body">
            {
              item && item.map((data) => {
                return <tr>
                 
                  <td>{data.name}</td>
                  <td>{data.quantity}</td>
                  <td>{data.price}</td>
                  <td><button className="btn1" onClick={e=> handleClick(data)}>Edit</button> <button className="btn2" onClick={e=> handleDeleteClick(data)}>Delete</button></td>
                 
                  
                </tr>
                  
              })
            }
          
          </tbody>
          
        </table>
        <Link to="/addItem" className='buton'>ADD ITEM</Link>
        <span><h1>Items Count : {count}</h1></span>
       

      </div>
    </div>
  )
}

export default Table;

