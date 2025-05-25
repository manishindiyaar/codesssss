
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware  # Import CORS middleware
from pydantic import BaseModel
import requests

app = FastAPI()

# Enable CORS for all origins
origins = [
    "http://127.0.0.1:5500",  # Adjust the port as needed
    "http://localhost:5500"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # Allow requests from these origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

# OpenWeatherMap API key (replace with your own)
API_KEY = "a14ceeb1c3486693b49643d71139d451"  # Use your own API key

class WeatherRequest(BaseModel):
    city: str

@app.post("/weather/")
async def get_weather(request: WeatherRequest):
    city = request.city
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric"

    response = requests.get(url)
    
    if response.status_code != 200:
        raise HTTPException(status_code=response.status_code, detail="Error fetching weather data")

    weather_data = response.json()
    return {
        "city": weather_data["name"],
        "temperature": weather_data["main"]["temp"],
        "description": weather_data["weather"][0]["description"],
        "humidity": weather_data["main"]["humidity"],
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000, reload=True)

# uvicorn app:app --reload    

