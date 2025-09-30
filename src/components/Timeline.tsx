import React, { useState } from 'react';
import { Calendar, MapPin, Users, Flag, Star, ChevronDown, ChevronUp } from 'lucide-react';

const Timeline: React.FC = () => {
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);

  const timelineEvents = [
    {
      id: 1,
      year: '1890',
      date: '19/5/1890',
      title: 'Sinh ra Nguyễn Sinh Cung (Hồ Chí Minh)',
      location: 'Làng Sen, Nam Đàn, Nghệ An',
      category: 'Tiểu sử',
      description: 'Nguyễn Sinh Cung (sau này là Hồ Chí Minh) sinh ra trong gia đình có truyền thống yêu nước.',
      significance: 'Khởi đầu cuộc đời của vị lãnh tụ vĩ đại của dân tộc Việt Nam',
      relatedToUnity: 'Từ nhỏ đã được giáo dục về tinh thần yêu nước và đoàn kết'
    },
    {
      id: 2,
      year: '1911',
      date: '5/6/1911',
      title: 'Ra đi tìm đường cứu nước',
      location: 'Cảng Nhà Rồng, Sài Gòn',
      category: 'Cách mạng',
      description: 'Nguyễn Tất Thành lên tàu Amiral Latouche-Tréville ra đi tìm đường cứu nước.',
      significance: 'Bước đầu hình thành tư tưởng đoàn kết quốc tế',
      relatedToUnity: 'Tìm hiểu các phong trào cách mạng thế giới để học hỏi kinh nghiệm đoàn kết'
    },
    {
      id: 3,
      year: '1920',
      date: '1920',
      title: 'Tham gia Đảng Cộng sản Pháp',
      location: 'Paris, Pháp',
      category: 'Chính trị',
      description: 'Nguyễn Ái Quốc trở thành thành viên sáng lập Đảng Cộng sản Pháp.',
      significance: 'Bước ngoặt trong việc hình thành tư tưởng cách mạng',
      relatedToUnity: 'Học hỏi về đoàn kết quốc tế của giai cấp công nhân thế giới'
    },
    {
      id: 4,
      year: '1930',
      date: '3/2/1930',
      title: 'Thành lập Đảng Cộng sản Việt Nam',
      location: 'Hồng Kông',
      category: 'Chính trị',
      description: 'Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam do Nguyễn Ái Quốc chủ trì.',
      significance: 'Tạo ra lực lượng lãnh đạo thống nhất cho cách mạng Việt Nam',
      relatedToUnity: 'Thống nhất các tổ chức cộng sản thành một đảng duy nhất - biểu hiện của đại đoàn kết'
    },
    {
      id: 5,
      year: '1941',
      date: '19/5/1941',
      title: 'Thành lập Mặt trận Việt Minh',
      location: 'Pác Bó, Cao Bằng',
      category: 'Kháng chiến',
      description: 'Hội nghị Trung ương 8 thành lập Mặt trận Việt Minh do Hồ Chí Minh khởi xướng.',
      significance: 'Tập hợp mọi tầng lớp nhân dân vào khối đại đoàn kết dân tộc',
      relatedToUnity: 'Thể hiện rõ nét tư tưởng đại đoàn kết toàn dân tộc của Hồ Chí Minh'
    },
    {
      id: 6,
      year: '1945',
      date: '2/9/1945',
      title: 'Tuyên ngôn độc lập',
      location: 'Quảng trường Ba Đình, Hà Nội',
      category: 'Độc lập',
      description: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
      significance: 'Khẳng định quyền độc lập, tự do của dân tộc Việt Nam',
      relatedToUnity: 'Kết quả của sự đoàn kết toàn dân tộc trong Tổng khởi nghĩa tháng Tám'
    },
    {
      id: 7,
      year: '1946',
      date: '6/3/1946',
      title: 'Ký Hiệp định sơ bộ Việt-Pháp',
      location: 'Hà Nội',
      category: 'Ngoại giao',
      description: 'Thể hiện nghệ thuật ngoại giao linh hoạt của Hồ Chí Minh.',
      significance: 'Tranh thủ thời gian chuẩn bị lực lượng cho cuộc kháng chiến',
      relatedToUnity: 'Sử dụng đoàn kết quốc tế để tạo điều kiện thuận lợi cho cách mạng'
    },
    {
      id: 8,
      year: '1954',
      date: '7/5/1954',
      title: 'Chiến thắng Điện Biên Phủ',
      location: 'Điện Biên Phủ',
      category: 'Kháng chiến',
      description: 'Chiến thắng lịch sử "lừng lẫy năm châu, chấn động địa cầu".',
      significance: 'Kết thúc ách thống trị của thực dân Pháp tại Đông Dương',
      relatedToUnity: 'Thành quả của sự đoàn kết giữa quân và dân, các dân tộc trong nước'
    },
    {
      id: 9,
      year: '1955',
      date: '1955',
      title: 'Tham gia Hội nghị Bandung',
      location: 'Bandung, Indonesia',
      category: 'Quốc tế',
      description: 'Việt Nam tham gia Hội nghị các nước Á-Phi, khẳng định chính sách hòa bình.',
      significance: 'Thể hiện tinh thần đoàn kết với các nước đang phát triển',
      relatedToUnity: 'Mở rộng mặt trận đoàn kết quốc tế với các nước Á-Phi-Mỹ Latinh'
    },
    {
      id: 10,
      year: '1969',
      date: '2/9/1969',
      title: 'Chủ tịch Hồ Chí Minh từ trần',
      location: 'Hà Nội',
      category: 'Tiểu sử',
      description: 'Chủ tịch Hồ Chí Minh từ trần, để lại di chúc thiêng liêng cho dân tộc.',
      significance: 'Kết thúc cuộc đời cống hiến của vị lãnh tụ vĩ đại',
      relatedToUnity: 'Di chúc nhấn mạnh: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công"'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tất cả', color: 'bg-gray-500' },
    { id: 'Tiểu sử', label: 'Tiểu sử', color: 'bg-blue-500' },
    { id: 'Cách mạng', label: 'Cách mạng', color: 'bg-red-500' },
    { id: 'Chính trị', label: 'Chính trị', color: 'bg-green-500' },
    { id: 'Kháng chiến', label: 'Kháng chiến', color: 'bg-orange-500' },
    { id: 'Độc lập', label: 'Độc lập', color: 'bg-yellow-500' },
    { id: 'Ngoại giao', label: 'Ngoại giao', color: 'bg-purple-500' },
    { id: 'Quốc tế', label: 'Quốc tế', color: 'bg-indigo-500' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredEvents = selectedCategory === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === selectedCategory);

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.color : 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <Calendar className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Timeline Lịch sử
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Dòng thời gian các sự kiện quan trọng trong cuộc đời và sự nghiệp 
            của Chủ tịch Hồ Chí Minh
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-orange-500"></div>
            
            {filteredEvents.map((event, index) => (
              <div key={event.id} className="relative mb-12">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full ${getCategoryColor(event.category)} border-4 border-white shadow-lg z-10`}></div>
                
                {/* Event card */}
                <div className="ml-20 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="text-3xl font-bold text-red-600">{event.year}</div>
                        <div className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </div>
                      </div>
                      <button
                        onClick={() => setExpandedEvent(expandedEvent === event.id ? null : event.id)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                      >
                        {expandedEvent === event.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                      </button>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {event.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed mb-4">{event.description}</p>
                    
                    {expandedEvent === event.id && (
                      <div className="border-t pt-4 space-y-4">
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <Star className="w-4 h-4 mr-2 text-yellow-500" />
                            Ý nghĩa lịch sử
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{event.significance}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                            <Users className="w-4 h-4 mr-2 text-red-500" />
                            Liên quan đến tư tưởng đoàn kết
                          </h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{event.relatedToUnity}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Thống kê Timeline
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">79</div>
              <div className="text-red-200">Năm cuộc đời</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">30</div>
              <div className="text-red-200">Năm ra nước ngoài</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24</div>
              <div className="text-red-200">Năm lãnh đạo cách mạng</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-red-200">Giá trị để lại</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Timeline;