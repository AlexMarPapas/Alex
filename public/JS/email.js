function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "alexapapadop@gmail.com",
    Password: "ECD356311B6119FC7ACEBC9DBCAA8140FAC0",
    To: "alexapapadop@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New contact form enquiry",
    Body: "And this is the body",
  }).
  then((message) => alert(message));
};
