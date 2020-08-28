const database = firebase.firestore();
database.settings({ timestampsInSnapshots: true });


const form = document.getElementById("add-salon");
const masterForm = document.querySelector(".master");
const phoneform = document.getElementById("phone_form");
const userSignup = document.querySelector(".user-signup1");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var sEmail = document.querySelector(".s-email").value;
  let x = false;
  database.collection("salons")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        var firestoreEmail = doc.data().email;
        if (firestoreEmail == sEmail.value) {
          x = true;
        }
      });
    });
  if (x == true) {
    alert("Пользователь с такой почтой уже существует");
  } else {
    userSignup.classList.remove("hide");
  }
});
masterForm.addEventListener("submit", (o) => {
  var mEmail = document.querySelector(".m-email").value;
  let x = false;
  database.collection("masters")
    .get()
    .then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        var firestoreMEmail = doc.data().email;
        if (firestoreMEmail.value == mEmail.value) {
          x = true;
        }
      });
    });
  if (x == true) {
    alert("Пользователь с такой почтой уже существует");
  } else {
    userSignup.classList.remove("hide");
  }
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
  //phone number authentication function of firebase
  //it takes two parameter first one is number,,,second one is recaptcha
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