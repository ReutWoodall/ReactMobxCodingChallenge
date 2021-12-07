
import { makeAutoObservable } from "mobx"

export default function CurrentUserStore() {
  const store = makeAutoObservable({
      name: null,
      age: null,
      get fname() {
          return this.name
      },
      get fage() {
        return this.age
      },
      get username() {
        if (this.name && this.age) {
          let validatedUsername = this.name;
          validatedUsername = validatedUsername.charAt(0).toUpperCase() + validatedUsername.slice(1).toLowerCase();
          return validatedUsername.substring(0, 10) + this.age;
        }
      },
      get load() {
        const localStorageData = window.localStorage.getItem(CurrentUserStore.name);
        if (localStorageData) {
          return Object.assign(this, JSON.parse(window.localStorage.getItem(CurrentUserStore.name) || '{}'))
        } else {
          return null;
        }
      },
      setName(name:any) {
        this.name = name;
      },
      setAge(age:any) {
          this.age = age;
      },
      save() {
        window.localStorage.setItem(
          CurrentUserStore.name,
          JSON.stringify({
            name: this.name,
            age: this.age
          })
        )        
      }
  });
  
  return store;
}