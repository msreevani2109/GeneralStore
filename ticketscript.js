// Function to load the ticket details based on the path parameter
function loadTicketDetails() {
    const path = window.location.pathname; // Get the path from the URL
    const ticketId = path.split('/').pop(); // Extract the last part of the path

    // Dummy ticket data (you can replace this with actual API calls or data)
    const tickets = {
        "123": { description: "This is the first ticket description." },
        "456": { description: "This is the second ticket description." },
        "789": { description: "This is the third ticket description." }
    };

    const ticketElement = document.getElementById("ticket-id");
    const descriptionElement = document.getElementById("ticket-description");

    if (ticketId && tickets[ticketId]) {
        ticketElement.textContent = `Ticket ID: ${ticketId}`;
        descriptionElement.textContent = tickets[ticketId].description;
    } else {
        ticketElement.textContent = "Ticket not found.";
        descriptionElement.textContent = "The ticket ID does not exist in our system.";
    }
}

// Load the ticket details when the page loads
window.onload = loadTicketDetails;
