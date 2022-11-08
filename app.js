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
	const email = email.value;
	if (validateEmail(email)) {
		emailError.innerHTML = "";
	} else {
		emailError.innerHTML = "Looks like this is not an email.";
	}
});

function validateEmail(email) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}