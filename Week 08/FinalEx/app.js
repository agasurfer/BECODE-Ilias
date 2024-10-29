// VARIABLES
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const cross = document.querySelector(".closebtn");
const contact = document.querySelector(".contact-btn");
const modalForm = document.querySelector(".modal-form");
const crossForm = document.querySelector(".close");


// MAKES HAMBURGER OPEN MENU
hamburger.addEventListener("click", () => {
   
    navbar.style.width = "250px"
    hamburger.style.display = "none"
});

// MAKES THE CROSS CLOSE THE MENU
cross.addEventListener('click',() => {
    navbar.style.width = "0px"
    hamburger.style.display = "block"
    
});

//MAKES THE BUTTON OPEN THE FORM
contact.addEventListener('click', () => {
    modalForm.style.display = "flex"
});

//MAKES THE CROSS CLOSE THE FORM

crossForm.addEventListener('click', () => {
    modalForm.style.display = "none"
})


/////////////////////    FORM HANDLING ////////////////////////

 const submit = document.querySelector(".submit input");
 

    // USERNAME VALIDATION MSG
    const userError = document.querySelector(".user .error");
    const userSuccess = document.querySelector(".user .success");
    
    // EMAIL VALIDATION MSG
    const emailError = document.querySelector(".mail .error");
    const emailSuccess = document.querySelector(".mail .success");
    
    // COMPANY VALIDATION MSG
    const companyError = document.querySelector(".company .error");
    const companySuccess = document.querySelector(".company .success");
    
   
    
    submit.addEventListener("click", (event) => {
        event.preventDefault();
    
        //VALUES
        let username = document.querySelector(".user input").value;
        let email = document.querySelector(".mail input").value;
        let company = document.querySelector(".company input").value;
        
        //TRACK VALIDITY
        let isValid = true 
    
        // USERNAME VALIDATION
        if (username.length < 5 || username.length > 10 || username !== username.toLowerCase()) {
            userError.style.display = "block";
            userSuccess.style.display = "none";
            isValid = false
        } else {
            userSuccess.style.display = "block";
            userError.style.display = "none";
        }
    
        // EMAIL VALIDATION
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (!email.match(emailRegex)) {
            emailError.style.display = "block";
            emailSuccess.style.display = "none";
            isValid = false
        } else {
            emailSuccess.style.display = "block";
            emailError.style.display = "none";
        }
    
    
        

        // LOGS DATA IF VALID

        if (isValid) {
            console.log(username);
            console.log(email);
            console.log(company);

            //FUNCTION THAT CLOSES THE FORM AFTER 1 SECONDS IF VALIDATED

            setTimeout(function() {
    modalForm.style.display = "none";
    alert("Thanks for reaching out. We will get back to you ASAP")
    location.reload();
    
}, 1000);


            
            
            
            
            
        }
    });