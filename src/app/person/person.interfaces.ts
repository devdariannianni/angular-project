export interface IPerson{
    name: string,
    isStudent: boolean,
    email: string,
    address: Iadress,
}
export interface Iadress{
    street: string,
    suite: string,
    city: string,
    zipcode: number,
}