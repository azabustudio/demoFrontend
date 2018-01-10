import { Injectable } from '@angular/core';

const API_URL_KEY = 'API_URL';
const IS_PRODUCT_KEY = 'IS_PRODUCT';

@Injectable()
export class ConfigurationService {
  public static apiServer: string = process.env[API_URL_KEY];
  public static isProduct: boolean = (process.env[IS_PRODUCT_KEY].toLowerCase() === 'true');
}