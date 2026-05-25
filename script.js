function trackParcel() {
    const code = document.getElementById("trackingInput").value;
    const result = document.getElementById("result");

    const trackingData = {
        "SK2026001": {
            status: "In Transit",
            route: "Johannesburg → Dubai → Seoul (South Korea)",
            eta: "2–3 Days"
        },
        "INT4459002": {
            status: "Delivered",
            route: "Johannesburg → Singapore → Seoul (South Korea)",
            eta: "Delivered Successfully"
        }
    };

    if (trackingData[code]) {
        result.innerHTML = `
            <p>Status: ${trackingData[code].status}</p>
            <p>Route: ${trackingData[code].route}</p>
            <p>ETA: ${trackingData[code].eta}</p>
        `;
    } else {
        result.innerHTML = "Invalid tracking number.";
    }
}
