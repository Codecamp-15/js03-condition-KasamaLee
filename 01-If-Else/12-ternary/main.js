let score = prompt("your score: ");
let result = (score === null || score.trim() === '' || isNaN(score) || score < 0)
    ? "Invalid score"
    : (score = Number(score).toFixed(),
        score >= 80
        ? "A"
        : score >= 70
        ? "B"
        : score >= 60
        ? "C"
        : score >= 50
        ? "D"
        : "F");

alert(result);