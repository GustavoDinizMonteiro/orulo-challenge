Orulo Challenge
===========

Overview
--------

This challenge aims to show the knowledge in development as well as good programming practices in ReactJs and Rails, among other skills.
The challenge is to create an application in which the user can view in a paginated list of buidings an can
like some of them.

# Solution

For my solution i decided to use ReactJs for the interface and a simple Rails api to be able to persist the likes.

The solution has the following features:

- List of offers
- Pagination
- Like offers
- Sharing

However many features that i would like to have delivered but the small time i got to work did not allow can be listed following:

- User accounts
- Favorites session (filtering all buildings by ids)
- Search Bar (using http://api.orulo.com.br.s3-website-us-east-1.amazonaws.com/#operation/buildingNameSearch)
- Filters (by number of rooms, area... exploring the API documentation)
- View to access the building information in more detail
- Tests for backend and frontend
- Continuos integration with Travis CI 
- API documentation with swagger

## Building from source

1. Ensure you have 

   ```nodejs``` installed - goto https://nodejs.org/en/download/package-manager to see instructions to install for your OS.    
   ```postgresql``` installed - goto https://www.postgresql.org/download to download latest version.   
   ```ruby``` instaled - goto https://www.ruby-lang.org/en/downloads to see instructions to install. NOTE: requeired version is **2.5.1**

1. Clone this repository to your local filesystem (default branch is 'master')

1. To download the dependencies

    * In UI project:
        ```
            npm install
        ```
    
    * In API project:
        ```
            bundle install
        ```

1. For UI project you need to create a ```.env``` file based in ```.env.sample``` file and provide values to enviroment variables.

1. For API project you need to fill values for database conection in ```config/database.yml``` file.

1. To run the application, run the following commands
    * to UI project:
        ```
            npm start
        ```
    * to API project:
        ```
            rake db:create db:setup && rails s
        ```

### Docker

Additionally, you can use docker container to automatise backend deployment using the image available in docker hub 

``` 
    docker pull gmonteiro/orulo-challenge-backend:latest
```

ou building from source following next steps o backend bolder:

```
    docker build . && docker-compose build && docker-compose run web rake db:create db:setup
```

See the online demo in [here](https://orulo-challenge-ui.herokuapp.com/)