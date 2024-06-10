import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Adddata = () => {


    const [data,changeData]=useState(

        {
  
          "name":"",
          "friendName":"",
          "friendNickName":"",
          "DescribeYourFriend":"",
         
          
  
        }
  
      )
  
  const inputHandler=(event)=>{
  
      changeData({...data,[event.target.name]:event.target.value})
  }
  
  const readValue=()=>{
      console.log(data)
      axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
          (response)=>{
              console.log(response.data)
              if (response.data.status=="success") 
                  {
                      alert("successfully added")
                  
              } else {
                  alert("error")
                  
              }
          }
      ).catch(
          (error)=>(alert(error.message))
      )
  }
  

  return (
    <div>

<Navbar/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

<label htmlFor="" className="form label"> Name</label>
<input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form label">friendName</label>
    <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputHandler}/>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    <label htmlFor="" className="form label">friendNickName</label>
    <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputHandler}/>

    </div>
    
    
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

    <label htmlFor="" className="form label">DescribeYourFriend</label>
    <input type="text" className="form-control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={inputHandler}/>

    </div>
    
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


<button className="btn btn-success" onClick={readValue}>Submit</button>

    </div>
</div>

        </div>
    </div>
</div>



    </div>
  )
}

export default Adddata