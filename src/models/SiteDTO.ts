import { v4 as uuidv4 } from 'uuid'
import { Site } from './Site'

export type SiteDTO = {
	id: string,
	name: string,
	path: string,
	publicPath: string,
	key: string,
	description: string,
	site: string,
	createDate: Date,
}

export function emptySiteDTO(): SiteDTO {
	return {
		id: uuidv4(),
		name: '',
		path: '',
		publicPath: '',
		key: '',
		description: '',
		site: '',
		createDate: new Date(),
	}
}

export function toDTO(s: Site): SiteDTO {
	return {
		id: s.id,
		name: s.name,
		path: s.path,
		publicPath: s.publicPath,
		key: s.key,
		description: s.description,
		site: s.site,
		createDate: s.createDate,
	}
}

export function fromDTO(s: SiteDTO): Site {
	return new Site(s)
}
