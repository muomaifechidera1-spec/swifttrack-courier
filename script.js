function trackParcel() {
    const code = document.getElementById("trackingInput").value.trim();
    const result = document.getElementById("result");

    // REALISTIC tracking database structure
    const shipments = {
        "SK2026001": {
            trackingNumber: "SK2026001",
            status: "In Transit",
            currentLocation: "Dubai Hub",
            origin: "Johannesburg, South Africa",
            destination: "Seoul, South Korea",
            eta: "2–3 Days",
            progress: 65,
            timeline: [
                "Shipment Created",
                "Collected in Johannesburg",
                "Departed South Africa",
                "Arrived Dubai Hub",
                "In Transit to Seoul"
            ]
        },

        "INT4459002": {
            trackingNumber: "INT4459002",
            status: "Delivered",
            currentLocation: "Seoul, South Korea",
            origin: "Johannesburg, South Africa",
            destination: "Seoul, South Korea",
            eta: "Delivered Successfully",
            progress: 100,
            timeline: [
                "Shipment Created",
                "Collected in Johannesburg",
                "Departed South Africa",
                "Arrived Singapore Hub",
                "Arrived Seoul Hub",
                "Delivered"
            ]
        }
    };

    // If tracking exists
    if (shipments[code]) {
        const s = shipments[code];

        result.innerHTML = `
            <div class="result-card">

                <h3>📦 Tracking Details</h3>

                <p><b>Tracking Number:</b> ${s.trackingNumber}</p>
                <p><b>Status:</b> ${s.status}</p>
                <p><b>Current Location:</b> ${s.currentLocation}</p>
                <p><b>Route:</b> ${s.origin} → ${s.destination}</p>
                <p><b>ETA:</b> ${s.eta}</p>

                <div class="progress-bar">
                    <div class="progress" style="width:${s.progress}%"></div>
                </div>

                <h4>Shipment Timeline</h4>
                <ul>
                    ${s.timeline.map(step => `<li>✔ ${step}</li>`).join("")}
                </ul>

            </div>
        `;
    } else {
        result.innerHTML = `
            <div class="error-card">
                ❌ Invalid tracking number<br>
                Please check and try again.
            </div>
        `;
    }
}
