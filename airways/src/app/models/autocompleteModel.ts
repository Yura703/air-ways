export interface IAirportResponse {
    id: string,
    type: string,
    code: string,
    name: string,
    country_code: string,
    country_name: string,
    city_code: string,
    city_name: string,
    state_code: string | null,
    coordinates: {
        lon: number,
        lat: number
    },
    index_strings: [],
    weight: number,
}
