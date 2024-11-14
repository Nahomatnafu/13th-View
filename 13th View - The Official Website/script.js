// Select elements
const loginText = document.getElementById('loginText');
const loginModal = document.getElementById('loginModal'); // Keep this one, remove the duplicate below
const closeModalBtn = document.getElementById('closeModal'); // Use the correct ID for your close button
const emailText = document.getElementById('emailText');
const emailInput = document.getElementById('emailInput');
const passwordText = document.getElementById('passwordText');
const passwordInput = document.getElementById('passwordInput');

// New elements for switching forms
const createAccountLink = document.getElementById('createAccountLink');
const backToLoginLink = document.getElementById('backToLoginLink');
const loginForm = document.getElementById('loginForm');
const createAccountForm = document.getElementById('createAccountForm');
const modalContent = document.querySelector('.modal-content');

// Function to show input field when text is clicked
emailText.addEventListener('click', () => {
  emailText.style.display = 'none';
  emailInput.style.display = 'block';
  emailInput.focus();
});

passwordText.addEventListener('click', () => {
  passwordText.style.display = 'none';
  passwordInput.style.display = 'block';
  passwordInput.focus();
});

// Optional: Revert to text if input loses focus without any value
emailInput.addEventListener('blur', () => {
  if (emailInput.value === '') {
    emailInput.style.display = 'none';
    emailText.style.display = 'block';
  }
});

passwordInput.addEventListener('blur', () => {
  if (passwordInput.value === '') {
    passwordInput.style.display = 'none';
    passwordText.style.display = 'block';
  }
});

// Show Create Account Form
createAccountLink.addEventListener('click', (event) => {
  event.preventDefault();
  loginForm.style.display = 'none';
  createAccountForm.style.display = 'block';
  modalContent.classList.add('small');
});

// Switch Back to Login Form
backToLoginLink.addEventListener('click', (event) => {
  event.preventDefault();
  createAccountForm.style.display = 'none';
  loginForm.style.display = 'block';
  modalContent.classList.remove('small');
});

// Open the modal when the "Login" text is clicked
loginText.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});
