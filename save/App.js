import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';

const App = () => {
  const recipes = [
    {
      title: 'สเต็กแซลมอน',
      description: 'แซลมอนนุ่มฉ่ำ หอมกลิ่นเครื่องเทศ ทำง่าย อร่อยจนต้องทำซ้ำเลย',
      image: require('./assets/salmon.png'),
      author: 'เชฟภาณุ',
    },
    {
      title: 'ไก่ทอดหาดใหญ่',
      description: 'สูตรแบบไม่หมักก็อร่อยได้ ทำง่าย กรอบนอกนุ่มใน',
      image: require('./assets/hatyai_chicken.png'),
      author: 'ป้าอ้วนชวนชิม',
    },
    {
      title: 'สปาเก็ตตี้กุ้ง',
      description: 'แซ่บถูกปาก ทำง่ายกินกับใครก็อร่อย และอร่อยเพราะทำเองเลยอร่อยมาก',
      image: require('./assets/shrimp_spaghetti.png'),
      author: 'แม่พลอยกับหมีหิว',
    },
  ];

  return (
    <View style={styles.container}>
      {/* ส่วนหัว */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>KhaoCook</Text>
      </View>

      {/* ส่วนเนื้อหา */}
      <ScrollView style={styles.content}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>ห้องเก็บสูตร</Text>
        </View>

        <View style={styles.searchBar}>
          <Image source={require('./assets/search.png')} style={styles.searchIcon} />
          <TextInput style={styles.searchInput} placeholder="ค้นหา" />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>บันทึกไว้ 3 สูตร</Text>
        </View>

        {recipes.map((recipe, index) => (
          <View key={index} style={styles.recipeCard}>
            <View style={styles.recipeText}>
              <Text style={styles.recipeTitle}>{recipe.title}</Text>
              <Text style={styles.recipeDescription}>{recipe.description}</Text>
              <View style={styles.authorContainer}>
                <Image source={require('./assets/author_icon.png')} style={styles.authorIcon} />
                <Text style={styles.authorName}>{recipe.author}</Text>
              </View>
            </View>
            <Image source={recipe.image} style={styles.recipeImage} />
          </View>
        ))}
      </ScrollView>

      {/* ส่วนแถบนำทางด้านล่าง */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./assets/search.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>ค้นหา</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./assets/save.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>เก็บสูตร</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./assets/random.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>สุ่มเมนู</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./assets/alert.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>แจ้งเตือน</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image source={require('./assets/profile.png')} style={styles.navIcon} />
          <Text style={styles.navLabel}>โปรไฟล์</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
  },
  recipeCard: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
  },
  recipeText: {
    flex: 1,
    padding: 15,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  recipeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  authorName: {
    fontSize: 12,
    color: '#999',
  },
  recipeImage: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  navLabel: {
    fontSize: 12,
    color: '#666',
  },
});

export default App;