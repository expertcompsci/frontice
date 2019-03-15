export default class MySqlDate {
    static toMySqlDatetime(formEntry: string) {
        let jsDateTime = new Date(formEntry);
        return jsDateTime.getUTCFullYear() +
            "-" + this.twoDigits(1 + jsDateTime.getUTCMonth()) +
            "-" + this.twoDigits(jsDateTime.getUTCDate()) +
            " 12:01:01"; // We only specify date, not times.
    }

    static jsDateToMySqlDatetime(jsDateTime: Date) {
        return jsDateTime.getUTCFullYear() +
            "-" + this.twoDigits(1 + jsDateTime.getUTCMonth()) +
            "-" + this.twoDigits(jsDateTime.getUTCDate()) +
            " " + this.twoDigits(1 + jsDateTime.getUTCHours()) +
            ":" + this.twoDigits(jsDateTime.getUTCMinutes()) +
            ":" + this.twoDigits(jsDateTime.getUTCSeconds());
    }

    static fromMySqlDatetime(mySqlDateTime: string) {
        var t = mySqlDateTime.split(/[- :]/);
        return new Date(Date.UTC(+t[0], +t[1] - 1, +t[2], +t[3], +t[4], +t[5]));
    }

    static dateOnlyfromMySqlDateTime(mySqlDateTime: string){
        var t = mySqlDateTime.split(/[- :]/);
        return t[0] + "/" + (+t[1] - 1) + "/" + t[2];
    }

    private static twoDigits(d) {
        if (0 <= d && d < 10) return "0" + d.toString();
        if (-10 < d && d < 0) return "-0" + (-1 * d).toString();
        return d.toString();
    }
}


