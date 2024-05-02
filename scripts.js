document.getElementById("inputForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var numInput = document.getElementById("num").value;
    var tableBody = document.getElementById("tableBody");

    tableBody.innerHTML = "";
    
    for (var i = 1; i <= 10; i++) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        
        cell1.textContent = numInput + " x " + i;
        cell2.textContent = i * numInput;
    }

    document.getElementById("multiplicationTable").style.display = "table";
});
