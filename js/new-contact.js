document.addEventListener("DOMContentLoaded", function () {
	"use strict";
	
	var contactForm = document.getElementById("contactForm");
	var nameInput = document.getElementById("name");
	var emailInput = document.getElementById("email");
	var phoneInput = document.getElementById("phone_number");
	var subjectInput = document.getElementById("msg_subject");
	
	contactForm.addEventListener("submit", function (event) {
		event.preventDefault();
		var isValid = validateForm();
		
		if (isValid) {
			submitForm();
		}
	});
	
	function validateForm() {
		var valid = true;
		var nameValue = nameInput.value.trim();
		var emailValue = emailInput.value.trim();
		var phoneValue = phoneInput.value.trim();
		var subjectValue = subjectInput.value.trim();
		
		if (nameValue === "") {
			valid = false;
			setErrorFor(nameInput, "Please enter your name");
		} else {
			setSuccessFor(nameInput);
		}
		
		if (emailValue === "") {
			valid = false;
			setErrorFor(emailInput, "Please enter your email");
		} else if (!isEmail(emailValue)) {
			valid = false;
			setErrorFor(emailInput, "Please enter a valid email address");
		} else {
			setSuccessFor(emailInput);
		}
		
		if (phoneValue === "") {
			valid = false;
			setErrorFor(phoneInput, "Please enter your phone number");
		} else if (!isPhoneNumber(phoneValue)) {
			valid = false;
			setErrorFor(phoneInput, "Please enter a valid phone number");
		} else {
			setSuccessFor(phoneInput);
		}
		
		if (subjectValue === "") {
			valid = false;
			setErrorFor(subjectInput, "Please enter your subject");
		} else {
			setSuccessFor(subjectInput);
		}
		
		return valid;
	}
	
	function setErrorFor(input, message) {
		var formGroup = input.closest(".form-group");
		var errorText = formGroup.querySelector(".help-block");
		
		formGroup.classList.add("has-error");
		errorText.textContent = message;
	}
	
	function setSuccessFor(input) {
		var formGroup = input.closest(".form-group");
		
		formGroup.classList.remove("has-error");
		var errorText = formGroup.querySelector(".help-block");
		errorText.textContent = "";
	}
	
	function isEmail(email) {
		var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
	
	function isPhoneNumber(phone) {
		var phoneRegex = /^\d{10}$/; // Assume phone number is 10 digits long
		return phoneRegex.test(phone);
	}
	
	function submitForm() {
		// Handle form submission here
		// You can use AJAX or other methods to send the form data to the server
		// After successful submission, you can reset the form and display a success message
		// For example:
		// contactForm.reset();
		// document.getElementById("msgSubmit").textContent = "Message Submitted!";
	}
});