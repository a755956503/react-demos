// 联合类型，只能使用共有的属性： 解决办法：类型保护
// 交叉类型：需要同时包含所有属性
interface Bird {
  fly(): number;
  layEggs(): string;
}

interface Fish {
  swim(): string;
  layEggs(): string;
}

function getSmallPet(): Fish | Bird {
  let a: Fish | Bird = {
    fly() { return 1; },
    layEggs() { return '1' }
  };
  return a;
}

let a: Bird & Fish;
a = {
  fly() { return 1; },
  layEggs() { return '1' },
  swim() { return '1' }
}

let pet = getSmallPet();
pet.layEggs(); // okay
// pet.swim();    // errors

export {};
