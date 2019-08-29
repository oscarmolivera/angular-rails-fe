export class Proposal {
  constructor(
    public id?: number,
    public customer?: string,
    public portfolio_url: string = 'http://',
    public tools?: string,
    public estimated_hours?: number,
    public hourly_rates?: number,
    public weeks_to_complete?: number,
    public client_email?: string
  ) {}
}
// sample data
// 19, 'AseFarma SPA', 'http://portfolio.oscarmolivera.me', 'Angular4', 40, 6000clp, 1, 'jules.barros@asefarma.cl'
