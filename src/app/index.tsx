import { useState } from 'react';
import { CategoryButton } from '@/components/CategoryButton';
import { Header } from '@/components/Header';
import { View, FlatList } from 'react-native';

import { CATEGORIES } from '@/utils/data/products';

export default function Home() {
  const [category, setCategory] = useState<string>(CATEGORIES[0]);

  function handleCategoryChange(newCategory: string) {
    setCategory(newCategory);
  }

  return (
    <View className="pt-8">
      <Header title="Faça seu pedido" cartQuantity={3} />
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategoryChange(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
