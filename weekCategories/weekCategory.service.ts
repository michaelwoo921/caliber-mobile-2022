import WeekCategory from './WeekCategory';
import axios from 'axios';

class WeekCategoryService {
  private URI;
  constructor() {
    this.URI = 'https://ptqsumnsn9.execute-api.us-west-2.amazonaws.com/default';
  }

  addCategory(
    token: string,
    wc: WeekCategory,
    batchid: string,
    weeknumber: number
  ) {
    return axios
      .post(
        this.URI +
          '/qc/batches/' +
          batchid +
          '/weeks/' +
          weeknumber +
          '/categories',
        wc,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((result) => null)
      .catch((err) => console.log(err));
  }

  getCategory(token: string, weekId: number, batchId: string) {
    return axios
      .get(
        this.URI + 'qc/batches/' + batchId + '/weeks/' + weekId + '/categories',
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((result) => result.data)
      .catch((err) => err);
  }

  deleteCategory(
    token: string,
    weekId: number,
    batchId: string,
    catId: number
  ): Promise<null> {
    return axios
      .delete(
        this.URI +
          'qc/batches/' +
          batchId +
          '/weeks/' +
          weekId +
          '/categories/' +
          catId,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((result) => null)
      .catch((err) => err);
  }
}

export default new WeekCategoryService();
