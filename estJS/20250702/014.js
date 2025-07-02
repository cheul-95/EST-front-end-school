// 총점 평균 최고 점수

function calcScores(scores) {
    const total = scores.reduce((a, b) => a + b);
    const average = total / scores.length;
    const top = Math.max(...scores);
    const result = [total, average, top];
    return result;
}
console.log(calcScores([100, 50, 25, 32, 70]));
