export class DayRepository {
  constructor(base, port) {
    this.base = 'http://localhost';
    this.port = '3000';
    this.baseUrl = this.base + ':' + this.port;
    
  }
  getDays(cb) {
    let dayRequest = new Request(this.baseUrl + '/days');
    fetch(dayRequest).then(response => {
      response.json().then(json => {
        cb(json);
      });
    });
  }

  getDay(id, cb) {
    let dayRequest = new Request(this.baseUrl + '/day/' + id);
    fetch(dayRequest).then(response => {
      response.json().then(json => cb(json));
    });
  }
}
