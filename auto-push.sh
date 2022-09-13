#! /bin/bash

: 'This script automates pushing any new changes in this repo'
: 'Instead of having to type all the things below, I just do it with this script'

git add -A

git commit -m "'$message'"

git push

cat << encouragement
keep pushing Dennis, you are doing well.
encouragement

