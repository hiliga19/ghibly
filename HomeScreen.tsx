import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

interface HomeScreenProps {
  onStartEditor: () => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onStartEditor }) => {
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-bold text-ghibli-blue mb-6">
        Ghibli Magic Maker
      </h1>
      
      <div className="flex justify-center space-x-6 mb-12">
        <button 
          onClick={onStartEditor}
          className="bg-ghibli-green/80 hover:bg-ghibli-green p-4 rounded-lg shadow-lg"
        >
          <Camera className="mx-auto mb-2" size={48} />
          Take Photo
        </button>
        
        <button 
          onClick={onStartEditor}
          className="bg-ghibli-pink/80 hover:bg-ghibli-pink p-4 rounded-lg shadow-lg"
        >
          <ImageIcon className="mx-auto mb-2" size={48} />
          Choose Image
        </button>
      </div>
    </div>
  );
};

export default HomeScreen;