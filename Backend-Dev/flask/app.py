from flask import Flask, jsonify, render_template
import requests

app = Flask(__name__)

# Your API Key and city
API_KEY = "a14ceeb1c3486693b49643d71139d451"
CITY = "Delhi"

# Route to serve weather data
@app.route('/weather')
def get_weather():
    url = f"http://api.openweathermap.org/data/2.5/weather?q={CITY}&appid={API_KEY}&units=metric"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        weather_data = {
            "temperature": data['main']['temp'],
            "description": data['weather'][0]['description']
        }
        return jsonify(weather_data)
    else:
        return jsonify({"error": "Failed to fetch weather data"}), response.status_code

# Route to serve the frontend HTML
@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)