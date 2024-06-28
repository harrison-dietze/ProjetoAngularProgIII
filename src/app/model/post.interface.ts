import { User } from "./user.interface"

export interface Post {
    userId: number,
    id: number,
    title: string
    body: string,
    user?: User
}