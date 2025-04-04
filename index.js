const express = require('express');
const path = require('path');
const app = express();

// Serve static files (Frontend)
app.use(express.static('public'));

// Arithmetic API Endpoint
app.get('/calculate', (req, res) => {
    const { num1, num2, operation } = req.query;

    // Check for missing parameters
    if (!operation) {
        return res.status(400).json({ error: "Operation is required. Choose from 'add', 'subtract', 'multiply', 'divide', 'modulo', 'exponentiate', or 'sqrt'." });
    }

    // Ensure num1 is always valid
    if (!num1 || isNaN(num1)) {
        return res.status(400).json({ error: "Invalid input: num1 must be a valid number." });
    }

    const number1 = parseFloat(num1);
    let number2 = null;

    // Only require num2 for operations that need it
    if (['add', 'subtract', 'multiply', 'divide', 'modulo', 'exponentiate'].includes(operation)) {
        if (!num2 || isNaN(num2)) {
            return res.status(400).json({ error: "Invalid input: num2 must be a valid number for this operation." });
        }
        number2 = parseFloat(num2);
    }

    let result;
    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            if (number2 === 0) {
                return res.status(400).json({ error: "Math error: Division by zero is not allowed." });
            }
            result = number1 / number2;
            break;
        case 'modulo':
            if (number2 === 0) {
                return res.status(400).json({ error: "Math error: Modulo by zero is not allowed." });
            }
            result = number1 % number2;
            break;
        case 'exponentiate':
            result = Math.pow(number1, number2);
            break;
        case 'sqrt':
            if (number1 < 0) {
                return res.status(400).json({ error: "Math error: Square root of a negative number is not supported." });
            }
            result = Math.sqrt(number1);
            break;
        default:
            return res.status(400).json({ error: "Invalid operation. Choose from 'add', 'subtract', 'multiply', 'divide', 'modulo', 'exponentiate', or 'sqrt'." });
    }

    res.json({ result });
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
