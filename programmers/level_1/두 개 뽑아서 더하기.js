function solution(numbers) {
    var answer = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const sum = numbers[i] + numbers[j]
            if (!answer.find(item => item === sum)) {
                answer.push(sum)
            }
        }
    }
    answer = [...new Set(answer)].sort((a, b) => a - b)
    return answer;
}