import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import Colors from '@/constants/Colors';
import { Product } from '../types';

type ProducrListItemProps = {
    product: Product;
}

export const defaultPizzaImage = 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png';

// const product = products[1];
const ProducrListItem = ({ product}: ProducrListItemProps) => {

  return (<View style={styles.container}>
    <Image source= {{uri :product.image || defaultPizzaImage}} style = {styles.image} />
    <Text style={styles.title}> {product.name}</Text>
    <Text style={styles.price}> ${product.price}</Text>
  </View>);
}

export default ProducrListItem;

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
