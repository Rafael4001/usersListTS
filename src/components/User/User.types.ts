export interface IOneUser {
  address?: {
    street?: string,
    suite?: string,
    city?: string,
    zipcode?: string,
    geo?: {
      lat: string,
      lng: string
    }
  }
  company?: {
    name?: string,
    catchPhrase?: string,
    bs?: string
  }
  email?: string
  id?: number,
  name: string
  phone?: string
  username: string
  website?: string
}


export interface IUser {
  table: IOneUser[],
}