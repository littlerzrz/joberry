<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- [![MIT License][license-shield]][license-url] -->


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/NEU-CS5610-2022-01-VAN/joberry">
    <img src="images/logo.png" alt="Logo" width="80" height="auto">
  </a>

<h3 align="center">Joberry</h3>

  <p align="center">
    Joberry is a Web App for people seeking job advices and resources. <br />
    People can post their experiences and ideas during job hunting, and also give advices to others.
    <br />
    <a href="https://github.com/NEU-CS5610-2022-01-VAN/joberry"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://joberry.vercel.app/">View Live Demo</a>
    ·
    <a href="https://github.com/NEU-CS5610-2022-01-VAN/joberry/issues">Report Bug</a>
    ·
    <a href="https://github.com/NEU-CS5610-2022-01-VAN/joberry/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#design">Design</a>
      <ul>
        <li><a href="#identity-and-typography">Identity and Typography</a></li>
      </ul>
       <ul>
        <li><a href="#screens">Screens</a></li>
      </ul>
    </li>
    <li><a href="#about-the-project">About The Project</a></li>
    <ul>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#features">Features</a></li>
      </ul>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- DESIGN -->
## Design
#### Identity and Typography:

[![Identity][identity-image]](https://joberry.vercel.com)

#### Screens:

[![Identity][screens-image]](https://joberry.vercel.com)



<!-- ABOUT THE PROJECT -->

## About The Project
Homepage:

[![Joberry Website Screen Shot][product-screenshot]](https://joberry.vercel.com)



<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [MySQL](https://www.mysql.com/)
* [Express.js](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)
* [Prisma](https://www.prisma.io/)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- FEATURES -->
### Features

- Backend Features
  - Users Table & API
  - Posts Table & API
  - Activities Table & API
  - Berries Table & API
  - Comments Table & API

- Frontend Features
  - Home Page
  - Post Detail Page
  - User Detail Page
  - New/Edit Post Page
  - Search Result Page
  - Sign In Page
  - Profile Page 
  - Profile Settings Page


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- FRONTEND -->
## Frontend
### Frontend File Structure

```
├── api
├── components
│   ├── basics
│   │   └── avatars
│   ├── data_display
│   ├── data_input
│   └── feedback
├── pages
│   ├── basic
│   ├── dist
│   ├── not_found
│   ├── post
│   ├── profile
│   ├── search
│   └── user
├── stores
├── styles
│   ├── basics
│   └── pages
├── tests
└── utils
```


### Frontend Routes

```js
//basic routes for everyone
"/home"
"/discover"
"/search/:search"

"/users/:id"
"/posts/:id"

//login & verify routes
"/sign-in"
"/verify-user"


// routes with authorization/logged in only 
"/posts/new"
"/posts/edit/:id"
"/profile"
"/profile/settings"

// not found route
"/404"

```

<p align="right">(<a href="#top">back to top</a>)</p>

## Backend

### Backend File Structue

```
├── controllers
├── middleware
├── models
├── prisma
└── routes
```

### Backend Routes
```js
//post routes without authorization check

GET "/posts"                   //get all posts
GET "/posts/:id"               //get detail of a post
POST "/posts/search"           //search for posts

//post routes with authorization check
POST "/posts/"                 //create a new post
PUT "/posts/:id"               //update a post with id
DELETE "/posts/:id"            //delete a post with id

//user routes without authorization check
GET "/users/:id"               //get user detail with id

//user routes with authorization check
POST "/users/verify-user"      //verify a user
GET "/users/profile"           //get profile of a logged in user
PUT "/users/profile"           //update profile of a logged in user
DELETE"/users/account"         //delete account of a user

//discover routes without authorization check
POST "/discover/hot"           //get the posts that have most comments over the past week
POST "/discover/most-berries"  //get the posts that have most berries over the past week

//comment routes without authorization check
GET "/comments"                //get all comments of a post

//comment routes with authorization check
POST "/comments/"              //create a new comment on a post
DELETE "/comments/:id"         //delete a comment with id

//berry routes without authorization check
GET "/berries"                //get all berries of a post

//berry routes with authorization check
POST "/berries/"              //create a new berry on a post
DELETE "/berries/:id"         //delete a berry with id

```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

- Xinyi Ren - [@littlerzrz](https://github.com/littlerzrz) - ren.xiny@northeastern.edu
- Xiaoben Yin - [@XiaobenYin](https://github.com/XiaobenYin) - yin.xiaob@northeastern.edu
- Chenru Wu - [@wuchenru](https://github.com/wuchenru) - wu.chenru@northeastern.edu

Project Link: [https://github.com/NEU-CS5610-2022-01-VAN/joberry](https://github.com/NEU-CS5610-2022-01-VAN/joberry)

<p align="right">(<a href="#top">back to top</a>)</p>





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/NEU-CS5610-2022-01-VAN/joberry.svg?style=for-the-badge
[contributors-url]: https://github.com/NEU-CS5610-2022-01-VAN/joberry/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/NEU-CS5610-2022-01-VAN/joberry.svg?style=for-the-badge
[forks-url]: https://github.com/NEU-CS5610-2022-01-VAN/joberry/network/members
[stars-shield]: https://img.shields.io/github/stars/NEU-CS5610-2022-01-VAN/joberry.svg?style=for-the-badge
[stars-url]: https://github.com/NEU-CS5610-2022-01-VAN/joberry/stargazers
[issues-shield]: https://img.shields.io/github/issues/NEU-CS5610-2022-01-VAN/joberry.svg?style=for-the-badge
[issues-url]: https://github.com/NEU-CS5610-2022-01-VAN/joberry/issues
[license-shield]: https://img.shields.io/github/license/NEU-CS5610-2022-01-VAN/joberry.svg?style=for-the-badge
[license-url]: https://github.com/NEU-CS5610-2022-01-VAN/joberry/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/xinyi-ren-31613362
[product-screenshot]: images/screenshot.png
[identity-image]: images/identity.png
[screens-image]: images/screens.png

