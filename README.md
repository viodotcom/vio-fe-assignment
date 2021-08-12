# FindHotel Front-end Engineer Assignment

Thanks for applying for the Front-end Engineer position at FindHotel!

You can find the instructions [here](INSTRUCTIONS.md)

## The sample project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Documentation

Rooms data in URL should be recieved by query parameter ```roomData```, and the right URL with rooms data looks like ```URL http://localhost:3001/?roomsData=1:4,6|3```

## TODO:

1. Data from the URL query string is stored in a local variable for reset store to initial statement. It needs to use redux for it.
2. Better test cases for business logic. Plus add tests for components to test UI.
3. Eject webpack config and setup no relative paths to common things like constants, store, ui-components, assets, libs etc
4. Add some approach for styles. Maybe scss. And choose a strategy for styles. Create common styles file, make a list of colors and other style-guide values. And make the layout pixel-perfect.
5. Better file structure for react components. Some strategy for it.
6. Separate functions for side effects. Now it functions for working with URL query string - serializeRoomsDataToQueryParams, getRoomsDataFromQueryParams. Make a test for serializeRoomsDataToQueryParams.
7. Create a component for icons to avoid duplicated assets (cross, cross_red), and make icons more useful - remove color filling and set it by prop of the icon component (maybe like “primary”, “accent” etc).
8. Implement some tools for validating users' data. Now it is a function validateRoomsData. It would be better to store interfase for this data in one place.
9. Analyze re-renders and make optimizations.
10. Check details of UI for mobile. Now it is unacceptable for sure. I didn’t test it on mobiles enough. And it needs design for the desktop.
11. Now the fonts are not correct. There is a custom font in design. And it needs to be fixed.

