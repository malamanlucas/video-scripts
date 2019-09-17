# video-scripts

# flip and mirror video
ffmpeg -i in.mp4 -vf "hflip,vflip" -c:a copy out.mp4
