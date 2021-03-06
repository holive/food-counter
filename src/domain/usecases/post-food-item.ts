export interface PostFoodItem {
  postItem: (item: PostFoodItem.Model) => Promise<PostFoodItem.Model>
}

export namespace PostFoodItem {
  export type Model = {
    foodName: string
    calories: number
    weekDays: string[]
    foodType: string
  }
}
