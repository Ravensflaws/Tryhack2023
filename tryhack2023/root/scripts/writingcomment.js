function auto_grow(element) {
    element.style.height = "5px"; // Set the initial height to a small value
    element.style.height = (element.scrollHeight) + "px"; // Adjust the height based on content
}

const commentBox = document.getElementById("comment");

commentBox.addEventListener("input", function () {
    auto_grow(this); // Pass the textarea element as an argument to auto_grow
});