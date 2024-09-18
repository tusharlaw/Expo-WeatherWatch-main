import {Button, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import getWeatherImage, {WeatherCode}  from './src/helpers/getWeatherImage';
import { useState } from 'react';

export default function App() {
 
  const [weatherCode, setWeatherCode] = useState<string>('');
  const [dayImage, setDayImage] = useState<string | undefined>(undefined)

  const handleInputChange = (code:string) => {
    setWeatherCode(code);
  };

  const handleButtonPress = () => {
    const image = getWeatherImage(weatherCode  as WeatherCode);
    setDayImage(image);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text style={styles.title}>Enter Weather Code</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 0, 1, 2"
        value={weatherCode}
        onChangeText={handleInputChange}
        keyboardType="numeric"
      />
      <Button title="Get Weather Image" onPress={handleButtonPress} />
      {dayImage ? (
        <Image source={{ uri: dayImage }} style={styles.image} />
      ) : (
        <Text>No image available</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  image: {
    width: 100, // Adjust width as needed
    height: 100, // Adjust height as needed
  },
});
