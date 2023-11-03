# Stack-Overflow-Clone

This application provides a platform to resolve queries online, by posting questions over the platform. The app lets users post questions publicly as well as chat with peer developers directly to get the answers.

The app provides the following features:

- Register and login
- Authentication session lasting 1 hour
- Posting a question
- Posting an answer
- Sharing questions and answers
- Voting questions and answers
- Integrated chat feature with notification alerts
- Editing user profile

### Home Page

![hom](https://github.com/LuckyRathore911/Stack-Overflow-Clone/assets/56335557/10c7891b-7be2-4c0f-9b13-68b5eb2642cd)

### Socialize (integrated chat functionality)

![soc](https://github.com/LuckyRathore911/Stack-Overflow-Clone/assets/56335557/a1cf6bc2-646f-4372-be0f-9f9a9f3914ac)

Find the deployed application here: https://stack-overflow-clone-smoky.vercel.app/

To run the project, follow the steps:

- Clone this repository.
- Set the environment variables.
  - At client (.env.local):
    ```bash
    REACT_APP_PROJECT_ID=''
    REACT_APP_PRIVATE_KEY=''
    BACKEND_URL=''
    ```
  - At server (nodemon.json):
    ```bash
    {
    "env":{
        "PORT": '',
        "CONNECTION_STRING":"",
        "SECRET":"",
        "PROJECT_ID":"",
        "PRIVATE_KEY":""
        }
    }
    ```
- Open two different terminals one at the client and the other at the server.
- Run `npm install` and then `npm start` in both terminals.
- Open http://localhost:3000/ in the browser.
