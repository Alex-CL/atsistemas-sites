import { Site, SiteDTO, toDTO, fromDTO } from '../models'
import { IApi } from './IApi'

export class SiteService implements IApi<Site> {
	private _api: string
	
	constructor() {
		this._api = "https://interview.staging.atresplayer.com"
	}
	
	getAll(): Promise<Site[]> {
		return fetch(`${this._api}/sites`)
			.then(res => res.json())
			.then(res => 
				res.map((r: SiteDTO) => new Site(r))
			)
	}
	
	getByID(id: string): Promise<Site> {
		return fetch(`${this._api}/site/${id}`)
			.then(res => res.json())
			.then(res => fromDTO(res))
	}
	
	add(s: Site) {
		fetch(`${this._api}/site`, {
			method: 'POST',
			body: JSON.stringify(toDTO(s)),
			headers: {
				"Content-Type": "application/json; charset=UTF-8"
			}
		}).then()
	}
	
	update(s: Site) {
		fetch(`${this._api}/site`, {
			method: 'PUT',
			body: JSON.stringify(toDTO(s)),
			headers: {
				"Content-Type": "application/json; charset=UTF-8"
			}
		}).then()
	}
	
	delete(id: string): Promise<boolean> {
		return fetch(`${this._api}/site/${id}`)
			.then(res => res.json())
			.then(res => true)
			.catch(res => false)
	}
}
