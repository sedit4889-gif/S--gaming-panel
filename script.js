// ==========================================
// NO.Sメ — GAMING PANEL SYSTEM
// ==========================================


// ================================
// LOGIN CREDENTIALS
// ================================

const CORRECT_USERNAME = "SAHIL";
const CORRECT_PASSWORD = "123456";


// ================================
// PASSWORD SHOW / HIDE
// ================================

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


// ================================
// LOGIN
// ================================

function login() {

    const usernameInput =
        document.getElementById("username");

    const passwordInput =
        document.getElementById("password");

    const message =
        document.getElementById("loginMessage");

    if (!usernameInput || !passwordInput) return;


    const username =
        usernameInput.value.trim();

    const password =
        passwordInput.value;


    if (!username || !password) {

        if (message) {

            message.textContent =
                "⚠ ENTER USERNAME & PASSWORD";

            message.style.color =
                "#ffb84d";

        }

        return;
    }


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


        sessionStorage.setItem(
            "nosLoggedIn",
            "true"
        );

        sessionStorage.setItem(
            "nosUsername",
            username
        );


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


        const card =
            document.querySelector(".login-card");

        if (card) {

            card.animate(
                [
                    { transform: "translateX(0)" },
                    { transform: "translateX(-7px)" },
                    { transform: "translateX(7px)" },
                    { transform: "translateX(-5px)" },
                    { transform: "translateX(5px)" },
                    { transform: "translateX(0)" }
                ],
                {
                    duration: 350
                }
            );

        }

    }

}


// ================================
// SENSITIVITY
// ================================

function showSensitivity() {

    const panel =
        document.getElementById("settingsPanel");

    if (!panel) return;

    panel.classList.add("active");

}


// ================================
// CLOSE
// ================================

function closeSettings() {

    const panel =
        document.getElementById("settingsPanel");

    if (panel) {

        panel.classList.remove("active");

    }

}


// ================================
// SLIDER
// ================================

function updateSlider(type) {

    const slider =
        document.getElementById(
            type + "Slider"
        );

    const value =
        document.getElementById(
            type + "Value"
        );

    if (slider && value) {

        value.textContent =
            slider.value;

    }

}


// ================================
// SAVE
// ================================

function saveSettings() {

    const ids = [
        "general",
        "redDot",
        "scope2",
        "scope4",
        "sniper"
    ];

    const settings = {};

    ids.forEach(function(type) {

        const slider =
            document.getElementById(
                type + "Slider"
            );

        if (slider) {

            settings[type] =
                slider.value;

        }

    });


    localStorage.setItem(
        "nosSettings",
        JSON.stringify(settings)
    );


    const status =
        document.getElementById("saveStatus");

    if (status) {

        status.textContent =
            "✓ SETTINGS SAVED";

        status.classList.add("success");

        setTimeout(function() {

            status.textContent =
                "SETTINGS READY";

            status.classList.remove("success");

        }, 2500);

    }

}


// ================================
// RESET
// ================================

function resetSettings() {

    const defaults = {

        general: 95,
        redDot: 90,
        scope2: 85,
        scope4: 80,
        sniper: 70

    };


    Object.keys(defaults).forEach(function(type) {

        const slider =
            document.getElementById(
                type + "Slider"
            );

        const value =
            document.getElementById(
                type + "Value"
            );

        if (slider) {

            slider.value =
                defaults[type];

        }

        if (value) {

            value.textContent =
                defaults[type];

        }

    });


    localStorage.removeItem(
        "nosSettings"
    );


    const status =
        document.getElementById("saveStatus");

    if (status) {

        status.textContent =
            "↻ SETTINGS RESET";

        status.classList.add("success");

    }

}


// ================================
// LOAD SETTINGS
// ================================

function loadSettings() {

    const saved =
        localStorage.getItem("nosSettings");

    if (!saved) return;


    try {

        const settings =
            JSON.parse(saved);


        Object.keys(settings).forEach(function(type) {

            const slider =
                document.getElementById(
                    type + "Slider"
                );

            const value =
                document.getElementById(
                    type + "Value"
                );

            if (slider) {

                slider.value =
                    settings[type];

            }

            if (value) {

                value.textContent =
                    settings[type];

            }

        });

    } catch (error) {

        localStorage.removeItem(
            "nosSettings"
        );

    }

}


// ================================
// HEADSHOT PRESET
// ================================

function showHeadshot() {

    alert(
        "🔥 HEADSHOT PRESET\n\n" +
        "GENERAL     95\n" +
        "RED DOT     90\n" +
        "2× SCOPE    85\n" +
        "4× SCOPE    80\n" +
        "SNIPER      70\n\n" +
        "Starting-point values only."
    );

}


// ================================
// AIM GUIDE
// ================================

function showNoRecoil() {

    alert(
        "🎮 AIM CONTROL GUIDE\n\n" +
        "• Practice controlled drag movement\n" +
        "• Keep sensitivity comfortable\n" +
        "• Test settings in training mode\n" +
        "• Adjust gradually for your device\n\n" +
        "NO GAME FILES ARE MODIFIED."
    );

}


// ================================
// PERFORMANCE
// ================================

function showAntiLag() {

    alert(
        "⚡ PERFORMANCE GUIDE\n\n" +
        "✓ Close unnecessary apps\n" +
        "✓ Keep storage space available\n" +
        "✓ Use a stable connection\n" +
        "✓ Avoid overheating\n" +
        "✓ Keep the game updated\n\n" +
        "SAFE DEVICE OPTIMIZATION."
    );

}


// ================================
// DPI
// ================================

function showDPI() {

    const dpi =
        prompt(
            "📱 Enter your current DPI:"
        );

    if (!dpi) return;


    const number =
        Number(dpi);


    if (
        Number.isNaN(number) ||
        number <= 0
    ) {

        alert(
            "Please enter a valid DPI number."
        );

        return;

    }


    alert(
        "📱 DPI INFORMATION\n\n" +
        "Current DPI: " +
        number +
        "\n\n" +
        "Use a comfortable setting " +
        "appropriate for your device."
    );

}


// ================================
// GAME LAUNCHER
// ================================

function openFreeFire() {

    window.location.href =
        "freefiremax://";


    setTimeout(function() {

        alert(
            "If Free Fire MAX did not open, " +
            "launch it normally from your device."
        );

    }, 1800);

}


// ================================
// DASHBOARD USERNAME
// ================================

function loadUsername() {

    const username =
        sessionStorage.getItem(
            "nosUsername"
        );

    const player =
        document.getElementById(
            "playerName"
        );

    if (
        username &&
        player
    ) {

        player.textContent =
            username;

    }

}


// ================================
// PAGE START
// ================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        loadSettings();

        loadUsername();

    }
);


// ================================
// ENTER TO LOGIN
// ================================

document.addEventListener(
    "keydown",
    function(event) {

        if (
            event.key === "Enter" &&
            document.getElementById("username") &&
            document.getElementById("password")
        ) {

            login();

        }

    }
);
