function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    let score = 0;
    let totalQuestions = 2;

    // Question 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === "Paris") {
        score++;
    }

    // Question 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === "Python") {
        score++;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>${name}, you scored ${score} out of ${totalQuestions}.</p>`;

    // Prevent form submission and page reload
    return false;
}