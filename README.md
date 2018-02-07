# demoFrontend
Front end source of our demo app.

## 1. How to Install
```git clone git@github.com:azabustudio/demoFrontend.git```

## 2. How to Run
### Install necessary node modules
Switch to project folder.<br>
```cd demoFrontend```

Install node modules.<br>
```npm install```

### start the server
Start the iOS and andorid simulator: <br>
(The ionic server listens to the port `8100` at default.)<br>
```ionic serve --lab```

### How to Change REST-API(back-end) Base-url
To connect with REST-API, we define the connection base url in the environment file (~/demoFrontend/.env) as below.

Sample
```sh
API_URL=https://511r7giw3g.execute-api.us-east-2.amazonaws.com/production/
```

The value of __API_URL__ is depends on the API Gateway which you connect with. And, we can confirm the value of it on the API Gateway console window (__stages__ tab).


