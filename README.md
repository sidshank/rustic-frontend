# RustIC

A frontend app that gives a user some basic functionality over the contents of an S3 bucket, via the [rustic-backend](https://github.com/sidshank/rustic-backend) app. The first cut of this project and its corresponding backend was the result of a 2 day hackathon at the end of 2019, at Prodigy Education.

The Rust based backend was my primary focus for the hackathon.

This app interfaces with the backend to:

1. Display files in an S3 bucket, along with any associated tags
2. Allow uploading a file to the bucket. Tags can be added optionally.
3. Basic filtering of the displayed files, by partial / full tag names, or file names.

This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and in addition to React, uses:

1. React Router
2. React Bootstrap
3. The react-grid-gallery and react-tagsinput components.

## Available Scripts

In the project directory, you can run:

### `yarn`

To install all the dependencies for this project, once you've cloned the repo locally.

### `yarn start`

Runs the app in the development mode.<br />
Be sure to follow the instructions in the [rustic-backend](https://github.com/sidshank/rustic-backend) app, to run that app, before you start this one.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
