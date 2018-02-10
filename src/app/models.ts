export interface CallbackInterface {
    (error: Error, result?: any) : void;
}

export interface Coordinate {
    latitude: number;
    longitude: number;
}

export interface ServerPayload {
    api_url: string;
}