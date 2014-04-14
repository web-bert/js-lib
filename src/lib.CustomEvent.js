/*
Based on this version from adamsilver:

https://github.com/adamsilver/kitty/blob/master/src/CustomEvent/Kitty.CustomEvent.js
*/

lib.CustomEvent = (function(){

	function CustomEvent(){

		this.subscribers = [];
	}

	var proto = CustomEvent.prototype;

	proto.subscribe = function( fn ){

		this.subscribers.push( fn );
	};

	proto.unSubscribe = function( fn ){

		var i = 0;
		var l = this.subscribers.length;

		for( ; i < l; i++ ) {

			if( this.subscribers[ i ] === fn ){

				this.subscribers.pop( i, 1 );

				break;
			}
		}
	};

	proto.publish = function() {

		var i = this.subscribers.length-1;

		for( ; i >= 0; i-- ){

			try {

				this.subscribers[ i ].apply( this, arguments );

			} catch( e ){}
		}
	};

	return CustomEvent;
}());