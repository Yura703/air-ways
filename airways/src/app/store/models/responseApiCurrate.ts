export interface ICurrateApi {
    status: number,
    message: string,
    data: IDateExchange
}

export interface IDateExchange {
    [value: string]: string
}