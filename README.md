# Wikipedia Top Articles

A simple SPA to search and display the most-viewed articles on wikipedia

![Alt text](public/images/screenshot.png?raw=true "Home page")

Live demo here: [https://adutta91.github.io/wiki-views](https://adutta91.github.io/wiki-views)

## Features
* search by date and country
* frontend pagination of article list
* ability to pin articles (leveraging localStorage)
* detailed article information, including an extract preview and the top three high-traffic days of the current month

## Improvements and future development
* leverage url query parameters to be able to save/send a specific search
* cache responses for top articles (perhaps utilizing a library like useQuery)
* spinner/loading animation
* make the country select a type-ahead component for easier selection
* increased test coverage (unit && e2e)

## To run:
  * clone the repo and `cd wiki-views`
  * (run `nvm use` if using nvm)
  * run `yarn install`
  * run `yarn start`
  * project should be available in browser at `http://localhost:3000`

&nbsp;
&nbsp;

# create-react-app documentation:
## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Requirements

* requires node version 16 or higher (usage of nvm is suggested)

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
