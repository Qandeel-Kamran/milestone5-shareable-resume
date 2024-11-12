const form = document.getElementById("resume-form") as HTMLFormElement;
const resumedisplay = document.getElementById(
  "resume-display"
) as HTMLDivElement;

const shareableLinkContainer = document.getElementById("Shareable-link-container") as HTMLElement
  
const shareableLinkElement = document.getElementById('Shareable-link') as
  HTMLAnchorElement;

const downloadPdfButton = document.getElementById('download-pdf') as
  HTMLButtonElement;


form.addEventListener("submit", (event: Event) => {
  event.preventDefault();

  const username = (document.getElementById("username") as HTMLInputElement).value;

const name = (document.getElementById("name") as HTMLInputElement).value;
const fathername = (document.getElementById("father-name") as HTMLInputElement).value;
const email = (document.getElementById("email") as HTMLInputElement).value;
const phonenumber = (document.getElementById("phone number") as HTMLInputElement).value;
const education = (document.getElementById("education") as HTMLInputElement).value;
const experience = (document.getElementById("experience") as HTMLInputElement).value;
const skills = (document.getElementById("skills") as HTMLInputElement).value;

const resumeData = {
  name,
  fathername,
  email,
  phonenumber,
  education,
  experience,
  skills
  };
  localStorage.setItem(username, JSON.stringify(resumeData));

  const dynamicResume = `
    <h2><b>Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true" >${name}</span></p>
    <p><b>Father Name:</b><span contenteditable="true" >${fathername}</span></p>
    <p><b>Email:</b><span contenteditable="true" >${email}</span></p>
    <p><b>Phone Number:</b><span contenteditable="true" >${phonenumber}</span></p>

    <h3>Education</h3>
    <p contenteditable="true" >${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true" >${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true" >${skills}</p>
    `;

   // Display the generated resume
   resumedisplay.innerHTML = dynamicResume;

// Generate a shareable URL with the username only
const shareableURL = `${window.location.origin}?username=${encodeURIComponent(username)};`



// Display the shareable link
shareableLinkContainer.style.display = 'block';
shareableLinkElement.href = shareableURL;
shareableLinkElement.textContent = shareableURL;
});

// Handle PDF download
downloadPdfButton.addEventListener('click', () => {
window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');
if (username) {

// Autofill form if data is found in localStorage
const savedResumeData = localStorage.getItem(username);
if (savedResumeData) {
const resumeData = JSON.parse(savedResumeData);
(document.getElementById('username') as HTMLInputElement).value =
username;
(document.getElementById('name') as HTMLInputElement).value =
resumeData.name;
(document.getElementById('email') as HTMLInputElement).value =
resumeData.email;
(document.getElementById('phone') as HTMLInputElement).value =
resumeData.phone;
(document.getElementById('education') as HTMLTextAreaElement).value =
resumeData.education;
(document.getElementById('experience') as HTMLTextAreaElement).value
= resumeData.experience;
(document.getElementById('skills') as HTMLTextAreaElement).value =
resumeData.skills;
}
}
});
