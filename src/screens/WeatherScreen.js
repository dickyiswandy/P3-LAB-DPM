import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class WeatherScreen extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      temperature: 25, 
      status: 'CUACA CERAH', 
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
   
    this.timer = setTimeout(() => {
      this.setState({
        temperature: 18,
        status: 'CUACA BERAWAN',
      });
    }, 5000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.temperature !== this.state.temperature || prevState.status !== this.state.status) {
      console.log('componentDidUpdate');
    }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearTimeout(this.timer); 
  }

  render() {
    console.log('render');
    const { temperature, status } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cuaca Saat Ini</Text>
        <Text style={styles.status}>Status: {status}</Text>
        <Text style={styles.temperature}>Temperature: {temperature}°C</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 20,
  },
  status: {
    fontSize: 18,
    color: '#004D40',
  },
  temperature: {
    fontSize: 18,
    color: '#004D40',
    marginTop: 10,
  },
});

export default WeatherScreen;