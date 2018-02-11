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

export interface WeatherData {
    latitude: number;
    longitude: number;
    time: number;
    currentSummary: string;
    temprature: number;
    humidity: number;
    pressure: number;
    uvIndex: number;
    visibility: number;
    minuteData: MinuteData;
}

export interface MinuteData {
    summary: string;
    minutelyData: Array<MinutelyData>;
}

interface MinutelyData {
    time: number;
    precipIntensity: number;
    precipProbability: number;
}