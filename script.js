// Form elements
const checkInForm = document.getElementById("checkInForm");
const attendeeNameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Display elements
const greetingEl = document.getElementById("greeting");
const attendeeCountEl = document.getElementById("attendeeCount");
const progressBarEl = document.getElementById("progressBar");

// Team count displays
const waterCountEl = document.getElementById("waterCount");
const zeroCountEl = document.getElementById("zeroCount");
const powerCountEl = document.getElementById("powerCount");

// State variables (this is our "single source of truth")
let totalAttendees = 0;
const MAX_ATTENDEES = 50;

let teamCounts = {
  water: 0,
  zero: 0,
  power: 0,
};
// Listen for form submission
checkInForm.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page from refreshing
  handleCheckIn();
});

// Main handler function (we'll build this out in the next steps)
function handleCheckIn() {
  console.log("Form submitted!");
}