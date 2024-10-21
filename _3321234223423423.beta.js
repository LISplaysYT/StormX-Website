async function fetchStats() {
    try {
        const response = await fetch('https://stormx-bot-1.onrender.com/api/stats'); // Call the API endpoint you created
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();

        // Update the HTML with the received data
        document.getElementById('servers').innerText = data.serverCount || 0;
        document.getElementById('users').innerText = data.userCount || 0;
        document.getElementById('channels').innerText = data.channelCount || 0;
    } catch (error) {
        console.error('Error fetching stats:', error);
    }
}

function openNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
        sidenav.style.width = "250px";
        localStorage.setItem("navbar", "true");
    }
}

function closeNav() {
    const sidenav = document.getElementById("mySidenav");
    if (sidenav) {
        sidenav.style.width = "0";
        localStorage.setItem("navbar", "false");
    }
}

// Function to determine the initial state of the sidebar
function SideNavBar() {
    const localstorage = localStorage.getItem("navbar");
    if (!localstorage) return; // Exit if no value found

    // Open or close the sidebar based on local storage value
    if (localstorage === "true") {
        openNav();
    } else {
        return;
    }
}

// Add event listener to the button after the DOM has loaded
document.addEventListener("DOMContentLoaded", function() {
    // Call SideNavBar to set the initial state of the sidebar
    SideNavBar();

    const toggleButton = document.getElementById("toggleButton");
    if (toggleButton) {
        toggleButton.addEventListener("click", function() {
            const isOpen = localStorage.getItem("navbar") === "true";
            if (isOpen) {
                openNav();
            } else {
                closeNav();
            }
        });
    }
});
