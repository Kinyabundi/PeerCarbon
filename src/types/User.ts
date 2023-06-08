export interface IUser {
    id?: string;
    companyName: string
    email: string
    corporateNo?: string
    location?: string
    logo?: string | ArrayBuffer | null
    banner?: string
    companyDescription: string
    website?: string
    phoneNo?: string | string[]
}