# Platzi Mokepon Game

The **Frontend** part in **Vanilla TypeScript** (no framework like React of Vue)

Technologies:

- Build tool: Vite
- Language: TypeScript
- Styles: Emotion CSS
- WebSockets: Socket.io
- Linter: ESLint and Prettier

## Setup

These versions indicate the versions **I used** to develop this project, not the minimum required versions.

Node.js 18 must be installed.

---

The env variables that this project uses is in the `.env.example` file with default values.

The `src/config.ts` file exports the env variables with default values to use them in the app.\
The app uses the default values.

To have custom values you need to duplicate the `.env.example`, rename it to just `.env`, and modify one or more values.

---

**Visual studio code** was used to write the code of this project.

**pnpm** was used instead of **npm** or **yarn** to save disk space.

Run `pnpm install` to install all dependencies and devDependencies.

## Available scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.
Open [http://localhost:5173/platzi-mokepon-game/](http://localhost:5173/platzi-mokepon-game/) to view it in the browser.

The page will reload if you make edits.

### `pnpm build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `pnpm preview`

Runs the app that was built to the `dist` folder in the preview mode.\
Open [http://localhost:4173/platzi-mokepon-game/](http://localhost:4173/platzi-mokepon-game/) to view it in the browser.

### `pnpm test`

Runs vitest with a GUI.\
Open [http://localhost:51204/**vitest**/](http://localhost:51204/__vitest__/) to view it in the browser.

The tests are incomplete and therefore "vitest" is not mentioned in the list of technologies.

### `pnpm lint`

Runs eslint.

### `pnpm format`

Runs prettier and modifies the files.
