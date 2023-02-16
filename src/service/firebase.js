import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, arrayUnion, collection, doc, getDoc, getFirestore, setDoc, updateDoc } from "firebase/firestore"; 


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
  const db = getFirestore(app);
  export const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
    export const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .catch((error) => {
        console.log(error);
      });
  };
  
  export const userExists = async (uid) => {
    const docRef = doc(db, "Users",uid);
    const docSnap = await getDoc(docRef);
    console.log(docSnap.exists());
    return docSnap.exists();
    }
      
 export const getUser = async(uid) =>{
    const docRef = doc(db,"Users",uid);
    const docSnap = await getDoc(docRef)
    return docSnap.data()
 }

  export const createUser = (user) => {
    const ref = doc(db, 'Users',user.id);
    setDoc(ref,user);
  }
  
  export const createProject = async (project,userData) =>{
    console.log(userData)
    const docRef = await addDoc(collection(db, "Projects"),project);
    const userRef = doc(db, "Users",userData.id);
    await updateDoc(userRef, {
        projects: arrayUnion(docRef)
    });
  }
  export const getProjectData = async(project)=>{
    const data = await getDoc(project)
    return data.data()
    
  }

  export const createGoal = async(goal,project)=>{
    console.log(project.id)
    const docRef = doc(db,"Projects",project.id);
    await updateDoc(docRef,{
        goals:arrayUnion(goal)
    })
  }
  
  export const checkUncheck = async(project,idx) =>{
    const docRef = doc(db,"Projects",project.id);
    const data = await getDoc(docRef)
    console.log (data.data())
    const goal = data.data().goals[idx]
    const newGoal = {...goal,completed:!goal.completed}
    let newgoals = data.data().goals
    newgoals[idx] = newGoal
    console.log(goal)
    await updateDoc(docRef,{
        goals:newgoals
    })

  }