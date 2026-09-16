# Dr. Chantell's Country Explorer

I built this Country Explorer for my React cumulative assessment. I chose the REST Countries API with Color Theme Switcher challenge because I wanted more practice using React with real API data.

## What my project does

My application loads country information from the REST Countries API. I can search for a country by name, filter countries by region, clear my filters, and switch between a light and dark theme.

Each country card shows the country flag, capital, region, and population. I can click the View Details button to see more information about the country. The detail view shows the official name, native name, population, region, subregion, capital, currencies, languages, and border countries. I can also click a border country to view its information.

I made the layout responsive so it works on desktop, tablet, and mobile screen sizes. I also used labels, image alt text, semantic HTML, keyboard focus styles, and live status messages to help with accessibility.

## How I organized my project

As I am learning React, I am practicing how to break a project into smaller pieces instead of putting everything in one file.

I created separate components for the header, search controls, country cards, country details, layout, and status messages. I also created a custom `useCountries` hook to handle the API request. I used Context API for the light and dark theme.

## How I run my project

I open the project folder in VS Code and open the terminal.

First, I install the project packages:

```bash
npm install
```

Then I create my local `.env` file and add my REST Countries API key. More detailed instructions are in [API_SETUP.md](API_SETUP.md).

Then I start the project:

```bash
npm run dev
```

I open the local URL shown in the terminal, usually `http://localhost:5173/`.

## How I check my project

Before I submit my work, I can check the code with:

```bash
npm run lint
```

I can also make sure the production build works with:

```bash
npm run build
```

## Challenges I worked through

Some parts of this project were challenging for me as a beginner. I had to learn how to understand the structure of API data, work with loading and error states, organize my code into reusable components, and use a custom hook. I also practiced making the light and dark theme work, building search and filter controls, creating a responsive layout, and showing a separate country detail view with border-country buttons.

I learned that breaking a large project into smaller steps makes it easier for me to understand and fix problems.

My full 200–300 word project reflection is in [REFLECTION.md](REFLECTION.md).

## Deployment

This project is prepared for deployment with a service such as Vercel, Netlify, or GitHub Pages. When I deploy it, I need to add `VITE_REST_COUNTRIES_API_KEY` as an environment variable in the deployment settings.

Live demo: I will add my deployed project link here after deployment.

## What I practiced

I practiced React components, TypeScript props, `useState`, `useEffect`, `useMemo`, Context API, a custom hook, controlled inputs, conditional rendering, list rendering, API requests, responsive CSS, accessibility, and GitHub version control.

## Author

Dr. Chantell McDowell  
Per Scholas Student
