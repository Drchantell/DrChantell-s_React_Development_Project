# API Setup

I use the REST Countries API to load the country information for this project.

The current REST Countries v5 API requires an API key. During local development, I keep the key in a `.env` file so I do not type it directly inside my React components or commit the `.env` file to GitHub.

## How I set up my API key

First, I copy the example environment file and create my own `.env` file in the main project folder.

```bash
cp .env.example .env
```

Then I open `.env` and replace the sample text with my REST Countries API key.

```env
VITE_REST_COUNTRIES_API_KEY=your_actual_key
```

After I save the file, I restart the development server.

```bash
npm run dev
```

My `.gitignore` file keeps my local `.env` file from being uploaded to GitHub.

## What I learned

This helped me learn that configuration values should not be typed directly into my React components. I also learned something important about Vite: variables that begin with `VITE_` are available to browser code. That means they can be visible in the finished front-end application after it is built.

For this class project, I use the environment variable so I can keep the key out of my source files and GitHub history. If I build a production application that needs a truly private API key, I would use a backend or serverless function to make the API request instead of sending the private key directly from the browser.

If I deploy this class project, I still need to add `VITE_REST_COUNTRIES_API_KEY` in the deployment platform settings so the application can connect to the API.
