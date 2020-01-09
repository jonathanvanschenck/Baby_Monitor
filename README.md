# Baby_Monitor
A little baby monitor web app, so that you don't have to give some rando company a bunch of video of inside your house. Basically, it uses a computer's webcam (and eventually a raspberry pi's webcam) to stream video over a local router, so that other devices connected to the same router can get view the realtime footage. The intent is for parents to monitor their babies; don't be skeezy.
## Setting up the monitor
1) Create a python3 virtual environment
On windows this looks like:
```cmd
  > pythom -m venv venv
```
then activate the enviromenment
```cmd
 > venv\Scripts\Activate
 (venv) > 
```
2) Install the required python packages
```cmd
 (venv) > pip install -r requirements.txt
```
## Running the monitor server
1) Discover the server's IP address
You will need to learn the server's external IP address (called the IPv4 address on windows). On windows, run:
```cmd
 > ipconfig

 IPv4 Address. . . . . . . . . . . : X.X.X.X

```
Keep track of the X.X.X.X number.

2) Starting the server
To run the server, activate the virtual enviroment, and then run run.py:
```cmd
  > venv\Scripts\Activate
 (venv) > python run.py
```
The terminal should then list something to the effect of:
```cmd
  * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
```
 If this is your first time running the app, your computer's firewall may attempt to block python from hosting this server. On windows you will be prompted to grant python access--do so.
 ## Logging on to the server
 This part is simple: make sure you are connected to the same router as the server, then fire up the browser of your choice and access http://X.X.X.X:5000/ where 'X.X.X.X' is your server's external IP address from above.
 
 ## To do list
 * Add audio streaming functionality
 * Coordinate AV streaming together
 * Make it pretty with a some css formating
 * Set up case formatting for if the client is as desktop or mobile
 * Add instructions for setting a static ip address and domain name for the server, to make client log in more user friendly
 * Set up some user accounts to add some security to the video stream
 * Add some hardware specs and suggestion, potentially even a 3d printable file to mount a raspberry pi and webcam inside of?
 * Add some code to power some IR leds off a gpib or usb port so that the webcam can see in the dark
