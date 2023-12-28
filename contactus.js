const firebaseConfig = {
    apiKey: "AIzaSyCzjQ3V3NmAkHRWsCN4lR3EaSfL-fFpoJ8",
    authDomain: "projectsbkv-fabfe.firebaseapp.com",
    databaseURL: "https://projectsbkv-fabfe-default-rtdb.firebaseio.com",
    projectId: "projectsbkv-fabfe",
    storageBucket: "projectsbkv-fabfe.appspot.com",
    messagingSenderId: "523632836066",
    appId: "1:523632836066:web:6994914a7de50e5f9a8dbb"
  };


firebase.initializeApp(firebaseConfig);  

var contactFormDB = firebase.database().ref("ContactUs");

document.getElementById("contact").addEventListener("submit", submitForm);


function submitForm(e){
    e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var phone = getElementVal("phone");
  var web = getElementVal("web");
  var text = getElementVal("text");

  saveMessages(name, email, phone, web, text);

  document.getElementById("contact").reset();

}


const saveMessages = (name, email, phone, web, text) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
       
        Name : name,
        Email : email,
        Phone : phone,
        Website : web,
        Details : text,


    })
};



const getElementVal = (id) => {
    return document.getElementById(id).value;
};


function validateemail()  
{  
var x=document.myform.name.value; 
var e=document.myform.email.value; 
var r=document.myform.phone.value;
var l=document.myform.web.value;
var k=document.myform.text.value;


if(e==null || e=="") 
{

return false;
}

else if(x==null || x=="") 
{

return false;
}

else if(r==null || r=="") 
{

return false;
}

else if(l==null || l=="") 
{

return false;
}

else if(k==null || k=="") 
{

return false;
}
else {
alert("Your form has been submitted succesfully");
}
}  

