
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.gallery-section');

    sections.forEach((section) => {
        const images = section.querySelectorAll('img');
        let currentIndex = 0;

        // Initialize: Hide all images except the first one
        images.forEach((img, index) => {
            if (index !== currentIndex) {
                img.classList.add('hidden');
            }
        });

        // Set interval for image switching
        setInterval(() => {
            // Hide the current image
            images[currentIndex].classList.add('hidden');

            // Move to the next image, wrapping around using modulo
            currentIndex = (currentIndex + 1) % images.length;

            // Show the next image
            images[currentIndex].classList.remove('hidden');

            // Optional: Debugging output
            console.log(`Section: ${section.id}, Showing image index: ${currentIndex}`);
        }, 3000); // Change image every 3 seconds
    });
});
