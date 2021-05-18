# mockito
This is a mock server to serve custom json to make easier mock apis, its run with nodemon so it have code reload, you can add routes on runtime execution.

## Setup
* Create folder mocks
* Write your routes
* Create JSON files in ./mocks/**

```
Example routes.json
[
    {
        "method": "post",
        "path": "/login",
        "file": "login.json",
        "status": 200
    },
    {
        "method": "get",
        "path": "/users",
        "file": "users_list.json",
        "status": 200
    }
] 
```

```
Example ./mocks/login.json
{
    "token": "eyasdashdahjdjkhadhjgkasd454asd54as6d4a6d465a4s46a45da6"
}
```

## Start Server
```
 $ npm install
 $ npm start
```