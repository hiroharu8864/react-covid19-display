# react-covid19-display

Created with CodeSandbox

### Using API

- https://covid19.mathdro.id/api
- https://covid19.mathdro.id/api/daily

```json
{
  "totalConfirmed":2118,"mainlandChina":2075,"otherLocations":43,"deltaConfirmed":685,"totalRecovered":0,
  "confirmed":{
    "total":2118,"china":2075,"outsideChina":43
    },
  "deltaConfirmedDetail":{
    "total":685,"china":669,"outsideChina":16
    },
  "deaths":{
    "total":56,"china":56,"outsideChina":0
    },
  "recovered":{
    "total":0,"china":0,"outsideChina":0
    },
  "active":0,
  "deltaRecovered":0,
  "incidentRate":6.303022170503208,
  "peopleTested":0,
  "reportDate":"2020-01-26"
  },
```

- https://covid19.mathdro.id/api/countries/japan

```json
{
  "confirmed": {
    "value": 15795156,
    "detail": "https://covid19.mathdro.id/api/countries/japan/confirmed"
  },
  "recovered": {
    "value": 0,
    "detail": "https://covid19.mathdro.id/api/countries/japan/recovered"
  },
  "deaths": {
    "value": 35402,
    "detail": "https://covid19.mathdro.id/api/countries/japan/deaths"
  },
  "lastUpdate": "2022-08-16T04:20:58.000Z"
}
```

### Declaration of Types

```typescript
import dataJson from "./data.json";
import dataJsonDaily from "./dataDaily.json";

type APIDATA = typeof dataJson;
type APIDATADAILY = typeof dataJsonDaily;
```

### FetchData via axios

```typescript
export const fetchAsyncGet = createAsyncThunk("covid/get", async () => {
  const { data } = await axios.get<APIDATA>(apiUrl);
  return data;
});

export const fetchAsyncGetDaily = createAsyncThunk("covid/getDaly", async () => {
  const { data } = await axios.get<APIDATADAILY>(`${apiUrl}/daily`);
  return data;
}

export const fetchAsyncGetCountry = createAsyncThunk("covid/getCountry", async(country: string) => {
  let dynamicUrl = apiUrl;
  if (country) {
    dynamicUrl = `${apiUrl}/countries/${country}`;
  }
  const { data } = await axios.get<APIDATA>(dynamicUrl);
  return { data: data, country: country };
})
```
