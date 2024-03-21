import { Post } from "./post"

export interface iJsonContent {

    posts: Post[]
    total: number
    skip: number
    limit: number

}

