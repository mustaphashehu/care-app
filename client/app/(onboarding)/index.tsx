import { useEffect, useState } from 'react';
import { router, usePathname } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, ActivityIndicator, Text, Platform, StatusBar } from 'react-native';
import OnBoarding from '@/components/onboarding/OnBoarding';
import { images } from '@/constants/images';
import { SafeAreaView } from 'react-native-safe-area-context';

const STORAGE_KEY = 'lastRoute';
let isFirstLoad = true

const onboardingPages = [
  {
    image: images.onboarding1,
    title: 'Healthcare that comes to you',
    description: 'Book doctors, access health records, and get care anytime, anywhere.',
  },
  {
    image: images.onboarding2,
    title: 'Need a doctor? It takes just 3 taps',
    description: 'Find trusted doctors near you and book visits or chats in minutes.',
  },
  {
    image: images.onboarding3,
    title: 'Get personalized care',
    description: 'Receive recommendations and reminders tailored to you.',
  },
];


export default function Index() {
  const pathname = usePathname();
  const [isRestored, setIsRestored] = useState(false);
  const [page, setPage] = useState(0);

  // 📝 Save current path to AsyncStorage every time it changes (excluding "/")
  useEffect(() => {
    if (pathname && pathname !== '/') {
      AsyncStorage.setItem(STORAGE_KEY, pathname);
    }
  }, [pathname]);

  // 🔁 Restore the last route ONLY on true first load (cold start)
  useEffect(() => {
    const restoreRoute = async () => {
      try {
        if (isFirstLoad) {
          console.log('This is the initial load');
          isFirstLoad = false
          setIsRestored(true);
          return
        }

        if (!isFirstLoad) {
          console.log('This is a reload (Fast Refresh)');
          const lastRoute = await AsyncStorage.getItem(STORAGE_KEY);
          console.log(lastRoute);


          if (lastRoute) {
            router.replace(lastRoute as any);
          } else {
            router.replace('/index' as any);
          }

          setIsRestored(true);
          return;
        }

      } catch (error) {
        console.warn('Failed to restore route:', error);
        router.replace('/index' as any);
      } finally {
        setIsRestored(true);
      }
    };

    restoreRoute();
  }, []);


  const handleNext = () => {
    if (page < onboardingPages.length - 1) {
      setPage(page + 1);
    } else {
      router.replace('/authentication/login');
    }
  };

  const current = onboardingPages[page];
  let pageCount = page + 1

  if (!isRestored) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      
      <View className="flex-1">
        <StatusBar backgroundColor="#002886" barStyle="light-content" translucent={false} />
        <SafeAreaView className="flex-1">
          
          {/* Your content */}
          <OnBoarding
          image={current.image}
          title={current.title}
          description={current.description}
          pageNumber={pageCount}
          skipText={pageCount < onboardingPages.length ? true : false}
          buttonText={pageCount < onboardingPages.length ? 'Next' : 'Get Started'}
          onPress={handleNext}
        />
        </SafeAreaView>
      </View>
    </>
  );
}
