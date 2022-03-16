import axios from 'axios';

class BatchPageService {
  private URI: String;
  constructor() {
    this.URI = 'https://ptqsumnsn9.execute-api.us-west-2.amazonaws.com/default';
  }

  getAssociates(token: string, batchid: string): Promise<[]> {
    return axios
      .get(this.URI + '/qc/batches/' + batchid, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => result.data)
      .catch((err) => {
        console.log('cannot get associate:', err);
        return [];
      });
  }
}

const batchPageService = new BatchPageService();
export default batchPageService;
