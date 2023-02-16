import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";
import "./App.css";
import { createUser, userExists } from "./service/firebase";
import Signup from "./components/Signup";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyAyyPdpwUUF2r18t8S8e_ZoBTke_-by0ko",
    authDomain: "lead-p.firebaseapp.com",
    projectId: "lead-p",
    storageBucket: "lead-p.appspot.com",
    messagingSenderId: "639143757120",
    appId: "1:639143757120:web:d1c35bac20828ca119e6a5",
    measurementId: "G-GTYKXN0KH3",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const [checked, setchecked] = useState(false)
  const [user, setuser] = useState(auth.currentUser);
  const [newUser, setnewUser] = useState(user?!userExists(user.uid):false);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setuser(user)
        const uid = user.uid;
        console.log(uid);
        await userExists(uid).then((res)=>{
          setnewUser(!res)
        })
      }
    });
  }, [])
  
console.log(newUser)
  if (user && !newUser) {
    return (
      <div className="App" style={{ width: "100%" }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<DashboardPage user={user} />} />
          </Routes>
        </Router>
      </div>
    );
  } 
  if(user && newUser) {
      return (
        <div className="App" style={{ width: "100%", height: "1000px" }}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Signup setnewUser={setnewUser}/>} />
            </Routes>
          </Router>
        </div>
      );
  }
     if(!user) { 
      return (
        <div className="App" style={{ width: "100%", height: "1000px" }}>
          <Router>
            <Routes>
              <Route exact path="/" element={<LoginPage />} />
            </Routes>
          </Router>
        </div>
      );
    }
  }

export default App;
