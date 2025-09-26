import React from 'react';
import { Users, Heart, Shield, Lightbulb, ArrowRight, CheckCircle } from 'lucide-react';

const NationalUnity: React.FC = () => {
  const principles = [
    {
      icon: Heart,
      title: 'Đoàn kết trên cơ sở lợi ích chung',
      description: 'Đặt lợi ích của dân tộc, Tổ quốc lên trên hết, trên tất cả'
    },
    {
      icon: Users,
      title: 'Đoàn kết trong đa dạng',
      description: 'Tôn trọng sự khác biệt về tôn giáo, dân tộc, giai cấp'
    },
    {
      icon: Shield,
      title: 'Đoàn kết có nguyên tắc',
      description: 'Đoàn kết phải dựa trên nền tảng chính trị vững chắc'
    },
    {
      icon: Lightbulb,
      title: 'Đoàn kết dưới sự lãnh đạo',
      description: 'Cần có sự lãnh đạo thống nhất để định hướng đoàn kết'
    }
  ];

  const examples = [
    {
      title: 'Mặt trận Việt Minh (1941)',
      description: 'Tập hợp các tầng lớp nhân dân trong cuộc kháng chiến chống Pháp',
      impact: 'Thành lập nền tảng cho sự đoàn kết toàn dân tộc'
    },
    {
      title: 'Chính sách dân tộc',
      description: 'Bình đẳng, đoàn kết, tương trợ giữa các dân tộc',
      impact: 'Xây dựng khối đại đoàn kết 54 dân tộc Việt Nam'
    },
    {
      title: 'Chính sách tôn giáo',
      description: 'Tôn trọng tự do tín ngưỡng, tôn giáo của nhân dân',
      impact: 'Hòa hợp tôn giáo, tập hợp sức mạnh tinh thần'
    }
  ];

  const benefits = [
    'Tạo sức mạnh tổng hợp vượt trội',
    'Vượt qua mọi khó khăn, thử thách',
    'Xây dựng và bảo vệ Tổ quốc',
    'Phát triển kinh tế - xã hội',
    'Nâng cao vị thế quốc tế',
    'Bảo tồn và phát huy văn hóa dân tộc'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <Users className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Đại đoàn kết toàn dân tộc
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công" 
            - Lời di chúc thiêng liêng của Chủ tịch Hồ Chí Minh
          </p>
        </div>
      </section>

      {/* Concept Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Khái niệm và ý nghĩa
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Đại đoàn kết toàn dân tộc</strong> là tư tưởng cốt lõi trong di sản tinh thần 
                  của Chủ tịch Hồ Chí Minh. Đây là sự liên minh, hợp tác chặt chẽ giữa các giai cấp, 
                  tầng lớp xã hội, các dân tộc, tôn giáo trong cùng một quốc gia.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Tư tưởng này không chỉ là chiến lược chính trị mà còn là triết lý sống, 
                  là nền tảng tinh thần để xây dựng một xã hội hòa hợp, phát triển bền vững.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Các nguyên tắc cơ bản
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-red-50 to-yellow-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <div className="w-14 h-14 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3">{principle.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Historical Examples */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Thực tiễn lịch sử
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {examples.map((example, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{example.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{example.description}</p>
                <div className="border-t pt-4">
                  <div className="flex items-start">
                    <ArrowRight className="w-4 h-4 text-red-600 mt-1 mr-2 flex-shrink-0" />
                    <p className="text-sm text-red-600 font-medium">{example.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Ý nghĩa và lợi ích
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-yellow-300 flex-shrink-0" />
                  <span className="text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-yellow-50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-red-600 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 italic leading-relaxed">
              Dân ta phải thật là một, nước ta phải thật là độc lập. 
              Muốn cho nước độc lập, dân giải phóng, ta phải đoàn kết chặt chẽ với nhau.
            </blockquote>
            <cite className="text-lg text-red-600 font-semibold">
              — Chủ tịch Hồ Chí Minh
            </cite>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NationalUnity;