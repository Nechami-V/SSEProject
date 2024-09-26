var time = document.getElementById("")
const eventSource = new EventSource('https://localhost:7166/Time/time');

eventSource.onmessage = function(event) {
    document.getElementById('time-now').innerText = event.data;
};
eventSource.onerror = function(event) {
    console.error("Error:", event);
};

