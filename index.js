class Booking {
  constructor(name, email, phone, date, time) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.date = date;
    this.time = time;
  }
}
let id = 1;
function consult(event) {
  event.preventDefault();
  const bookingObject = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    date: document.getElementById("date").value,
    time: document.getElementById("time").value,
  };

  const booking = new Booking(
    bookingObject.name,
    bookingObject.email,
    bookingObject.phone,
    bookingObject.date,
    bookingObject.time
  );
  localStorage.setItem(id, booking);
  id += 1;
}
