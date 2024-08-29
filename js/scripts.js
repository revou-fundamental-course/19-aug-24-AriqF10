document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;


    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
    const outputText = `
        <strong>Submitted Information:</strong><br>
        Name: ${name}<br>
        Date of Birth: ${dob}<br>
        Gender: ${gender}<br>
        Message: ${message}<br>
        Timezone: ${timezone}
    `;

    document.getElementById('output').innerHTML = outputText;
});
