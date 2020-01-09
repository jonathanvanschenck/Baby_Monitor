# Baby_Monitor
A little baby monitor web app, so that you don't have to give some rando company a bunch of video of inside your house.
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
 some printed content
 IPv4 Address. . . . . . . . . . . : X.X.X.X
 more printed content
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
