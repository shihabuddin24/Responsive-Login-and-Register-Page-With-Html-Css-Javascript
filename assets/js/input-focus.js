// Function to handle label positioning
document.querySelectorAll('.input-container input').forEach(input => {
    // On focus or input event
    input.addEventListener('input', () => {
      const label = input.nextElementSibling;
      if (input.value.trim() !== '') {
        label.classList.add('active');
      } else {
        label.classList.remove('active');
      }
    });
  });