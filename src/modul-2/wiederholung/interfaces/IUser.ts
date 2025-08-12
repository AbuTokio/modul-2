import { IAddress } from "./IAddress"
import { IMovie } from "./IMovie"

interface IUser {
  username: string
  email: string
  phoneNumber: string
  address: IAddress
  role: string
  favoriteMovies: IMovie[]
}

export default IUser
