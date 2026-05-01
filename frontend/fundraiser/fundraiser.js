document.addEventListener("DOMContentLoaded", () => {
    const fund_container = document.getElementById("fund-list");

    const fundraisers = {
        "No-Phone-Crossing": "Students pay a small entry fee...",
        "Safety-Quiz-Competition": "Host a road safety quiz...",
        "Guess-The-Outcome-Raffle-Board": "Students pay small fee...",
        "Gender-Swap": "Students dress as the opposite gender..."
    };

    for (const [key, value] of Object.entries(fundraisers)) {
        const li = document.createElement("li");

        const title = document.createElement("strong");
        title.textContent = key;

        const desc = document.createElement("p");
        desc.textContent = value;

        li.append(title, desc);
        fund_container.appendChild(li);
    }
});