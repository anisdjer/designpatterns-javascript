# The Mediator design pattern

Define an object that encapsulates how a set of objects interact. 
Mediator promotes loose coupling by keeping objects from referring to each other 
explicitly, and it lets you vary their interaction independently.

 Mediator pattern provides central authority over a group of objects by encapsulating 
how these objects interact. This model is useful for scenarios where there is a need 
to manage complex conditions in which every object is aware of any state change 
in any other object in the group.

The Mediator patterns are useful in the development of complex forms. 
Take for example a page in which you enter options to make a flight reservation. 
A simple Mediator rule would be: you must enter a valid departure date, a valid return date, 
the return date must be after the departure date, a valid departure airport, 
a valid arrival airport, a valid number of travelers, and only then the Search 
button can be activated.

Another example of Mediator is that of a control tower on an airport coordinating 
arrivals and departures of airplanes.


