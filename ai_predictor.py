import numpy as np
from sklearn.linear_model import LinearRegression

def predict_market(symbol):
    historical_data = np.array([[1, 2], [2, 4], [3, 6], [4, 8]])  # Exemplo simplificado
    X = historical_data[:, 0].reshape(-1, 1)  # Dias
    y = historical_data[:, 1]  # Preços

    model = LinearRegression().fit(X, y)
    prediction = model.predict([[5]])  # Prever o próximo dia

    return prediction[0]
