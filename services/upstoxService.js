import axios from "axios";

export const fetchHistoricalData = async () => {
    const token = process.env.UPSTOX_ACCESS_TOKEN;

    const response = await axios.get(
        "https://api.upstox.com/v3/historical-candle/NSE_EQ%7CINE848E01016/minutes/5/2025-01-02/2025-01-01",
        {
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: "application/json",
            },
        }
    );

    console.log(response.data);

    return response.data.data.candles;
};