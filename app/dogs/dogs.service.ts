import { Injectable } from '~/core';

export type Dog = {
  id: number;
  name: string;
  about: string;
}

@Injectable()
export class DogService {
  getDogs(): Dog[] {
    return [{ id: 1, name: 'Socket', about: 'A very nice dog' }]
  }

  getDog(id: number): Dog {
    return { id: 1, name: 'Socket', about: 'A very nice dog' }
  }

  updateDog(dog: Dog) { }
}