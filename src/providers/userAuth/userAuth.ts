import { Injectable } from '@angular/core';
import { CognitoUserAttribute, CognitoUserPool, CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { User } from '../../models/user-model';

const PoolData = {
    region: 'us-east-2',
    UserPoolId: 'us-east-2_mwPBkEpUG',
    ClientId: '907brjr32oh8lomkftun6ab2g'
};

const userPool = new CognitoUserPool(PoolData);

@Injectable()
export class UserAuthProvider {

    constructor() {
    }

    /**
     * Register a new user.
     *
     * @param {User} user
     */
    signupUser(user: User) {

        // Generate user attribute item data.
        const dataEmail = { Name: 'email', Value: user.eMail };
        const dataFamilyName = { Name: 'family_name', Value: user.lastName };
        const dataGivenName = { Name: 'given_name', Value: user.firstName };

        const userAtts = [
            new CognitoUserAttribute(dataEmail),
            new CognitoUserAttribute(dataFamilyName),
            new CognitoUserAttribute(dataGivenName),
        ];

        var promise = new Promise((resolve, reject) => {
            userPool.signUp(user.loginName, user.password, userAtts, null, ((err, result) => {
                if (err) {
                    console.log('There was an error ', err);
                    reject(err);
                } else {
                    console.log('You have successfully signed up!');
                    resolve(result);
                }
            }))
        });

        return promise;
    }

    /**
     * user login.
     *
     * @param {string} username
     * @param {string} password
     */
    signinUser(username: string, password: string) {
        const authData = {
            Username: username,
            Password: password
        };

        const authDetails = new AuthenticationDetails(authData);

        const userData = {
            Username: username,
            Pool: userPool
        };

        const cognitoUser = new CognitoUser(userData);

        var promise = new Promise((resolve, reject) => {
            cognitoUser.authenticateUser(authDetails, {
                onSuccess: (result) => {
                    console.log('Login success!');

                    var idToken: any = result.getIdToken();
                    localStorage.setItem('idToken', idToken.jwtToken);
                    localStorage.setItem('loginName', username);

                    resolve(result);
                },
                onFailure: (err) => {
                    console.log('There was an error during login, please try again -> ')
                    reject(err);
                }
            })
        });

        return promise;
    }

    /**
     * User logout.
     *
     * @param {string} username
     *
     */
    logoutUser(username: string) {
        const userData = {
            Username: username,
            Pool: userPool
        };
        const cognitoUser = new CognitoUser(userData);

        var promise = new Promise((resolve) => {
            cognitoUser.signOut();

            localStorage.removeItem("idToken");
            localStorage.removeItem("loginName");

            console.log("Logout success!")
            resolve("success");
        });
        return promise;
    }

}
