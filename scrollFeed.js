/* 
    ITEC 362, Website Project

   This function handles the functionality of a slider to navigate between different sections of featured content.
*/

document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the class "featured-content"
    const sections = document.querySelectorAll(".featured-content");
    // Initialize the index variable to keep track of the current section being displayed
    let index = 0;

    // Function to display the current section and hide the others
    function showSection() {
        sections.forEach((section, i) => {
            // Display the section if its index matches the current index, otherwise hide it
            section.style.display = (i === index) ? "block" : "none";
        });
    }

    // Function to move to the next section
    function moveToNextSection() {
        // Increment the index if it's not already at the last section, otherwise loop back to the first section
        index = (index < sections.length - 1) ? index + 1 : 0;
        // Show the new current section
        showSection();
    }

    // Function to move to the previous section
    function moveToPrevSection() {
        // Decrement the index if it's not already at the first section, otherwise move to the last section
        index = (index > 0) ? index - 1 : sections.length - 1;
        // Show the new current section
        showSection();
    }

    // Initially display the first section
    showSection();

    // Add event listeners to the next and previous buttons to move between sections
    document.getElementById("nextBtn").addEventListener("click", moveToNextSection);
    document.getElementById("prevBtn").addEventListener("click", moveToPrevSection);
});
