# WildCamera

---

## Planning phase

<img align="right" width="400" src="Images/Will 20240827_142415 Rotation Corrected.jpeg" alt="Will Robertson"/>

### **1. Requirements Analysis**

- **Why:**
	- **Ecologists and zoologists** identify shortcomings with commercial wildlife camera systems:
		- **Limited reliability** particularly with small, fast moving mammals
		- **Camera alignment** is often time-consuming and difficult
  		- **Extensive driving** to check on status of cameras
		- **Too slow** for fast moving animals
		- **Limited ability to focus nearby** resulting in poor image quality for small animals
		- **Limited optics** can only be changed by sticking extra lenses onto the existing optics with resulting decline in image quality or by time-consuming dismantling, removal of glue, adjustment and rebuilding
  		- **Limited image quality** particularly at night
  		- **Batteries** are often primary cells with no possibility to recharge 
		- **Lack of flexibility** adding new features is extremely difficult or impossible, users have no access to electronic or software design
		- **Reproducibility** because of differences in reliability is is difficult to compare studies carried out with different makes and models of cameras
		- **Waterproofing** is often inadequate for reliable long term use in damp environments
		- **High cost** is a major barrier to research but manufacturers are driven by maximising profits
		- **Expensive proprietary tie-in** for example to specific mobile networks - increasing long-term costs
		- **PIR sensors** work well for mammals but do not work at all for reptiles or insects
		- **Availability** preferred makes and models may not be available in the future
		- **Dated technology** large amounts of proprietary firmware and electronics and limited competition make commercial wildlife camera manufacturers slow to adopt new technologies and unable to catch up with rapidly advancing and highly competitive image sensor and processor technology
		- **Technical data** is often sales focused, omitting important information or known limitations

- **Objectives:**
	- **Video** from animals nearby and at a distance via a flexible choice of image sensors and optics
	- **Activation** via a flexible choice of activation sensors (PIRs, always-on camera, etc.)
	- **Data Capture** from a range of optional sensors
	- **Power Management** via an active mode and a low power sleep mode
	- **Power Supply** from a flexible choice of solar panels, battery chemistries and other supplies
	- **Robustness** through high quality watertight enclosures
	- **Re-Use** of 2nd hand photovoltaic modules (solar panels) and rechargable batteries
	- **Low Cost and High Quality** through intense competition between image sensor manufacturers
	- **Low Cost and Exceptional Capabilities and Flexibility** through intense competition between processor manufacturers
	- **Independence in the Field** via data download within WiFi range, solar power and optional LTE (mobile network) and sub-GHz
	- **Open Source** users can freely build and use the system and add open source functionality to make available to others
	- **Hardware Independence** can be chosen from multiple leading manufacturers to achieve optimum value for money and eliminate risk of proprietary tie-in and price gouging
	- **Reproducible** researchers can share and precisely reproduce each other's setup
	- **Future Proof** designed to be widely available in the long term
	- **Agile** Designed to take advantage of future advances in hardware and software
	- **Optional Add-On Modules** to add additional functionality
	- **Separate Modules** in separate boxes connected by flexible cables or in one box
		- **Camera** small with complete freedom of positioning
		- **PIR** multiple PIR (Passive Infra Red) sensors can be mounted some distance away - wide choice of high sensitivity, wide angle, etc.
		- **AIR** multiple AIR (Active Infr Red) sensors in addition to or instead of PIR where needed
		- **Processor** larger than camera, may have optional hardware modules added
		- **Battery** likely the largest module - may be some distance from processor and camera
		- **Solar Panel(s)** may be mounted some distance from battery and processor to gather light
		- **IR LEDs** can be positioned independently of camera, light output can be set in software, IR wavelength can be chosen
		- **Visible or IR Flash** where required

---

<img align="right" width="400" src="Images/Goedele - September 2024 - Cropped - P8280995.jpeg" alt="Goedele verbeylan" />

### **2. Key Technologies**

- **Camera and Optics :**
	- **Focal Length** 20mm to infinity
	- **Focusing**
		- **Manual** lens adjustment
		- **Fixed** via user interface
		- **Autofocus** via a choice of algorithms
	- **Daytime** Combined Red, Green, Blue and NIR (Near Infra Red)
	- **Nighttime** High sensitivity grey and NIR (Near Infra Red)
