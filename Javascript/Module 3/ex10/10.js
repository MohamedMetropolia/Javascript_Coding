source.addEventListener('submit', function(event) {
  event.preventDefault();
  const firstName = document.querySelector('input[name="first_name"]').value;
  const lastname = document.querySelector('input[name="last_name"]').value;
  target.innerHTML = `Your name is ${firstName} ${lastname}`;
});