const form = document.getElementById("enter-contact-details");
const names = [];
const numbers = [];

let lines = "";

form.addEventListener("submit", function(e) {
    e.preventDefault();

    addLine();
    updateTable()
})

function addLine() {
    const inputContactName = document.getElementById("contact-name");
    const inputContactPhone = document.getElementById("contact-phone");

    if (names.includes(inputContactName.value)) {
        alert(`The name ${inputContactName.value} is already registered`);
    } else {
        names.push(inputContactName.value);
        numbers.push(inputContactPhone.value);

        let line = `<tr>`;
        line += `<td>${inputContactName.value}</td>`;
        line += `<td>${inputContactPhone.value}</td>`;
        line += `</tr>`;

        lines += line;
    }

    inputContactName.value = "";
    inputContactPhone.value = "";
}

function updateTable() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = lines;
}