import './App.css';
var React = require('react');

import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/messaging'

const firebaseConfig = {
  apiKey: "AIzaSyD1jF86CgKOHlDOGqvlpdciE8U-mV4KQbc",
  authDomain: "er-telecom-f9cbb.firebaseapp.com",
  databaseURL: "https://er-telecom-f9cbb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "er-telecom-f9cbb",
  storageBucket: "er-telecom-f9cbb.appspot.com",
  messagingSenderId: "531057127291",
  appId: "1:531057127291:web:745aac047502c0ce0b17de"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function App(props) {
  // console.log(props)
  return (
    
    <div>
      <Header props={props}/>
    </div>
  );
}

export default App;
