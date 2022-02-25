if [%2]==[] goto end
ffmpeg -y -i %1 -i %2 -filter_complex amix=inputs=2:duration=longest output.mp3

:end
@echo end
