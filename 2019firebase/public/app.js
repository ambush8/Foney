(function() {
//Hi
const config = {
    apiKey: "AIzaSyAOv4WJkYh_U_YZvSKVPHMS6lMHgNAFnqM",
    authDomain:"foney-dc00c.firebaseapp.com",
    databaseURL:"https://foney-dc00c.firebaseio.com",
    storageBucket:"foney-dc00c.appspot.com",
    projectId: "foney-dc00c",
    messagingSenderId: "754629540406",
    appId: "1:754629540406:web:d10f2b0573fb281d"
};
firebase.initializeApp(config);

const txtEmail = document.getElementById('txtEmail')
const txtPassword = document.getElementById('txtPassword')
const btnLogin = document.getElementById('btnLogin')
const btnSignUp = document.getElementById('btnSignUp')
const btnLogout = document.getElementById('btnLogout')
window.alert("HELLO");
//Add login Event
btnLogin.addEventListener('click', e => {
    //Get email and passowrd
    //document.writeln("<h1>WTF</h1>");
    console.log("Are u listening to me!");
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();
    //Sign in
    auth.signInWithEmailAndPassword(email,pass);
    Promise.catch(e => console.log(e.message));


});

}());