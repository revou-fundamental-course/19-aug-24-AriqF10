document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;

    // Get the current timezone
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Create output text
    const outputText = `
        <strong>Submitted Information:</strong><br>
        Name: ${name}<br>
        Date of Birth: ${dob}<br>
        Gender: ${gender}<br>
        Message: ${message}<br>
        Timezone: ${timezone}
    `;

    // Display the result in the output div
    document.getElementById('output').innerHTML = outputText;
});
