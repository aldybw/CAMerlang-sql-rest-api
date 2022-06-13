# CAMerlang-sql-rest-api
## Welcome to CAMerlang-sql-rest-api
<div id="top"></div>
![3](https://user-images.githubusercontent.com/86178738/168820192-342b7f6d-0572-48f8-84b7-5e95b0dcf200.png)

An quick &amp; efficient skin detection, diagnosis, and consultation application for Android.

Currently in development. Stay tuned in this repository for more information.

## Here's the steps how you can replicate this project

1. Clone this project

> git clone https://github.com/aldybw/CAMerlang-sql-rest-api

2. Install some packages

> npm install

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- GETTING STARTED -->
## Getting Started

Before replicating this project, make sure you have [Git](https://git-scm.com/downloads) installed on your computer.

### Prerequisites

Open your terminal and install the latest Node Package Manager
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation CAMerlang rest API

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/aldybw/camerlang-sql-rest-api
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
5. Go to [Google Cloud Platform](https://console.cloud.google.com/)
6. Go to search field and search for SQL service
7. Create an Instance, and choose mySQL
8. select MySQL 5.7 for Database version
9. Click on "show configuration option and select "machine type"
10. Click the drop down box and choose standard machine (1 vCPU, 3.75 GB)
11. Storage type SSD and select the capacity 10GB. Don't forget to checklist "Enable automatic storage increases"
12. Expand the connections setting, checklist on public IP then click add network, fill the network with "0.0.0.0/0", click done.
13. And create Instance
14. Open new terminal (shell or Bash), make sure your project location to "/CAMerlang-sql-rest-api"
15. Open ".env" file and change to your configuration

#PRODUCTION<br>
DB_PORT=3306 (Your DB port)<br>
DB_NAME=camerlang_db (Your DB name)<br>
DB_USERNAME=root (Your DB username)<br>
DB_PASSWORD=qwerty123 (Your DB pass)<br>
DB_HOSTNAME=35.226.234.192 (Your SQL Public IP address)<br>
INSTANCE_CONNECTION_NAME=35.226.234.192 (Your SQL Public IP address)

14. Open "deploy.sh" file and change to your configuration

GOOGLE_PROJECT_ID=camerlang-development (your project id)<br>
CLOUD_RUN_SERVICE=camerlang-api-service (your service name)<br>
INSTANCE_CONNECTION_NAME=camerlang-development:us-central1:camerlang-rest-api (your connection name)<br>
DB_USERNAME=root (your DB username)<br>
DB_PASSWORD=qwerty123 (your DB pass)<br>
DB_NAME=camerlang_db (your DB name)<br>
DB_HOSTNAME=35.226.234.192 (your SQL public IP address)<br>
DB_PORT=3306 (your DB port)

15. Run the command below:
   ```sh
   ./deploy.sh
   ```
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Aldy - [GitHub](https://github.com/aldybw), [LinkedIn](https://www.linkedin.com/in/aldycky-bagus-witjaksana-4969441b0/)
Tomi - [GitHub](https://github.com/kurak57), [LinkedIn](https://www.linkedin.com/mwlite/in/tomi-timutius-31b1ba137)

Project Link: [https://github.com/aldybw/CAMerlang-sql-rest-api.git]([https://github.com/your_username/repo_name](https://github.com/aldybw/CAMerlang-sql-rest-api.git))

<p align="right">(<a href="#top">back to top</a>)</p>
