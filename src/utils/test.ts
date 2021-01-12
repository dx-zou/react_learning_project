export interface InterfaceInfo {
  [prop: string]: string;
}

interface Fish {
  swim: boolean;
}

interface Bird {
  fly: boolean;
}

function move(pet: Fish | Bird) {
  if ('swim' in pet) {
    return pet.swim;
  }
  return pet.fly;
}

console.log(move({ swim: true }));
console.log(move({ fly: false }));

// 泛型类型
interface GType<T, U> {
  id: T;
  name: U;
}
function showType(arg: GType<number, string>) {
  console.log(arg);
}
showType({ id: 1, name: 'feng' });

// 可选属性

interface PartialType {
  id: number;
  name: string;
  age: number;
}
function showPerson(arg: Partial<PartialType>) {
  console.log(arg.name);
}
showPerson({ id: 1 });

interface RequiredType {
  id: number;
  name: string;
  adult?: boolean;
}

function requiredTest(arg: Required<RequiredType>) {
  return arg;
}

requiredTest({ id: 11, name: 'feng', adult: false });

// 映射类型
// type MapType<T> = {
//   [P in keyof T]: string;
// };
// function mapTypeTest(arg: MapType<RequiredType>) {
//   return arg;
// }
// mapTypeTest({ id: '122', name: 'feng' });

// 类型保护
function typeGuard(arg: number | string) {
  if (typeof arg === 'string') {
    return arg.length;
  }
  return arg++;
}
console.log(123);
