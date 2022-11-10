const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const submit = document.getElementById("claim-trial");

//error message variables
let firstError = document.getElementById("firstn-error-msg");
let lastError = document.getElementById("lastn-error-msg");
let emailError = document.getElementById("email-error-msg");
let passwordError = document.getElementById("password-error-msg");

submit.addEventListener("click", function () {
	const emailField = email.value;
	if (validateEmail(emailField)) {
		emailError.innerHTML = "";
	} else {
		emailError.innerHTML = "Looks like this is not an email.";
		emailError.required = true;
	}

	if (firstName.value == 0) {
		firstError.innerHTML = "First name cannot be empty."
		firstName.required = true;
	}

	if (lastName.value == 0) {
		lastError.innerHTML = "Last name cannot be empty."
		lastName.required = true;
	}

	if (password.innerHTML == 0) {
		passwordError.innerHTML = "Password cannot be empty."
		password.required = true;
	}
});

function validateEmail(email) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}