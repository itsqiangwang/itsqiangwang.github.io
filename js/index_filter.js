// Function to apply filter based on filter value
function applyFilter(filterValue) {
    document.querySelectorAll('details').forEach(details => {
        const projectTypes = Array.from(details.querySelector('.project-type').querySelectorAll('span'))
                                  .map(span => span.textContent.trim().toLowerCase());
        
        if (filterValue === 'all' || projectTypes.includes(filterValue)) {
            details.style.display = 'block';
            details.removeAttribute('open', '');
        } else {
            details.style.display = 'none';
            details.removeAttribute('open');
        }
    });

    // Highlight the active filter button
    document.querySelectorAll('.filter li button').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.filter li[data-filter="${filterValue}"] button`)?.classList.add('active');
}

// Event listeners for desktop filter buttons
document.querySelectorAll('.filter li button').forEach(button => {
    button.addEventListener('click', function() {
        const filterValue = this.parentElement.getAttribute('data-filter').toLowerCase();
        applyFilter(filterValue);
    });
});

// Initial call to show all projects by default
applyFilter('all');
