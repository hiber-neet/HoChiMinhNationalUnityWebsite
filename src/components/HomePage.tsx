import React from 'react';
import { Star, Users, Globe, BookOpen, ArrowRight } from 'lucide-react';

interface HomePageProps {
  setActiveSection: (section: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setActiveSection }) => {
  const features = [
    {
      icon: Users,
      title: 'Đại đoàn kết dân tộc',
      description: 'Tìm hiểu về tư tưởng đoàn kết toàn dân tộc của Chủ tịch Hồ Chí Minh',
      section: 'national-unity'
    },
    {
      icon: Globe,
      title: 'Đoàn kết quốc tế',
      description: 'Khám phá quan điểm về hợp tác và đoàn kết quốc tế',
      section: 'international-unity'
    },
    {
      icon: BookOpen,
      title: 'Tài liệu & Trích dẫn',
      description: 'Bộ sưu tập các câu nói và tài liệu quý giá',
      section: 'documents'
    }
  ];

  const quotes = [
    {
      text: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
      context: "Lời di chúc của Chủ tịch Hồ Chí Minh"
    },
    {
      text: "Không có gì quý hơn độc lập tự do.",
      context: "Tuyên ngôn độc lập 2/9/1945"
    },
    {
      text: "Dân ta phải thật là một, nước ta phải thật là độc lập.",
      context: "Thư gửi đồng bào toàn quốc"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-2xl">
              <Star className="w-16 h-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Tư tưởng <span className="text-red-600">Hồ Chí Minh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
              Về Đại đoàn kết toàn dân tộc và Đoàn kết quốc tế
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Khám phá những tư tưởng sâu sắc của Chủ tịch Hồ Chí Minh về sức mạnh đoàn kết, 
              từ đại đoàn kết toàn dân tộc đến tinh thần đoàn kết quốc tế, 
              những giá trị vĩnh cửu định hướng cho sự phát triển của dân tộc Việt Nam.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveSection('national-unity')}
              className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg"
            >
              <span>Khám phá ngay</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={() => setActiveSection('documents')}
              className="px-8 py-3 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200"
            >
              Xem tài liệu
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nội dung chính
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  onClick={() => setActiveSection(feature.section)}
                  className="bg-gradient-to-br from-red-50 to-yellow-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-700 transition-colors duration-200">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  <div className="mt-4 flex items-center text-red-600 group-hover:text-red-700">
                    <span className="text-sm font-medium">Tìm hiểu thêm</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">
            Những câu nói bất hủ
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="text-4xl text-yellow-300 mb-4">"</div>
                <p className="text-lg italic mb-4 leading-relaxed">{quote.text}</p>
                <p className="text-sm text-red-200">— {quote.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">1890</div>
              <div className="text-gray-600">Năm sinh Bác Hồ</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">1945</div>
              <div className="text-gray-600">Tuyên ngôn độc lập</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">79</div>
              <div className="text-gray-600">Tuổi đời Bác Hồ</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">∞</div>
              <div className="text-gray-600">Giá trị tư tưởng</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;