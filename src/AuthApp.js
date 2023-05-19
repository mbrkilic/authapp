import React, {useState} from "react";
import swal from "sweetalert";
import Gorsel from "./assets/gorsel.jpg";

export default function AuthApp() {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleValidate = (e) => {
        e.preventDefault();
        if (user === 'admin@gmail.com' && pass === 'admin')
            swal("giris basarili", "hosgeldiniz", "success")
        else 
        swal("hatali giris", "tekrar deneyin", "error")
    }
  return (
    <div className="App-header">
      <h1>Authentication Portal</h1>

      <div className="row">
        <div className="col-md-6">
          <img alt="gorsel" src={Gorsel} className="float-right" width="600"/>
        </div>
        <div className="col-md-6 my-auto bg-white p-5 rounded">
          <form onSubmit={handleValidate}>
            <div className="mb-3">
              <label className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="enter ur email address"
                value={user}
                onChange={(e) =>setUser(e.target.value)}
                
              />
            
            </div>
            <div className="mb-3">
              <label className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="enter ur password"
                value={pass}
                onChange={(e) =>setPass(e.target.value)}
               
              />
            </div>
          
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
