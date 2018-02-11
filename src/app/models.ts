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
    temperature: number;
    humidity: number;
    pressure: number;
    uvIndex: number;
    visibility: number;
    minuteData: MinuteData;
    hourData: HourData;
    icon: string;
}

export interface MinuteData {
    summary: string;
    minutelyData: Array<MinutelyData>;
}

export interface MinutelyData {
    time: number;
    precipIntensity: number;
    precipProbability: number;
    precipType: string;
}

export interface HourData {
    summary: string;
    data: Array<WeatherData>;
}

export class TimeMachine {
    private static ONE_WEEK: number = 604800;
    private static ONE_MONTH: number = 2.628e+6;
    private static ONE_YEAR: number = 31535965.4396976;

    static oneWeekAgo() : number{
        return Math.round(Date.now()/1000) - this.ONE_WEEK;
    }

    static oneMonthAgo() : number {
        return Math.round(Date.now()/1000) - this.ONE_MONTH;
    }

    static getYearAgo(numYearsAgo: number = 1) : number{
        return Math.round((Date.now()/1000) - this.ONE_YEAR) * numYearsAgo;
    }
}