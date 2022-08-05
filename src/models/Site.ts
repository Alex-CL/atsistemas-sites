import { SiteDTO } from './SiteDTO'

export class Site {
	private readonly _id: string
	private _name: string
	private _path: string
	private _publicPath: string
	private _key: string
	private _description: string
	private _site: string
	private readonly _createdDate: Date
	
	constructor(p: SiteDTO) {
		this._id = p.id
		this._name = p.name
		this._path = p.path
		this._publicPath = p.publicPath
		this._key = p.key
		this._description = p.description
		this._site = p.site
		this._createdDate = new Date(p.createdDate)
	}
	
	get id(): string {
		return this._id
	}
	
	get name(): string {
		return this._name
	}
	
	set name(n: string) {
		this._name = n
	}
	
	get path(): string {
		return this._path
	}
	
	set path(p: string) {
		this._path = p
	}
	
	get publicPath(): string {
		return this._publicPath
	}
	
	set publicPath(p: string) {
		this._publicPath = p
	}
	
	get key(): string {
		return this._key
	}
	
	set key(k: string) {
		this._key = k
	}
	
	get description(): string {
		return this._description
	}
	
	set description(d: string) {
		this._description = d
	}
	
	get site(): string {
		return this._site
	}
	
	set site(s: string) {
		this._site = s
	}
	
	get createdDate(): Date {
		return this._createdDate
	}
}


