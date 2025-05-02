// ./index.ts
import { users, addUser, getUser } from './user'

addUser({ name: 'John', email: 'john@example.com' })
addUser({ name: 'Jane', email: 'jane@example.com' })
const user = getUser(2)

console.log(user)
