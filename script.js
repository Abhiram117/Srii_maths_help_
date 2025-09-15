function solveProblem() {
    const problem = document.getElementById('problem').value;
    const solutionDiv = document.getElementById('solution');

    if (!problem) {
        solutionDiv.innerText = "Please enter a math problem.";
        return;
    }

    // Simulated API call (replace with your API)
    fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_OPENAI_API_KEY'  // Replace this
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: `Solve this math problem step by step: ${problem}`,
            max_tokens: 150
        })
    })
    .then(response => response.json())
    .then(data => {
        solutionDiv.innerText = data.choices[0].text;
    })
    .catch(error => {
        solutionDiv.innerText = "Error: " + error;
    });
}