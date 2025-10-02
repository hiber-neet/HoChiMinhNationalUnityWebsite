import React, { useState } from 'react';
import { Menu, X, Home, Users, Globe, BookOpen, Clock, Image, FileText, MessageCircle, Library, Phone } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Trang chủ', icon: Home },
    { id: 'national-unity', label: 'Đại đoàn kết dân tộc', icon: Users },
    { id: 'international-unity', label: 'Đoàn kết quốc tế', icon: Globe },
    { id: 'documents', label: 'Tài liệu & Trích dẫn', icon: BookOpen },
    { id: 'unity-stories', label: 'Câu chuyện Đoàn kết', icon: Clock },
    { id: 'research', label: 'Nghiên cứu & Bài viết', icon: FileText },
    { id: 'practical', label: 'Ứng dụng thực tiễn', icon: MessageCircle },
    { id: 'references', label: 'Tài liệu tham khảo', icon: Library },
    { id: 'contact', label: 'Liên hệ', icon: Phone }
  ];

  return (
    <header className="bg-red-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-red-700 font-bold text-lg">★</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">Tư tưởng Hồ Chí Minh</h1>
              <p className="text-sm text-red-200">Đại đoàn kết toàn dân tộc</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-1">
            {menuItems.slice(0, 6).map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-1 ${
                    activeSection === item.id
                      ? 'bg-red-800 text-yellow-300'
                      : 'text-red-100 hover:bg-red-600 hover:text-white'
                  }`}
                >
                  <Icon size={16} />
                  <span className="hidden xl:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-red-600"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-red-600">
            <nav className="grid grid-cols-2 gap-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className={`p-3 rounded-md text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                      activeSection === item.id
                        ? 'bg-red-800 text-yellow-300'
                        : 'text-red-100 hover:bg-red-600 hover:text-white'
                    }`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;