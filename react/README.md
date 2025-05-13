# Random Ticker Grid (React)

This React app displays a grid of animated "ticker" boxes, each showing a random number that updates at random intervals. The number of tickers, the update method, and the update interval can be controlled via query parameters.

## Query Parameters

- **n**: _(required)_  
  The number of ticker boxes to display. The grid will show boxes numbered from 0 to `n` (inclusive), so the total number of boxes is `n + 1`.

- **withRef**: _(optional, default: false)_  
  If set to `true`, the app uses a version of the ticker that updates the DOM directly via a ref, instead of using React state.  
  Example: `withRef=true`

- **i**: _(optional)_  
  If provided, sets a fixed interval (in milliseconds) for all tickers to update. If not provided, each ticker updates at a random interval between 500ms and 1000ms.  
  Example: `i=2000` (all tickers update every 2 seconds)

## Examples

- Show 5000 tickers (from 0 to 10), using React state (default):

http://localhost:\<PORT>/?n=5000

- Show 5000 tickers, using the ref-based update method:

http://localhost:\<PORT>/?n=5000&withRef=true

- Show 5000 tickers, all updating every 1 second:

http://localhost:\<PORT>/?n=5000&i=1000

- Combine options:

http://localhost:\<PORT>/?n=n=5000&withRef=true&i=100

## How It Works

- Each ticker box displays a random number between 0 and 100.
- The number updates at a random interval between 500ms and 1000ms, unless a fixed interval is set with the `i` parameter.
- The background color of each box changes based on the current number:
- **0–25**: Blue
- **26–50**: Green
- **51–75**: Orange
- **76–100**: Red
- The `withRef` parameter switches between two implementations:
- **Default**: Uses React state for updates.
- **withRef=true**: Uses a ref to update the DOM directly, bypassing React state.
