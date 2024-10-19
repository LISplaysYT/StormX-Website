    async function fetchStats() {
            try {
                const response = await fetch('https://stormx-bot.onrender.com/api/stats'); // Call the API endpoint you created
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