- **Processor**
	- **High Quality, High Flexibility**
		- **Image Quality** High
		- **Choice of Processor** Very wide
		- **Choice of Camera Modules** Wide
		- **Solar Panel and Battery** Larger
		- **Firmware** Full flexibility of Linux or Android operating system, libcarmera, Python, Rust, .Net, C++, etc.
		- **Dependency** Minimal dependencies between software and hardware
	- **Low Power**
		- **Image Quality** Limited
		- **Choice of Processor** More limited
		- **Choice of Camera Modules** More limited
		- **Solar Panel and Battery** Smaller
		- **Firmware** More limited, C, C++, MicroPython
		- **Dependency** More dependencies between software and hardware
- **AI**
 	- Built-in NPUs (Neural Processing Units) allow neural networks to be efficiently implemented on the camera
- **Activation Sensor**
	- **PIR** Choice of
		- **General Purpose**
		- **Narrow Angle**
		- **Wide Angle**
		- **High Sensitivity**
		- **Adjustable Sensitivity**

---

### **3. Hardware Selection**

- **Candidate Processors**
	- **High Quality, High Flexibility**
		- **Supported by libcamera** 
			- **NXP i.MX 8M Plus** Dual ISPs: up to 12MP and 375MPixels/s
			- **NXP i.MX95** Preproduction: 500 Mpixel/s MIPI-CSI and ISP (2x 4-lane, 2.5 Gbps/lane)
			- **ST STM32MP2 Series** On ST roadmap. CSI-2 #1 (5 Mpixels @30 fps with ISP), #2 (1 Mpixels @15 fps no ISP)
			- **Raspberry Pi 4 (RPi 4) SBCs** High power consumption and lack of low power sleep mode are a significant problem.
			- **Raspberry Pi 5 (RPi 5) SBCs** Lack of hardware video encoder, high power consumption and lack of low power sleep mode are a very significant problem.
			- **Raspberry Pi Zero 2 (RPi Zero 2)** Power consumption, lack of sleep mode and speed of video encoder (19 FPS for 1080p) are a problem but may be worth testing.
			- **Raspberry Pi Zero (RPi Zero)** Video encoder is too slow (1.2 FPS 1080p).
			- Chips Integrating **Mali-C55 ISP**
				- **Renesas RZ/V2H** Mali-C55 ISPC
			- Chips Integrating **Mali C52 ISP**
   				- Possibly in the longer therm
			- Chips Integrating **Amlogic C3 ISP**
   				- Currently in development by Amlogic
	- **Low Power**
		- **ST STM32N6 Series μCs** ISP, MIPI CSI-2, H264 hardware
		- **NXP S32V2** Embedded ISP for HDR, color conversion, tone mapping, etc. enabled by ISP graph tool

<video controls src="https://github.com/user-attachments/assets/248f8eea-008a-45c1-bc7c-6e400344eacd" alt="Eliomys quercinus © Goedele Verbeylen"></video>

- **Candidate Cameras and Image Sensors**
	- **Sony** PRi Camera Module 3 IMX708 or RPi High Quality Camera IMX477
	- **ST BrightSense RGB and NIR** e.g. VD1940 5.1 Mpixel, VB1740 2.7 Mpixel, etc.
	- **ST BrightSense NIR Optimised** e.g. VG5761 2.3Mp HDR ultra low-noise
	- **OmniVision OV64A40** e.g. VG5761 2.3Mp HDR ultra low-noise
	- **OmniVision OX05B1S** RGB-IR 5Mp image sensor
	- **Global Shutter** undistorted photography of fast moving events - Sony and ST
	- **Others** Other image sensors supporting libcamera
- **Candidate Enclosures**
	- **Serpac RB Series** IP67, UV stabe
	- **Scame Parre S.p.a SCABOX Series** IP56
- **Activation Sensors** Passive Infra Red (PIR) or other technologies for specialist applications.
- **Storage** MicroSD card or internal flash memory (eMMC).	
- **Data Communication** Wi-Fi (preferred) or Bluetooth for video, photo and data download to a laptop within range.
- **Wakeup Communication** Low power protocol e.g. Matter IoT, Bluetooth LE, Zigbee or sub-1GHz IEEE 802.15.4 to send wake-up signal to waken up WiFi above.
- **Power Supply** solar panel(s), external power source.
- **Battery** Li or LiFePO4 for high temperatures, PbA for lower temperatures.

---

### **4. Optional Add-On Modules**

