DMA Direct Memeory Access

>Time-sensitive requests should be assigned the priority
>3, which is handled with a fixed higher priority scheme
>over the priorities 0 to 2

Note that this is the **opposite** priority order from ThreadX threads:

>By default, ThreadX has 32 priority levels, ranging from priority 0 through priority 31. Numerically smaller values imply higher priority. Hence, priority 0 represents the highest priority, while priority (TX_MAX_PRIORITIES-1) represents the lowest priority.

https://github.com/eclipse-threadx/rtos-docs/blob/main/rtos-docs/threadx/chapter3.md#thread-priorities

from: STM32U5 DMA transfers hardware and software views\
https://www.st.com/content/ccc/resource/training/technical/product_training/group1/33/af/ea/74/32/61/4b/33/STM32U5-System-DMA-xfr-HW-SW-views_DMATRANSFR/files/STM32U5-System-DMA-xfr-HW-SW-views_DMATRANSFR.pdf/_jcr_content/translations/en.STM32U5-System-DMA-xfr-HW-SW-views_DMATRANSFR.pdf \
or\
https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/ST_User_Manuals/STM32U5_DMA_Transfer_HW-SW-views_DMATRANSFR.pdf
