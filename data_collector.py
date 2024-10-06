import requests

API_KEY = 'your_alpha_vantage_api_key'

def get_stock_data(symbol):
    url = f'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol={symbol}&apikey={API_KEY}'
    response = requests.get(url)
    data = response.json()

    if 'Time Series (Daily)' in data:
        return data['Time Series (Daily)']
    else:
        return {'error': 'Unable to fetch data'}
