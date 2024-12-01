document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission
  
    const form = event.target;
    const formData = new FormData(form);
  
    // Show loading or processing message
    const statusMessage = document.getElementById("form-status");
    statusMessage.textContent = "Sending your message...";
  
    try {
      const response = await fetch("https://formspree.io/f/xyzynoww", {
        method: "POST",
        headers: {
          "Accept": "application/json",
        },
        body: formData,
      });
  
      if (response.ok) {
        statusMessage.textContent = "Thank you! Your message has been sent.";
        form.reset(); // Clear the form
      } else {
        statusMessage.textContent =
          "Oops! There was a problem sending your message. Please try again.";
      }
    } catch (error) {
      statusMessage.textContent = "Error: Unable to send your message.";
      console.error("Form submission error:", error);
    }
  });
  