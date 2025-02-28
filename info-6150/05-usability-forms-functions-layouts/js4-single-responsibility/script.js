const directory = [
    {
        name: "John Doe",
        age: 30,
        address: "123 Main St, Anytown, USA",
        phone: "555-1234",
        email: "john.doe@example.com"
    },
    {
        name: "Jane Smith",
        age: 25,
        address: "456 Oak Ave, Anytown, USA",
        phone: "555-5678",
        email: "jane.smith@example.com"
    },
    {
        name: "Jim Beam",
        age: 40,
        address: "789 Pine St, Anytown, USA",
        phone: "555-9012",
        email: "jim.beam@example.com"
    },
];

/*
This violates the Single Responsibility Principle because it:
- Mixes data filtering with DOM manipulation
- Handles both search logic and presentation logic

TASK: Refactor this to follow the Single Responsibility Principle.
*/
function searchAndDisplayResults() {
    const name = document.getElementById("search").value;
    if (name === "") {
        window.alert("Please enter a name to search for");
        return;
    }
    // Array.filter() creates a new array with all elements that pass the test
    // implemented by the provided function.
    const results = directory.filter(person => person.name.toLowerCase().includes(name.toLowerCase()));
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";
    
    if (results.length === 0) {
        resultsDiv.innerHTML = "<p>No results found</p>";
    } else {
        results.forEach(person => {
            resultsDiv.innerHTML += `
                <div class="person-card">
                    <h3>${person.name}</h3>
                    <p>Age: ${person.age}</p>
                    <p>Address: ${person.address}</p>
                    <p>Phone: ${person.phone}</p>
                    <p>Email: ${person.email}</p>
                </div>
            `;
        });
    }
}