- **Temperature Sensor** small and robust - multiple temperature sensors can be connected and can be some distance from the processor
- **Humidity Sensor**
- **Ambient Light Sensor**
- **Microphone**
- **Ultrasonic Microphone**
- **Heterodyne Detector** To shift ultrasonic bat calls to the audible range before recording
- **RFID** to read ID from tagged animals
- **ePaper Screen** displaying system status
- **Touchscreen**
- **4G LTE** Remote monitoring and control via mobile phone network via LTE (Long-Term Evolution) - successor to GSM to communicate over mobile phone network
- **Long Range Sub-GHz** BeagleConnect Freedom - TI SimpleLink CC1352P7 wireless μC, Zephyr and MicroPython, 2.4GHz and sub-1GHz IEEE 802.15.4 wireless network
- **Satellite Communications Module** Allows status information, videos and photos to be sent where no mobile network is present however can be expensive
- **Audio Output Module** Inexpensively provides an audible distress call if WildCamera is experiencing a problem or needs help, can also play pre-recorded sounds to attract or repel animals
- **Wind Speed and Direction** 
- **Always-On Camera** Low quality, low power camera which is always on to detect creatures which PIR cannot detect
	- **Active Area Selection** Active areas of always on camera can be selected
- **Ethernet** May be used instead of WiFi for faster data download
- **PoE** May be used to charge or power system over Ethernet cable.
- **AI on Camera** Camera module with onboard neural network processing - e.g. Sony IMX500 Intelligent Vision Sensor with RP2040
- **AI on Processor** Use NPU, TPU, GPU or other AI accelerators on processor to run neural networks e.g. CNNs (Convolutional Neural Networks) for image recognition, for sound recognition or for counting animals.
- **Optics** Custom optics mounted to image sensor for specialist tasks
- **Endoscope Cameras** Tiny camera mounted on endoscope and left in situ
- **Camera Mounts** Open source metal support designs and 3D printed hardware to accurately and reliably mount and align camera.
- **Mesh Network** Automatically form a WiFi or sub-1GHz mesh network between cameras which are in range of each other
- **Weight Measurement** via load cell
- **USB Camera Modules** Increased flexibility at the cost of increased power consumption
- **ToF (Time of Flight) Sensor**
- **Sample Collection** for example via paper roll or adhesive tape roll
- **Thermal Imaging Camera**
- **Auto Wake-Up** from change of scene from VD55G1 image sensor in low power (2mW) mode
- **Automated re-baiting** of small, non-perishable bait items - for example nuts
- **Live Local Streaming** Via WiFi, Ethernet, or sub-GHz wireless - Caution: High power usage.
- **Live Internet Streaming** Via free choice of mobile network and LTE - Data charges depend on network.

---

### **5. Software Architecture**

<img align="right" width="400" src="Images/Will Robertson - Looking-to-the-Future-DJI_0490-2048x1536 - cropped - 90.jpeg" alt="Will Robertson"/>

- **High Quality, High Flexibility**
	- **Operating System:** Linux-based distribution (e.g., Yocto or Buildroot), Android.
	- **Camera Stack:** libcamera (Use of V4L2 and Media Controller APIs is possible but discouraged.)
	- **Programming Languages:** Python, Rust, C++, .Net, etc.
- **Low Power**
	- **Bare Metal or RTOS Real Time Operating System**
		- **FreeRTOS** RTOS
		- **ThreadX** RTOS
		- **Zephyr** RTOS
		- **Bare Metal** no RTOS
	- **Camera Stack:** None - separate low level driver for each image sensor must be obtained or developed.
	- **Programming Languages:** MicroPython, C, C++ (High Level languages e.g. Python, Rust, .Net not supported.)
- **Firmware:** Real-time software for
	- **Monitoring activation sensors**
	- **Controlling wake up of CPU**
	- **Sending CPU to sleep mode**
	- **Telling CPU to reduce power usage** e.g. by reducing fps, binning pixels, stopping compression, reducing LED intensity if power drops below a threshold
	- **Shutting down safely** if power is too low to continue
	- **Powering up correctly** when power is restored
- **Middleware** Data processing, image and audio capturing, sensor management.	
- **Application** User interface (web or app-based) for camera alignment and setup using smartphone.	

---

### **6. Development & Prototyping**

