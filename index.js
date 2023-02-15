function consult(event) {
  event.preventDefault();
  const bookingObject = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
  };

  console.log(bookingObject);
}
