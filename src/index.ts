import { Data } from './data';
  interface Animal {
    id: number;
    name: string;
    age: number;
  }
  
  const animalData = new Data<Animal>();
  
  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  async function main() {
    try {
      await animalData.add({ id: 1, name: "Charlie", age: 5 });
      console.log("Animal added successfully");
    } catch (error) {
      console.error("Error adding animal:", error);
    }
  
    await sleep(100);
    try {
      await animalData.update(1, { age: 6 });
      console.log("Animal updated successfully");
    } catch (error) {
      console.error("Error updating animal:", error);
    }
  
    await sleep(100);
    try {
      await animalData.delete({ id: 1, name: "Charlie", age: 6 });
      console.log("Animal deleted successfully");
    } catch (error) {
      console.error("Error deleting animal:", error);
    }
  
    const retrievedAnimal = await animalData.get(1);
    if (retrievedAnimal) {
      console.log("Retrieved animal:", retrievedAnimal);
    } else {
      console.log("Animal not found");
    }
  }
  
  main().catch((error) => console.error("Error in main function:", error));
    