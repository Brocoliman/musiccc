document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');

    // Add event listener for focus on input
    searchInput.addEventListener('focus', function() {
        // Change background and text color on focus
        searchInput.style.backgroundColor = 'white';
        searchInput.style.color = '#343a40'; // Change text color to dark
    });

    // Add event listener for blur (when focus is lost)
    searchInput.addEventListener('blur', function() {
        // Revert back to original styles on blur
        searchInput.style.backgroundColor = '#343a40';
        searchInput.style.color = 'white';
    });
});