- **Processor Prototyping Board** Use development boards or SoMs for
	- **High Quality, High Flexibility**
		- **ST STM32MP25 Line** e.g. STM32MP257F-DK
		- **NXP i.MX 8M Plus family** e.g. 8MPLUSLPD4-EVK, DEBIX Model A SBC, DEBIX SOM A, Coral Dev Board, Toradex Colibri iMX8X, Embedded Artists iMX 8
		- **Microchip SAMA7G54** e.g. EA16Z43A
		- **Renesas RZ/G2 64-Bit MPUs** Ka-Ro TXRZ, Beacon RZ/G2 SoM, SolidRun RZ/G2L SoM
		- **Texas Instruments** AM67A (4 ISPs) BeagleBoard BeagleY-AI, TDA4VM (ISP) BeagleBone AI-64, AM625 BeagleBoard BeaglePlay (no HW ISP)
		- **MediaTek** SoMs made by VIA viatech.com, Coral Dev Board Mini
	- **Low Power**
		- **STM32N6 Series μCs** NUCLEO-N657X0-Q or STM32N6570-DK - Not yet available in Europe in December 2024
		- **i.MX RT1170** MIMXRT1170-EVKB i.MX RT1170 Evaluation Kit, NXP i.MX RT1176 MCU Coral Dev Board Micro
- **Camera / Image Sensor Prototyping Board** Use development boards for
	- **Sony IMX708** PRi Camera Module 3
	- **Sony IMX477** RPi High Quality Camera
	- **ST BrightSense** S-Board or P-Board
- **Modularity**
	- **Minimise Hardware Dependencies** between core system software and hardware.
	- **Optional Add-On Modules** developed and tested separately

---

### **7. Testing & Validation**

- **Energy Harvesting Tests** With a solar panel in real world conditions.	
- **Waterproofing Tests** Test waterproof enclosures outdoors.
- **High Quality, High Flexibility**
	- **Power Consumption Tests** Measure power consumption in suspend-to-ram
	- **Wakeup Time Tests** Measure time to wake from suspend-to-ram
- **Low Power**
	- **Power Consumption Tests** Measure power consumption in running and dormant states
	- **Wakeup Time Tests** Measure time to wake from dormant state
- **Visible Image Quality Tests** of camera modules in laboratory
- **IR Image Quality Tests** of camera modules in laboratory
- **PIR Activation Tests** To determine reliability of different PIRs
- **Development Sessions** Online and in person with biologists, ecologists, conservationists, foresters and zoologists
- **Hardware Independent Automated Tests** for software
- **Field Tests** Test in real-world outdoor environments.	
- **Research Suitability:** Ensure data accuracy and long-term reliability.	

---

### **8. FAQs Frequently Asked Questions**	

- **How long can WildCamera power itself independently?** In practice this depends on:
	- **Solar Panels** the size and efficiency of the solar panels selected
	- **Shade** whether the solar panels are shaded for part or all of the day
	- **Battery Size** the size of the battery selected
	- **Battery Chemistry** Lithium (Li) batteries have higher energy density than lead acid (PbA) batteries but lithium batteries cannot be used in cold conditions.
	- **Frequency of Activation** the more often the camera is activated, the higher the power consumption
	- **Intensity of LED Illumination** using more NIR (Near Infra Red) illumination in low light levels or at night increases power consumption
		- **Image Sensor Used** selecting a specialist low noise, high sensitivity image sensor for night time use may increase the cost of the image sensor but reduces the need for power for NIR (Near Infra Red) LED illumination
		- **Distance From Target** Being closer to the target reduces the need for power for NIR (Near Infra Red) LED illumination
	- **AI - Neural Networks** Running neural networks, e.g,. for object recognition, etc. on WildCamera will increase power consumption depending on complexity of NN
	- **Optional Add-On Modules** will increase power consumption
	- **Weather** bad weather or snow on solar panels decreases the solar energy available
	- **Duration of Daylight** depending on latitude and time of year
- **How do I align the camera?**
	- **Real Time Video Stream via WiFi** With WiFi activated, a real time video stream from the camera and data on PIR activation is sent to a smartphone, tablet or laptop within range
- **How do I get the SD card out of the box?**
	- **Use WiFi or Ethernet** Data download via WiFi or Ethernet from WildCamera to a laptop is preferred because it eliminates the need to fiddle with SD cards, to climb trees to reach the SD card or to disturb the wildlife being observed.
- **How long until storage is full?** this depends on
	- **Frequency of Activation**
	- **Compression** Activating photo and video compression will greatly reduce the storage space used but also somewhat increase power consumption.
	- **Image Sensor** The larger the number of pixels on the image sensor, the larger the storage space required
	- **Image Quality Selected** Averaging together or *binning* adjacent pixels reduces the storage required.
	- **Video FPS** The more frames per second selected, the greater the storage space required for video
