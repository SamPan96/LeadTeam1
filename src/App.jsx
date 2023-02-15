import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import DashboardPage from "./components/DashboardPage";
import LoginPage from "./components/LoginPage";
import "./App.css";

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
const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setuser(user)
      // ...
    } else {
      // User is signed out
      // ...
    }
  });
  if(user){
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<DashboardPage user={user} />} />
          </Routes>
        </Router>
    </div>
  );
  }
  else{
    console.log('here')
    return (
      <div className="App">
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
