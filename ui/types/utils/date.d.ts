export interface BuildDateOptions {
  milliseconds?: number;
  seconds?: number;
  minutes?: number;
  hours?: number;
  date?: number;
  month?: number;
  year?: number;
}
export interface ModifyDateOptions {
  milliseconds?: number;
  seconds?: number;
  minutes?: number;
  hours?: number;
  days?: number;
  month?: number;
  year?: number;
}

export interface DateLocale {
  days?: string[];
  daysShort?: string[];
  months?: string[];
  monthsShort?: string[];
}

export type DateUnitOptions = "second" | "minute" | "hour" | "day" | "month" | "year";

export namespace date {
  function isValid(date: string): boolean;
  function extractDate(str: string, mask: string, locale?: DateLocale): Date;
  function buildDate(options: BuildDateOptions, utc?: boolean): string;
  function getDayOfWeek(date: Date | number | string | number): number;
  function getWeekOfYear (date: Date | number | string) : number;
  function isBetweenDates (date: Date | number | string, from: Date, to: Date, opts? : { inclusiveFrom: boolean, inclusiveTo: boolean}) : boolean;
  function addToDate(date: Date | number | string, options: ModifyDateOptions): Date;
  function subtractFromDate(date: Date | number | string, options: ModifyDateOptions): Date;
  function adjustDate (date: Date | number | string, options: ModifyDateOptions, utc?: boolean) : Date;
  function startOfDate(date: Date | number | string, option: DateUnitOptions) : Date;
  function endOfDate(date: Date | number | string, option: DateUnitOptions) : Date;
  function getMaxDate (date: Date | number | string, ...args: (Date | number | string)[]) : Date;
  function getMinDate (date: Date | number | string, ...args: (Date | number | string)[]) : Date;
  function getDateDiff (date: Date | number | string, subtract: Date | number | string, unit?: string) : Date;
  function getDayOfYear (date: Date | number | string) : number;
  function inferDateFormat (date: any) : string;
  function getDateBetween (date: Date | number | string, min: Date | number | string, max: Date | number | string) : Date
  function isSameDate (date: Date | number | string, date2: Date | number | string, unit?: string) : boolean;
  function daysInMonth (date: Date | number | string) : number;
  function formatDate(date: Date | number | string | undefined, format: string, locale?: DateLocale, __forcedYear?: number): string;
  function clone (date: Date) : Date;
}
