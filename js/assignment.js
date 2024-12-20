"use strict";

// I Create an immutable variable named resolution and assign it a value
const resolution = "Exercise daily";

// I Create an immutable variable named currentYear and assign it a value
const currentYear = 2025;

// I Create a mutable variable named willMeetResolution and assign it a value
let willMeetResolution = true;

// Function to update the year element
function updateYear() {
    const yearElement = document.getElementById("year");
    yearElement.innerText = `The year is ${currentYear}`;
}

// Function to update the resolution element
function updateResolution() {
    const resolutionElement = document.getElementById("resolution");
    resolutionElement.innerText = `My resolution: ${resolution}`;
}

// Function to update the willMeetResolution element
function updateWillMeetResolution() {
    const willMeetResolutionElement = document.getElementById("will-meet-resolution");
    willMeetResolutionElement.innerText = `Will I meet my resolution? ${willMeetResolution}`;
}

// Function to render all the updates
function render() {
    updateYear();
    updateResolution();
    updateWillMeetResolution();
}

// Event listener for the submission button
const submissionBtn = document.getElementById("submission-btn");
submissionBtn.addEventListener("click", function () {
    render();
});


