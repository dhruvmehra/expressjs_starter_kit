<!-- ABOUT THE PROJECT -->

## About The Project

Clone this project to kickstart a Express Js, Socketio and Postgres backend framework. Pls feel free to modify as needed and any suggestions to make it better are most welcome.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INSTALLATION -->

## Installation

Installation process is easy, you can only download or clone application from git

1. clone from git `git clone https://github.com/dhruvmehra/expressjs_starter_kit.git`
2. then go to express-starter-kit by `cd expressjs_starter_kit`
3. Install Yarn package `npm install`
4. Set up Postgres (Instructions below)
5. Modify env-example.js file to `.env` file and add required detals (Instructions below)
6. Run the command `npm run dev`
7. Install Postman for testing
<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- INSTRUCTIONS -->

## Instructions

In order to fully set up the project you have to first set up postgres and modify `.env` file to communicate with postgres.

**postgres setup:**

1. Follow the section "Install PostgreSQL on Local Machine" in article to setup your postgres: https://medium.com/bb-tutorials-and-thoughts/how-to-build-nodejs-rest-api-with-express-and-postgresql-674d96d5cb8f
2. Once set up create a table:

```sql
CREATE TABLE USERS(
   USERID CHAR(100) PRIMARY KEY     NOT NULL,
   NICKNAME           CHAR(100)    NOT NULL,
   EMAILID          CHAR(100),
   CREATEDATE        DATE,
   UPDATEDDATE         DATE,
   CREATEDBY          CHAR(50),
   UPDATEDBY          CHAR(50),
   USER_LOCATION          CHAR(200)
);
```

**env configuration:**

```javascript
HOST=localhost
USERNAME=postgres
DB=postgres
DIALECT=postgres
PORT=<port>
PASSWORD=<password>
PSQLPORT=<postgresport>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch
3. Commit your Changes
4. Push to the Branch
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
