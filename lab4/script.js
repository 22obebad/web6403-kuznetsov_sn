class ContactMessage {
  constructor(name, email, message, agree) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.agree = agree;
  }

  printToConsole() {
    console.log(`Имя: ${this.name}\nEmail: ${this.email}\nСообщение: ${this.message}\nСогласие: ${this.agree}`);
  }
}

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();
  const form = event.target;
  const data = new ContactMessage(
    form.elements.namedItem('name').value,
    form.elements.namedItem('email').value,
    form.elements.namedItem('message').value,
    form.elements.namedItem('agree').checked
  );
  data.printToConsole();
});
