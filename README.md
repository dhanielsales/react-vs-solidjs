# Random Ticker Grid Projects

This repository contains two implementations of a dynamic "Random Ticker Grid" app—one in **React** and one in **SolidJS**. Each app displays a grid of animated boxes ("tickers") that update their displayed number and background color at random or configurable intervals.

## Project Structure

- `/react` — React implementation of the Random Ticker Grid
- `/solid` — SolidJS implementation of the Random Ticker Grid

## About the Projects

Both apps render a grid of boxes, each showing a random number between 0 and 100. The number and background color of each box update at random intervals (or a fixed interval if specified). The number of boxes and update interval are controlled via URL query parameters.

### How It Works

- **Number of Boxes:**  
  Controlled by the `n` query parameter. The grid will show boxes from 0 to `n` (inclusive), for a total of `n + 1` boxes.

- **Update Interval:**  
  By default, each box updates at a random interval between 500ms and 1000ms. You can set a fixed interval for all boxes using the `i` query parameter (in milliseconds).

- **Background Color:**  
  The background color of each box changes based on its current number:

  - 0–25: Blue
  - 26–50: Green
  - 51–75: Orange
  - 76–100: Red

- **React Only:**  
  The React version also supports a `withRef` query parameter to switch between state-based and ref-based updates.

## Folders

- [`/react`](./react) — React app and README
- [`/solid`](./solid) — SolidJS app and README
