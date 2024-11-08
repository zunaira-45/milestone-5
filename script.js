// Handle form submission and generate resume content
var form = document.getElementById('resume-form');
if (form) {
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        // Get the form values
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Generate the resume content and display it in the editable div
        var resumeContent = "\n            <h2>".concat(name, "</h2>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        ");
        var resumeDisplay = document.getElementById('resume-display');
        if (resumeDisplay) {
            resumeDisplay.innerHTML = resumeContent;
        }
    });
}
// Handle PDF download functionality
var downloadButton = document.getElementById('download-pdf');
if (downloadButton) {
    downloadButton.addEventListener('click', function () {
        var jsPDF = window.jspdf.jsPDF;
        var doc = new jsPDF();
        // Get the text content from the resume display div (without HTML tags)
        var resumeDisplay = document.getElementById('resume-display');
        if (resumeDisplay) {
            var resumeText = resumeDisplay.innerText || resumeDisplay.textContent || '';
            // Add content to the PDF
            doc.text(resumeText, 10, 10); // Position text at (10, 10)
            // Save the PDF file
            doc.save('resume.pdf');
        }
    });
}
// Generate and display a shareable link
var generateLinkButton = document.getElementById('generate-link');
if (generateLinkButton) {
    generateLinkButton.addEventListener('click', function () {
        // Get the values from the form
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        // Encode the resume content for the link (to make it shareable)
        var resumeContent = "\n            Name: ".concat(name, "\n\n            Email: ").concat(email, "\n\n            Phone: ").concat(phone, "\n\n            Education: ").concat(education, "\n\n            Experience: ").concat(experience, "\n\n            Skills: ").concat(skills, "\n        ");
        // Encode the resume content and create the link
        var encodedResume = encodeURIComponent(resumeContent);
        var link = "".concat(window.location.origin, "?resume=").concat(encodedResume);
        // Show the generated shareable link in the input field
        var linkOutput = document.getElementById('link-output');
        var shareableLink = document.getElementById('shareable-link');
        if (linkOutput && shareableLink) {
            linkOutput.value = link;
            shareableLink.style.display = 'block';
        }
    });
}
