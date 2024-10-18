

    const submit = document.querySelector(".submit input");

    // USERNAME VALIDATION MSG
    const userError = document.querySelector(".user .error");
    const userSuccess = document.querySelector(".user .success");
    
    // EMAIL VALIDATION MSG
    const emailError = document.querySelector(".mail .error");
    const emailSuccess = document.querySelector(".mail .success");
    
    // PASSWORD VALIDATION MSG
    const passError = document.querySelector(".password .error");
    const passSuccess = document.querySelector(".password .success");
    
    // PASSWORD CONFIRMATION VALIDATION MSG
    const passConfError = document.querySelector(".passconf .error");
    const passConfSuccess = document.querySelector(".passconf .success");
    
    submit.addEventListener("click", (event) => {
        event.preventDefault();
    
        //VALUES
        let username = document.querySelector(".user input").value;
        let email = document.querySelector(".mail input").value;
        let password = document.querySelector(".password input").value;
        let passconf = document.querySelector(".passconf input").value;
        
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
    
        // PASSWORD VALIDATION
        if (password.length < 6) {
            passError.style.display = "block";
            passSuccess.style.display = "none";
            isValid = false
        } else {
            passSuccess.style.display = "block";
            passError.style.display = "none";
        }
    
        // PASSWORD CONFIRMATION VALIDATION
        if (password !== passconf) {
            passConfError.style.display = "block";
            passConfSuccess.style.display = "none";
            isValid = false
        } else if (passconf === "") {
            passConfError.style.display = "none";
            passConfSuccess.style.display = "none";
            isValid = false
        }
         else {
            passConfSuccess.style.display = "block";
            passConfError.style.display = "none";
        }

        // LOGS DATA IF VALID

        if (isValid) {
            console.log(username);
            console.log(email);
            console.log(password);
            console.log(passconf);
            
            
            
            
        }
    });

  
    