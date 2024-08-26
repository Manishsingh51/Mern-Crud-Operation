
import "./App.css";
import Table from "./components/table";
import UpdateItem from "./components/UpdateItem";
import AddItem from "./components/AddItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {


  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />}/>
        <Route path="/addItem" element={<AddItem />}/>
        <Route path="/update" element={<UpdateItem />}/>
       
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
