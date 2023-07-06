#!/bin/zsh

files=(people destinations publications)
folder="../_data"

if [[ ! -d "$folder" ]]; then
    echo "Run this file from the etc directory."
    exit 1
fi

for i in $files; do
    mv "$folder/$i".yml "$folder/$i".yml.bak
    cat "$folder/$i".yml.bak | grep "#--#--#--#--#--#" -B 100000000 > "$folder/$i".yml
    cat "tmp/${i}_generated.yml" >> "$folder/$i".yml
done