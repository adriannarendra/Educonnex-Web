document.addEventListener('DOMContentLoaded', function () {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function () {
            // Toggle the current section
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }

            // Hide all other sections
            headers.forEach(otherHeader => {
                if (otherHeader !== header) {
                    otherHeader.nextElementSibling.style.display = "none";
                }
            });
        });
    });
});

AOS.init();