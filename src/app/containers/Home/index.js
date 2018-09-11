import React from 'react';
import { Link } from 'react-router-dom';
import { StyleSheet, Text, View } from 'react-native';

import './styles';

const Home = () => (
  <View style={styles2.box}>
    <Text style={styles2.text}>Hello, world!</Text>
    <Link className="link" to="/counter">
      Counter
    </Link>
  </View>
);

const styles2 = StyleSheet.create({
  box: { padding: 10 },
  text: { fontWeight: 'bold' },
});

export default Home;
