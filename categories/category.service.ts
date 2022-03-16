import axios from 'axios';
import Category from './Category';
class CategoryService {
  private URI: string;
  constructor() {
    this.URI = 'https://ptqsumnsn9.execute-api.us-west-2.amazonaws.com/default';
  }

  getCategories(token: string, active?: boolean) {
    return axios
      .get(this.URI + '/categories', {
        params: { active: active },
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => {
        console.log(result.data);
        return result.data;
      })
      .catch((err) => {
        console.log('Error getting categories: ', err);
        return null;
      });
  }

  addCategory(token: string, skill: string) {
    return axios
      .post(this.URI + '/categories', skill, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => result.data)
      .catch((err) => {
        console.log('Error adding category: ', err);
        return null;
      });
  }
  updateCategory(token: string, category: Category) {
    const { id } = category;
    return axios
      .put(this.URI + '/categories/' + id, category, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((result) => result.data)
      .catch((err) => {
        console.log('error updating category:', err);
      });
  }
}

const categoryService = new CategoryService();
export default categoryService;
