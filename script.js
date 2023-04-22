const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

function validatePasswords() {
  if (passwordInput.value === confirmPasswordInput.value) {
    passwordInput.classList.add('valid-password');
    confirmPasswordInput.classList.add('valid-password');
  } else {
    passwordInput.classList.remove('valid-password');
    confirmPasswordInput.classList.remove('valid-password');
  }
}

passwordInput.addEventListener('input', validatePasswords);
confirmPasswordInput.addEventListener('input', validatePasswords);