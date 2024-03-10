from flask import Flask, request, jsonify
import tensorflow as tf
import librosa, librosa.display
import matplotlib.pyplot as plt
import io
from PIL import Image
import numpy as np

app = Flask(__name__)

@app.route("/predict",methods=['POST'])
def predict():


    #load model
    model = tf.keras.model.load_model("quantum_model.h5")

    # librosa paramaters
    window_size=2046
    hop_length=512
    n_mels=128
    fmax=8000
    
    # get audio sample
    audio_sample = request.files['audio_file']

    
    # librosa image
    y,sr = librosa.load(audio_sample,sr=22050)
    S = librosa.feature.melspectrogram(y=y, sr=sr, n_fft=window_size, hop_length=hop_length,n_mels=n_mels,fmax=fmax)
    S = librosa.power_to_db(S)

    fig,ax = plt.subplots(figsize=(10,5))
    librosa.display.specshow(S, y_axis='mel', x_axis='time')
    plt.colorbar()

    img_buf = io.BytesIO()
    plt.savefig(img_buf,format='png')

    im = Image.open(img_buf)
    im = np.array(im,dtype='f')
    im /= 255
    
    response = model.predict(im)
    return response
    


if __name__ == '__main__':
    app.run(host='localhost',port=5000)
    
    
    