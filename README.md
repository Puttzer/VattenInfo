# How to run locally

**Installing and cloning manually**

you can manually clone the repo or download the repo from the following link:

```
git clone https://github.com/krishnamohanparuchuri/vatten_info_project
```

## Connecting the frontend application for vatten info project

Move to /client folder

**3. Follow the frontend instructions on how to run**

For example, if you want to run the Vue app server:

```
npm install
npm run serve
```

```
application will run on http://localhost:8080/
```

## Connecting the backend application for vatten info project

Move to /server folder

create a new file named `.env` in the specific folder of the server you want to use. For
example:

```
/server/.env
```

Example `.env` file:

you are going to get a link for the .env variables, copy those variables in the `.env` file
[link to .env](https://gist.github.com/krishnamohanparuchuri/dfc5528b9597d7885bf28e63d993f664)
```sh
PORT =''
STRIPE_PUBLISHABLE_KEY=<replace-with-your-publishable-key>
STRIPE_SECRET_KEY=<replace-with-your-secret-key>
```

**3. Follow the server instructions on how to run**

For example, if you want to run the Node server:

```
npm install
npm start
```

**3. Follow these instructions to process payment using stripe**

You need to enter all the specified files in the stripe checkout page

No authentication (default U.S. card): 4242 4242 4242 4242.
expiry date : chosse any date from now
ccv : any 3 digit number
