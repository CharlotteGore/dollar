
# dollar

  A tiny utterly unfancy DOM manipulation thing for a project that can't use anything bigger.
  Useful for building small DOM chunks, tweaking CSS, adding stuff into the head element, and adding Click handlers.

  No CSS selector engine, but the methods are chainable. So that's nice.

## Installation

    $ component install charlottegore/dollar

## API

    var $ = require('dollar');

  If you already have a reference to an element... 

    var dollarObject = $( element );

  ...otherwise use `.getById()`

 ### .create( `tagName` )

    var anchor = $().create('a'); 

  Create a new element.

### .getById( `id` )

    $().getById('someid') 

  Simple alias for `element.getElementById()`

### .attr( `attribute`, `value` )

    dollarObject.attr('href', 'http://charlottegore.com');

  set an attribute to a value.

### .css( `object` )

    dollarObject.css({ color : '#FFF', position: 'absolute'}});

  In bizarre and unexpected contrast to .attr, this takes an object of keys/values representing
  css attributes and their values. And applies them. Thrilling stuff.

### .hide()

    dollarObject.hide();

  Guess. Go on! Guess!

### .show()

    dollarObject.show();

  Does a remarkable rendition of 'Defying Gravity' from the Broadway musical 'Wicked'.

### .toggle()

    dollarObject.toggle();

  Alternates between 'hidden' and 'shown' states.

### .addClass( `className` )

    dollarObject.addClass('shiny');

  Adds a css class.

### .removeClass( `className` )

    dollarObject.removeClass('shiny');

  Removes a css class.

### .toggleClass( `className` )

    dollarObject.toggleClass('shiny');

  Adds or removes a css class depending on the underlying quantum state.

### .hasClass( `className` )

    dollarObject.hasClass('shiny') === true;

  Tests to see if an object has a particular css class. I guess that's kinda useful.

### .getHead()

    $().getHead() 

  Quick util to get the head element. This exists because creating script and style tags is sort of one of the main use-cases for this rubbish.

### .getBody()

    $().getBody();

  Quick util to get the body element, because adding crap to the body is also another use-case. 


## License

  MIT
