STM32N6570 - RAM Transfer Speed and Frame Buffers

| Parameter | Value | Units |
| ----- | ----- | ----- |
| #define SCREEN_HEIGHT (480)	| 400	| Pixels |
| #define SCREEN_WIDTH  (800)	| 800 |	Pixels |
| This gives a buffer size per frame per buffer for 1 byte L8 pixels of: | 320000 | Bytes |
| or: | 312.5 | Kilobytes |
| or: | 0.3051757813 | Megabytes |
| Assuming 30 fps for one buffer one-way this would be | 9375 | Kilobytes per Second |
| or: | 9.155273438 | Megabytes per Second |

APS256XXN-OBx9 OPI/HPI Xccela PSRAM - Double-Data-Rate OPI/HPI Xccela PSRAM \
https://www.apmemory.com/en/downloadFiles/0324112221tz581562 \
Performance: Clock rate up to 250MHz,
|  |  |  |
| ----- | ----- | ----- |
| 500MBps read/write throughput – X8 | 500 | Megabytes per second theoretical maximum for external RAM
| 1000MBps read/write throughput – X16| 1000 | Megabytes per second theoretical maximum for external RAM

Very approximate calculations for the above are in this sreadsheet:

STM32N6570 - RAM Transfer Speed and Frame Buffers \
https://docs.google.com/spreadsheets/d/1zHCg8qn93S9lHy3G4bqTosCGL2THcWPjX7wv3NXdutA/edit?usp=sharing

For power consumption of external RAM:

https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/Power_Budget/APS256XXN_PASR_PSRAM.md

