module.exports = class Client {
  constructor() {
    this.id = 0;
    this.name = 'Lou';
    this.phone = '1215645646';
  }

  static all() {
    return [
      new Client(),
      new Client(),
      new Client(),
      new Client(),
      new Client(),
    ];
  }

  static first() {
    return new Client();
  }
};
