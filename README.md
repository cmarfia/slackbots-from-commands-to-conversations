# Slackbots — from commands to conversations

This is the codebase for 2019 DevUp conference talk. 

The slides for the talk can be found [here](presentation.pptx).

## Talk Information 

### Abstract
Have you ever tried building a Slackbot, but couldn't move past single word commands? Processing natural language is complex and daunting for anyone especially beginners. What if there was a shortcut for diving into natural languages processing (NLP). That is where classifiers come in. They can streamline your introduction into NLP. In this session we will build a NodeJS Slackbot leveraging a regression classifier. My hope is that you will be able to turn around and use this knowledge. Lets make your next Slackbot capable of understanding natural language together.

## Setup

### Environment Variables
The following environment variables are needed to run this application.

```bash
# For Mac or Linux
export SLACKEDEX_SLACK_TOKEN="slack_token"
```

> You will get the Slack token from an application created via the [Slack API site](https://api.slack.com/apps). 

### Repo Setup
You will need to have NodeJS v10+ to run this application. 

1. Clone the repository
2. Setup up the _Environment Variables_
3. run `npm install` to install all the third party packages. 

## How to Run (Package commands)

Run the following command to start the completed solution.

```bash
npm run completed
```

To run the non-completed version without hot-reloading you can run the following command.

```bash
npm start
```

## Questions
If you have any questions, feel free to reach out to `@Chris Marfia` on the STL Tech Slack.
