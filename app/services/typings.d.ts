export interface IRestaurant {
  id: string;
  index: number;
  rating: number;
  promotion?: string;
  isNew: false;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}

export interface ICategory {
  id: string;
  name: string;
}
