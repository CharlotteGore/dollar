var each = require( 'each' );
var classes = require( 'classes' );
var events = require('event');

var defaultDisplay = '';

var Dollar = function( element ){

	if( element ){

		this[ 0 ] = element;
		this.length = 1;

	}

	return this;
}

Dollar.prototype = {

	length : 0,
	selector : '',
	create : function( tagName ){

		this[ 0 ] = document.createElement( tagName );
		return this;


	},
	getById : function( id ){

		this[ 0 ] = document.getElementById( id );

		if(this[0]){
			this.length = 1;

		}
		return this;

	},
	getHead : function(){

		this[ 0 ] = document.getElementsByTagName( 'head' )[ 0 ];
		if(this[0]){
			this.length = 1;
		}

		return this;

	},
	getBody : function(){

		this[ 0 ] = document.getElementsByTagName( 'body' )[ 0 ];
		if(this[0]){
			this.length = 1;
		}
		return this;

	},
	attr : function( attr, val ){

		this[ 0 ].setAttribute( attr, val );
		return this;

	},
	appendTo : function( dollarObj ){

		dollarObj[ 0 ].appendChild( this[ 0 ] );
		return this;

	},
	append : function( dollarObj ){

		this[ 0 ].appendChild( dollarObj[ 0 ] );
		return this;

	},
	text : function( text ){

		var self = this, el;

		if( this[ 0 ].childNodes.length > 0 ){

			each(this[ 0 ].childNodes, function( node ){

				if( node.nodeType === 3 ){ // text node

					self[ 0 ].removeChild( node );

				}

			})


		}

		el = document.createTextNode( text );
		this[0].appendChild( el );

		return this;

	},
	addClass : function( name ){

		classes( this[ 0 ] ).add( name );

		return this;

	},
	removeClass : function( name ){

		classes( this[ 0 ] ).remove( name );

		return this;

	},
	hasClass : function( name ){

		return classes( this[ 0 ] ).has( name );

	},
	toggleClass : function( name ){

		classes( this[ 0 ] ).toggle( name );

		return this;

	},
	css : function( obj ){

		var self = this;

		each( obj, function( value, key ){

			if( 'number' === typeof value ){

				value += 'px';

			}
			
			self[ 0 ].style[ key ] = value;
			

		});

		return this;

	},
	hide : function(){

		defaultDisplay = this[ 0 ].style.display;
		this[ 0 ].style.display = "none";
		this[ 0 ].style.visibility = "hidden";

		return this;

	},
	show : function(){

		this[ 0 ].style.display = defaultDisplay;
		this[ 0 ].style.visibility = "visible";

		return this;

	},
	toggle : function(){

		if( this[ 0 ].style.display === "none" || this[ 0 ].style.visibility === "hidden"){

			this.show();

		}else{

			this.hide();

		}

		return this;

	},
	onClick : function( callback ){

		events.bind(this[0], 'click', function( e ){

			var preventDefault = false;

			if(!e.preventDefault){

				e.preventDefault = function(){

					preventDefault = true;

				}

			}

			callback(e);

			if(preventDefault){

				return false;

			}

		});

		return this;

	},
	bind : function( event, callback ){

		events.bind(this[0], event, function(e){

			var preventDefault = false;

			if(!e.preventDefault){

				e.preventDefault = function(){

					preventDefault = true;

				}

			}

			callback(e);

			if(preventDefault){

				return false;

			}

		});

		return this;

	},
	unbind : function( event, callback ){

		events.unbind(this[0], event, callback );

		return this;

	}

}

module.exports = function(element){

	return new Dollar( element );

}
