// Define the skills data
const skills = [
  {
    title: "Programming Language",
    tools: ["C++", "Python"],
  },
  {
    title: "Front-end Development",
    tools: ["HTML", "CSS", "JavaScript", "React JS", "Redux" , "BootStrap"],
  },
  {
    title: "Database Management",
    tools: ["MySQL", "MongoDB"],
  },
];

// Define the projects data
const projects = [
  {
    title: "Project 1",
    description: "Description for project 1",
    image: "https://via.placeholder.com/300x200",
    url: "https://project1.com",
  },
  {
    title: "Project 2",
    description: "Description for project 2",
    image: "https://via.placeholder.com/300x200",
    url: "https://project2.com",
  },
  {
    title: "Project 3",
    description: "Description for project 3",
    image: "https://via.placeholder.com/300x200",
    url: "https://project3.com",
  },
];

// Define the resume data
const resumeData = `
  VIKAS PRAJAPAT

  Email: vikasprajapat010@gmail.com | +91-7878642960 | GitHub: Vikas-51 | LinkedIn: www.linkedin.com/in/vikas-prajapat

  Education
  Chandigarh University, Punjab, India 2021 - 2025
  ● Branch: Computer Science | CGPA: 7.81
  Manasarovar Priyanka Public School, Rajasthan, India 2019 - 2020
  ● (Class XII), Percentage: 76.80%
  Holy Faith Academy, Rajasthan, India 2017 - 2018
  ● (Class X), Percentage: 88.67%

  Skills
  Languages: C++ | Python | HTML | CSS | JavaScript | React JS | Redux | Bootstrap
  Database: MongoDB | SQL
  Data Analysis: NumPy | Pandas | Matplotlib | Seaborn
  Developer Tools: VS Code | GitHub | Google Collab

  Projects
  Project 1                                       July’2023
  Portfolio Website: Using HTML, CSS, JavaScript  
  ● Create a dynamic portfolio website.

  Project 2                                        Nov’2023
  Smart Home Automation using AI and IOT
  • Worked as hardware assemble and write code for working of Project
  ● Using of Blynk IOT to send data to cloud.

  Project 3                                       June’2024
  MEDICOS: Responsive Web Landing Page
  • Using HTML, CSS
  • Worked as Frontend developer

  Project 4                                       July’2024
  Expense Tracker App with Animated Login Page
  • Using HTML, CSS, JavaScript
  • Worked as Frontend Developer

  Project 5                                        Oct’2024
  Quiz Application with User Authorization
  • Using HTML, CSS, JavaScript
  • Worked as Frontend Developer
  • Create an Interface where we can upload Coding Quizzes.

  Academic and Extracurricular Achievements
  • Participating in Impulse 2k24
  • Participating and Winning IOTSHALA
  • Participate in Juspay Hiring Challenge 2024

  Certifications and Courses
  • IBM DATA ANALYST: IBM (Professional course)
  • Introduction To Internet Of Things: NPTEL
  • HTML, CSS, and JavaScript for Web Developers: The Johns Hopkins University
  • Introduction to Front-End Development: META
  • Basics of Python Programming: OPEN WEAVER
  • Crash Course on Python: GOOGLE
`;

// Get the input fields
const linkedinLink = document.getElementById('linkedin-link');
const whatsappLink = document.getElementById('whatsapp-link');
const githubLink = document.getElementById('github-link');
const downloadCvBtn = document.getElementById('download-cv-btn');


// Add event listeners to the input fields
linkedinLink.addEventListener('click', () => {
  // Open the LinkedIn link in a new tab
  window.open('https://linkedin.com/in/vikas-prajapat', '_blank');
});

whatsappLink.addEventListener('click', () => {
  // Open the WhatsApp link in a new tab
  window.open('https://wa.me/+917878642960', '_blank');
});

githubLink.addEventListener('click', () => {
  // Open the GitHub link in a new tab
  window.open('https://github.com/Vikas-51', '_blank');
});

downloadCvBtn.addEventListener('click', () => {
  // Create a new blob object
  const blob = new Blob([resumeData], { type: 'application/pdf' });

  // Create a new link object
  const link = document.createElement('a');

  // Set the link's href attribute to the blob object
  link.href = URL.createObjectURL(blob);

  // Set the link's download attribute to the file name
  link.download = 'ResumeVikasPrajapat.pdf';

  // Simulate a click on the link
  link.click();
});



// Display the skills data
const skillsContainer = document.getElementById('skills-container');
skills.forEach((skill) => {
  const skillHtml = `
    <div class="skill">
      <h3>${skill.title}</h3>
      <ul>
        ${skill.tools.map((tool) => `<li>${tool}</li>`).join('')}
      </ul>
    </div>
  `;
  skillsContainer.innerHTML += skillHtml;
});

// Display the projects data
const projectsContainer = document.getElementById('projects-container');
projects.forEach((project) => {
  const projectHtml = `
    <div class="project">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <img src="${project.image}" alt="${project.title}">
      <a href="${project.url}" target="_blank">View Project</a>
    </div>
  `;
  projectsContainer.innerHTML += projectHtml;
});
document.getElementById('menu-icon').addEventListener('click', function() {
  const navbar = document.querySelector('.Navbar');
  navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
});

document.querySelector('.contact form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message sent successfully!');
});

const scrollToTopButton = document.querySelector('.footer-iconTop a');
scrollToTopButton.addEventListener('click', function(event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Import EmailJS library
const emailjs = require('emailjs-com');

// Set up EmailJS credentials
const emailServiceId = 'your-email-service-id';
const emailTemplateId = 'your-email-template-id';
const emailUserId = 'your-email-user-id';

// Set up Twilio credentials
const twilioAccountSid = 'your-twilio-account-sid';
const twilioAuthToken = 'your-twilio-auth-token';
const twilioPhoneNumber = 'your-twilio-phone-number';

// Get the form elements
const form = document.getElementById('contact-form');
const fullNameInput = document.getElementById('full-name');
const emailAddressInput = document.getElementById('email-address');
const mobileNumberInput = document.getElementById('mobile-number');
const emailSubjectInput = document.getElementById('email-subject');
const messageInput = document.getElementById('message');

// Add event listener to the form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the form data
  const fullName = fullNameInput.value;
  const emailAddress = emailAddressInput.value;
  const mobileNumber = mobileNumberInput.value;
  const emailSubject = emailSubjectInput.value;
  const message = messageInput.value;

  // Send the email using EmailJS
  const emailTemplateParams = {
    from_name: fullName,
    to_name: 'Your Name',
    email_subject: emailSubject,
    message_html: message,
  };

  emailjs.send(
    emailServiceId,
    emailTemplateId,
    emailTemplateParams,
    emailUserId
  ).then(
    (response) => {
      console.log('Email sent successfully:', response.status, response.text);
    },
    (err) => {
      console.log('Email failed to send:', err);
    }
  );

  // Send the SMS using Twilio
  const twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken);
  const messageBody = `New message from ${fullName}: ${message}`;

  twilioClient.messages
    .create({
      from: twilioPhoneNumber,
      to: mobileNumber,
      body: messageBody,
    })
    .then((message) => {
      console.log('SMS sent successfully:', message.sid);
    })
    .done();

  // Clear the form fields
  fullNameInput.value = '';
  emailAddressInput.value = '';
  mobileNumberInput.value = '';
  emailSubjectInput.value = '';
  messageInput.value = '';
});