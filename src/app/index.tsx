import { Header } from '@/components/Header';
import { View } from 'react-native';

export default function Home() {
  return (
    <View className="pt-8">
      <Header title="Faça seu pedido" cartQuantity={3} />
    </View>
  );
}
