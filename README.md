Dr. Chantell's Country Explorer

I built this country explorer for my cumulative assessment. I used the REST Countries API to show flags, capitals, regions, populations, and map links. I also added a search box, a region filter, a clear-filters button, and a light and dark theme switcher.

I organized the app into small parts so each file has a clear job. The header controls the theme button, the search controls manage the form fields, the country card displays one country, and the status message handles loading, errors, and empty results. The layout is responsive, and the form labels, image alt text, semantic elements, keyboard focus styles, and live status messages support accessibility.

Running the project

I use Node.js and npm to run this project. From the project folder, I install the dependencies and start the development server:

```bash
npm install
npm run dev
```

I open the local URL shown in the terminal, usually `http://localhost:5173/`.

The current REST Countries API requires a v5 API key. I copy `.env.example` to `.env` in the project root, add my key, and restart the development server:

```bash
cp .env.example .env
```

```env
VITE_REST_COUNTRIES_API_KEY=your_actual_key
```

I keep `.env` private and do not commit it. More API information is in [API_SETUP.md](API_SETUP.md).

Checking the project

I run the linter and production build before submitting the project:

```bash
npm run lint
npm run build
```

The project is ready to deploy with Vercel or Netlify. I would add the same `VITE_REST_COUNTRIES_API_KEY` environment variable in the deployment settings and then add the live URL here:

Live demo: Add deployed URL here.

What I practiced

I practiced reusable components, controlled forms, conditional rendering, list rendering, API requests, responsive styling, accessibility, and organizing code into custom hooks. I also added Abkhazia as a clearly labeled custom entry because it is not included in the standard API country list.

Author
Dr. Chantell McDowell, 
Per Scholas student
