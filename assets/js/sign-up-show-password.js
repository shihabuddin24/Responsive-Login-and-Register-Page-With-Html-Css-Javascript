function togglePassword(fieldId, toggleButton) {
    const passwordInput = document.getElementById(fieldId);
    
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleButton.textContent = "Hide"; // Button text set to "Hide"
    } else {
      passwordInput.type = "password";
      toggleButton.textContent = "Show"; // Button text set to "Show"
    }
  }
  