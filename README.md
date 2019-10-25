# Invite

Invite is a place to host or discover events.

Invite is created with a React with Redux frontend and a Rails API backend with a PostgreSQL database. Please find the Invite API repository [here](https://github.com/natjng/invite-api).

Users can sign up or login with their email address to start using Invite. Users can host events by creating an event and be an event guest by RSVPing to other users' events.

## Installation

Clone repository. 

In your terminal, cd to the cloned file. 

Run `npm install` to install application dependencies.

Run `npm start` to start the application. This command should open a browser window to [http://localhost:3000](http://localhost:3000).

## Usage

The Invite client works with the [Invite API](https://github.com/natjng/invite-api) to display user and event data. Please follow the Invite API README for installation instructions.

On the home page, a user can get started by creating an account with an email address. 

Upon successful account creation, the user will be logged in and brought to their dashboard where they can choose to create a new event or view existing events. 

## Features

**User:**
- Can create events
- The user creating the event is the event host
- Can RSVP to other users' events as a guest
- Can cancel RSVP by navigating to the event and clicking 'Cancel'
- Can navigate to the 'Events' page to view all events on Invite
- Can toggle 'Events' / 'Attending' or 'Hosting' to view events the user has RSVP'd to or events the user is hosting
- Can edit profile

**Event:**
- Event belongs to a host
- Event can have many guests
- When user is logged in, event card/event shows whether the current user is the event host or if the event has been RSVP'd to

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/natjng/invite-client. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Invite project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/natjng/invite-client/blob/master/CODE_OF_CONDUCT.md).

## Notes

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
