console.log("hello");
const submitButton = document.getElementById("submit-form");
const dismissButton = document.getElementById("dismiss-button");

const emailInput = document.getElementById("email");
const emailSpan = document.querySelector(".email-span");

const newsletterElement = document.querySelector(".newsletter-cta.hide");
const successMessage = document.querySelector(".success_message");

function handleSubmit(e) {
  e.preventDefault();
  newsletterElement.style.display = "none";
  successMessage.style.display = "grid";
  emailSpan.textContent = emailInput.value;
}
function handleDismiss() {
  successMessage.style.display = "none";
  if (window.innerWidth > 650) {
    newsletterElement.style.display = "grid";
  } else {
    newsletterElement.style.display = "block";
  }
}

submitButton.addEventListener("submit", handleSubmit);
dismissButton.addEventListener("click", handleDismiss);
