
        // Function to hide the initial content and show the selected content
function showContent(contentId) {
    // Prevent refresh to top
    event.preventDefault();

    // Hide the initial content
    var initialContent = document.getElementById('initialContent');
    if (initialContent) {
    initialContent.style.display = 'none';
    }

    // Hide all content sections
    var contents = document.querySelectorAll('.hidden');
    contents.forEach(function(content) {
    content.style.display = 'none';
    });

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
    selectedContent.style.display = 'block';
    }
}
