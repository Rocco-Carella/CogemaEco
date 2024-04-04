function inviaEmail() {
    // Raccogli dati dal modulo
    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var messaggio = document.getElementById('message').value;

    // Invia email tramite EmailJS
    emailjs.send("service_ID", "template_ID", {
      from_name: nome,
      reply_to: email,
      message: messaggio
    })
    .then(function(response) {
      alert("Email inviata con successo!");
      document.getElementById('contactForm').reset(); // Resetta il modulo dopo l'invio
    }, function(error) {
      alert("Si è verificato un errore durante l'invio dell'email.");
      console.log("Errore nell'invio dell'email:", error);
    });
  }
