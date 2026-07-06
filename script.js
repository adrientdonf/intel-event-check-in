// Form elements
const checkInForm = document.getElementById("checkInForm");
const attendeeNameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

// Display elements
const greetingEl = document.getElementById("greeting");
const attendeeCountEl = document.getElementById("attendeeCount");
const progressBarEl = document.getElementById("progressBar");
const attendeeListEl = document.getElementById("attendeeList");
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

function handleCheckIn() {
  const attendeeName = attendeeNameInput.value.trim();
  const selectedTeam = teamSelect.value;

  if (attendeeName === "") {
    return;
  }

  showGreeting(attendeeName);
  updateTotalCount();
  updateTeamCount(selectedTeam);
  updateProgressBar(); // <-- NEW LINE
  addAttendeeToList(attendeeName, selectedTeam);
  saveData();

}

// Displays a personalized welcome message
function showGreeting(name) {
  greetingEl.textContent = `Welcome, ${name}!`;
  greetingEl.classList.add("success-message");
  greetingEl.style.display = "block";
}

// Increments and displays the total attendee count
function updateTotalCount() {
  totalAttendees++;
  attendeeCountEl.textContent = totalAttendees;
}
// Increments the count for the selected team and updates its display
function updateTeamCount(team) {
  teamCounts[team]++;

  if (team === "water") {
    waterCountEl.textContent = teamCounts.water;
  } else if (team === "zero") {
    zeroCountEl.textContent = teamCounts.zero;
  } else if (team === "power") {
    powerCountEl.textContent = teamCounts.power;
    
  }
}
// Updates the progress bar width based on current attendance
function updateProgressBar() {
  const percentage = (totalAttendees / MAX_ATTENDEES) * 100;
  progressBarEl.style.width = `${percentage}%`;
}
// Adds a new attendee entry to the visible list
function addAttendeeToList(name, team) {
  const listItem = document.createElement("li");
  listItem.textContent = `${name} — ${team}`;
  attendeeListEl.appendChild(listItem);
}
// Saves current state to localStorage so it survives a page refresh
function saveData() {
  const appState = {
    totalAttendees: totalAttendees,
    teamCounts: teamCounts,
    attendeeList: getAttendeeListData(),
  };

  localStorage.setItem("checkInAppState", JSON.stringify(appState));
}

// Reads all current attendee list items from the DOM into a plain array
function getAttendeeListData() {
  const items = [];
  const listItems = attendeeListEl.querySelectorAll("li");

  listItems.forEach(function (li) {
    items.push(li.textContent);
  });

  return items;
}
