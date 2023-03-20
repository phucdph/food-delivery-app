import RestAPIClient from "./RestAPIClient";
import type { ICategory } from "./typings";

class CategoryService extends RestAPIClient {
  constructor() {
    super("");
  }

  getCategories = (): Promise<ICategory[]> => {
    return this.get("/f25ced0a-9ff7-4996-bdc7-430f281c48db");
  };
}

export default new CategoryService();
