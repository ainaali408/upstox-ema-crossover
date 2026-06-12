import dotenv from "dotenv";
import { fetchHistoricalData } from "./services/upstoxService.js";
import { calculateEMA } from "./utils/ema.js";
import { detectSignals } from "./utils/crossover.js";

dotenv.config();

const run = async () => {
    try {
        const candles = await fetchHistoricalData();

        const formattedCandles = candles.map((c) => ({
            datetime: c[0],
            open: Number(c[1]),
            high: Number(c[2]),
            low: Number(c[3]),
            close: Number(c[4]),
            volume: Number(c[5]),
        }));

        const closes = formattedCandles.map((c) => c.close);

        const ema9 = calculateEMA(closes, 9);
        const ema21 = calculateEMA(closes, 21);

        const signals = detectSignals(
            formattedCandles,
            ema9,
            ema21
        );

        console.log("Total candles:", formattedCandles.length);
        console.log("EMA9 length:", ema9.length);
        console.log("EMA21 length:", ema21.length);
        console.log("Signals found:", signals.length);

        console.table(signals);
    } catch (error) {
        console.error(error.response?.data || error.message);
    }
};

run();