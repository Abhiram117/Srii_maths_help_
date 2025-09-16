
async function solveProblem() {
    const problem = document.getElementById('problem').value;
    const solutionDiv = document.getElementById('solution');
    solutionDiv.innerText = 'Solving...';

    const encodedParams = new URLSearchParams();
    encodedParams.append("expression", problem);

    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY',
            'X-RapidAPI-Host': 'mathsolverapi.p.rapidapi.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodedParams
    };

    try {
        const response = await fetch('https://mathsolverapi.p.rapidapi.com/solve', options);
        const data = await response.json();
        solutionDiv.innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        solutionDiv.innerText = 'Error: ' + error;
    }
}
