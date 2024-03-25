
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
    var contents = document.querySelectorAll('.bar');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected content
    var selectedContent = document.getElementById(contentId);
    if (selectedContent) {
    selectedContent.style.display = 'block';
    }
}
var click = 0;
function menuContent(contentId) {
    if (click == 0){
        var selectedContent = document.getElementById(contentId);
        if (selectedContent) {
            selectedContent.style.display = 'block';
        };
        click += 1;
    } 
    else {
        var contents = document.getElementById(contentId);
        if (contents) {
            contents.style.display = 'none';
        }
        click = 0;
    }

}

function PHRContent() {
    // Hide all content sections
    var contents = document.querySelectorAll('.adminView');
    contents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected content
    var adminViews = document.querySelectorAll('.adminView');
    adminViews.forEach(function(adminView) {
        adminView.style.display = 'block'; // or any other manipulation
    });
}