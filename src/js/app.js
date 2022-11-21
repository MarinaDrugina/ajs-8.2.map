export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [1, 'Bad request'],
      [2, 'Unauthorized'],
      [3, 'Payment Required'],
      [4, 'Request Timeout'],
    ]);
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return ('Unknown error');
    }
    return this.errors.get(code);
  }
}
