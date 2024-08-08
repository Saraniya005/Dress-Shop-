// Validate the form fields
function validateForm() {
  // Get form elements
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const mobile = document.querySelector('input[name="mobile"]');
  const subject = document.querySelector('input[name="subject"]');
  const message = document.querySelector('textarea[name="message"]');

  // Simple check for empty fields
  if (name.value.trim() === '' || email.value.trim() === '' || mobile.value.trim() === '' || subject.value.trim() === '' || message.value.trim() === '') {
      alert('Please fill out all required fields.');
      return false;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
      alert('Please enter a valid email address.');
      return false;
  }

  // Validate mobile number format
  const mobileRegex = /^[0-9]{10}$/;
  if (!mobileRegex.test(mobile.value.trim())) {
      alert('Please enter a valid 10-digit mobile number.');
      return false;
  }

  // If all validations pass, return true
  return true;
}

document.addEventListener('DOMContentLoaded', function () {
  // Select the form
  const form = document.querySelector('.form form');

  // Add an event listener for the form submission
  form.addEventListener('submit', function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Validate the form fields
      if (validateForm()) {
          // If validation passes, you can submit the form
          form.submit();
      }
  });
});
