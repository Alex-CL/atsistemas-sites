import { Site, SiteDTO, toDTO, fromDTO } from '../models'
import { IApi } from './IApi'

const headers = {
	"Access-Control-Request-Headers": "*",
	"Access-Control-Request-Method": "POST",
	"Content-Type": "application/json; charset=UTF-8"
}

export class SiteService implements IApi<Site> {
	private _api: string
	
	constructor() {
		this._api = "https://interview.staging.atresplayer.com"
	}
	
	getAll(): Promise<Site[]> {
		return fetch(`${this._api}/sites`)
			.then(res => res.json())
			.then(res => 
				res.map((r: SiteDTO) => fromDTO(renameKey<SiteDTO>(r, "_id", "id")))
			)
	}
	
	getByID(id: string): Promise<Site> {
		return fetch(`${this._api}/site/${id}`)
			.then(res => res.json())
			.then(res => fromDTO(renameKey<SiteDTO>(res, "_id", "id")))
	}
	
	add(s: Site) {
		fetch(`${this._api}/site`, {
			method: 'POST',
			body: JSON.stringify(renameKey<SiteDTO>(toDTO(s), "id", "_id")),
			headers,
		}).then()
	}
	
	update(s: Site) {
		const updateHeaders = { ...headers }
		updateHeaders['Access-Control-Request-Method'] = 'PUT'
		fetch(`${this._api}/site/${s.id}`, {
			method: 'PUT',
			body: JSON.stringify(renameKey<SiteDTO>(toDTO(s), "id", "_id")),
			headers: updateHeaders,
		}).then()
	}
	
	delete(id: string): Promise<boolean> {
		return fetch(`${this._api}/site/${id}`, {
				method: 'DELETE',
			})
			.then(res => res.json())
			.then(res => true)
			.catch(res => false)
	}
}

function renameKey<T>(obj: T, oldKey: string, newKey: string): T {
  return JSON.parse(JSON.stringify(obj).split(oldKey).join(newKey))
}
