document.getElementById("noteForm").addEventListener("submit", async function (event) {
    event.preventDefault(); 

    const notesName = document.getElementById("noteTitle").value;
    const desc = document.getElementById("noteContent").value;

    if (!notesName || !desc) {
        alert("Tüm alanları doldurun!");
        return;
    }

    try {
        const response = await fetch("http://localhost:3001/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ notesName, desc }),
        });

        const result = await response.json();
        alert(result.message);
    } catch (error) {
        console.error("Hata oluştu:", error);
        alert("Not eklenirken hata oluştu.");
    }
});