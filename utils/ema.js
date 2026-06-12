export const calculateEMA = (prices, period) => {
    const multiplier = 2 / (period + 1);

    const ema = [];

    ema[0] = prices[0];

    for (let i = 1; i < prices.length; i++) {
        ema[i] =
            (prices[i] - ema[i - 1]) * multiplier +
            ema[i - 1];
    }

    return ema;
};