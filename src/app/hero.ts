import { SimpleChanges } from '@angular/core';

export interface Hero {
    id: number;
    name: string;
}

// This is how I wouldve done it but, docs do it the above way

// class Hero {
//   name;
//   powerLevel;

//   constructor(name, powerLevel) {
//     this.name = name;
//     this.powerLevel = powerLevel;
//   }
// }


