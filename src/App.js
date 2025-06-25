import React, { useEffect } from "react";
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import { useState } from "react";
import Spiner from "./components/Spiner"

const App = () => {
  const [courses, setCourses] = useState(null);
  const [loading,setLoading]=useState(true);

  async function fetchData(){
    setLoading(true);
    try {

      let response = await fetch(apiUrl);
      let output =await response.json();
      setCourses(output.data);
      
    } catch (error) {
    toast.error("Something Went Wrong !!! ");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();

  }, [])
  
  return (
    <div className="min-h-screen flex flex-col ">
      <div>
        <Navbar />
      </div>

      <div>
        <Filter filterData={filterData} />
      </div>

      <div>
       {
          loading ? (<Spiner/>):(<Cards courses={courses}/>)
       }
      </div>
    </div>
  );
};

export default App;
