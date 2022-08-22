/**
 * from:
 * https://covid19.mathdro.id/api/daily
 */
export type CovidDataDaily = {
  totalConfirmed: number;
  mainlandChina: number;
  otherLocations: number;
  deltaConfirmed: number;
  totalRecovered: number;
  confirmed: {
    total: number;
    china: number;
    outsideChina: number;
  };
  deltaConfirmedDetail: {
    total: number;
    china: number;
    outsideChina: number;
  };
  deaths: {
    total: number;
    china: number;
    outsideChina: number;
  };
  recovered: {
    total: number;
    china: number;
    outsideChina: number;
  };
  active: number;
  deltaRecovered: number;
  incidentRate: number;
  peopleTested: number;
  reportDate: string;
};
