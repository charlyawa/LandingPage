// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBBQuJ748nZJ_uPKmX_Bx0U8hroZLJ4Jt0",
    authDomain: "carloscs-acad0.firebaseapp.com",
    projectId: "carloscs-acad0",
    storageBucket: "carloscs-acad0.appspot.com",
    messagingSenderId: "804013443279",
    appId: "1:804013443279:web:0f91c6b1e440601009cfba",
    measurementId: "G-CBXNGN82DK"
  };

// Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Refernece contactInfo collections
let contact = firebase.database().ref("infos");

//Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submirForm);

function submitForm(e) {
    e.preventDefault();


//Get input Values
let name = document.querySelector(".name").value;
let email = document.querySelector(".email").value;
let message = document.querySelector(".message").value;

saveContactInfo(name, email, message);

document.querySelector(".contact-form").reset();

sendEmail(name, email, message);

}

//Save infos to Firebase

function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    });


    retrieveInfos();
}

//Retrive Infos

function retrieveInfos(){
    let ref = firebase.database().ref("infos");
    ref.on("values", gotData);
}

function gotData(data){
    let info = data.val();
    let keys = Object.keys(info);

    for (let i = 0; i < keys.length; i++) {
        let infoData = keys[i];
        let name = info[infoData].name;
        let email = info[infoData].email;
        let message = info[infoData].message;
        console.log(name, email, message);

        let infosResults = document.querySelector(".infosResults");

        infosResults.innerHTML += `<div>
        <p><strong>Name: <strong/>${name}<br/>
        <p><strong>Email: <strong/>${email}<br/>
        <p><strong>Message: <strong/>${message}<br/>
        </p>
        </div>`;
    }
}

retrieveInfos();

//Enviar info a Email
function sendEmail(name, email, message) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "Charly alva",
        Password: "CA..xd.@1",
        To: "https://carloscs.netlify.app/",
        From: "alvacharly31@gmail.com",
        Subject: `${name} send you a messenge`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
    }).then(
        message => alert("mail sent succssfully"));
}
