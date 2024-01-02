# Getting Started

- clone the repository to a directory of your choice.
- open a command shell(terminal) and navigate into the cloned repository

## Running the app locally

### With docker-compose

- You can run the app fully along with the database using docker-compose (requires `docker` and `docker-compose` to be installed on your machine).
- Run `docker-compose up`
- The above command should download all the dependencies and spin up the server.
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### With local dev server

- If you would like to run the app locally without using docker the following needs to be installed:
  - `node`
  - `npm`
- Install the dependencies using `npm install` or a node package manager of your choice(yarn, pnpm, etc.)
- The project requires an instance of postgresdb to be running on your machine. You can use the provided `docker-compose.db.yml` file to spin up an instance configured to work with the app.
- Run `docker-compose -f docker-compose.db.yml up`
- Wait for the database to initialise.
- Open another shell on the same working directory.
- Run `npx prisma db push` and then `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running tests

The project contains unit tests using `jest` and `react-testing-library` and automation tests using `playwright`.

### Unit tests

- `npm run test`

### Automation tests
- Install dependencies with ```npm install```and ```npx playwright install```
- If the app is running with docker-compose:
  - Run the app with `docker-compose up`
  - Run `npm run test:e2e`
- If running locally:
  - Run the local server as described in the previous section.
  - Open a new shell and run `npm run test:e2e`
