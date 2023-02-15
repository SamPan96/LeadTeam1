import { useState } from "react";
import { Route, BrowserRouter as Router, Routes, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";
import "./App.css";
import { createUser, userExists } from "./service/firebase";

function App() {
const firebaseConfig = {
  apiKey: "AIzaSyAyyPdpwUUF2r18t8S8e_ZoBTke_-by0ko",
  authDomain: "lead-p.firebaseapp.com",
  projectId: "lead-p",
  storageBucket: "lead-p.appspot.com",
  messagingSenderId: "639143757120",
  appId: "1:639143757120:web:d1c35bac20828ca119e6a5",
  measurementId: "G-GTYKXN0KH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const [user, setuser] = useState(undefined);
const [newUser, setnewUser] = useState(false)
const auth = getAuth();
const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      if (userExists){
        setuser(user)
      }
      else{
        navigate("/signup")
      }
      // ...
    }
     else {
      // User is signed out
      // ...
    }
  });
  if(user){
  return (
    <div className="App" style={{width:'100%',height:'1000px'}}>
        <Router>
          <Routes>
            <Route exact path="/" element={<DashboardPage user={user} />} />
            <Route exact path="/signup" element={<Signup/>} />
          </Routes>
        </Router>
    </div>
  );
  }
  else{
    console.log('here')
    return (
      <div className="App" style={{width:'100%',height:'1000px'}}>
          <Router>
            <Routes>
              <Route exact path="/" element={<LoginPage/>} />
            </Routes>
          </Router>
      </div>
    );

  }
}

export default App;
