// Get the full path of the current page
const fullPath = window.location.pathname;

// Extract the directory from the path
let directory = fullPath.substring(1, fullPath.lastIndexOf("/"));

const directoryElement = document.getElementById("directory");

directoryElement.textContent = directory;