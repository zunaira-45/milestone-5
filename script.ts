// Handle form submission and generate resume content
const form = document.getElementById('resume-form') as HTMLFormElement;
if (form) {
    form.addEventListener('submit', function (event: Event) {
        event.preventDefault(); // Prevent form submission

        // Get the form values
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Generate the resume content and display it in the editable div
        const resumeContent = `
            <h2>${name}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
        `;
        const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
        if (resumeDisplay) {
            resumeDisplay.innerHTML = resumeContent;
        }
    });
}

// Handle PDF download functionality
const downloadButton = document.getElementById('download-pdf') as HTMLButtonElement;
if (downloadButton) {
    downloadButton.addEventListener('click', function () {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Get the text content from the resume display div (without HTML tags)
        const resumeDisplay = document.getElementById('resume-display') as HTMLElement;
        if (resumeDisplay) {
            const resumeText = resumeDisplay.innerText || resumeDisplay.textContent || '';

            // Add content to the PDF
            doc.text(resumeText, 10, 10); // Position text at (10, 10)

            // Save the PDF file
            doc.save('resume.pdf');
        }
    });
}

// Generate and display a shareable link
const generateLinkButton = document.getElementById('generate-link') as HTMLButtonElement;
if (generateLinkButton) {
    generateLinkButton.addEventListener('click', function () {
        // Get the values from the form
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLTextAreaElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

        // Encode the resume content for the link (to make it shareable)
        const resumeContent = `
            Name: ${name}\n
            Email: ${email}\n
            Phone: ${phone}\n
            Education: ${education}\n
            Experience: ${experience}\n
            Skills: ${skills}
        `;

        // Encode the resume content and create the link
        const encodedResume = encodeURIComponent(resumeContent);
        const link = `${window.location.origin}?resume=${encodedResume}`;

        // Show the generated shareable link in the input field
        const linkOutput = document.getElementById('link-output') as HTMLInputElement;
        const shareableLink = document.getElementById('shareable-link') as HTMLElement;
        if (linkOutput && shareableLink) {
            linkOutput.value = link;
            shareableLink.style.display = 'block';
        }
    });
}
