#!/bin/bash

person1="Alice"
person2="Bob"
topic="variables"
example="name='Alice'"
usage="echo \$name"

echo "$person1: Hey $person2, do you know how $topic work in shell scripting?"
echo "$person2: Not really, can you explain?"
echo "$person1: Sure! You can create a variable like this:"
echo "$person1:   $example"
echo "$person2: How do I use the value stored in 'name'?"
echo "$person1: You use the \$ symbol before the variable name, like this:"
echo "$person1:   $usage"
echo "$person2: Oh, so it prints 'Alice'!"
echo "$person1: Exactly! And remember, no spaces around the '=' when assigning."
echo "$person2: Got it! Thanks, $person1."
