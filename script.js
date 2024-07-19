let timer;
let countdown;
let timeRemaining;
let isPaused = false;

document.getElementById('set-timer').addEventListener('click', () => {
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    timeRemaining = minutes * 60 + seconds;
    displayTime(timeRemaining);
});

document.getElementById('start').addEventListener('click', () => {
    if (timeRemaining > 0) {
        countdown = setInterval(() => {
            if (!isPaused) {
                timeRemaining--;
                displayTime(timeRemaining);
                if (timeRemaining <= 0) {
                    clearInterval(countdown);
                    alert('Time is up!');
                }
            }
        }, 1000);
    }
});

document.getElementById('pause').addEventListener('click', () => {
    isPaused = true;
});

document.getElementById('resume').addEventListener('click', () => {
    isPaused = false;
});

document.getElementById('reset').addEventListener('click', () => {
    clearInterval(countdown);
    timeRemaining = 0;
    displayTime(timeRemaining);
});

function displayTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById('countdown').textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Fetch API example to get timer configurations from db.json
fetch('db.json')
    .then(response => response.json())
    .then(data => {
        console.log('Timer configurations:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
