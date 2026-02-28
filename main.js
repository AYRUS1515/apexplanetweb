// ===== Smooth Scroll to Projects =====
document.addEventListener("DOMContentLoaded", function () {

    const viewBtn = document.getElementById("viewProjects");
    if (viewBtn) {
        viewBtn.addEventListener("click", function () {
            document.getElementById("projects").scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // ===== Contact Form Submission =====
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("✨ Message sent successfully!");
            contactForm.reset();
        });
    }

});