- **Why is the solar panel larger than commercial wildlife cameras?**
	- **Larger Solar Panels** harvest the energy needed for the system to be highly flexible and support advanced functionality - because of competition between solar panel manufacturers the cost of the larger solar panel is low compared to the improvement in flexibility and functionality.
- **Does WildCamera work with reptiles, beetles and insects?**
	- **Yes** via the optional always-on camera module and LED illumination if required (constant LED illumination will increase power consumption)
- **This sounds complicated - I'm not sure if I can handle it?:**
	- Building a Linux kernel for an embedded system is difficult - we provide that ready made and ready to go.
	- When we design add-on modules we ensure that they're compatible and easy to add using simple tools.
	- We try to provide full, easily understood documentation.
	- Where needed, we can provide a full build and customisation service.
- **What optics can be used?:**
	- **Optics in Camera Modules** The optics built-in to camera modules support most use cases
	- **Custom Optics** Any off-the-shelf or custom designed lens system that's compatible with an M12 mounting.
- **Will WildCamera let me know if something is wrong?**
	- **Yes** If a mobile signal is present and an optional 4G LTE module is present, if the optional Long Range Sub-GHz module is present and you're within Sub-GHz range (1 to 10 km depending on conditions), if an optional Satellite Communications Module is present or if you're within WiFi range, visually via an optional ePaper display module if present, audibly via audible distress calls from an optional audio output module if present or visually via LEDs.
- **Where are all WildCamera's buttons and controls?**
	- **On a Smartphone or Tablet** Because of the advanced functionality available in WildCamera, for ease of use, for flexibility, to optimise optimum waterproofing, to make manufacture as efficient as possible and to minimise cost, WildCamera does not have fiddly buttons - instead it exposes its user interface via a web page which is made available over WiFi (or other communications protocols if optional add-on modules are present) and can be displayed on a mobile phone, tablet or laptop.
- **Why do I have to ask WildCamera to wake up WiFi before using WiFi functionality?**
	- **Power consumption** WiFi allows very fast transmission of photo and video files over many 10s of meters but consumes a lot of power so is only switched on when needed.
- **What happens when an image sensor used by WildCamera is superseded?**
	- **WildCamera's Modular Design** allows users to benefit from new image sensors for which drivers are available by plugging them in and putting them to work
- **What happens when a microprocessor used by High Power, High Flexibility WildCamera is superseded?**
	- **Hardware independence** allows WildCamera software, sensors and optional add-on modules to take advantage of new capabilities of new microprocessors
- **Does it have EMC, RoHS, CE, UKCA, FCC, etc. Compliance?**
	- **The manufacturers of modules** used by WildCamera are responsible for ensuring that their modules comply with all regulations in force where the modules are sold and organising compliance testing and certification - leading module designers and manufacturers generally achieve full compliance in most major markets. Buying modules from a high quality electronics supplier with a good reputation is recommended and generally ensures that the modules have the required compliance.
- **Can cheap modules from unknown suppliers be used?**
	- **This may or may not work and is not recommended** modules purchased from unknown suppliers may be built using illegally manufactured fake semiconductors or may be constructed with inadequate quality control so they may not function as specified at all or may not function as specified in all conditions - this introduces the risk of faults or problems which are extremely difficult and expensive to diagnose, the modules may also fail to comply with regulations
- **The volume of data collected is too large to handle efficiently - what do I do?**
	- **Members of the Community** can estimate costs and implement automated upload of data, photos and videos to a private central database (PostgreSQL, MySQL, SQL Server, etc.) or a public database (e.g. observation.org) from which data can be selected using SQL, analysed using QGIS or QGIS Server, statistical analysis done using Python or R or data exported to spreadsheets, files, other databases, other GIS systems or other software.
- **Can data from sensors be recorded without a camera attached?**
	- **Yes** WildCamera can function as a highly flexible data logger with or without a camera module
- **I can't do electronic construction - what do I do?**
	- **Members of the Community** who have the skills and facilities can estimate costs and help with this
- **I need to add software functionality but I'm not a software engineer - what do I do?**
	- **Members of the Community** who have software engineering skills can estimate costs, develop the functionality required and open source this to benefit other users
- **I need an add-on module that isn't available - what do I do?**
	- **Members of the Community** with electronic and software skills can search for an off-the-shelf module which adds the functionality required and estimate the cost of integrating it or estimate the cost of developing an add-on module and open source it to benefit other users
