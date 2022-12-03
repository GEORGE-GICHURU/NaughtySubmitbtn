let usernameRef = document.getElementById("username");
let passwordRef = document.getElementById("password");
let submitBtn = document.getElementById("submit");
let messageRef = document.getElementById("message-ref");


let isUsernameValid = () => {
    // Username should  contain more than 3 characters. Should begin with
    // alphabetic character  Can contain numbers

    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,32}/gi;
    return usernameRegex.test(usernameRef.value);
};

let isPasswordValid = () => {
    // Password should be atleast 8 characters . Should contain atleast 1 Number, 1 speacial Symbol, 1 lower case and 1 uppercase

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return passwordRegex.test(passwordRef.value);
};

usernameRef.addEventListener("input", () => {
    if (!isUsernameValid()) {
        messageRef.style.visibility = "hidden";
        usernameRef.style.cssText = "border-color: #34bd34; background-color: #ffc2c2";

    } else {
        usernameRef.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";
    }
});

passwordRef.addEventListener("input", () => {
    if (!isPasswordValid()) {
        messageRef.style.visibility = "hidden";
        passwordRef.style.cssText = "border-color: #fe2e2e; background-color: #ffc2c2";

    } else {
        passwordRef.style.cssText = "border-color: #34bd34; background-color: #c2ffc2";

    }
});


submitBtn.addEventListener("mouseover", () => {
    // if either password or username is invalid then do this...

    if (!isUsernameValid() || !isPasswordValid()) {
        // get the current submit btn

        let containerRect = document.querySelector(".container").getBoundingClientRect();
        let submitRect = submitBtn.getBoundingClientRect();
        let offset = submitRect.left - containerRect.left;
        console.log(offset);

        // if the btn is on the left side... move it to the right side

        if (offset <= 100) {
            submitBtn.style.transform = "translate(16.25em)";

        }

        // vice versa

        else {
            submitBtn.style.transform = "translate(0)";

        }

    }
});

submitBtn.addEventListener("click", () => {
    messageRef.style.visibility = "visible";
});