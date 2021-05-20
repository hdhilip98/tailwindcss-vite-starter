<p align="center">
    <img alt="Tailwind CSS Logo" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" width="50" />&nbsp;&nbsp;&nbsp;&nbsp;
    <img alt="Vite Logo" src="https://vitejs.dev/logo.svg" width="50" />
</p>
<h1 align="center">
TailwindCSS + Vite Starter
</h1>

&nbsp;

## Why this template?
Setting up Tailwind CSS with frontend frameworks like React, Next.js, Vue etc. is straight forward as they come with `postcss` pre-processor out-of-the-box. But kick starting a dev setup with vanilla HTML and JS is pretty hard. 

This starter project leverages the power of Vite to setup a smooth Tailwind CSS dev experience.

&nbsp;

## Getting Started

1. Clone the repository (Alternately you can download the zip file and unzip it)

```
git clone https://github.com/hdhilip98/tailwindcss-vite-starter.git <project-name>
```

2. You will now have the cloned project folder. Open the project in Visual Studio Code (recommended code editor for Tailwind CSS Projects)
3. Open new terminal within Visual Studio Code
4. Install dependencies

```
yarn install
```

5. Start the dev server

```
yarn dev
```

6. Build for production. This will create a production build in the `<root>/build/` folder

```
yarn build
```

7. Locally preview production build

```
yarn serve
```

> You can also use equivalent "npm" commands if not comfortable with "yarn"

&nbsp;

## File Structure

```bash
├── build (Production build will be generate here)
├── node_modules
├── public (Static assets will be served with / route)
├── src
│   ├── css
│   │   ├── **/*.css
│   ├── js
│   │   ├── **/*.js
│   └── index.html
├── .gitignore
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js
└── yarn.lock
```
