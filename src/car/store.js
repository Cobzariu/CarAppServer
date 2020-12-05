import dataStore from 'nedb-promise';

export class CarStore {
  constructor({ filename, autoload }) {
    this.store = dataStore({ filename, autoload });
  }
  
  async find(props) {
    return this.store.find(props);
  }
  
  async findOne(props) {
    console.log("FIND ONE");
    return this.store.findOne(props);
  }
  
  async insert(car) {
    // let noteText = note.text;
    // if (!noteText) { // validation
    //   throw new Error('Missing text property')
    // }
    console.log("insert");
    return this.store.insert(car);
  };
  
  async update(props, car) {
    console.log("update");
    return this.store.update(props, car);
  }
  
  async remove(props) {
    return this.store.remove(props);
  }
}

export default new CarStore({ filename: './db/cars.json', autoload: true });