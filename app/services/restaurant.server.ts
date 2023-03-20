import RestAPIClient from "./RestAPIClient";
import type { IRestaurant } from "./typings";

class RestaurantService extends RestAPIClient {
  constructor(){
    super("");
  }

  getRestaurants = (): Promise<IRestaurant[]> => {
    return this.get("/a24cfec5-f76c-410b-a5ac-9f63fab28abb")
  }
}

export default new RestaurantService();