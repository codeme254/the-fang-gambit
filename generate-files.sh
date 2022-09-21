#!/bin/bash

echo "Give a directory name to the new directory: "
read NEW_DIR

mkdir $NEW_DIR
cd $NEW_DIR

touch problem.txt
touch optimized.js
touch brute-force.js
touch optimized.ins.js
