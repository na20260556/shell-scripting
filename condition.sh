!#/bin/bash
PERSON1=$1
if [ PERSON1 -lt 10 ]; then
  echo "PERSON1 is less than 10"
elif [ PERSON1 -eq 10 ]; then
  echo "PERSON1 is equal to 10"
else
  echo "PERSON1 is greater than 10"
fi