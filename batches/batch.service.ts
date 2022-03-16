import axios from 'axios';

class BatchService {
  private URI: string;
  constructor() {
    this.URI = 'https://ptqsumnsn9.execute-api.us-west-2.amazonaws.com/default';
  }
  getValidYears(token: string) {
    return axios
      .get(this.URI + '/batches', {
        headers: { Authorization: `Bearer ${token}` },
        params: { query: 'ValidYears' },
      })
      .then((result) => result.data)
      .catch((err) => console.log(err));
  }
  getBatchesByTrainerEmail(token: string, trainerEmail: string) {
    return axios
      .get(this.URI, {
        headers: { Authorization: `Bearer ${token}` },
        params: { trainerEmail: trainerEmail },
      })
      .then((result) => result.data)
      .catch((error) => {
        console.error(error);
      });
  }
  getAllBatches(token: string, year: number) {
    return axios
      .get(this.URI, {
        headers: { Authorization: `Bearer ${token}` },
        params: { year: year },
      })
      .then((result: any) => result.data)
      .catch((error: any) => {
        console.error(error);
      });
  }
}

const batchService = new BatchService();

export default batchService;
