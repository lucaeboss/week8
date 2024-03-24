import { Identity } from "./identity";
export class Data<R extends Identity> {
    private rows: Map<number, R> = new Map();
  
    async add(row: R): Promise<void> {
        return new Promise((resolve) => setTimeout(() => {
          this.rows.set(row.id, row);
          resolve();
        }, 100)); 
      }
    
      async update(id: number, updates: Partial<R>): Promise<void> {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const row = this.rows.get(id);
            if (row) {
              Object.assign(row, updates);
              resolve();
            } else {
              reject(new Error(`Row with ID ${id} not found`));
            }
          }, 100); 
        });
      }
    
      async delete(row: R): Promise<void> {
        return new Promise((resolve) => setTimeout(() => {
          this.rows.delete(row.id);
          resolve();
        }, 100)); 
      }
    
      async get(id: number): Promise<R | undefined> {
        return new Promise((resolve) => setTimeout(() => {
          resolve(this.rows.get(id));
        }, 100)); 
      }
    }