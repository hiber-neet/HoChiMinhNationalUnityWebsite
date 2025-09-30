import React, { useState } from 'react';
import { Map, Users, Heart, Star, MapPin, Info, ChevronRight } from 'lucide-react';

const UnityMap: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const regions = [
    {
      id: 'north',
      name: 'Miền Bắc',
      color: 'bg-red-500',
      ethnicGroups: ['Kinh', 'Tày', 'Thái', 'Mường', 'Hmong', 'Dao', 'Nùng', 'Sán Chay'],
      population: '25 triệu người',
      characteristics: 'Cái nôi của cách mạng, tinh thần đoàn kết trong kháng chiến',
      unityStory: 'Trong cuộc kháng chiến chống Pháp, đồng bào các dân tộc miền Bắc đã cùng nhau che giấu, bảo vệ Bác Hồ và các chiến sĩ cách mạng.',
      culturalValues: ['Tương thân tương ái', 'Uống nước nhớ nguồn', 'Lá lành đùm lá rách']
    },
    {
      id: 'central',
      name: 'Miền Trung',
      color: 'bg-yellow-500',
      ethnicGroups: ['Kinh', 'Chăm', 'Bahnar', 'Ê Đê', 'Giarai', 'Xơ Đăng', 'Brâu', 'Rơ Măm'],
      population: '20 triệu người',
      characteristics: 'Vùng đất anh hùng, tinh thần bất굴 và đoàn kết',
      unityStory: 'Đồng bào Chăm và các dân tộc thiểu số miền Trung đã tích cực tham gia phong trào Việt Minh, góp phần vào thắng lợi chung.',
      culturalValues: ['Nghĩa tình', 'Tương trợ', 'Đồng cam cộng khổ']
    },
    {
      id: 'south',
      name: 'Miền Nam',
      color: 'bg-green-500',
      ethnicGroups: ['Kinh', 'Khmer', 'Hoa', 'Chăm', 'Tà Ôi', 'Cơ Tu', 'Hrê', 'Raglay'],
      population: '30 triệu người',
      characteristics: 'Vùng đất phù sa, tinh thần cần cù và đoàn kết xây dựng',
      unityStory: 'Đồng bào Khmer Nam Bộ đã cùng với nhân dân cả nước tham gia cuộc kháng chiến chống Mỹ, thể hiện tinh thần đại đoàn kết.',
      culturalValues: ['Hòa thuận', 'Tương thân', 'Cùng chung sống']
    }
  ];

  const ethnicStats = [
    { name: 'Kinh', percentage: 85.3, population: '82 triệu', color: 'bg-red-500' },
    { name: 'Tày', percentage: 1.9, population: '1.8 triệu', color: 'bg-blue-500' },
    { name: 'Thái', percentage: 1.8, population: '1.7 triệu', color: 'bg-green-500' },
    { name: 'Mường', percentage: 1.5, population: '1.4 triệu', color: 'bg-yellow-500' },
    { name: 'Khmer', percentage: 1.4, population: '1.3 triệu', color: 'bg-purple-500' },
    { name: 'Hmong', percentage: 1.3, population: '1.2 triệu', color: 'bg-pink-500' },
    { name: 'Nùng', percentage: 1.1, population: '1.0 triệu', color: 'bg-indigo-500' },
    { name: 'Hoa', percentage: 0.9, population: '0.8 triệu', color: 'bg-orange-500' }
  ];

  const unityPrinciples = [
    {
      title: 'Bình đẳng dân tộc',
      description: 'Tất cả các dân tộc đều có quyền và nghĩa vụ như nhau',
      icon: Users,
      example: 'Hiến pháp quy định: "Các dân tộc ở Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp đỡ lẫn nhau"'
    },
    {
      title: 'Tôn trọng đa dạng',
      description: 'Gìn giữ và phát huy bản sắc văn hóa của từng dân tộc',
      icon: Heart,
      example: 'Chính sách song ngữ trong giáo dục, bảo tồn văn hóa truyền thống'
    },
    {
      title: 'Tương trợ phát triển',
      description: 'Các dân tộc giúp đỡ nhau cùng tiến bộ',
      icon: Star,
      example: 'Chương trình 135, chính sách ưu tiên cho vùng dân tộc thiểu số'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <Map className="w-10 h-10 text-emerald-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bản đồ Đoàn kết
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Khám phá sự đoàn kết của 54 dân tộc anh em trên đất nước Việt Nam
            - "Trong gia đình các dân tộc Việt Nam, không có dân tộc nào là chủ, không có dân tộc nào là khách"
          </p>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Bản đồ tương tác 3 miền
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {regions.map((region) => (
              <div
                key={region.id}
                onClick={() => setSelectedRegion(selectedRegion === region.id ? null : region.id)}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedRegion === region.id ? 'scale-105' : 'hover:scale-102'
                }`}
              >
                <div className={`${region.color} rounded-t-xl p-6 text-white`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">{region.name}</h3>
                    <ChevronRight 
                      className={`w-6 h-6 transition-transform duration-300 ${
                        selectedRegion === region.id ? 'rotate-90' : ''
                      }`} 
                    />
                  </div>
                  <p className="text-lg opacity-90 mt-2">{region.population}</p>
                </div>
                
                <div className="bg-white rounded-b-xl p-6 shadow-lg">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Các dân tộc chính:</h4>
                    <div className="flex flex-wrap gap-2">
                      {region.ethnicGroups.slice(0, 4).map((group, idx) => (
                        <span key={idx} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                          {group}
                        </span>
                      ))}
                      {region.ethnicGroups.length > 4 && (
                        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">
                          +{region.ethnicGroups.length - 4} khác
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {region.characteristics}
                  </p>
                  
                  {selectedRegion === region.id && (
                    <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Câu chuyện đoàn kết:</h5>
                        <p className="text-gray-600 text-sm leading-relaxed italic">
                          "{region.unityStory}"
                        </p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-2">Giá trị văn hóa:</h5>
                        <div className="flex flex-wrap gap-2">
                          {region.culturalValues.map((value, idx) => (
                            <span key={idx} className="px-2 py-1 bg-emerald-100 text-emerald-700 rounded text-xs">
                              {value}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethnic Statistics */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Thống kê dân tộc
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {ethnicStats.map((ethnic, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <div className={`w-4 h-4 rounded-full ${ethnic.color}`}></div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-gray-800">{ethnic.name}</span>
                      <span className="text-sm text-gray-600">{ethnic.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${ethnic.color}`}
                        style={{ width: `${ethnic.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500">{ethnic.population}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Unity Principles */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Nguyên tắc đoàn kết dân tộc
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {unityPrinciples.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                  <p className="mb-4 leading-relaxed">{principle.description}</p>
                  <div className="text-sm bg-white/20 p-3 rounded-lg">
                    <strong>Ví dụ:</strong> {principle.example}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-teal-50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-emerald-600 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 italic leading-relaxed">
              Trong gia đình các dân tộc Việt Nam, không có dân tộc nào là chủ, 
              không có dân tộc nào là khách. Các dân tộc đều bình đẳng, đoàn kết, 
              tôn trọng và giúp đỡ lẫn nhau.
            </blockquote>
            <cite className="text-lg text-emerald-600 font-semibold">
              — Chủ tịch Hồ Chí Minh
            </cite>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Con số ấn tượng
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">54</div>
              <div className="text-emerald-200">Dân tộc</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-emerald-200">Nhóm ngôn ngữ</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-emerald-200">Bình đẳng</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-emerald-200">Tình đoàn kết</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnityMap;