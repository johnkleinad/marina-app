// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';
import { StyleSheet, Platform, StatusBar, SafeAreaView } from "react-native";

// import { useColorScheme } from '@/hooks/useColorScheme';
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <SafeAreaView style={style.AndroidSafeArea}>
//       <StatusBar
//         backgroundColor="#FAFAFA"
//         barStyle="dark-content"
//       />
//       <Stack>
//         <Stack.Screen name="index" options={{ headerShown: false }} />
//       </Stack>
//     </SafeAreaView>
//   );
// }
// const style = StyleSheet.create({
//   AndroidSafeArea: {
//     flex: 1,
//     backgroundColor: "#FAFAFA",
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     marginBottom: Platform.OS === "android" ? 0 : -25,
//   }
// });

import { Stack } from 'expo-router/stack';

export default function Layout() {
  return <>
    <Stack >
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  </>
}
const style = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: "#FAFAFA",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    marginBottom: Platform.OS === "android" ? 0 : -25,
  }
});