import axios from "axios";
import { useEffect, useState } from "react";
import CategoryCards from "../components/Cards/CategoryCards";

const HomePage = () => {
  let [thedata, setTheData] = useState([])
   useEffect(() => {
     const fetchData = async () => {
       try {
         const {data} = await axios.get(
           "https://6525a83167cfb1e59ce79305.mockapi.io/cities"
         );
         setTheData(data);
         console.log(data);
       } catch (err) {
         console.log(err.message);
       }
     };

     fetchData();
   }, []);


  return (
    <div className="home-page">
      <div className="containerr">
        <h1 className="text-center text-light py-5">Home</h1>
        <div className="home-page-wrapper">
        <CategoryCards theData={thedata}/>
        {console.log(thedata)}
        </div>
      </div>
    </div>
  )
}

export default HomePage