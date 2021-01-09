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
