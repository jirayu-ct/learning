// ./users.ts
export const users: User[] = []

export type User = {
  id: number
  name: string
  email: string
}

export const addUser = (user: Omit<User, 'id'>) => {
  users.push({ ...user, id: users.length + 1 })
}

export function getUser(id: number): User | undefined {
  return users.find((user) => user.id === id)
}