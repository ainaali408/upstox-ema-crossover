export const detectSignals = (
    candles,
    ema9,
    ema21
) => {
    const signals = [];

    for (let i = 1; i < candles.length; i++) {

        const buy =
            ema9[i - 1] <= ema21[i - 1] &&
            ema9[i] > ema21[i];

        const sell =
            ema9[i - 1] >= ema21[i - 1] &&
            ema9[i] < ema21[i];

        if (buy) {
            signals.push({
                dateTime: candles[i].datetime,
                signal: "BUY",
                price: candles[i].close,
            });
        }

        if (sell) {
            signals.push({
                dateTime: candles[i].datetime,
                signal: "SELL",
                price: candles[i].close,
            });
        }
    }

    return signals;
};