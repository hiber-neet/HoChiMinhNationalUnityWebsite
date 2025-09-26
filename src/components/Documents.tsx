import React, { useState } from 'react';
import { BookOpen, Quote, Download, Search, Filter, Calendar, Tag } from 'lucide-react';

const Documents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'unity', label: 'Đại đoàn kết' },
    { id: 'international', label: 'Quốc tế' },
    { id: 'philosophy', label: 'Triết lý' },
    { id: 'politics', label: 'Chính trị' }
  ];

  const documents = [
    {
      id: 1,
      title: 'Lời di chúc của Chủ tịch Hồ Chí Minh',
      category: 'unity',
      date: '10/5/1969',
      type: 'Văn kiện chính thức',
      content: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.',
      description: 'Lời di chúc thiêng liêng của Bác Hồ về tầm quan trọng của đại đoàn kết',
      downloadUrl: '#'
    },
    {
      id: 2,
      title: 'Tuyên ngôn độc lập',
      category: 'unity',
      date: '2/9/1945',
      type: 'Tuyên ngôn',
      content: 'Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được.',
      description: 'Tuyên ngôn độc lập khẳng định quyền tự quyết của dân tộc Việt Nam',
      downloadUrl: '#'
    },
    {
      id: 3,
      title: 'Thư gửi đồng bào toàn quốc',
      category: 'unity',
      date: '17/8/1945',
      type: 'Thư kêu gọi',
      content: 'Dân ta phải thật là một, nước ta phải thật là độc lập.',
      description: 'Lời kêu gọi đoàn kết toàn dân trong cuộc Tổng khởi nghĩa',
      downloadUrl: '#'
    },
    {
      id: 4,
      title: 'Về chính sách dân tộc',
      category: 'unity',
      date: '1946',
      type: 'Bài viết',
      content: 'Các dân tộc trong nước Việt Nam đều bình đẳng về quyền lợi và nghĩa vụ.',
      description: 'Quan điểm về bình đẳng và đoàn kết các dân tộc',
      downloadUrl: '#'
    },
    {
      id: 5,
      title: 'Nói chuyện với đại biểu các nước',
      category: 'international',
      date: '1954',
      type: 'Diễn văn',
      content: 'Việt Nam muốn làm bạn với tất cả các nước dân chủ và hòa bình trên thế giới.',
      description: 'Quan điểm về đoàn kết quốc tế và hòa bình thế giới',
      downloadUrl: '#'
    },
    {
      id: 6,
      title: 'Về chủ nghĩa quốc tế vô sản',
      category: 'international',
      date: '1924',
      type: 'Bài viết',
      content: 'Chủ nghĩa quốc tế vô sản là sự đoàn kết của các dân tộc bị áp bức.',
      description: 'Tư tưởng về đoàn kết quốc tế trong thời kỳ đầu',
      downloadUrl: '#'
    },
    {
      id: 7,
      title: 'Đường Kách mệnh',
      category: 'philosophy',
      date: '1927',
      type: 'Sách',
      content: 'Cách mệnh muốn thành công thì phải có đảng cách mệnh để lãnh đạo.',
      description: 'Tác phẩm về lý luận cách mệnh và tổ chức',
      downloadUrl: '#'
    },
    {
      id: 8,
      title: 'Về đạo đức cách mệnh',
      category: 'philosophy',
      date: '1958',
      type: 'Bài nói chuyện',
      content: 'Cách mệnh thì phải có đạo đức cách mệnh.',
      description: 'Quan điểm về đạo đức trong sự nghiệp cách mệnh',
      downloadUrl: '#'
    }
  ];

  const quotes = [
    {
      text: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.',
      source: 'Lời di chúc',
      category: 'unity'
    },
    {
      text: 'Không có gì quý hơn độc lập tự do.',
      source: 'Tuyên ngôn độc lập',
      category: 'unity'
    },
    {
      text: 'Dân ta phải thật là một, nước ta phải thật là độc lập.',
      source: 'Thư gửi đồng bào toàn quốc',
      category: 'unity'
    },
    {
      text: 'Việt Nam muốn làm bạn với tất cả các nước dân chủ và hòa bình trên thế giới.',
      source: 'Nói chuyện với đại biểu các nước',
      category: 'international'
    },
    {
      text: 'Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng.',
      source: 'Về chính sách dân tộc',
      category: 'international'
    },
    {
      text: 'Cách mệnh muốn thành công thì phải có đảng cách mệnh để lãnh đạo.',
      source: 'Đường Kách mệnh',
      category: 'philosophy'
    }
  ];

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredQuotes = quotes.filter(quote => {
    const matchesSearch = quote.text.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || quote.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-amber-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Tài liệu & Trích dẫn
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Bộ sưu tập các tài liệu, trích dẫn quý giá về tư tưởng đại đoàn kết 
            của Chủ tịch Hồ Chí Minh
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm tài liệu, trích dẫn..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Tài liệu chính thức
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDocuments.map((doc) => (
              <div key={doc.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{doc.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {doc.date}
                      </div>
                      <div className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {doc.type}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <Quote className="w-5 h-5 text-amber-600 mb-2" />
                  <p className="text-gray-700 italic leading-relaxed">{doc.content}</p>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{doc.description}</p>
                
                <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors duration-200">
                  <Download className="w-4 h-4" />
                  <span>Tải xuống</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Trích dẫn nổi bật
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredQuotes.map((quote, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl text-amber-600 mb-4">"</div>
                <blockquote className="text-gray-800 font-medium mb-4 leading-relaxed">
                  {quote.text}
                </blockquote>
                <cite className="text-amber-600 font-semibold text-sm">
                  — {quote.source}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Thống kê tài liệu
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{documents.length}</div>
              <div className="text-amber-200">Tài liệu</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{quotes.length}</div>
              <div className="text-amber-200">Trích dẫn</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{categories.length - 1}</div>
              <div className="text-amber-200">Chủ đề</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">79</div>
              <div className="text-amber-200">Năm di sản</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents;