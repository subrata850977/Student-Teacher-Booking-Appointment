 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAK-TUg-0XGtKVdDpOjOAJvhhitG_9PMhg",
    authDomain: "subratapal-1b04b.firebaseapp.com",
    projectId: "subratapal-1b04b",
    storageBucket: "subratapal-1b04b.appspot.com",
    messagingSenderId: "602213770474",
    appId: "1:602213770474:web:70452290a12ffcb97c2393",
    measurementId: "G-H1XCHTGDTD"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database=getDatabase(app);
  const auth=getAuth();


//submit
const submit = document.getElementById('submit');
submit.addEventListener("click",
  function(event){
    event.preventDefault()

    //inputs
    const name = document.getElementById('name').value;
    const roll = document.getElementById('roll').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then(()=> {
    set(ref(database, 'students/' + roll),{
      Name: name,
      Roll: roll,
      Email: email,
      Password: password
    })

    alert("Account Created Successfully")
  })
  .catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage)
  });
}

)