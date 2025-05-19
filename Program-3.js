function generateConditionalSeries(num) {
    const condition = num % 2 === 0 ? num - 1 : num;
    let result = [];
    for (let i = 1; i <= condition; i++) {
        result.push(2 * i - 1);
    }
    console.log(result.join(', '));
}


generateConditionalSeries(1);
generateConditionalSeries(2);
generateConditionalSeries(3);
generateConditionalSeries(4);
generateConditionalSeries(5);
generateConditionalSeries(6);
generateConditionalSeries(7);
generateConditionalSeries(8);
generateConditionalSeries(11);
generateConditionalSeries(12);
generateConditionalSeries(13);


