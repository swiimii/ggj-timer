
// year, monthIndex (jan = 0), day, hour, minute
let targetDate = new Date(2026, 1, 1, 17, 0);

console.log(targetDate);

function updateTime() {
    const now = new Date();
    const diffInMs = targetDate.getTime() - now.getTime();
    if( diffInMs < 0 ) {
        // Don't show a negative time.
        document.getElementById("timer").innerHTML = "0:00:00"
    } else {
        const diffInSeconds = Math.floor(diffInMs / 1000);
        const seconds = (diffInSeconds % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        const minutes = (Math.floor(diffInSeconds / 60) % 60).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
        const hours = (Math.floor(diffInSeconds / 3600));
        document.getElementById("timer").innerHTML = `${hours}:${minutes}:${seconds}`;
    }
};

updateTime();
const timer = setInterval(updateTime, 1000);
