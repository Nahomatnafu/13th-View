// Select elements
const loginText = document.getElementById('loginText');
const loginModal = document.getElementById('loginModal');
const closeModalBtn = document.querySelector('.close');
// Select elements
const emailText = document.getElementById('emailText');
const emailInput = document.getElementById('emailInput');
const passwordText = document.getElementById('passwordText');
const passwordInput = document.getElementById('passwordInput');

// Function to show input field when text is clicked
emailText.addEventListener('click', () => {
  emailText.style.display = 'none';
  emailInput.style.display = 'block';
  emailInput.focus(); // Focus the input field
});

passwordText.addEventListener('click', () => {
  passwordText.style.display = 'none';
  passwordInput.style.display = 'block';
  passwordInput.focus(); // Focus the input field
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






