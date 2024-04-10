document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Prendi i valori inseriti nel form
  let name = document.getElementById('name').value;
  let message = document.getElementById('message').value;
  
  // Costruisci il corpo dell'email
  let body = "Nome: " + name + "\n";
  body += "Messaggio: " + message;
  
  // Invia l'email
  window.location.href = "mailto:cogemac@io.it?subject=Contatto tramite form&body=" + encodeURIComponent(body);
});

