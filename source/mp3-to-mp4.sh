#!/bin/bash

# loop & print a folder recusively,
print_folder_recurse() {
    for i in "$1"/*;do
        if [ -d "$i" ];then
            #echo "dir: $i"
            print_folder_recurse "$i"
        elif [[ $i == *.mp3 ]]; then
            filename=$(basename -- $i)
            echo "file: $filename"
            ffmpeg -loop 1 -i /Users/ucoliveira/ferramentas/evangelho/Unicamp/image.png -i $i -c:a copy -c:v libx264 -shortest /Users/ucoliveira/ferramentas/evangelho/Unicamp/converted/$filename.mp4
        fi
    done
}


# try get path from param
path=""
if [ -d "$1" ]; then
    path=$1;
else
    path="/Users/ucoliveira/ferramentas/evangelho"
fi

echo "base path: $path"
print_folder_recurse $path