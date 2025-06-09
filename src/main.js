document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");
    const mainTitle = document.getElementById("main-title");

    // Title messages for each section
    const titleMessages = {
        home: "Hello!<br><br>I'm Antonio Santiago.<br>I'm a Web Developer.",
        about: "About Me<br><br>Passionate Developer<br>& Designer.",
        contact: "Let's Connect<br>Ready to Start Your Project?"
    };

    function showSection(targetSection) {
        sections.forEach(section => {
            section.classList.remove("active");
        });

        const targetElement = document.getElementById(targetSection + "-section");
        if (targetElement) {
            targetElement.classList.add("active");
        }

        // Update navigation active state
        navLinks.forEach(link => {
            link.classList.remove("active");
        });

        // Set active nav link
        const activeLink = document.querySelector(`[data-section="${targetSection}"]`);
        if (activeLink) {
            activeLink.classList.add("active");
        }

        // Update main title
        if (titleMessages[targetSection]) {
            mainTitle.innerHTML = titleMessages[targetSection];
        }
    }

    // Add click event listeners to nav links
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const section = this.getAttribute("data-section");
            showSection(section);
        });
    });

    // Form submission
    const form = document.getElementById("form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const formData = new FormData(form);
        const interests = [];
        const checkboxes = document.querySelectorAll('input[name="interests"]:checked');
        checkboxes.forEach(checkbox => {
            interests.push(checkbox.value);
        });

        // Simple form validation and feedback
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("further-info");

        if (name && email) {
            alert(`Thank you ${name}! Your message has been received. I"ll get back to you at ${email} soon.`);
            form.reset();
        } else {
            alert("Please fill in all required fields.");
        }
    });

    // Smooth animations for new section
    setTimeout(() => {
        document.body.style.opacity = "1";
    }, 100);
});


