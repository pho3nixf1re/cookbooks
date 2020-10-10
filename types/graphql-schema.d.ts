type User = {
  id: string
  name: string
}

type Book = {
  description: string
  id: number
  is_public: boolean
  name: string
  user: User
  user_id: string
}
