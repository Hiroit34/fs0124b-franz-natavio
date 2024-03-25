import { iPost } from "./interface"

export interface iRoot {
  posts: iPost[]
  total: number
  skip: number
  limit: number
}
