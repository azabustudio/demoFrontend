import { Injectable } from '@angular/core';

const API_URL_KEY = 'API_URL';
const IS_PRODUCT_KEY = 'IS_PRODUCT';

@Injectable()
export class ConfigurationService {
  // TODO remote hard-code
  public static apiServer: string = process.env[API_URL_KEY] || "https://0inswvq7w8.execute-api.us-east-2.amazonaws.com/Kuri/v1/";
  public static isProduct: boolean = (process.env[IS_PRODUCT_KEY] === 'true') || false;
  // public static isProduct: boolean = (process.env[IS_PRODUCT_KEY].toLowerCase() === 'true');
}
