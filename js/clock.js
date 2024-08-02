function formatDateTimeInLA() {
    const now = new Date();
    
    // Options for the Intl.DateTimeFormat
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

    // Format the date and time in Los Angeles time zone
    const dateTimeInLA = new Intl.DateTimeFormat('en-US', options).format(now);
    return dateTimeInLA;
}

function displayDateTime() {
    const formattedDateTime = formatDateTimeInLA();
    document.getElementById('dateTimeDisplay').textContent = formattedDateTime;
}

// Update the date and time every second
setInterval(displayDateTime, 1000);

// Initial call to display the date and time immediately on load
displayDateTime();
