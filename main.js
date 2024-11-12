var form = document.getElementById("resume-form");
var resumedisplay = document.getElementById("resume-display");
var shareableLinkContainer = document.getElementById("Shareable-link-container");
var shareableLinkElement = document.getElementById('Shareable-link');
var downloadPdfButton = document.getElementById('download-pdf');
form.addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var fathername = document.getElementById("father-name").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phone number").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    var resumeData = {
        name: name,
        fathername: fathername,
        email: email,
        phonenumber: phonenumber,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    var dynamicResume = "\n    <h2><b>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contenteditable=\"true\" >".concat(name, "</span></p>\n    <p><b>Father Name:</b><span contenteditable=\"true\" >").concat(fathername, "</span></p>\n    <p><b>Email:</b><span contenteditable=\"true\" >").concat(email, "</span></p>\n    <p><b>Phone Number:</b><span contenteditable=\"true\" >").concat(phonenumber, "</span></p>\n\n    <h3>Education</h3>\n    <p contenteditable=\"true\" >").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contenteditable=\"true\" >").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contenteditable=\"true\" >").concat(skills, "</p>\n    ");
    // Display the generated resume
    resumedisplay.innerHTML = dynamicResume;
    // Generate a shareable URL with the username only
    var shareableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username), ";");
    // Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = shareableURL;
    shareableLinkElement.textContent = shareableURL;
});
// Handle PDF download
downloadPdfButton.addEventListener('click', function () {
    window.print(); // This will open the print dialog and allow the user to save as PDF
});
// Prefill the form based on the username in the URL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        // Autofill form if data is found in localStorage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value =
                username;
            document.getElementById('name').value =
                resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phone').value =
                resumeData.phone;
            document.getElementById('education').value =
                resumeData.education;
            document.getElementById('experience').value
                = resumeData.experience;
            document.getElementById('skills').value =
                resumeData.skills;
        }
    }
});
