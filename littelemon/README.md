# Little Lemon

Little Lemon is a React single-page restaurant website for a fictional Mediterranean restaurant in Chicago. It includes a marketing homepage, featured menu sections, customer testimonials, and an online table reservation flow with validation.

## Overview

This project was built with Create React App and React Router. The application centers on two main user journeys:

- browsing the restaurant landing page
- reserving a table through the booking form

The booking flow supports dynamic time-slot updates and a confirmation route after successful submission.

## Features

- Hero section with restaurant branding and primary reservation call to action
- Specials section highlighting featured menu items
- Testimonials section with customer reviews
- Restaurant information section for the Little Lemon story
- Reservation form with validation for date, time, guest count, and occasion
- Route-based navigation using React Router
- Confirmation screen after a successful booking submission
- Unit tests for core booking and routing behavior

## Tech Stack

- React
- React Router
- Formik
- React Testing Library
- Jest DOM
- Create React App

## Project Structure

```text
src/
	App.js
	App.css
	index.js
	components/
		BookingForm.js
		BookingPage.js
		CallToAction.js
		Chicago.js
		ConfirmedBooking.js
		CustomersSay.js
		Footer.js
		Header.js
		HomePage.js
		Main.js
		Nav.js
		Specials.js
```

## Getting Started

### Prerequisites

- Node.js 18 or later recommended
- npm

### Installation

```bash
npm install
```

### Run the App

```bash
npm start
```

The development server runs at `http://localhost:3000`.

## Available Scripts

### `npm start`

Starts the development server with hot reload.

### `npm test`

Runs the test suite.

### `npm run build`

Creates an optimized production build in the `build/` directory.

### `npm run eject`

Exposes the Create React App configuration. This is irreversible and usually unnecessary for this project.

## Booking API Integration

The booking flow is designed to work with globally available browser functions:

- `window.fetchAPI(date)` for retrieving available booking times
- `window.submitAPI(formData)` for submitting a reservation

If those functions are not available, the app falls back to local defaults so the UI remains usable during development and testing.

In this codebase, those globals are expected to be loaded through the public HTML shell.

## Validation Rules

The reservation form currently enforces the following rules:

- date is required and cannot be in the past
- time must be one of the available time slots
- guest count must be a whole number between 1 and 10
- occasion must match one of the supported options

## Testing Notes

- Tests use React Testing Library and Jest
- Because the app uses `react-router-dom`, tests may mock router primitives when isolating component behavior
- When the booking API globals are needed in tests, they should be mocked as `window.fetchAPI` and `window.submitAPI`

## Build Notes

On Windows, asset filenames under `public/icons_assets` should remain ASCII-safe to avoid avoidable build issues.

## Future Improvements

- Persist reservations to a real backend API
- Add menu and reservation management pages
- Improve accessibility coverage with broader automated tests
- Add end-to-end tests for the full booking flow
