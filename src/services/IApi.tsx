export interface IApi<T> {
	getAll(): Promise<T[]>,
	getByID(id: string): Promise<T | undefined>,
	add(t: T): Promise<T | undefined>,
	update(t: T): Promise<T | undefined>,
	delete(id: string): Promise<boolean>,
}
