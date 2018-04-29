# Oauth
Authentication using npm library passport.js.

## Built With

* [express](https://www.npmjs.com/package/express) - The web framework by [Nodejs](https://nodejs.org/en/) used
* [mLab](https://mlab.com/) - The cloud database service used for MongoDB.

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

```
$ git clone https://github.com/poo17nam/oauth.git
```

## Prerequisites
You need to generate keys used in the project following the below steps :
1. Go to [http://console.developer.google.com/](http://console.developer.google.com/)
2. Create a project if not already created, select the freshly created project.
3. Search for Google+ API and hit Enable.
4. Navigate to Credentials and hit Create credentials and select OAuth client ID.
5. Next click on  Configure conscent screen.
   Specify Email, Product name and save changes.
6. Head back to Credentials, select web application, hit Create after entering the details:

  * name - Any name you like.
  * origin - http://localhost:3000
  * redirect URI  - http://localhost:3000/auth/google/redirect

7. Traverse back to Credentials and you will find client ID and client secret. Note both of them.

Go to project and add the keys as follows :

```
$ cd config/
$ vim keys.js
```

Add the following in keys.js
```
module.exports = {
        google: {
            clientID: '<clientID-received-from-Google>',
            clientSecret: '<client-secret-received-from-Google>'
        },
        mongodb: {
          dbURI: '<mongodb-path-received-from-mLab>'
        },
        session: {
          cookieKey: '<create-a-random-secret-of-your-choice>'
        }
};
```

After adding the above, you are good to go. Go ahead and run the project :

```
$ nodemon app.js
```

This will start your server on http://localhost:3000. Go to your browser and check it out.
