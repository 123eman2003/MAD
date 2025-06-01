import React, { useEffect, useState, Suspense } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const PostForm = React.lazy(() => import('../components/PostForm'));
const UserList = React.lazy(() => import('../components/UserList'));

export default function HomeScreen() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((res) => res.json())
      .then(setPosts)
      .catch((err) => console.error('Failed to load posts:', err));

    fetch('https://reqres.in/api/users?per_page=6')
      .then((res) => res.json())
      .then((data) =>
        setUsers(
          data.data.map((user) => ({
            id: user.id,
            name: `${user.first_name} ${user.last_name}`,
            email: user.email,
            avatar: user.avatar,
          }))
        )
      )
      .catch((err) => console.error('Failed to load users:', err));
  }, []);

  const handleSubmit = (data) => {
    console.log('Post submitted:', data);
  };

  const renderPostItem = ({ item }) => (
    <View style={styles.postItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderPostItem}
      ListHeaderComponent={
        <Suspense fallback={<Text style={styles.loading}>Loading form...</Text>}>
          <PostForm onSubmit={handleSubmit} />
        </Suspense>
      }
      ListFooterComponent={
        <Suspense fallback={<Text style={styles.loading}>Loading users...</Text>}>
          <UserList users={users} />
        </Suspense>
      }
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  postItem: {
    backgroundColor: '#f0f0f0',
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  body: {
    fontSize: 14,
    color: '#555',
  },
  loading: {
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 10,
    color: '#999',
  },
});
