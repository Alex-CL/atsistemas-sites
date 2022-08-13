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
	
	getByID(id: string): Promise<Site | undefined> {
		return fetch(`${this._api}/site/${id}`)
			.then(res => {
				if (res.ok) {
					return res.json()
				}
				throw new Error()
			})
			.then(res => fromDTO(renameKey<SiteDTO>(res, "_id", "id")))
			.catch(res => undefined)
	}
	
	add(s: Site): Promise<Site | undefined> {
		return fetch(`${this._api}/site`, {
			method: 'POST',
			body: JSON.stringify(renameKey<SiteDTO>(toDTO(s), "id", "_id")),
			headers,
		}).then(res => {
			if (res.ok) {
				return res.json()
			}
			throw new Error()
		})
		.then(res => fromDTO(renameKey<SiteDTO>(res, "_id", "id")))
		.catch(res => undefined)
	}
	
	update(s: Site): Promise<Site | undefined> {
		const updateHeaders = { ...headers }
		updateHeaders['Access-Control-Request-Method'] = 'PUT'
		return fetch(`${this._api}/site/${s.id}`, {
			method: 'PUT',
			body: JSON.stringify(renameKey<SiteDTO>(toDTO(s), "id", "_id")),
			headers: updateHeaders,
		}).then(res => {
			if (res.ok) {
				return res.json()
			}
			throw new Error()
		})
		.then(res => fromDTO(renameKey<SiteDTO>(res, "_id", "id")))
		.catch(res => undefined)
	}
	
	delete(id: string): Promise<boolean> {
		return fetch(`${this._api}/site/${id}`, {
				method: 'DELETE',
			})
			.then(res => {
				if (res.ok) {				
					return true
				}
				
				throw new Error()
			})
			.catch(res => false)
	}
}

function renameKey<T>(obj: T, oldKey: string, newKey: string): T {
  return JSON.parse(JSON.stringify(obj).split(oldKey).join(newKey))
}
