from app import socketio
from flask_socketio import emit
import cv2
import base64

cam = cv2.VideoCapture(0)


@socketio.on('connect')
def handle_connect():
    print("Connecting at python")
    emit('log_msg', {'data': 'connected at python'})
    
@socketio.on('echo')
def handle_echo(msg):
    print("Echoing: ",msg['data'])
    emit('log_msg', msg)
    
@socketio.on('get_img')
def handle_get_img():
    s, img = cam.read()
    img2 = img[:,:,:]
    ss, jpg = cv2.imencode('.jpg', img2)
    dat = base64.b64encode(jpg.tobytes()).decode()
    emit('update_img', {'s': s,'width': img2.shape[1],
                        'height': img2.shape[0],
                        'channels': img2.shape[2],
                        'data': dat})