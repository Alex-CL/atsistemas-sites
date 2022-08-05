export interface IApi<T> {
	getAll(): Promise<T[]>,
	getByID(id: string): Promise<T>,
	add(t: T): void,
	update(t: T): void,
	delete(id: string): Promise<boolean>,
}
