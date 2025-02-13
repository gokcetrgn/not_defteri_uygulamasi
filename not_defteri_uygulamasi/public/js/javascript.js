document.getElementById("noteForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const notesName = document.getElementById("noteTitle").value;
    const desc = document.getElementById("noteContent").value;

    const { notesName, desc } = req.body; 

    try {
        const response = await fetch("http://localhost:3001/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteData)
        });

        const result = await response.json();
        alert(result.message);

        if (response.ok) {
            document.getElementById("noteForm").reset();
        }
    } catch (error) {
        console.error("Hata:", error);
        alert("Not eklenirken bir hata oluştu.");
    }
});