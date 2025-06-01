import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const PostItem = React.memo(({ title, body }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{body}</Text>
  </View>
));

const PostList = React.memo(({ posts }) => (
  <FlatList
    data={posts}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <PostItem title={item.title} body={item.body} />
    )}
    initialNumToRender={8}
    maxToRenderPerBatch={8}
    windowSize={5}
  />
));

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginVertical: 6,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default PostList;
