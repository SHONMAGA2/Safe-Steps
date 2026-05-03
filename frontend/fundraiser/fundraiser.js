document.addEventListener("DOMContentLoaded", () => {
    const fundContainer = document.getElementById("fund-list");

    const fundraisers = [
        {
            name: "Colour Run",
            description: "Participants run while being covered in coloured powder.",
            cost: 1500,
            revenue: 4000
        },
        {
            name: "Dress-Up Day",
            description: "Students dress according to a theme for a small fee.",
            cost: 200,
            revenue: 1500
        },
        {
            name: "Safety Quiz Competition",
            description: "Students participate in a road safety quiz competition.",
            cost: 100,
            revenue: 800
        }
    ];

    fundraisers.forEach(fund => {
        const li = document.createElement("li");

        const title = document.createElement("h3");
        title.textContent = fund.name;

        const desc = document.createElement("p");
        desc.textContent = fund.description;

        const cost = document.createElement("p");
        cost.textContent = "Estimated Cost: R" + fund.cost;

        const revenue = document.createElement("p");
        revenue.textContent = "Estimated Revenue: R" + fund.revenue;

        const profit = document.createElement("p");
        const profitValue = fund.revenue - fund.cost;
        profit.textContent = "Estimated Profit: R" + profitValue;

        li.append(title, desc, cost, revenue, profit);
        fundContainer.appendChild(li);
    });
});

