export interface IUser {
    id?: string;
    name: string
    email: string
    corporateNo: string
    location: string
    logo?: string | ArrayBuffer | null
    banner?: string
    description: string
    website?: string
    phoneNo?: string | string[]
}