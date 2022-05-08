# Welcome To RapidJobs
Git commits/comments don't really allow me to be detailed in the information/code I push to the repo,
so at the top of the readme (like right here) I am going to keep a general status update for the repo.

# Latest (5/7/22):
- Rudimentary REST API in place for a basic card, tonight I'll be working on getting the API secured via OAuth2, using Google as a token provider.
- Authenticated with Google as the only option can force a very small percentage of users away, but will ensure that every user knows exactly where their data is. Having mulitple sign-in options will complicate the backend and the user experience. For now at least.
- Hopefully next update will have a rest api working for the basic job card, and be completely secured with OAuth2. OAuth2 is a complicated protocol, and I don't understand it fully, but will be using Okta's documentation for their JWTVerifier as I can trust they know what they are talking about.

# (5/5/22):
- Going to forget what I said before, for now at least. Will use css modules to scope css easier sometime in the future
- Right now, the focus is to get to a working backend in place. (Using javascript, I was going to use Golang, but that is going to take a while since I'm not really familiar with Go yet).

# (3/3/22):
- Going to start breaking the component tree into smaller more reusable components
- May introduce styled components or a better way of bundling css to specific components to make this better
- React documentation states that css is generally faster than css-in-js solutions, but I am going to find benchmarks on this to confirm/make a decision
- Ideally I want to move away from using css animations and controlling them via class names as it is very difficult if not impossible with more complex/nested css, to solve this I'm going to learn/implement the react-spring library (the only animation at the time of writing is the spinning dice at the bottom left of the dashboard page)
- Also I need to figure out how nesting components work, so that I can create a base component and branch others off of it (currently I have 4 separate Card components that all should really be extended off of the Card component)

## Side notes:
- This was actually a pretty big patch today, although not a lot visually got done, I resolved a couple bugs that were occuring with styling for mozilla, im not even going to test Internet Explorer, I don't think I ever will.
- I benefit from the aim of this website being for developers, and technical recruiters/hiring managers, so having a super modern stack is going to be a good choice + don't have to worry too much about compatibility (im only going to worry about Chrome and Firefox for now)
- With that being said, I'm getting ready to start learning some React Native as I want to approach everything from a React-first perspective so that I can truly write once, deploy anywhere and not be writing very specific JSX code where half my components won't work in a native environment.

<br>
<br>
<br>
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
