import { View, Text, Image } from 'react-native';

export default function App() {
  return (
    <View style={{ backgroundColor: 'red' }} >
      <Text style={{ fontSize: 25, color: '#FFF', textAlign: 'center' }}>
        appMuseum
      </Text>
      <Text>MUSEU DE JALES</Text>
      <View>
        <Image source={{ uri: 'https://i.imgur.com/mVvh7pG.png' }} style={{ width: 300, height: 300 }} />
      </View>
    </View>
  );

}