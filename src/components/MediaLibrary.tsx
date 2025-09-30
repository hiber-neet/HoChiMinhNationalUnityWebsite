import React, { useState } from 'react';
import { Image, Video, FileText, Download, Play, Eye, Heart, Share2, Search, Filter } from 'lucide-react';

const MediaLibrary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('images');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'portrait', label: 'Chân dung' },
    { id: 'historical', label: 'Lịch sử' },
    { id: 'documents', label: 'Tài liệu' },
    { id: 'events', label: 'Sự kiện' },
    { id: 'places', label: 'Địa điểm' }
  ];

  const images = [
    {
      id: 1,
      title: 'Chân dung Chủ tịch Hồ Chí Minh',
      category: 'portrait',
      description: 'Bức ảnh chân dung nổi tiếng của Bác Hồ với nụ cười hiền từ',
      url: 'https://images.pexels.com/photos/8828786/pexels-photo-8828786.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '1960',
      likes: 1890,
      views: 15420
    },
    {
      id: 2,
      title: 'Bác Hồ với trẻ em',
      category: 'historical',
      description: 'Hình ảnh Bác Hồ thăm và chơi cùng các em thiếu nhi',
      url: 'https://images.pexels.com/photos/8923810/pexels-photo-8923810.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '1965',
      likes: 2341,
      views: 18750
    },
    {
      id: 3,
      title: 'Lễ Quốc khánh 2/9/1945',
      category: 'events',
      description: 'Khoảnh khắc lịch sử tại Quảng trường Ba Đình',
      url: 'https://images.pexels.com/photos/8923811/pexels-photo-8923811.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '1945',
      likes: 3456,
      views: 25680
    },
    {
      id: 4,
      title: 'Phủ Chủ tịch',
      category: 'places',
      description: 'Nơi Bác Hồ sinh sống và làm việc',
      url: 'https://images.pexels.com/photos/8923812/pexels-photo-8923812.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '1960',
      likes: 1567,
      views: 12340
    },
    {
      id: 5,
      title: 'Bản thảo Di chúc',
      category: 'documents',
      description: 'Bản thảo tay của Lời di chúc thiêng liêng',
      url: 'https://images.pexels.com/photos/8923813/pexels-photo-8923813.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '1969',
      likes: 4521,
      views: 32100
    },
    {
      id: 6,
      title: 'Bác Hồ với đồng bào dân tộc',
      category: 'historical',
      description: 'Thể hiện tinh thần đại đoàn kết các dân tộc',
      url: 'https://images.pexels.com/photos/8923814/pexels-photo-8923814.jpeg?auto=compress&cs=tinysrgb&w=800',
      year: '1958',
      likes: 2890,
      views: 19450
    }
  ];

  const videos = [
    {
      id: 1,
      title: 'Tuyên ngôn độc lập 2/9/1945',
      category: 'events',
      description: 'Video tái hiện khoảnh khắc lịch sử tại Quảng trường Ba Đình',
      thumbnail: 'https://images.pexels.com/photos/8923815/pexels-photo-8923815.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '15:30',
      year: '1945',
      likes: 5670,
      views: 45230
    },
    {
      id: 2,
      title: 'Bác Hồ với nhân dân',
      category: 'historical',
      description: 'Những khoảnh khắc gần gũi của Bác với nhân dân',
      thumbnail: 'https://images.pexels.com/photos/8923816/pexels-photo-8923816.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '12:45',
      year: '1960',
      likes: 3421,
      views: 28900
    },
    {
      id: 3,
      title: 'Tư tưởng đại đoàn kết',
      category: 'documents',
      description: 'Phim tài liệu về tư tưởng đoàn kết của Hồ Chí Minh',
      thumbnail: 'https://images.pexels.com/photos/8923817/pexels-photo-8923817.jpeg?auto=compress&cs=tinysrgb&w=800',
      duration: '25:15',
      year: '2020',
      likes: 4567,
      views: 38750
    }
  ];

  const documents = [
    {
      id: 1,
      title: 'Toàn tập Hồ Chí Minh',
      category: 'documents',
      description: 'Bộ sưu tập đầy đủ các tác phẩm của Chủ tịch Hồ Chí Minh',
      type: 'PDF',
      size: '45.2 MB',
      pages: 1250,
      year: '2021',
      downloads: 12450
    },
    {
      id: 2,
      title: 'Lời di chúc của Hồ Chí Minh',
      category: 'documents',
      description: 'Văn bản gốc lời di chúc thiêng liêng của Bác Hồ',
      type: 'PDF',
      size: '2.1 MB',
      pages: 8,
      year: '1969',
      downloads: 25670
    },
    {
      id: 3,
      title: 'Tuyên ngôn độc lập',
      category: 'documents',
      description: 'Bản gốc Tuyên ngôn độc lập ngày 2/9/1945',
      type: 'PDF',
      size: '1.5 MB',
      pages: 4,
      year: '1945',
      downloads: 18900
    }
  ];

  const filterItems = (items: any[]) => {
    return items.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  };

  const renderImages = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filterItems(images).map((image) => (
        <div key={image.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative group">
            <img 
              src={image.url} 
              alt={image.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <button className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2">
                <Eye size={16} />
                <span>Xem chi tiết</span>
              </button>
            </div>
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
              {image.year}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-800 mb-2">{image.title}</h3>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{image.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <Heart size={14} className="mr-1" />
                  {image.likes.toLocaleString()}
                </div>
                <div className="flex items-center">
                  <Eye size={14} className="mr-1" />
                  {image.views.toLocaleString()}
                </div>
              </div>
              <button className="text-red-600 hover:text-red-700">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderVideos = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filterItems(videos).map((video) => (
        <div key={video.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="relative group">
            <img 
              src={video.thumbnail} 
              alt={video.title}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
              <button className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors duration-200">
                <Play size={24} />
              </button>
            </div>
            <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-xs">
              {video.duration}
            </div>
            <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
              {video.year}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-800 mb-2">{video.title}</h3>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">{video.description}</p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <Heart size={14} className="mr-1" />
                  {video.likes.toLocaleString()}
                </div>
                <div className="flex items-center">
                  <Eye size={14} className="mr-1" />
                  {video.views.toLocaleString()}
                </div>
              </div>
              <button className="text-red-600 hover:text-red-700">
                <Share2 size={16} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderDocuments = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filterItems(documents).map((doc) => (
        <div key={doc.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
              <FileText className="w-6 h-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800">{doc.title}</h3>
              <div className="text-sm text-gray-500">{doc.type} • {doc.size}</div>
            </div>
          </div>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{doc.description}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
            <div>{doc.pages} trang</div>
            <div>Năm {doc.year}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-sm text-gray-500">
              <Download size={14} className="mr-1" />
              {doc.downloads.toLocaleString()} lượt tải
            </div>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200 flex items-center space-x-2">
              <Download size={16} />
              <span>Tải xuống</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <Image className="w-10 h-10 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Thư viện đa phương tiện
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Bộ sưu tập hình ảnh, video và tài liệu quý giá về Chủ tịch Hồ Chí Minh 
            và tư tưởng đại đoàn kết
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Tìm kiếm hình ảnh, video, tài liệu..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveTab('images')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all duration-200 ${
                activeTab === 'images'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Image size={18} />
              <span>Hình ảnh</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all duration-200 ${
                activeTab === 'videos'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <Video size={18} />
              <span>Video</span>
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all duration-200 ${
                activeTab === 'documents'
                  ? 'bg-white text-purple-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              <FileText size={18} />
              <span>Tài liệu</span>
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          {activeTab === 'images' && renderImages()}
          {activeTab === 'videos' && renderVideos()}
          {activeTab === 'documents' && renderDocuments()}
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Thống kê thư viện
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{images.length}</div>
              <div className="text-purple-200">Hình ảnh</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{videos.length}</div>
              <div className="text-purple-200">Video</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{documents.length}</div>
              <div className="text-purple-200">Tài liệu</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-purple-200">Lượt xem</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MediaLibrary;