- **I need to use a specialised camera for which drivers aren't available - what do I do?**
	- **Members of the Community** with camera driver development experience can estimate the cost, develop a driver and open source it to benefit other users
- **Why is it much cheaper, much better and much more flexible than commercial wildlife cameras?**
	- **Intense Competition** WildCamera has been designed from the ground up to benefit from extremely intense competition between leading microprocessor manufacturers and leading image sensor manufacturers who compete for the valuable smartphone, building automation, domestic appliance, autonomous and semi-autonomous vehicle and industrial monitoring and control markets. This very intense competition drives improvements in functionality, improvements in energy efficiency and reductions in cost.
	- **Not For Profit Community** WildCamera was founded to benefit conservation research not to make money.
	- **Open Source** The software and electronics at the heart of WildCamera are freely available for everyone to make use of. Independent research groups can win funding to add functionality and improvements which then benefit the entire community.
	- **Fast Pace and Advanced Technology** WildCamera uses the Agile and Open Source methodologies used in leading-edge professional software engineering, allowing it to move much faster than proprietary commercial counterparts and stay at the forefront of technology - optimising functionality and minimising cost
	- **Standing on the Shoulders of Giants** WildCamera is designed to benefit from the work of the world's most advanced microprocessor and image sensor design teams, the Linux kernel team and the libcamera team.

---

### **9. Example Power Budget**	

Debix Model A SBC (2GB LPDDR4)

- Measured:

- **Sleep Mode** 0.17 ~ 0.310 W
- **Active** 1.49 W upwards depending on load

- Specifications (Debix Model A (2GB LPDDR4+16GB eMMC)):

- **Sleep Mode** 0.375~0.380 W
- **Active** Example: Local video playback 4.105~4.735 W

- Note: Model A SoM provides 2 MIPI CSI-2 interfaces and Model A SBC provides 1.

Raspberry Pi 4 B SBC

 - Measured:
 - Record, compress and store HDR 1080p video:
 - 78.6 Wh of energy or
 - c. 3.1 to 3.2 W

 - Idle:
 - c. 1.8 to 1.9 W

Power available:

 - Between 23 March and 13 April on forest floor in Switzerland from 1.78x1.04 m panel:
 - Worst day: 170 Wh per day Yield

Measurements on a Swiss forest floor are in directory [/Power Harvesting/](https://github.com/William-Robert-Robertson/WildCamera/tree/main/Power%20Harvesting)

Worst case measured in a shaded location in Zürich in early to mid February 2025 with a 445 W nominal photovoltaic panel (solar energy availabel in mid-March is c. 3 x more than in mid-February):

- 30 to 40 Wh per day during days of overcast and rainy weather
- 60 to 70 Wh per day during days of brighter weather

In a brighter location but with little direct sunlight

- 160 to 190 Wh per day

Worst case based on "The Distribution of Solar Radiation Within a Deciduous Forest" Hutchison & Matt 1977 - on forest floor on 16 January 1973 and 20% efficiency

- c. 6 Watts per square meter diffuse
- c. 28 Watts per square meter total

---

### **10. Quick non-Technical Summary**

https://new-homes-for-old-friends.cairnwater.com/wildcamera/

---

### **11. Other Languages**

- English: WildCamera Open Source Wildlife Camera / Camera trap
- Deutsch: WildKamera Open Source Wildtierkamera
- Vlaamse: WildCamera Open Source Wildcamera / Cameraval
- Français: WildCamera Piège photographique / Caméra pour animaux sauvages à source ouverte

This document is prepared in English - for translation to other languages please contact us :-)

---

### **12. Review**

Prepared by Will Robertson, reviewed by Goedele Verbeylen and Conor Kelleher.

---

A full list of references to research literature can be found here:

<https://new-homes-for-old-friends.cairnwater.com/references/>

<p align="center" width="100%">
    <img width="33%" src="Images/Glis glis - Stiftung Wildstation Landshut -  IMG_1950.JPG"> 
</p>

### **13. Copyright**

Text Copyright © 2025 Will Robertson
Licenced under AGPL 3.0 or later

Photography and videography Copyright Stiftung Wildstation Landshut, Goedele Verbeylen and Will Robertson.

### **Note**	

National Geographic have a Crittercam project designing cameras which can be attached to marine animals which is not related to WildCamera.

<https://www.nationalgeographic.com/magazine/article/see-the-ingenious-crittercams-used-to-photograph-elusive-animals/>
