import {  View } from '../../components/Themed';
import products from '@/assets/data/products';
import ProducrListItem from '@/src/components/ProductListItem';

export default function MenuScreen() {
  return (
    <View>
      <ProducrListItem product = {products[5]}/>
      <ProducrListItem product = {products[1]}/>
    </View>
  );
}
