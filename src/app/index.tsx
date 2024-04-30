import { useState, useRef } from 'react';
import { CategoryButton } from '@/components/CategoryButton';
import { Header } from '@/components/Header';
import { Product } from '@/components/Product';
import { View, FlatList, SectionList, Text } from 'react-native';

import { CATEGORIES, MENU } from '@/utils/data/products';

export default function Home() {
  const [category, setCategory] = useState<string>(CATEGORIES[0]);

  const sectionListRef = useRef<SectionList>(null);

  function handleCategoryChange(newCategory: string) {
    setCategory(newCategory);

    const sectionIndex = CATEGORIES.findIndex((item) => item === newCategory);

    if (sectionListRef.current) {
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        animated: true,
      });
    }
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
      <SectionList
        ref={sectionListRef}
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => <Product data={item}></Product>}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
        className="p-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}
