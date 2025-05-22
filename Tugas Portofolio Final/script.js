function addShakeEffect(element) {
  element.classList.add("shake");
  setTimeout(() => element.classList.remove("shake"), 400);
}

document.querySelectorAll(".project-item, .skill, button").forEach((el) => {
  el.addEventListener("click", () => addShakeEffect(el));
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");
  const successMsg = document.getElementById("success-message");

  // Reset
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  let valid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Nama wajib diisi!";
    addShakeEffect(name);
    valid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email wajib diisi!";
    addShakeEffect(email);
    valid = false;
  } else if (!email.value.includes("@")) {
    emailError.textContent = "Format email salah!";
    addShakeEffect(email);
    valid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Pesan wajib diisi!";
    addShakeEffect(message);
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "✅ Pesan berhasil dikirim!";
    addShakeEffect(successMsg);
    name.value = "";
    email.value = "";
    message.value = "";
  }
});
