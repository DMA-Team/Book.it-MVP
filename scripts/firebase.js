const form = document.getElementById("add-salon");
form.addEventListener("submit", (e) => {
  var notifications = document.getElementById("notification1");
  if (notifications.checked) {
    notifications.value = true;
  } else {
    notifications.value = false;
  }
  e.preventDefault();
  db.collection("salons").add({
    full_name: form.full_name.value,
    email: form.email.value,
    salon_name: form.salonname.value,
    phone_number: form.phone_number.value,
    notifications: form.notifications.value,
    password: form.password.value
  });
  form.reset();
});

const masterForm = document.getElementById("add-master");
masterForm.addEventListener("submit", (event) => {
  var notifications = document.getElementById("notification2");
  if (notifications.checked) {
    notifications.value = true;
  } else {
    notifications.value = false;
  }
  event.preventDefault();
  db.collection("masters").add({
    full_name: masterForm.full_name.value,
    email: masterForm.email.value,
    salon_name: masterForm.salonname.value,
    phone_number: masterForm.phone_number.value,
    password: masterForm.password.value,
    notifications: masterForm.notifications.value
  });
  masterForm.reset();
});