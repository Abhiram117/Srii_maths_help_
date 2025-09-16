
async function solveProblem() {
    const problem = document.getElementById('problem').value;
    const solutionDiv = document.getElementById('solution');
    solutionDiv.innerText = 'Solving...';

    const encodedParams = new URLSearchParams();
    encodedParams.append("expression", problem);

    const options = {
        method: 'POST',
        headers: {
            'X-RapidAPI-Key': '86228915efmsh8b199fafcaff5c0p145c80jsn2744c132505d',
            'X-RapidAPI-Host': 'photo-math-resolver.p.rapidapi.com',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: encodedParams
    };

    try {
        const response = await fetch('https://photo-math-resolver.p.rapidapi.com/solve', options);
        const data = await response.json();

        if (data.solutionSteps && data.solutionSteps.length > 0) {
            solutionDiv.innerText = data.solutionSteps.join('\n');
        } else {
            solutionDiv.innerText = 'Solution: ' + (data.result || 'No solution found.');
        }
    } catch (error) {
        solutionDiv.innerText = 'Error: ' + error;
    }
}
