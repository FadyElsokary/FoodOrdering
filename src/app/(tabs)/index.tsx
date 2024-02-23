import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import Colors from '@/src/constants/Colors';
import products from '@/assets/data/products';

const product = products[1];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source= {{uri :product.image}} style = {styles.image} />
      <Text style={styles.title}> {product.name}</Text>
      <Text style={styles.price}> ${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor :'white',
    padding: 10, //inside the container
    borderRadius: 20,
  },
  image: {
    width: '100%',
    aspectRatio : '1',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 30, // outside the container
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.tint,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
