// Get DOM elements
const modal = document.getElementById("regModal");
const btn = document.querySelector(".register-btn");
const closeSpan = document.querySelector(".close-btn");
const form = document.getElementById("registrationForm");

// Open Modal
btn.onclick = () => modal.style.display = "block";

// Close Modal
closeSpan.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

// Form Validation
form.onsubmit = (e) => {
    e.preventDefault();
    
    const emailInput = document.getElementById("userEmail").value;
    const emailError = document.getElementById("emailError");
    
    // Regex to check if email ends exactly with @vitapstudent.ac.in
    const emailPattern = /^[a-zA-Z0-9._%+-]+@vitapstudent\.ac\.in$/;

    if (!emailPattern.test(emailInput)) {
        emailError.style.display = "block";
        return false;
    } else {
        emailError.style.display = "none";
        alert("Registration Successful! See you at Einstein Hall.");
        modal.style.display = "none";
        form.reset();
    }
};