let idleTimer;
const idleTimeLimit = 30000; // 30 seconds

function formatDateTimeInLA() {
    const now = new Date();
    
    const options = {
        timeZone: 'America/Los_Angeles',
        weekday: 'short',
        month: 'short',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    const dateTimeFormatter = new Intl.DateTimeFormat('en-US', options);
    const parts = dateTimeFormatter.formatToParts(now);

    const partValues = parts.reduce((acc, part) => {
        acc[part.type] = part.value;
        return acc;
    }, {});

    const dateTimeInLA = `${partValues.weekday} ${partValues.month} ${partValues.day} ${partValues.year}, ${partValues.hour}:${partValues.minute}:${partValues.second} ${partValues.dayPeriod}`;
    return dateTimeInLA;
}

function displayDateTime() {
    const formattedDateTime = formatDateTimeInLA();
    document.getElementById('dateTimeDisplay').textContent = formattedDateTime;
}

function resetIdleTimer() {
    clearTimeout(idleTimer);

    const screensaverDiv = document.querySelector('.screensaver');
    if (screensaverDiv && screensaverDiv.style.display !== 'none') {
        screensaverDiv.style.display = 'none'; // Hide the screensaver when the user is active again
    }

    idleTimer = setTimeout(handleIdle, idleTimeLimit);
}

function handleIdle() {
    const screensaverDiv = document.querySelector('.screensaver');
    if (screensaverDiv && screensaverDiv.style.display === 'none') {
        screensaverDiv.style.display = 'flex'; // Show the screensaver when the page is idle
        setInterval(displayDateTime, 1000); // Update the date and time every second
    }
}

// Set up event listeners to reset the idle timer on any activity
['mousemove', 'keydown', 'scroll', 'touchstart'].forEach(event => {
    document.addEventListener(event, resetIdleTimer);
});

// Start the initial idle timer
resetIdleTimer();

// Initial call to display the date and time immediately on load (if needed)
document.addEventListener('DOMContentLoaded', displayDateTime);