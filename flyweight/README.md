#The Flyweight pattern

Use sharing to support large numbers of fine-grained objects efficiently.

The Flyweight pattern conserves memory by sharing large numbers of fine-grained
objects efficiently. Shared flyweight objects are immutable, that is, they cannot
be changed as they represent the characteristics that are shared with other objects.

Essentially Flyweight is an 'object normalization technique' in which common properties 
are factored out into shared flyweight objects. (Note: the idea is similar to data model 
normalization, a process in which the modeler attempts to minimize redundancy).

Some examples include characters and line-styles in a word processor, or 'digit receivers' 
in a public switched telephone network application. You will find flyweights mostly
in utility type applications such as word processors, graphics programs, and network
apps; they are less often used in data-driven business type applications.