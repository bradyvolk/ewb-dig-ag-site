# Dig Ag React App

## Building, Deploying, Developing

Run these commands from within the `ewb-dig-ag-site` subfolder

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

[Styled Components](https://github.com/styled-components/styled-components) is used to make styling sections of content and components easier

<br />
<br />

## Suggested VSCode Extensions

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
- [Emmet HTML Snippets](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets)
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)

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
- `imr` or `imrc` to give the necessary import line for React and `imrc` also gives the import for component if you are making a class component

## Development Process (and Github command help)

1. To check current branch and to checkout `main`:

```
git branch 
git checkout main
git pull
```


2. To create new branch while `main` is checked out (-b means create new branch):

```
git checkout -b <ISSUEID#_branch-name>
```



4. Make changes in new branch:

5. Add commit and push your changes:

```
git add <path-to-files-you-changed>
git commit -m "Insert short commit message that answers question 'this commit will do what?'"
git push
```

6. If your upstream isn't set, when you run `git push` in step 5, it will suggest some command like the one below to set your upstream and push to it:

```
git push --set-upstream origin <insert your branch name>
```

- once command above is run (step 6), the URL for pull request
  will appear in command line output. Navigate to Pull Request page using URL.
- Make sure you are comparing your new branch to the main branch (main should
  be on the left hand side of the arrow)
- Then request reviewers (located on the right side of the UI)
