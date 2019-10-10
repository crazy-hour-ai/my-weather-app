  
export class Weather {
    constructor(
        public city: string,
        public temp: number,
        public pressure: number,
        public humidity: number,
        public windSpeed: number,
        public windDegree: number
    ){

    }
}