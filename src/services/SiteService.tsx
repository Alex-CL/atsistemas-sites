import { Site, SiteDTO } from '../models'

export class SiteService {
	private _api: string
	
	constructor() {
		this._api = "https://interview.staging.atresplayer.com/sites"
	}
	
	getAll(): Promise<Site[]> {
		return fetch(this._api)
			.then(res => res.json())
			.then(res => 
				res.map((r: SiteDTO) => new Site(r))
			)
	}
}
