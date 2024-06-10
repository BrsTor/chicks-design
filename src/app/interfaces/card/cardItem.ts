export interface CardItem {
  sale: boolean,
  stock: boolean,
  img: string,
  name: string,
  price: number,
  discount?: number,
  description: string
}
