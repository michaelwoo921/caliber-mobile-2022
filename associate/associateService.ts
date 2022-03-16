import axios from 'axios';
import { Associate, QcFeedback } from './Associate';

class AssociateService {
  private URI: string;
  constructor() {
    this.URI = 'https://ptqsumnsn9.execute-api.us-west-2.amazonaws.com/default';
  }
  getAssociate(
    token: string,
    a: Associate,
    batchid: string,
    weeknumber: string
  ) {
    return axios
      .get(
        `${this.URI}/qc/batches/${batchid}/weeks/${weeknumber}/associates/${a.asscoiateId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((result) => result.data)
      .catch((err) => {
        console.log(err);
      });
  }

  putAssociate(token: string, q: QcFeedback, update: Object) {
    return axios
      .put(
        `${this.URI}/batches/${q.batchid}/weeks/${q.weeknumber}/associates/${q.associateid}`,
        JSON.stringify(update),
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => result.data)
      .catch((err) => console.log(err));
  }

  patchAssociate(token: string, q: QcFeedback, patch: Object) {
    return axios
      .patch(
        `${this.URI}/batches/${q.batchid}/weeks/${q.weeknumber}/associates/${q.associateid}`,
        JSON.stringify(patch),
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => result.data)
      .catch((err) => console.log(err));
  }
}

export default new AssociateService();
