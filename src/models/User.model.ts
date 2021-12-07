import { observable, autorun, makeAutoObservable } from 'mobx'
import { observer } from 'mobx-react'

export default class UserModel {
  @observable age: number;
  @observable name: string;

  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;

    makeAutoObservable(this)
  } 
  
  setAge(age: number) {
    this.age = age;
  }
  
  setName(name: string) {
    this.name = name;
  }

}