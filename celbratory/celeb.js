const targetDate = new Date("September 18, 2026 08:00:00").getTime();

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();

    const difference = targetDate - now;

    if (difference <= 0) {

        daysElement.textContent = 0;
        hoursElement.textContent = 0;
        minutesElement.textContent = 0;
        secondsElement.textContent = 0;

        return;
    }

    const daysRemaining = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hoursRemaining = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutesRemaining = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const secondsRemaining = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    daysElement.textContent = daysRemaining;
    hoursElement.textContent = hoursRemaining;
    minutesElement.textContent = minutesRemaining;
    secondsElement.textContent = secondsRemaining;
}

setInterval(updateCountdown, 1000);

updateCountdown();