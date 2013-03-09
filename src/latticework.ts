module Latticework {
	"use strict"

	export interface IServiceContainer {
		getInstance(type : string) : any;
		register(type : string, ctor : function) : void;
	}

	class DefaultServiceContainer : IServiceContainer {
		public getInstance(type : string) : any {
			var ctor = this.typeRegistry[type];

			return new ctor();
		}

		public register(type : string, ctor : function) : void {
			this.typeRegistry[type] = ctor;
		}

		private typeRegistry : array = {};
	}

	export container : IServiceContainer = new DefaultServiceContainer();
}

class Test {
	
}

Latticework.container.register('Test', Test);

var test = Latticework.container.getInstance('Test');
