# import requests

# # The data you want to send
# data = {
#     "title": "foo",
#     "body": "bar",
#     "userId": 1
# }

# # Sending a POST request to a sample URL
# response = requests.post('https://jsonplaceholder.typicode.com/posts', json=data)

# # Checking if the request was successful
# if response.status_code == 201:  # 201 means created
#     print("Data posted successfully!")
#     print(response.json())
# else:
#     print(f"Failed to post data. Status code: {response.status_code}")

# import requests

# response = requests.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=your_api_key')
# print(response.json())  # Prints weather data for London


# import requests

# response = requests.get('https://medium.com/@anilmatcha/ai-voice-agent-how-to-build-one-in-minutes-a-comprehensive-guide-032a79a1ac1e')
# print(response.text)  # Print the HTML content of the page

# import requests
# api = ""
# response = requests.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=a14ceeb1c3486693b49643d71139d451')
# print(response.json())  # Prints weather data for London

# import requests

# # Define the base URL and your API key
# api_key = "a14ceeb1c3486693b49643d71139d451"
# city = "India"
# base_url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}"

# # Print the constructed URL to verify it
# print("Request URL:", base_url)

# # Send the GET request
# response = requests.get(base_url)

# # Check the status code and print detailed error info if it fails
# if response.status_code == 200:
#     # Parse JSON data
#     data = response.json()
#     main = data['main']
#     temperature = main['temp']
#     humidity = main['humidity']
#     weather = data['weather'][0]['description']
    
#     # Print the results
#     print(f"City: {city}")
#     print(f"Temperature: {temperature - 273.15:.2f}°C")  # Convert from Kelvin to Celsius
#     print(f"Humidity: {humidity}%")
#     print(f"Weather Description: {weather}")
# else:
#     # Print the status code and response text for debugging
#     print(f"Failed to get data. Status Code: {response.status_code}")
#     print("Response:", response.text)



import requests

# Set Delhi’s latitude and longitude
latitude = 28.6139
longitude = 77.209

# Create the request URL for Open-Meteo
base_url = f"https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current_weather=true"

# Send the GET request
response = requests.get(base_url)

# Check the response and parse data if successful
if response.status_code == 200:
    data = response.json()
    temperature = data['current_weather']['temperature']
    wind_speed = data['current_weather']['windspeed']
    print(f"Current temperature: {temperature}°C")
    print(f"Wind speed: {wind_speed} km/h")
else:
    print(f"Failed to get data. Status Code: {response.status_code}")
    print("Response:", response.text)