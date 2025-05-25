
# import os
# from typing import IO
# from io import BytesIO
# from elevenlabs import VoiceSettings
# from elevenlabs.client import ElevenLabs

# ELEVENLABS_API_KEY = os.getenv("ELEVENLABS_API_KEY")
# client = ElevenLabs(
#     api_key=ELEVENLABS_API_KEY,
# # 


# def text_to_speech_stream(text: str) -> IO[bytes]:
#     # Perform the text-to-speech conversion
#     response = client.text_to_speech.convert(
#         voice_id="pNInz6obpgDQGcFmaJgB", # Adam pre-made voice
#         output_format="mp3_22050_32",
#         text=text,
#         model_id="eleven_multilingual_v2",
#         voice_settings=VoiceSettings(
#             stability=0.0,
#             similarity_boost=1.0,
#             style=0.0,
#             use_speaker_boost=True,
#         ),
#     )

#     # Create a BytesIO object to hold the audio data in memory
#     audio_stream = BytesIO()

#     # Write each chunk of audio data to the stream
#     for chunk in response:
#         if chunk:
#             audio_stream.write(chunk)

#     # Reset stream position to the beginning
#     audio_stream.seek(0)

#     # Return the stream for further use
#     return audio_stream

# text_to_speech_stream("This is James")


# import requests

# url = "https://api.sarvam.ai/text-to-speech"

# payload = {
#     "inputs": ["""In India, all business communication is done via WhatsApp.
# """],
#     "target_language_code": "hi-IN",
#     "speaker": "meera",
#     "pitch": 0,
#     "pace": 1.65,
#     "loudness": 1.5,
#     "speech_sample_rate": 8000,
#     "enable_preprocessing": True,
#     "model": "bulbul:v1"
# }
# headers = {
#     "api-subscription-key": "ffc21bf0-07d2-4173-90fe-2e557e85f774",
#     "Content-Type": "application/json"
# }

# response = requests.request("POST", url, json=payload, headers=headers)

# print(response)


# import requests

# def text_to_speech(text: str, language_code: str = "hi-IN"):
#     """
#     Convert text to speech using Sarvam.ai API
    
#     Args:
#         text (str): The text to convert to speech
#         language_code (str): Target language code (default: "hi-IN" for Hindi)
    
#     Returns:
#         bytes: Audio data if successful, None if failed
#     """
#     url = "https://api.sarvam.ai/text-to-speech"
    
#     payload = {
#         "inputs": [text],  # Replace placeholder with actual text
#         "target_language_code": language_code,
#         "speaker": "meera",
#         "pitch": 0,
#         "pace": 1.65,
#         "loudness": 1.5,
#         "speech_sample_rate": 8000,
#         "enable_preprocessing": True,
#         "model": "bulbul:v1"
#     }
    
#     headers = {
#         "api-subscription-key": "ffc21bf0-07d2-4173-90fe-2e557e85f774",
#         "Content-Type": "application/json"
#     }

#     try:
#         response = requests.post(url, json=payload, headers=headers)
#         response.raise_for_status()  # Raise an exception for bad status codes
        
#         # Save the audio to a file
#         with open("output.wav", "wb") as f:
#             f.write(response.content)
        
#         return response.content
        
#     except requests.exceptions.RequestException as e:
#         print(f"Error occurred: {e}")
#         return None

# # Example usage:
# text = """In India, 90% of business communication is done via WhatsApp.


# ————

# - one-stop AI support messaging platform connected with WhatsApp business API and AI agents 
# - Broadcast business in India is performing well. WhatsApp Broadcast platform is a platform for managing WhatsApp message queries, sending bulk messages, and appointing multiple staff to handle those messages."""  # "Hello, how are you?" in Hindi
# audio_data = text_to_speech(text)

# if audio_data:
#     print("Audio file has been saved as 'output.wav'")
# else:
#     print("Failed to generate audio")

import requests
import json
import base64

def text_to_speech(text: str, language_code: str = "hi-IN", output_file: str = "output.wav"):
    """
    Convert text to speech using Sarvam.ai API and save the audio
    
    Args:
        text (str): The text to convert to speech
        language_code (str): Target language code (default: "hi-IN" for Hindi)
        output_file (str): Name of the output audio file
    """
    url = "https://api.sarvam.ai/text-to-speech"
    
    payload = {
        "inputs": [text],
        "target_language_code": language_code,
        "speaker": "meera",
        "pitch": 0,
        "pace": 1.65,
        "loudness": 1.5,
        "speech_sample_rate": 8000,
        "enable_preprocessing": True,
        "model": "bulbul:v1"
    }
    
    headers = {
        "api-subscription-key": "ffc21bf0-07d2-4173-90fe-2e557e85f774",
        "Content-Type": "application/json"
    }

    try:
        # Make the API request
        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()
        
        # Parse the response
        response_data = response.json()
        
        # Check if we have audio data in the response
        if 'audios' in response_data and response_data['audios']:
            # Get the first audio stream (assuming single text input)
            audio_base64 = response_data['audios'][0]
            
            # Decode base64 audio data
            audio_data = base64.b64decode(audio_base64)
            
            # Save the audio file
            with open(output_file, "wb") as f:
                f.write(audio_data)
            print(f"Audio saved successfully to {output_file}")
            return True
        else:
            print("No audio data found in response")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"Error making request: {e}")
        return False
    except Exception as e:
        print(f"Error processing audio: {e}")
        return False

# Example usage
def test_tts():
    # Test with different texts and save to different files
    test_cases = [
        {
            "text": "नमस्ते, कैसे हैं आप?",
            "lang": "hi-IN",
            "file": "hindi_output.wav"
        },
        {
            "text": "Hello, how are you?",
            "lang": "en-IN",
            "file": "english_output.wav"
        }
    ]
    
    for case in test_cases:
        print(f"\nTesting with text: {case['text']}")
        success = text_to_speech(
            text=case['text'],
            language_code=case['lang'],
            output_file=case['file']
        )
        if success:
            print(f"Successfully generated audio file: {case['file']}")
        else:
            print(f"Failed to generate audio for: {case['text']}")

if __name__ == "__main__":
    test_tts()