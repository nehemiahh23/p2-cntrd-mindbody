import React, {useState} from 'react'



function Hello({user, setUser}) {

  const [form, setForm] = useState({name: ""})

  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch('http://localhost:3002/user', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify(form)})
      .then(res => res.json())
      .then(data => setUser(data))
    setForm({name: ""})
}

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return(
    <div className="container">
     <div className="form-box">
       <div className="header-form">
         <h4 className="text-primary text-center"><i className="fa fa-user-circle" style={{fontSize:"110px"}}></i></h4>
         <div className="image">
         </div>
       </div>
       <div className="body-form">
        <form onSubmit={handleSubmit}>
          <h1>Welcome, Friend!</h1>
           <div className="input-group mb-3">
<div className="input-group-prepend">
 <span className="input-group-text"><i className="fa fa-user"></i></span>
</div>
<input type="text" className="form-control" name="name" placeholder="What should we call you today?" value={form.name} onChange={handleChange}/>
</div>
<div className="input-group mb-3">
<div className="input-group-prepend">
 <span className="input-group-text"><i className="fa fa-lock"></i></span>
</div>
</div>
<button type="button" className="btn btn-secondary btn-block">Start Here</button>
<div className="message">
</div>
</form>
       </div>
     </div>
    </div>   
 )
}

export default Hello