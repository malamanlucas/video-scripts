# video-scripts

# flip and mirror video
ffmpeg -i in.mp4 -vf "hflip,vflip" -c:a copy out.mp4

# transpose - rotate
ffmpeg -i amar-a-deus-sem-distracao.mp4 -vf "transpose=2" -c:a copy distracao-adjusted.mp4
