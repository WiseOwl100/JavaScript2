function categorizeGrades() {
    const scores = [
        parseInt(document.getElementById('score1').value),
        parseInt(document.getElementById('score2').value),
        parseInt(document.getElementById('score3').value),
        parseInt(document.getElementById('score4').value),
        parseInt(document.getElementById('score5').value)
    ];

    const gradeList = document.getElementById('gradeList');
    gradeList.innerHTML = '';

    for (let i = 0; i < scores.length; i++) {
        let grade;
        const score = scores[i];

        if (score >= 80) {
            grade = 'A';
        } else if (score >= 70) {
            grade = 'B';
        } else if (score >= 60) {
            grade = 'C';
        } else if (score >= 40) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        const listItem = document.createElement('li');
        listItem.textContent = `Score ${i + 1}: ${score} - Grade ${grade}`;
        gradeList.appendChild(listItem);
    }
}

// ✅ Add event listener once the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('categorizeBtn');
    button.addEventListener('click', categorizeGrades);
});
