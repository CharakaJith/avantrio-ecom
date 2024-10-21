# avantrio-ecom

## Part 1

### System architecture

- microservice architecture
  - scalability:
    - allows each service (product catalog, payments, orders) to scale idenpendently
    - handle high traffic effeciently without affecting the systme performance
    - easy to optimize resources
  - flexibility:
    - different services can be implemented, updated and deployed without affecting other existing services
    - faster feature development
    - easy to integrate new features

[system architecture diagram](https://lucid.app/lucidchart/dcba4fb6-f50f-46a3-85fd-83e322692348/view)

### Database design

- SQL based database
  - ideal for transactional data
  - support cmplex queries an commerce platfor requires

### Rendaring approach

- separate front-end/back-end architecture
  - scalability:
    - allows independant scaling for front-end and back-end
    - if microservice architecture was chosen for the back-end, can be scaled based on specific needs
      better for search engine indexing
  - Flexibility:
    - can use different tech stacks
    - easy to integrate with third party services
    - easy to add new features without affecting the current system
    - can adapt to new technologies easily

### Technology stack

- react for front end

  - react is component based
  - easy to implemenent reusable components
  - react virtual dom enhance rendering speed
  - SEO-friendly

- nodejs for back end
  - if choosing javascript based technology for front-end development
  - async and event-driven
  - fast because of v\* engine
  - support microservices

### Clound infrastructure

### Scalability

## Part 2

### Installation

1. Clone the repository

   ```bash
    git clone https://github.com/CharakaJith/avantrio-ecom.git
   ```

2. Step into project directory

   ```bash
   cd avantrio-ecom
   ```

3. Install npm packages

   ```bash
    npm install
   ```

4. Create `.env` file

   ```bash
   touch .env
   ```

5. Add the following content to the `.env` file
   ```bash
   # environment variables
   NODE_ENV=development
   PORT= 8000
   ```

### start the server

    ```bash
    npm run start
    ```

### Documentations

- [Postman API documentation](https://documenter.getpostman.com/view/28014836/2sAXxY2nsL)
- [system architecture diagram](https://lucid.app/lucidchart/dcba4fb6-f50f-46a3-85fd-83e322692348/view)
