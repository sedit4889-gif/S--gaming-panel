// ==========================================
// NO.Sメ — AUTH SYSTEM
// ==========================================

// CHANGE THESE TWO VALUES TO YOUR OWN LOGIN
const CORRECT_USERNAME = "SAHIL";
const CORRECT_PASSWORD = "123456";


// ==========================================
// PASSWORD SHOW / HIDE
// ==========================================

function togglePassword() {

    const password =
        document.getElementById("password");

    const button =
        document.querySelector(".password-toggle");

    if (!password) return;

    if (password.type === "password") {

        password.type = "text";

        if (button) {
            button.textContent = "🙈";
        }

    } else {

        password.type = "password";

        if (button) {
            button.textContent = "👁";
        }

    }
}


// ==========================================
// LOGIN
// ==========================================

function login() {

    const usernameInput =
        document.getElementById("username");

    const passwordInput =
        document.getElementById("password");

    const message =
        document.getElementById("loginMessage");


    if (!usernameInput || !passwordInput) {
        return;
    }


    const username =
        usernameInput.value.trim();

    const password =
        passwordInput.value;


    // EMPTY FIELDS

    if (!username || !password) {

        if (message) {

            message.textContent =
                "⚠ ENTER USERNAME & PASSWORD";

            message.style.color =
                "#ffb84d";

        }

        return;
    }


    // CHECK LOGIN

    if (
        username === CORRECT_USERNAME &&
        password === CORRECT_PASSWORD
    ) {

        if (message) {

            message.textContent =
                "✓ ACCESS GRANTED";

            message.style.color =
                "#45ff9a";

        }


        // Save session

        sessionStorage.setItem(
            "nosLoggedIn",
            "true"
        );

        sessionStorage.setItem(
            "nosUsername",
            username
        );


        // Small delay for animation

        setTimeout(function() {

            window.location.href =
                "dashboard.html";

        }, 700);


    } else {

        if (message) {

            message.textContent =
                "✕ ACCESS DENIED";

            message.style.color =
                "#ff5c7a";

        }


        // Small shake animation

        const card =
            document.querySelector(".login-card");

        if (card) {

            card.animate(
                [
                    {
                        transform: "translateX(0)"
                    },
                    {
                        transform: "translateX(-7px)"
                    },
                    {
                        transform: "translateX(7px)"
                    },
                    {
                        transform: "translateX(-5px)"
                    },
                    {
                        transform: "translateX(5px)"
                    },
                    {
                        transform: "translateX(0)"
                    }
                ],
                {
                    duration: 350
                }
            );

        }

    }

}


// ==========================================
// ENTER KEY LOGIN
// ==========================================

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            const loginCard =
                document.querySelector(".login-card");

            if (loginCard) {

                login();

            }

        }

    }
);
