export class Countries {
  'name': string;
  'alpha2Code': string;
  'alpha3Code': string;
  'capital': string;
  'region': string;
  'subregion': string;
  'population': number;
  'demonym': string;
  'area': number;
  'gini': number;
  'timezones': any;
  'currencies': any;
  sort: any;
  paginator: any;

  constructor(name, alpha2Code, alpha3Code, capital, region, subregion, population, demonym, area, gini, timezones, currencies){
    this.name = name;
    this.alpha2Code = alpha2Code;
    this.alpha3Code = alpha3Code;
    this.capital = capital;
    this.region = region;
    this.subregion = subregion;
    this.population = population;
    this.demonym = demonym;
    this.area = area;
    this.gini = gini;
    this.timezones = timezones;
    this.currencies = currencies;
  }

}
