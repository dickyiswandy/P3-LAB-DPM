import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherDetails = ({ temperature }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Temperature:</Text>
      <Text style={styles.value}>{temperature}°C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796B',
  },
  value: {
    fontSize: 24,
    color: '#004D40',
  },
});

export default WeatherDetails;