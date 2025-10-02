import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import NationalUnity from './components/NationalUnity';
import InternationalUnity from './components/InternationalUnity';
import Documents from './components/Documents';
import Chatbot from './components/Chatbot';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return <HomePage setActiveSection={setActiveSection} />;
      case 'national-unity':
        return <NationalUnity />;
      case 'international-unity':
        return <InternationalUnity />;
      case 'documents':
        return <Documents />;
      case 'research':
        return <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nghiên cứu & Bài viết</h2>
            <p className="text-gray-600">Tính năng đang được phát triển...</p>
          </div>
        </div>;
      case 'practical':
        return <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Ứng dụng thực tiễn</h2>
            <p className="text-gray-600">Tính năng đang được phát triển...</p>
          </div>
        </div>;
      case 'references':
        return <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Tài liệu tham khảo</h2>
            <p className="text-gray-600">Tính năng đang được phát triển...</p>
          </div>
        </div>;
      case 'contact':
        return <div className="min-h-screen bg-gray-100 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Liên hệ</h2>
            <p className="text-gray-600">Tính năng đang được phát triển...</p>
          </div>
        </div>;
      default:
        return <HomePage setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Chatbot />
    </div>
  );
}

export default App;