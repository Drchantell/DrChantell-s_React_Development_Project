# API Setup

I use the REST Countries API to load the country information for this project.

The current REST Countries v5 API requires an API key. I keep my real API key in a local `.env` file so I do not place it directly in my code or upload it to GitHub.

## How I set up my API key

First, I copy the example environment file and create my own `.env` file in the main project folder.

```bash
cp .env.example .env
```

Then I open `.env` and replace the sample text with my own REST Countries API key.

```env
VITE_REST_COUNTRIES_API_KEY=your_actual_key
```

After I save the file, I restart the development server.

```bash
npm run dev
```

My `.gitignore` file keeps `.env` from being uploaded to GitHub.

## What I learned

This helped me learn that API keys should not be typed directly inside my React components. I also learned that Vite uses environment variables that begin with `VITE_` when the application needs to read them in the browser.

If I deploy the project, I need to add the same environment variable in the deployment platform settings.
