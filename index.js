function consult(event) {
  event.preventDefault();
  const bookingObject = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
  };

  // console.log(bookingObject);
  axios
    .post(
      "https://crudcrud.com/api/663fdfdd5ea74e7db16f94cd075f7208/apointmentData",
      bookingObject
    )
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}

document.getElementById("post").addEventListener("click", consult);
