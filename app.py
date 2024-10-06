from flask import Flask, jsonify, request
from data_collector import get_stock_data
from ai_predictor import predict_market
from notifications import send_notification

app = Flask(__name__)

@app.route('/api/stock/<symbol>', methods=['GET'])
def stock_data(symbol):
    data = get_stock_data(symbol)
    return jsonify(data)

@app.route('/api/predict/<symbol>', methods=['GET'])
def predict(symbol):
    prediction = predict_market(symbol)
    return jsonify({'symbol': symbol, 'prediction': prediction})

@app.route('/api/notify', methods=['POST'])
def notify_user():
    message = request.json.get('message')
    send_notification(message)
    return jsonify({'status': 'Notification sent'})

if __name__ == "__main__":
    app.run(debug=True)
