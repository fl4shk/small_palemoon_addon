"use strict";

Cu.import("resource://gre/modules/Console.jsm");

function recursive_freeze(some_object)
{
	for (let key in some_object)
	{
		if (typeof some_object[key] === "object")
		{
			//console.log(`Calling recursive_freeze():  ${key}`);
			recursive_freeze(some_object[key]);
		}

		some_object[key] = Object.freeze(some_object[key]);
	}

	return Object.freeze(some_object);
}

function make_enum()
{
	const args = arguments;
	let ret = {values : {}, names : [], length : args.length};
	for (let i in args)
	{
		ret.values[args[i]] = i;
		ret.names[i] = args[i];
	}

	return recursive_freeze(ret);
}


function main()
{
	console.log("main():  Hello World!");
	const Binop = make_enum("Add", "Subtract", "Multiply", "Divide");

	//console.log(Binop.values.Add);
	//console.log(Binop.values.Subtract);
	//console.log(Binop.values.Multiply);
	//console.log(Binop.values.Divide);
	//console.log(Binop.length);
	console.log(Binop.values);
	console.log(Binop.names);
	console.log(Binop.length);

	//alert(Binop);
	//alert(Binop.values);
	//alert(Binop.names);
	//alert(Binop.length);
}
