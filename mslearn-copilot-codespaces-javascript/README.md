[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://github.com/codespaces/new?hide_repo_select=true&ref=main&repo=526682619)

# Use GitHub Copilot to write JavaScript

Explore how you can modify a JavaScript repository using code suggestions from GitHub Copilot to modify and customize a web application. By working with this repository, you'll quickly get hands-on with a JavaScript web app for a portfolio site.

## Requirements

1. Enable your [GitHub Copilot service](https://github.com/github-copilot/signup)
1. Open [this repository with Codespaces](https://codespaces.new/MicrosoftDocs/mslearn-copilot-codespaces-javascript?quickstart=1)

## 💪🏽 Exercise

In this template portfolio, we have a React based web application ready for you to easily customize and deploy using only your web browser.


### 🛠 Step 1: Customize the web app

Customize the portfolio with your own links. Go to `src/App.jsx` and update the `siteProps` with your information. The `siteProps` variable is a JavaScript object that holds key value pairs used to customize the site, it should look like this:

```javascript
const siteProps = {
  name: "Alexandrie Grenier",
  title: "Web Designer & Content Creator",
  email: "alex@example.com",
  gitHub: "microsoft",
  instagram: "microsoft",
  linkedIn: "satyanadella",
  medium: "",
  twitter: "microsoft",
  youTube: "Code",
};
```

### 🔎 Step 2: Animate the social media icons with a prompt

Next, generate a new endpoint with GitHub Copilot by adding the comment: 

An animation can make the social media section more eye-catching. Ask Copilot’s help to animate the icons. Write the following prompt in the `src/styles.css` file:

```css
/* add an amazing animation to the social icons */
```

The suggestion from Copilot should look similar to the following:

```css
img.socialIcon:hover {
  animation: bounce 0.5s;
  animation-iteration-count: infinite;
}

@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
```

### 🚀 Step 3: Work with the suggestion

Accept the suggestion by pressing the tab key. If you don't receive the exact same suggestion, then you can either experiment with the suggestion provided or keep typing the CSS code until it matches.

Your site should already be running in your Codespace, and the change will reload onto the page automatically. To see them, hover over one of your social media icons in the footer to see the magic!


Congratulations, through the exercise, you haven't only used copilot to generate code but also done it in an interactive and fun way! You can use GitHub Copilot to not only generate code, but write documentation, test your applications and more.
