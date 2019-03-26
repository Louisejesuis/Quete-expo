import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const onPressHandler = () => {};
  return (
    <View style={styles.container} class="test">
      <Text>Aucun article</Text>
      <Button onPress={onPressHandler} title="Ajouter un article" />
    </View>
  );
}
