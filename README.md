### Describe why you implemented certain techniques and technologies

- To fullfill the requirements/goals;
- API to serve json and app, express library used
- Dummy data generator implemented, generates json for API
- Images lazy loaded
- To create MVP, minimum setup used to create react app and using typescript
- Filtering through company name is straightforward using contains on name
- Filtering through services(multiple) uses Set to filter more efficient
- Simple unit tests added for helper functions

### Discuss pros and cons of your approach 
- Pros:
Very recent and efficiency proven technologies like react, node
Fast rendering and filtering for small number of items.
- Cons:
For large number of items, it won't work efficiently.

### Identify how the solution could be improved in the future
- Pagination(either client or server side)
- Using intersection observer to not render items out of screen

### Installation and test instructions

- Install dependencies: `npm i` or `yarn`

- To dev:
1. Terminal: `npm run build:dev` or `yarn build:dev`
2. Terminal: `npm run start:dev` or `yarn start:dev`

- To try:
- 200 Companies: `npm start` or `yarn start`
- 500 Companies: `npm run start-500` or `yarn start-500`
- 1000 Companies: `npm run start-1000` or `yarn start-1000`
- 3000 Companies: `npm run start-3000` or `yarn start-3000`
- 5000 Companies: `npm run start-5000` or `yarn start-5000`

Navigate to http://localhost:3000/

- Additionally to run tests: `npm test` or `yarn test`

### Goals 
- Create a simple React application that shows a list of service providers (companies), each with the following information

1. Company name
2. Logo (you may use a placeholder image, e.g. using https://placekitten.com/)
3. Services (e.g Payroll, Treasury, Implementation, Bank Payments)
4. Country

- The following actions should be possible;

- Search for a company by typing into a search field. The search term gets
matched only against the company name and the list is filtered based on the
search term in real time

- Filter the list using a dropdown menu (with multiple selection) to include only
those companies which offer selected services.

- Create a simple API based on Node.js that returns the list of companies to the frontend. The API
can read the data from a simple JSON source, no database setup is required

- Use TypeScript 

- Document your approach in Readme
1. Describe why you implemented certain techniques and technologies
2. Discuss pros and cons of your approach
3. Identify how the solution could be improved in the future

- Provide installation and test instructions

- Add at least a few tests 