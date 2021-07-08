import joblib
from flask import Flask, request
import json
import numpy as np
import sklearn 

app= Flask(__name__)

model=joblib.load('gripmodel')

@app.route('/predict', methods= ['POST'])
def predict():
    event=json.loads(request.data)
    values= event['values']
    values=list(values)
    pre=np.array(values)
    pre=pre.reshape(1,-1)
    res=model.predict(pre)
    print("prediction is" ,res)
    return str(res)

if __name__== '__main__':
    app.run(debug=True,port=12345)  