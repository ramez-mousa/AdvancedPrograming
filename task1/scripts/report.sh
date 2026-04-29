#!/bin/bash
DATE=$(date +"%Y-%m-%d")
FILE="notes/$DATE.txt"
echo "Report for $DATE" > $FILE
echo "User: $(whoami)" >> $FILE
echo "Current Directory: $(pwd)" >> $FILE
echo "Files in data: $(ls data | wc -l)" >> $FILE
echo "Report created successfully!"
