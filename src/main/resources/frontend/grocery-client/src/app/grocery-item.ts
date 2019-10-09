export class GroceryItem {
  id: number;
  name: string;
  tags: string[] = [];

  constructor(id, name, tags){
    this.id = id;
    this.name = name;
    if(tags){
      tags.forEach(e=>{
        this.tags.push(e.name);
      });
    }
  }
}
