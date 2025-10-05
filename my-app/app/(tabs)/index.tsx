import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/victor.jpg')}
          style={styles.profileImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Victor Dantas</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText>
          Atualmente tenho 23 anos, sou de Teresina-PI, curso Ciência da Computação desde 2022 e gosto de várias coisas e falar sobre elas. Gosto muito de filmes, jogos, quadrinhos e animações. Tenho sonho de conhecer diferentes países e ajudar pessoas. Profissionalmente estou aberto a qualquer tipo de experiência.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  profileImage: {
    height: 253,
    width: 261,
    bottom: 0,
    left: 60,
    position: 'absolute',
  },
});