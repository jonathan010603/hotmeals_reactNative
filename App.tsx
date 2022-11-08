import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Wrapper, Search, Footer } from './components';
import Hero from './screens/HomeScreen/Hero';
import { ContextWrapper } from './context/globalCtx';
import { HomeScreen } from './screens';

export default function App() {

  return (
    <ContextWrapper>
      <Header />
      <HomeScreen />
      <Footer />
    </ContextWrapper>
  );
}
