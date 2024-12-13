import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherHeader = ({ status }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Weather</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796B',
  },
  status: {
    fontSize: 18,
    color: '#004D40',
  },
});

export default WeatherHeader;