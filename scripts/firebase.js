const database = firebase.firestore();
database.settings({ timestampsInSnapshots: true });


const form = document.getElementById("add-salon");
const masterForm = document.querySelector(".master");
const phoneform = document.getElementById("phone_form");
const userSignup = document.querySelector(".user-signup1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var bool=0;
    const listdiv = document.querySelector(".listdiv");
  var sEmail = document.querySelector(".s-email").value;
   database.collection("salons").onSnapshot(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var firebaseEmail=doc.data().email;
          if(sEmail===firebaseEmail)
          {
            bool=bool+1;
          }
        else
        {
        bool=0;
        };
           if(bool==1){
              listdiv.innerHTML+="<input type='checkbox' id='list_item' checked>";
  }
          else{

          }
        });
    }); 
    function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
    var main = async () => {
 await delay(900);
    var listitem = document.getElementById("list_item");
    if(!listitem){
          userSignup.classList.remove("hide");
        } else
        {
            alert("Пользователь с такой почтой уже существует");
        listitem.parentNode.removeChild(listitem);
          
        };
}

main();
    
});
masterForm.addEventListener("submit", (o) => {

   var booll=0;
    const listdiv = document.querySelector(".listdiv");
    var mEmail = document.querySelector(".m-email").value;
   database.collection("masters").onSnapshot(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var masterEmail=doc.data().email;
          if(mEmail===masterEmail)
          {
            booll=booll+1;
          }
        else
        {
        booll=0;
        };
           if(booll==1){
              listdiv.innerHTML+="<input type='checkbox' id='list_item' checked>";
  }
          else{

          }
        });
    }); 
    function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
    var main = async () => {
 await delay(900);
    var listitem = document.getElementById("list_item");
    if(!listitem){
          userSignup.classList.remove("hide");
        } else
        {
            alert("Пользователь с такой почтой уже существует");
        listitem.parentNode.removeChild(listitem);
        };
}

main();
  o.preventDefault();
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    userSignup.classList.add("hide");
  }
});
userSignup.addEventListener("click", (event) => {
  const target = event.target;

  if (target.classList.contains("modal-close") || target === userSignup) {
    userSignup.classList.add("hide");
  }
});

window.onload = function () {
  render();
};
function render() {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container"
  );
  recaptchaVerifier.render();
}
function phoneAuth() {
  //get the number
  var number = document.getElementById("phone_number").value;
  if (masterForm.classList.contains("hide")){
    var pbool=0;
    const divlist = document.querySelector(".divlist");
  var modaltel = document.querySelector(".modal-tel").value;
   database.collection("salons").onSnapshot(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var firebasenumber=doc.data().phone_number;
          if(modaltel===firebasenumber)
          {
            pbool=pbool+1;
          }
        else
        {
        pbool=0;
        };
           if(pbool==1){
              divlist.innerHTML+="<input type='checkbox' style='display:none' id='list_i' checked>";
  }
          else{

          }
        });
    }); 
    function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
    var main = async () => {
 await delay(900);
    var list = document.getElementById("list_i");
    if(!list){
           firebase
    .auth()
    .signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      //s is in lowercase
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      console.log(coderesult);
      alert("Код отправлен");
    })
    .catch(function (error) {
      alert(error.message);
    });
        } else
        {
            alert("Пользователь с таким номером телефона уже существует");
        list.parentNode.removeChild(list);
          
        };
}

main();
  }
  else{
      var pbool=0;
    const divlist = document.querySelector(".divlist");
  var modaltel = document.querySelector(".modal-tel").value;
   database.collection("masters").onSnapshot(function(querySnapshot) {
      querySnapshot.forEach(function(doc) {
        var firebasenumber=doc.data().phone_number;
          if(modaltel===firebasenumber)
          {
            pbool=pbool+1;
          }
        else
        {
        pbool=0;
        };
           if(pbool==1){
              divlist.innerHTML+="<input type='checkbox' style='display:none' id='list_i' checked>";
  }
          else{

          }
        });
    }); 
    function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
    var main = async () => {
 await delay(900);
    var list = document.getElementById("list_i");
    if(!list){
           firebase
    .auth()
    .signInWithPhoneNumber(number, window.recaptchaVerifier)
    .then(function (confirmationResult) {
      //s is in lowercase
      window.confirmationResult = confirmationResult;
      coderesult = confirmationResult;
      console.log(coderesult);
      alert("Код отправлен");
    })
    .catch(function (error) {
      alert(error.message);
    });
        } else
        {
            alert("Пользователь с таким номером телефона уже существует");
        list.parentNode.removeChild(list);
          
        };
}

main();
  }
}

function codeverify() {
  var code = document.getElementById("verificationCode").value;
  coderesult
    .confirm(code)
    .then(function (result) {
      var user = result.user;
      console.log(user);
      if (masterForm.classList.contains("hide")) {
        alert("Вы зарегистрировались");
        var notifications = document.getElementById("notification1");
        if (notifications.checked) {
          notifications.value = true;
        } else {
          notifications.value = false;
        }
        database.collection("salons").add({
          full_name: form.full_name.value,
          email: form.email.value,
          salon_name: form.salonname.value,
          phone_number: phoneform.phone_number.value,
          notifications: notifications.value,
          password: form.password.value,
        });
        userSignup.classList.add("hide");
      } else {
        alert("Вы зарегистрировались");
        var notification = document.getElementById("notification2");
        if (notification.checked) {
          notification.value = true;
        } else {
          notification.value = false;
        }
        database.collection("masters").add({
          full_name: masterForm.full_name.value,
          email: masterForm.email.value,
          salon_name: masterForm.salonname.value,
          phone_number: phoneform.phone_number.value,
          notifications: notification.value,
          password: masterForm.password.value,
        });
        userSignup.classList.add("hide");
      }
    })
    .catch(function (error) {
      alert(error.message);
    });
}
