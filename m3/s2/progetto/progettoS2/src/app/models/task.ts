import { iUser } from "./user"

export interface iTask {
  id: number
  todo: string
  completed: boolean
  userId: number
  user?: iUser
}
