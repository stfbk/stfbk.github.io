#!/bin/bash

if [[ ! -d "../_data" ]]; then
    echo "Run this file from the etc directory."
    exit 1
fi

people=$(yq eval '.[] | [.name,.surname,.iris_id] | join(", ")' "../_data/people.yml" | sed "s/, /,/g")

echo "$people" | while read -r i; do
    surname=$(echo "$i" | cut -f 2 -d ',' | sed "s/ /+/g")
    name=$(echo "$i" | cut -f 1 -d ',' | sed "s/ /+/g")
    iris_id=$(echo "$i" | cut -f 3 -d ',')
    if [[ -z "$iris_id" ]]; then
        continue
    fi
    echo "$name $surname $iris_id"
    curl "https://cris.fbk.eu/browse?filter_value_display=${surname}%2C+${name}&type=author&offset=0&authority=${iris_id}&sort_by=2&order=ASC&rpp=1000&format=bibtex&submit_export_metadata=submit" > tmp/$iris_id.bib

done
