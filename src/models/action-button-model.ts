export class ActionButton {
  buttonName: string;
  action: Function;
  option: any;

  constructor(buttonName: string, action: Function, option: any) {
    this.buttonName = buttonName;
    this.action = action;
    this.option = option;
  }
}