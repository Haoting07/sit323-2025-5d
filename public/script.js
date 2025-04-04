function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2') ? document.getElementById('num2').value : null;
    const operation = document.getElementById('operation').value;

    let url = `/calculate?num1=${num1}&operation=${operation}`;
    if (num2 !== null && num2 !== '') {
        url += `&num2=${num2}`;
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById('result').innerText = "Error: " + data.error;
            } else {
                document.getElementById('result').innerText = "Result: " + data.result;
            }
        })
        .catch(() => {
            document.getElementById('result').innerText = "Request failed. Please try again.";
        });
}

// Hide num2 input for square root operation
function toggleNum2() {
    const operation = document.getElementById('operation').value;
    const num2Label = document.getElementById('num2-label');

    if (operation === "sqrt") {
        num2Label.style.display = "none";
    } else {
        num2Label.style.display = "inline";
    }
}
