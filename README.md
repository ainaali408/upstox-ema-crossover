# Upstox EMA Crossover Strategy

## Overview
This task fetches historical candle data from the Upstox API, calculates 9-period and 21-period EMAs, and generates BUY/SELL signals based on EMA crossovers.

## Approach

1. Fetch historical 5-minute candle data from the Upstox Historical Candle API.
2. Transform the API response into a structured candle format.
3. Extract closing prices from the candle data.
4. Calculate:
   - EMA 9 (short-term trend)
   - EMA 21 (long-term trend)
5. Detect crossover signals:
   - BUY when EMA9 crosses above EMA21.
   - SELL when EMA9 crosses below EMA21.
6. Display the generated signals with timestamp and price.

## Project Structure

services/
- upstoxService.js

utils/
- ema.js
- crossover.js

index.js

## Installation

npm install

## Environment Variables

Create a .env file:

UPSTOX_ACCESS_TOKEN=your_token_here

## Run

node index.js

## Sample Output

BUY  | 2025-01-01T10:15:00 | 105.45
SELL | 2025-01-01T11:42:00 | 103.20

