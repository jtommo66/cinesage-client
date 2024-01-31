# CineSage

Possible logo examples
![](logo1.png)
![](logo2.png)
![](logo3.png)

## Overview

An app for film lovers that will help users to select, rate and review a movies.

### Problem

People have access to an abundance of movies but are bad at making quick decisions and often end up spending more time picking a movie than watching one.

### User Profile

- Movie lovers
  - Who want to watch a movie but can't decide what they want to watch
  - Who want to keep track of the movies they've watched
  - Who want to get recommendations from other movie lovers

### Features

**Genre Preferences** - As a user, I want to be able to filter movies based on genre

**Keyword Selectors** - As a user, I want to be able to filter movies using keywords, such as 'gory' or 'tense' to pull film recommendations to match

**Film of the Day** - As a user, I want to see a random movie on the home page, alongside the welcome page/navigation element for when I want no input in the film I'll watch

**Movie Roulette** - As a user, I want to be able to pull 10 random movies into a roulette wheel, that will pick one at random for me to watch

**Trailers** - As a user, I want to be able to acces movie trailers for the films I'm finding via CineSage.

**User Ratings and Reviews** - As a logged in user (possibly a 'nice to have'), I want to be able to rate and review movies I've watched. These reviews will have like and dislike buttons for other logged in users to up/down vote

## Implementation

### Tech Stack

    - React
    - MySQL
    - Express
    - Client Libraries:
        - react
        - react-router
        - axios
        - react-custom-roulette - https://www.npmjs.com/package/react-custom-roulette
        - ReactJs Popup - https://react-popup.elazizi.com/getting-started/
        - React Bootstrap - https://react-bootstrap.netlify.app/
    - Server Libraries
        - knex
        - express

### APIs

No external APIs will be used in the first sprint, but future updates may include a streaming availability API - https://www.movieofthenight.com/about/api

### Sitemap

- Home Page
- Roulette Page
- Movie List Page
- Movie Page

### Mockups

#### Mobile Pages

![](Homepage-mobile.png)
![](Roulette-page-mobile.png)
![](Single-movie-page-mobile.png)
![](Movie-list-page-mobile.png)

#### Tablet Pages

![](Homepage-tablet.png)
![](Roulette-page-tablet.png)
![](Single-movie-page-tablet.png)
![](Movie-list-page-tablet.png)

#### Desktop Pages

![](Homepage-desktop.png)
![](Roulette-page-desktop.png)
![](Single-movie-page-desktop.png)
![](Movie-list-page-desktop.png)

### Data

Database will hold all movie info (Title, directors, genres, keywords, images and trailer links)

![](CineSage-tables.png)

### Endpoints

- Get /movies

Response -
![](Get-movies.png)

- Get /movies/:id
  - Movie id selected by clicking on movie via movie list page

Response -
![](Get-single-movie.png)

- Get /movies/:title
  - parameters
    - movie title provided as string

Response -
![](Get-single-movie-title.png)

- Get /movies/:keyword
  - parameters
    - keyword selected from drop down menu

![](Get-movies-keyword.png)

- Get /movies/:genre
  - parameters
    - genre selected from drop down menu

![](Get-movie-genre.png)

- Post /movies/:title/review - logged in users only
  - parameters
    - id: movie id
    - name: username
    - userId: user id
    - review
    - rating

Response -
![](post-comment.png)

### Auth

Auth is a possibility, however this is dependant on my own understanding of the functionality. Will have a 'fake' auth page if true auth isn't possible, with the aim to build
this out in the future.

## Roadmap

- Create Server

  - express project with routing

- Create Client

  - react project with routes and boilerplate pages

- Create migrations

- Create server data (50 movies from 5 different genres)

- Deploy client/server projects so all commits reflect in production

- Feature: Home page

  - create navigation bar
  - create Get single movie endpoint
  - implement random movie section

- Feature: Movies List page

  - create get movies endpoint

- Feature: Movie page

  - create get single movie endpoint
  - build trailer functionality (possibly nice to have - minimum aim to have hyperlink to youtube)
  - create post review/rating endpoint
  - create review/rating form and functionality

- Feature: Roulette Wheel

  - use react-custom-roulette to create roulette wheel
  - create endpoints
    - get movie by genre
    - get movie by keyword
  - link to Movie page on selected movie

- Feature: Create Account

  - implement register page + form
  - create post /users/register endpoint

- Feature: Login
  - implement login page + form
  - create post /users/login endpoint

## Nice-to-haves

**User accounts** - Users will be able to create password protected accounts

**Social media features** - Users can create watch lists (possibly to be shared with other users, via url link)

**Integration with Streaming Platforms** - The app will show if the movies they've selected is available on any streaming platforms
