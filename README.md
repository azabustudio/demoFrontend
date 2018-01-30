# demoFrontend
Front end source of our demo app.
test
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
To connect with REST-API, we define the connection base url as below. 

You can modify the base url if needed.

(RestProvider: \demoFrontend\src\providers\rest\rest.ts)

```apiUrl: string = 'http://localhost:8080/';```


