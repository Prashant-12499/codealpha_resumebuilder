document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var experience = document.getElementById('experience').value;
    var education = document.getElementById('education').value;
  
    // Generate resume content
    var resumeContent = `
      <h2>Resume</h2>
      <h3>${name}</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h4>Experience</h4>
      <p>${experience}</p>
      <h4>Education</h4>
      <p>${education}</p>
    `;
  
    // Display generated resume
    document.getElementById('resumeContainer').innerHTML = resumeContent;
  });
  