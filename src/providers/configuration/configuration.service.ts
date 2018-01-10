import { Injectable } from '@angular/core';

declare const process: any;

const API_URL_KEY = 'API_URL';
const IS_PRODUCT_KEY = 'IS_PRODUCT';

@Injectable()
export class ConfigurationService {
  public static apiServer = process.env[API_URL_KEY];
  public static isProduct = process.env[IS_PRODUCT_KEY];
}