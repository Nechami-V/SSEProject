var time = document.getElementById("")
const eventSource = new EventSource('https://localhost:7166/Time/time');

eventSource.onmessage = function(event) {
    document.getElementById('time-now').innerText = event.data;
};
eventSource.onerror = function(event) {
    console.error("Error:", event);
};

var wish = document.getElementById("wish")
function getWish() {
    var date = new Date();
    var hour = date.getHours();
    if (hour < 12&& hour >= 7) {
        wish.innerText = "Good Morning";
    } else if (hour < 18&& hour >= 12) {
        wish.innerText = "Good Afternoon";
    } else if (hour < 7|| hour >= 22) {
        wish.innerText = "Good Night";
    } else {

        wish.innerText = "Good Evening";
    }
}
getWish();