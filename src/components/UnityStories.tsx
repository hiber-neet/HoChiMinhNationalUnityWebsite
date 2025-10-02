import React, { useState } from 'react';
import { BookOpen, Clock, MapPin, Heart, Quote, ChevronLeft, ChevronRight, Filter } from 'lucide-react';

const UnityStories: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả', color: 'bg-gray-500' },
    { id: 'history', label: 'Lịch sử', color: 'bg-red-500' },
    { id: 'resistance', label: 'Kháng chiến', color: 'bg-orange-500' },
    { id: 'daily-life', label: 'Đời sống', color: 'bg-green-500' },
    { id: 'religion', label: 'Tôn giáo', color: 'bg-blue-500' },
    { id: 'homeland', label: 'Quê hương', color: 'bg-purple-500' }
  ];

  const stories = [
    {
      id: 1,
      title: 'Mặt trận Việt Minh - Khối đại đoàn kết lịch sử',
      category: 'history',
      period: '1941-1945',
      location: 'Toàn quốc',
      image: 'https://images.pexels.com/photos/8828597/pexels-photo-8828597.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Sự ra đời của Mặt trận Việt Minh đánh dấu bước ngoặt lịch sử trong việc tập hợp mọi tầng lớp nhân dân.',
      content: `Ngày 19 tháng 5 năm 1941, tại hang Pác Bó, tỉnh Cao Bằng, Mặt trận Việt Nam Độc lập Đồng minh (Việt Minh) ra đời dưới sự lãnh đạo của Nguyễn Ái Quốc - Hồ Chí Minh.

Đây không chỉ là một tổ chức chính trị mà còn là biểu tượng của khối đại đoàn kết toàn dân tộc. Mặt trận Việt Minh đã tập hợp được:

• Nông dân nghèo khổ từ đồng bằng đến miền núi
• Công nhân thành thị với ý thức giai cấp cao
• Trí thức yêu nước từ các trường đại học
• Thanh niên nhiệt huyết khắp mọi miền
• Các dân tộc thiểu số ở vùng cao
• Thậm chí cả những địa chủ, tư sản yêu nước

Sức mạnh của Việt Minh không nằm ở số lượng ban đầu mà ở tinh thần đoàn kết vượt qua mọi ranh giới giai cấp, tôn giáo, dân tộc. Chỉ trong 4 năm, từ một tổ chức nhỏ, Việt Minh đã trở thành lực lượng lãnh đạo Tổng khởi nghĩa tháng Tám thành công.`,
      quote: 'Muốn cứu nước và giải phóng dân tộc, không có con đường nào khác con đường cách mạng vô sản.',
      lesson: 'Khi có mục tiêu chung cao cả, mọi khác biệt về xuất thân, địa vị đều có thể hòa hợp để tạo nên sức mạnh vô địch.',
      impact: 'Mặt trận Việt Minh đã chứng minh rằng đại đoàn kết không phải là khẩu hiệu mà là sức mạnh thực tế có thể thay đổi vận mệnh dân tộc.'
    },
    {
      id: 2,
      title: 'Điện Biên Phủ - Đội quân xe thồ huyền thoại',
      category: 'resistance',
      period: '1953-1954',
      location: 'Điện Biên Phủ',
      image: 'https://images.pexels.com/photos/7034647/pexels-photo-7034647.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Chiến thắng Điện Biên Phủ không chỉ nhờ quân đội mà còn nhờ sự đóng góp của hàng triệu đồng bào.',
      content: `Chiến dịch Điện Biên Phủ (1953-1954) là minh chứng sống động nhất cho sức mạnh của đại đoàn kết toàn dân tộc. Để vận chuyển hàng trăm nghìn tấn lương thực, vũ khí lên chiến trường, nhân dân cả nước đã tham gia "đội quân xe thồ" huyền thoại.

Những con số biết nói:
• 260.000 dân công tham gia trực tiếp
• 23.000 xe thồ, xe bò được huy động
• 8.286 tấn gạo được vận chuyển
• Hàng nghìn kilomet đường mòn được mở

Đặc biệt, đồng bào các dân tộc Thái, Mường, Tày, Nùng... đã dùng chính đôi vai, đôi chân của mình để "cõng" chiến thắng lên Điện Biên Phủ. Họ vượt qua những con đường hiểm trở, dưới mưa bom bão đạn, với tinh thần "tất cả cho tiền tuyến, tất cả để chiến thắng".

Không chỉ vận chuyển, nhân dân còn tham gia làm đường, xây cầu, chăm sóc thương binh, thậm chí cả việc thu thập tình báo. Mỗi người dân là một chiến sĩ, mỗi ngôi làng là một pháo đài.`,
      quote: 'Điện Biên Phủ là chiến thắng của toàn dân, toàn quân, toàn Đảng.',
      lesson: 'Trong những thời khắc quyết định, sức mạnh của đoàn kết có thể tạo ra những kỳ tích không tưởng.',
      impact: 'Chiến thắng Điện Biên Phủ đã chứng minh rằng khi toàn dân đoàn kết, không có thế lực nào có thể khuất phục được dân tộc Việt Nam.'
    },
    {
      id: 3,
      title: 'Tương thân tương ái trong thiên tai',
      category: 'daily-life',
      period: '1999-2020',
      location: 'Miền Trung - Tây Bắc',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Những đợt lũ lụt lịch sử đã khơi dậy tinh thần "lá lành đùm lá rách" của cả dân tộc.',
      content: `Năm 1999, trận lũ lụt lịch sử tại miền Trung đã để lại những hình ảnh không thể nào quên về tinh thần tương thân tương ái của dân tộc Việt Nam.

Khi nước lũ dâng cao, chia cắt nhiều vùng, đồng bào các tỉnh phía Bắc đã nhanh chóng hành động:
• Hà Nội gửi 1000 tấn gạo cứu trợ
• Hải Phòng đóng góp 500 triệu đồng
• Các tỉnh Tây Bắc gửi ngô, khoai lang
• Học sinh, sinh viên quyên góp từng đồng xu

Đặc biệt cảm động là hình ảnh các cụ già ở Sapa, Mù Cang Chải gói từng bao ngô, khoai để gửi xuống miền Trung. Họ nói: "Chúng tôi nghèo nhưng không thể để đồng bào thiếu ăn".

Chương trình "Một triệu áo ấm cho em" cũng thể hiện rõ tinh thần này. Từ thành phố lớn đến vùng sâu vùng xa, mọi người đều đóng góp để các em nhỏ vùng cao có áo ấm qua đông.

Năm 2020, khi COVID-19 bùng phát, tinh thần tương thân tương ái lại một lần nữa được thể hiện qua "ATM gạo", "tủ bánh mì miễn phí", "siêu thị 0 đồng"...`,
      quote: 'Lá lành đùm lá rách, tương thân tương ái là truyền thống tốt đẹp của dân tộc ta.',
      lesson: 'Trong khó khăn, tinh thần đoàn kết và tương trợ lẫn nhau là nguồn sức mạnh vô tận của dân tộc.',
      impact: 'Những hành động tương thân tương ái đã củng cố thêm niềm tin của nhân dân vào sức mạnh của khối đại đoàn kết toàn dân tộc.'
    },
    {
      id: 4,
      title: 'Hòa hợp tôn giáo - Sức mạnh từ đa dạng',
      category: 'religion',
      period: '1945-2023',
      location: 'Toàn quốc',
      image: 'https://images.pexels.com/photos/8828598/pexels-photo-8828598.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Việt Nam là điển hình về sự hòa hợp giữa các tôn giáo trong xây dựng và bảo vệ Tổ quốc.',
      content: `Việt Nam có hơn 95% dân số theo tôn giáo hoặc tín ngưỡng, với 6 tôn giáo chính: Phật giáo, Công giáo, Tin lành, Hồi giáo, Cao Đài, Hòa Hảo. Thay vì tạo ra chia rẽ, sự đa dạng này lại trở thành nguồn sức mạnh.

Trong kháng chiến chống Pháp:
• Hòa thượng Thích Trí Quang tham gia hoạt động cách mạng
• Linh mục Nguyễn Huy Mai ủng hộ Việt Minh
• Giáo dân Phát Diệm, Bùi Chu tham gia kháng chiến
• Tín đồ Cao Đài, Hòa Hảo đóng góp lực lượng

Trong xây dựng đất nước:
• Các chùa, nhà thờ trở thành trung tâm từ thiện
• Tôn giáo tham gia các chương trình xã hội
• Hòa hợp tôn giáo trong các lễ hội dân tộc

Đặc biệt trong đại dịch COVID-19:
• Chùa Việt Nam Quốc Tự (TP.HCM) thành điểm tiêm chủng
• Nhà thờ Đức Bà làm nơi phát khẩu trang miễn phí
• Thánh đường Hồi giáo nấu cơm từ thiện
• Tín đồ Cao Đài tham gia chống dịch

Hình ảnh đẹp nhất là trong các lễ hội: Tết Nguyên đán có cả Phật tử và Công giáo tham gia, Giáng sinh có cả người không theo đạo đến chúc mừng.`,
      quote: 'Tôn giáo và tín ngưỡng là quyền thiêng liêng của con người, Nhà nước tôn trọng và bảo vệ quyền đó.',
      lesson: 'Đa dạng tôn giáo không phải là rào cản mà là sức mạnh khi được hòa hợp trong tinh thần yêu nước.',
      impact: 'Việt Nam trở thành tấm gương về hòa hợp tôn giáo, được quốc tế ghi nhận và học hỏi.'
    },
    {
      id: 5,
      title: 'Làng Sen - Cái nôi của tư tưởng đoàn kết',
      category: 'homeland',
      period: '1890-1911',
      location: 'Làng Sen, Nam Đàn, Nghệ An',
      image: 'https://images.pexels.com/photos/8828599/pexels-photo-8828599.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Nơi Bác Hồ sinh ra và lớn lên đã hun đúc nên tư tưởng tương thân tương ái trong tâm hồn Người.',
      content: `Làng Sen, nơi Nguyễn Sinh Cung (Hồ Chí Minh) chào đời và trải qua tuổi thơ, là một làng quê bình dị nhưng giàu truyền thống tương thân tương ái.

Những bài học đầu đời về đoàn kết:
• Ông Nguyễn Sinh Sắc (cha Bác) thường giúp đỡ dân làng viết đơn từ
• Bà Hoàng Thị Loan (mẹ Bác) hay cho kẻ nghèo vay gạo không lãi
• Các gia đình trong làng thường xuyên giúp đỡ lẫn nhau
• Trẻ em cùng chơi không phân biệt giàu nghèo

Tập tục đẹp của làng Sen:
• "Có phúc cùng hưởng, có họa cùng chia"
• Mùa gặt, cả làng cùng giúp nhà nghèo
• Đám cưới, đám tang đều có sự chung tay
• Dạy con phải "biết thương người"

Chính trong môi trường này, tâm hồn nhân ái của Hồ Chí Minh được hun đúc. Người từng nói: "Làm người phải biết thương người". Tư tưởng đại đoàn kết của Người bắt nguồn từ những bài học giản dị nhưng sâu sắc này.

Ngày nay, làng Sen vẫn giữ được truyền thống tốt đẹp đó. Các gia đình trong làng vẫn thường xuyên giúp đỡ lẫn nhau, đặc biệt trong việc giáo dục con em và chăm sóc người già.`,
      quote: 'Làm người phải biết thương người, thương người như thể thương thân.',
      lesson: 'Tư tưởng đại đoàn kết bắt nguồn từ tình yêu thương giản dị trong đời sống hàng ngày.',
      impact: 'Làng Sen trở thành biểu tượng của truyền thống tương thân tương ái, là nguồn cảm hứng cho tư tưởng đoàn kết của Hồ Chí Minh.'
    },
    {
      id: 6,
      title: 'Đoàn kết dân tộc thiểu số',
      category: 'daily-life',
      period: '1945-nay',
      location: 'Các vùng dân tộc thiểu số',
      image: 'https://images.pexels.com/photos/8828600/pexels-photo-8828600.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Chính sách dân tộc của Hồ Chí Minh đã tạo nên khối đoàn kết 54 dân tộc anh em.',
      content: `Hồ Chí Minh luôn coi các dân tộc thiểu số là "anh em ruột thịt" của dân tộc Kinh. Chính sách dân tộc của Người đã tạo nên sự đoàn kết bền chặt giữa 54 dân tộc Việt Nam.

Những chính sách cụ thể:
• Bãi bỏ chế độ thổ ty áp bức
• Thành lập các khu tự trị dân tộc
• Đào tạo cán bộ là người dân tộc thiểu số
• Phát triển kinh tế vùng dân tộc thiểu số
• Bảo tồn văn hóa truyền thống

Kết quả đạt được:
• 54 dân tộc cùng chung sống hòa thuận
• Không có xung đột dân tộc, tôn giáo
• Các vùng dân tộc thiểu số phát triển mạnh
• Văn hóa đa dạng được bảo tồn và phát huy

Những câu chuyện cảm động:
• Đồng bào Tày, Nùng ở Cao Bằng bảo vệ Bác Hồ
• Dân tộc Thái ở Sơn La đón tiếp bộ đội
• Người Mường ở Hòa Bình tham gia kháng chiến
• Đồng bào Khmer ở Nam Bộ ủng hộ cách mạng

Ngày nay, tinh thần đoàn kết dân tộc vẫn được duy trì qua các chương trình:
• "Ngày hội Đại đoàn kết toàn dân tộc"
• Chương trình 135 phát triển vùng dân tộc thiểu số
• Bảo tồn và phát huy văn hóa các dân tộc
• Đào tạo cán bộ dân tộc thiểu số`,
      quote: 'Người Thổ, Mường, Mán, Dao, Gia Rai, Ê đê... đều là con cháu Việt Nam, đều là anh em ruột thịt.',
      lesson: 'Bình đẳng và tôn trọng lẫn nhau là nền tảng của sự đoàn kết giữa các dân tộc.',
      impact: 'Việt Nam trở thành hình mẫu về đoàn kết dân tộc, không có xung đột sắc tộc như nhiều nước khác.'
    }
  ];

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  const currentStoryData = filteredStories[currentStory] || filteredStories[0];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % filteredStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'bg-gray-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50">
      {/* Header Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-red-600 text-white">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <BookOpen className="w-10 h-10 text-pink-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Câu chuyện Đoàn kết
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Những câu chuyện cảm động về tinh thần đại đoàn kết toàn dân tộc 
            qua các thời kỳ lịch sử Việt Nam
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2 flex-wrap gap-2">
            <Filter className="w-5 h-5 text-gray-600" />
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentStory(0);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? `${category.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Story Display */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Story Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={currentStoryData.image}
                alt={currentStoryData.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center space-x-4 mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(currentStoryData.category)} text-white`}>
                    {categories.find(cat => cat.id === currentStoryData.category)?.label}
                  </span>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {currentStoryData.period}
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {currentStoryData.location}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">{currentStoryData.title}</h2>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-8">
              {/* Summary */}
              <div className="bg-gradient-to-r from-pink-50 to-red-50 p-6 rounded-xl mb-8">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  {currentStoryData.summary}
                </p>
              </div>

              {/* Main Content */}
              <div className="prose prose-lg max-w-none mb-8">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {currentStoryData.content}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white p-6 rounded-xl mb-8">
                <Quote className="w-8 h-8 mb-4 text-yellow-300" />
                <blockquote className="text-lg italic mb-4 leading-relaxed">
                  "{currentStoryData.quote}"
                </blockquote>
                <cite className="text-sm text-red-200">— Chủ tịch Hồ Chí Minh</cite>
              </div>

              {/* Lesson and Impact */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <Heart className="w-6 h-6 text-green-600 mr-2" />
                    <h3 className="text-lg font-bold text-green-800">Bài học</h3>
                  </div>
                  <p className="text-green-700 leading-relaxed">{currentStoryData.lesson}</p>
                </div>
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex items-center mb-3">
                    <BookOpen className="w-6 h-6 text-blue-600 mr-2" />
                    <h3 className="text-lg font-bold text-blue-800">Tác động</h3>
                  </div>
                  <p className="text-blue-700 leading-relaxed">{currentStoryData.impact}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevStory}
              className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 hover:text-pink-600"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>Câu chuyện trước</span>
            </button>

            <div className="flex space-x-2">
              {filteredStories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentStory ? 'bg-pink-600' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextStory}
              className="flex items-center space-x-2 px-6 py-3 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-gray-700 hover:text-pink-600"
            >
              <span>Câu chuyện tiếp</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Story Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Tất cả câu chuyện
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story, index) => (
              <div
                key={story.id}
                onClick={() => setCurrentStory(index)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                  index === currentStory ? 'ring-4 ring-pink-500' : ''
                }`}
              >
                <div className="relative h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(story.category)} text-white`}>
                      {categories.find(cat => cat.id === story.category)?.label}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {story.summary}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{story.period}</span>
                    <span>{story.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-600 to-red-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Thống kê câu chuyện
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{stories.length}</div>
              <div className="text-pink-200">Câu chuyện</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{categories.length - 1}</div>
              <div className="text-pink-200">Chủ đề</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">130+</div>
              <div className="text-pink-200">Năm lịch sử</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-pink-200">Cảm hứng</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnityStories;