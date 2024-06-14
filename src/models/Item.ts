class Item {
  id: number
  title: string
  category?: string
  rating: string
  description: string
  infos?: string[]
  image: string

  constructor(
    id: number,
    title: string,
    rating: string,
    description: string,
    image: string,
    category?: string,
    infos?: string[]
  ) {
    this.id = id
    this.title = title
    this.category = category
    this.rating = rating
    this.description = description
    this.infos = infos
    this.image = image
  }
}

export default Item
