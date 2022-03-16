import axios from 'axios';
import QcWeek from './QcWeek';

class BatchWeekService {
  private URI;
  constructor() {
    this.URI = 'https://ptqsumnsn9.execute-api.us-west-2.amazonaws.com/default';
  }
  private config(token: string) {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  }

  getQcWeeksByBatchId(token: string, batchid: string) {
    return axios
      .get(`${this.URI}/qc/batches/${batchid}/weeks`, this.config(token))
      .then((result) => result.data)
      .catch((err) => console.log(err));
  }
  addQcWeek(token: string, qw: QcWeek) {
    return axios
      .post(this.URI + `qc/batches/${qw.batchid}/weeks`, qw, this.config(token))
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  }
  updateQcFeedback(token: string, qw: QcWeek) {
    return axios
      .post(
        this.URI + `qc/batches/${qw.batchid}/weeks/${qw.weeknumber}`,
        qw,
        this.config(token)
      )
      .then(() => {})
      .catch((err) => {
        console.error(err);
      });
  }
}

export default new BatchWeekService();
