# CAMerlang-sql-rest-api
<div id="top"></div>
## Welcome to CAMerlang-sql-rest-api

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

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
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

16. Open "deploy.sh" file and change to your configuration

GOOGLE_PROJECT_ID=camerlang-development (your project id)<br>
CLOUD_RUN_SERVICE=camerlang-api-service (your service name)<br>
INSTANCE_CONNECTION_NAME=camerlang-development:us-central1:camerlang-rest-api (your connection name)<br>
DB_USERNAME=root (your DB username)<br>
DB_PASSWORD=qwerty123 (your DB pass)<br>
DB_NAME=camerlang_db (your DB name)<br>
DB_HOSTNAME=35.226.234.192 (your SQL public IP address)<br>
DB_PORT=3306 (your DB port)

17. Run the command below:
   ```sh
   ./deploy.sh
   ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add Changelog
- [x] Add back to top links
- [ ] Add Additional Templates w/ Examples
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [ ] Chinese
    - [ ] Spanish

See the [open issues](https://github.com/othneildrew/Best-README-Template/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@your_twitter](https://twitter.com/your_username) - email@example.com

Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Malven's Flexbox Cheatsheet](https://flexbox.malven.co/)
* [Malven's Grid Cheatsheet](https://grid.malven.co/)
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [Font Awesome](https://fontawesome.com)
* [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png

