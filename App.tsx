import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import EditorScreen from './components/EditorScreen';
import ResultScreen from './components/ResultScreen';

const App: React.FC = () => {
  const [screen, setScreen] = useState<'home' | 'editor' | 'result'>('home');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-ghibli-blue/10 font-ghibli">
      {screen === 'home' && (
        <HomeScreen 
          onStartEditor={() => setScreen('editor')} 
        />
      )}
      {screen === 'editor' && (
        <EditorScreen 
          onBack={() => setScreen('home')}
          onTransform={() => setScreen('result')}
        />
      )}
      {screen === 'result' && (
        <ResultScreen 
          onReset={() => setScreen('home')}
        />
      )}
    </div>
  );
};

export default App;