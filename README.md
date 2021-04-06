# WEMARS Mission Controller
This is a web app that will act as the controller for the Western Engineering Mobile Advanced Robotics rover.

## TO DO

### Front End
- [ ] Look into HTML Camera view
- [ ] Look into GCP JS Map and Geolocation
- [ ] Look into 3D Modeling implementation
- [ ] Create a design for the mission controller
- [ ] Build using HTML/CSS
- [ ] Implement Camera View
- [ ] Implement JS Map
- [ ] Implement 3D Modeling

### Back End
- [ ] Look into Unity controls
- [ ] Implement the controls
- [ ] Replace the Unity controls with proper commands for the rover

## What is needed
1. Camera View
2. Map View
3. A way to see which part is moving
4. Visual representation of the controls
5. Maybe Battery life and other status of the robot

## Camera View
The camera view will be using the example from Kirupa. https://www.kirupa.com/html5/accessing_your_webcam_in_html5.htm

HTML: uses the video tag to display the camera video, along with the autoplay attribute to have it displayed constantly.

Note: Since this on the browser, the camera driver needs to be at least 64 bit since most browsers no longer support 32 bit drivers.

## Map View
Uses Google Cloud Platform JS Map API to work. https://developers.google.com/maps/documentation/javascript/overview

## 3D Model
Will be using three.js to implement the 3D created in Blender. 

Note: File type should be glTF.

## Design
Used Figma to create the layout of the controller. 
https://www.figma.com/file/W67FEbq2M5QXv4zwLE36x3/WEMARS-Mission-Controller-layout?node-id=0%3A1
