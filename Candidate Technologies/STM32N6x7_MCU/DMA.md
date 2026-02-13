DMA Direct Memery Access

>Time-sensitive requests should be assigned the priority
>3, which is handled with a fixed higher priority scheme
>over the priorities 0 to 2

Note that this is the **opposite** priority order from ThreadX threads:

>By default, ThreadX has 32 priority levels, ranging from priority 0 through priority 31. Numerically smaller values imply higher priority. Hence, priority 0 represents the highest priority, while priority (TX_MAX_PRIORITIES-1) represents the lowest priority.

from:\
https://www.st.com/content/ccc/resource/training/technical/product_training/group1/ff/53/77/83/1a/ba/48/5d/STM32H5-DMA-2D-V2/files/stm32h5-system-dma-2d-adressing-v2.pdf/jcr:content/translations/en.stm32h5-system-dma-2d-adressing-v2.pdf\
or\
https://github.com/eclipse-threadx/rtos-docs/blob/main/rtos-docs/threadx/chapter3.md#thread-priorities\

from: STM32U5 DMA transfers hardware and software views\
https://www.st.com/content/ccc/resource/training/technical/product_training/group1/33/af/ea/74/32/61/4b/33/STM32U5-System-DMA-xfr-HW-SW-views_DMATRANSFR/files/STM32U5-System-DMA-xfr-HW-SW-views_DMATRANSFR.pdf/_jcr_content/translations/en.STM32U5-System-DMA-xfr-HW-SW-views_DMATRANSFR.pdf \
or\
https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/ST_User_Manuals/STM32U5_DMA_Transfer_HW-SW-views_DMATRANSFR.pdf

from: STM32U5 DMA: Circular buffering & double buffering\
https://github.com/William-Robert-Robertson/WildCamera/blob/main/Candidate%20Technologies/ST_User_Manuals/STM32U5-System-DMA-Circular-buffering-double_buffering_DMACBDB.pdf \
or\
https://www.st.com/content/ccc/resource/training/technical/product_training/group1/75/12/e2/f7/f3/72/46/df/STM32U5-System-DMA-Circular-buffering-double_buffering_DMACBDB/files/STM32U5-System-DMA-Circular-buffering-double_buffering_DMACBDB.pdf/_jcr_content/translations/en.STM32U5-System-DMA-Circular-buffering-double_buffering_DMACBDB.pdf

Potentially also relevent STM32H5 DMA 2D addressing:
https://www.st.com/content/ STM32H5ccc/resource/training/technical/product_training/group1/ff/53/77/83/1a/ba/48/5d/STM32H5-DMA-2D-V2/files/stm32h5-system-dma-2d-adressing-v2.pdf/jcr:content/translations/en.stm32h5-system-dma-2d-adressing-v2.pdf
