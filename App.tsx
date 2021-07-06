import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Routes } from './src/routes/routes';
import { AuthProvider, useAuth } from './src/hooks/contexts/auth';
import {Poppins_400Regular, Poppins_600SemiBold, useFonts} from '@expo-google-fonts/poppins';


export default function App() {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  return (
    <>
    <AuthProvider>
      <Routes/>
      <StatusBar style="auto" />
    </AuthProvider>
    </>
  );
}
