# Dig Ag React App

## Building, Deploying, Developing

To build the app:

```
npm run build
```

And then, to deploy:

```
firebase deploy
```

And if you want to develop the app without building and deploying everytime, you can develop locally with:

```
npm run start
```

Then, anytime you save, your local version of the site will be updated.

<br />
<br />

## Libraries In Use

As of now, we use a few libraries to make development easier.

[Firebase](https://firebase.google.com/docs/hosting) is used to deploy the application to our domain name https://ewb-dig-ag.org.

[React Bootstrap](https://react-bootstrap.github.io/getting-started/introduction/) provides us with some basic components to maintain consistent style.

<br />
<br />

## Suggested VSCode Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
- [Emmet HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)

You Can add these settings to your `settings.json` to ensure the Prettier formatting and Emmet snippets work correctly:

```
"editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.formatOnSave": true,
  "emmet.includeLanguages": {
    "javascript": "html"
  }
```

<br />
<br />

## Useful snippets

- `rce` used to create a React class component
- `rfce` used to create a React functional component
- `rconst` used to create a constructor and state in React class component
- `div` or any HTML tag name will automatically create the closing tag and add the chevrons
