import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Header, Navigation } from './components';
import { GlobalCtxWrapper } from './context/globalCtx';
import { HomeScreen, SearchScreen } from './screens';

const App = () => {
  const screenList = [<HomeScreen />, <SearchScreen />]
  const [screen, setScreen] = useState<number>(0);
  const scrollRef = useRef<ScrollView>(null);
  const scrollTop = () => scrollRef.current
    ?.scrollTo({ y: 0, animated: true })

  return (
    <GlobalCtxWrapper>
      <Header toTheTop={scrollTop} />
        {screenList[screen]}
      <Navigation screen={screen} setScreen={setScreen} />
    </GlobalCtxWrapper >
  );
}

export default App;