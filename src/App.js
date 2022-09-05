import "./App.css";
import axios from "axios";
import React,{useState} from "react";

function App() {

  const [data,setdata] = useState({});
  
  const Handleclick = async () =>  {

      await axios.get("https://foodish-api.herokuapp.com/api/",{}).then((res) => {console.log(res); setdata(res.data)} ).catch((err) => {console.log(err);})
    }
    

  return (
    <div className="App">
    
    <div className="container">
    <h1>Foodie</h1>
    <button onClick={Handleclick} className="button" >click</button>
     <div><img src={data.image} alt="" className="food_img"/></div>
      </div>
    </div>
  );
}

export default App;
