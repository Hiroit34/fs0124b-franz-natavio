import { iTask } from "./task"

export interface iUser {
  id: number
  firstName: string
  lastName: string
  email: string
  image: string
  title: string
  task?: iTask[]
}
