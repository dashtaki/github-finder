# Github Finder

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
The application shows the repositories of a user as a list based on Github user search and for each repo the following information should be displayed:
Repository name, the number of stars and forks. Each Repository item in the list should be clickable and open the repository on Github.

# Get started

### Clone the repo

```shell
git clone https://github.com/dashtaki/github-finder.git
cd github-finder
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm i
```
### Github Token for Authorization
Before you start the application you have to generate a token to fetching data from Github API.
1. First of all, you should create a Github Token from [Here](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token). 
2. Just pass the generated token in `src/index.js`, then put it in line 12, It would be like: 
   `const TOKEN = 'generatedToken'`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.\
You will also see any lint errors in the console.\
Shut it down manually with `Ctrl-C`.

### `npm cypress:open`

Launches E2E test runner in the interactive watch mode.\
For running test you have to:

1. Run `npm start`
2. Run `npm run cypress:open`
3. You can see test cases in Cypress window

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run pretty`

Using [Prettier](https://prettier.io/) for opinionated code formatter.
It will take care of formatting for you.
Prettier creates an abstract syntax tree from your code and uses it to write new code formatted according to a set of rules.
In addition, I check pretty before every commit by add a pre-commit hook. For more detail check package.json, husky section.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However, we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### React-Redux

I used Redux state manager for memoizing user data. For instance, if user search for something in search page
and then go to repositories page, if the user come back to search page selected user and search result will be shown
and no need for search it again. Also, there was one option for implementing state manager like [Jotai](https://github.com/pmndrs/jotai)
then you don’t need to create any actions, reducers, or dispatchers when using Jotai, but I would rather to use `react-redux` according to the assignment.

### GraphQL

I used GraphQl for fetching data, You can check the queries for fetching `users` and `repositories` from `src/qraphql/queries/`.

### Styled-Components

There are tons of ways to use styling in React, and In this project I used styled-component approach I think this way looks to be the best practice is to make components within
your component to style directly. These styled components affect only
that specific component in which they are rendered, and nothing else. Components in React work the best when they are small, focused, and reusable.

### Browse-ability and bookmark-ability

According to the optioanl points of the assignment;
1. User can see repositories of a user from the search screen or even you can directly
   use specific Github user in address bar as param, for instance for Github user **dashtaki** it should be
   like `/respositories/dashtaki`.
2. Because user will see the repositories in a separate route, So I just put a back button(to the search page) instead of clear button.

### SOLID

Regarding the `S` for `SOLID` I just tried to keep each function(component as a function as well) to
just responsible for a single task. That's why I just created a separate component for every part
and also keep the simple stupid.

### BEM

Use [BEM](http://getbem.com/introduction/) as CSS naming methodology and naming convention for writing cleaner and more readable CSS classes.
BEM also aims to write independent CSS blocks in order to reuse them later in your project.
That’s what I preferred to don’t use Bootstrap as a CSS framework and one more reason was it is a small project that it can be handled without any CSS framework.

### Spinner

I have created a component as Spinner for showing a loader while fetching data from teh server.

### Branching

I tired to create the feature/bugfix branches for some that you can check it out by run
`git branch`, However, you can see the merged changes iin `master` branch.

