## Introduction

## Setup

### Prerequisites

To run this application locally, you must have the following installed on your system:
* [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
* [Node.js](https://nodejs.org)
* [Docker](https://docs.docker.com/get-docker/)

Install the package dependencies for the application:

```
yarn install
```

## Run Locally

To run the application locally (via container) on your machine, run:

```
yarn start
```
## Endpoints

Available endpoints

```
GET /
GET /api/books
GET /api/book/{id}
GET /api/duck

POST /api/books/addbook {title: '', author: '' }
```
