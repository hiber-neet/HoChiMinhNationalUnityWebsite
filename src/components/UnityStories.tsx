import React, { useState } from 'react';
import { BookHeart, Users, Star, Heart, Clock, MapPin, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const UnityStories: React.FC = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      id: 1,
      title: 'Câu chuyện về Mặt trận Việt Minh',
      period: '1941-1945',
      location: 'Toàn quốc',
      category: 'Lịch sử',
      image: 'https://images.pexels.com/photos/8923810/pexels-photo-8923810.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Sự đoàn kết của các tầng lớp nhân dân trong Mặt trận Việt Minh',
      content: `Năm 1941, tại Pác Bó, Cao Bằng, Chủ tịch Hồ Chí Minh đã khởi xướng thành lập Mặt trận Việt Minh - một tổ chức đoàn kết rộng lớn nhất trong lịch sử dân tộc.

Mặt trận Việt Minh đã tập hợp được mọi tầng lớp nhân dân: từ nông dân, công nhân, trí thức đến các nhà tư bản yêu nước, từ người Kinh đến đồng bào các dân tộc thiểu số, từ Phật giáo, Công giáo đến Cao Đài, Hòa Hảo.

Điều kỳ diệu là tất cả đều cùng hướng về một mục tiêu: "Đánh đuổi Pháp - Nhật, giành độc lập cho dân tộc". Sức mạnh đoàn kết này đã tạo nên thắng lợi của Cách mạng tháng Tám 1945.`,
      lesson: 'Khi có mục tiêu chung, mọi khác biệt đều có thể hòa hợp để tạo nên sức mạnh vĩ đại.',
      quote: 'Đoàn kết là sức mạnh, chia rẽ là yếu đuối',
      impact: 'Thành lập nền tảng cho nước Việt Nam Dân chủ Cộng hòa'
    },
    {
      id: 2,
      title: 'Tình đoàn kết dân tộc trong kháng chiến',
      period: '1946-1954',
      location: 'Điện Biên Phủ',
      category: 'Kháng chiến',
      image: 'https://images.pexels.com/photos/8923811/pexels-photo-8923811.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Đồng bào các dân tộc cùng nhau góp sức cho chiến thắng Điện Biên Phủ',
      content: `Chiến dịch Điện Biên Phủ không chỉ là thắng lợi của quân đội mà còn là minh chứng rõ nét nhất cho tinh thần đại đoàn kết dân tộc.

Đồng bào Thái, Mường, Hmong, Dao... đã cùng với đồng bào Kinh vận chuyển lương thực, đạn dược lên chiến trường. Hàng nghìn người dân tộc thiểu số đã tham gia "đội quân xe thồ", vượt qua những con đường hiểm trở để tiếp tế cho bộ đội.

Ông Lò Văn Hắc (người Thái) đã nói: "Bộ đội là con em của chúng ta, chúng ta phải lo cho con em mình". Tinh thần này đã lan tỏa khắp vùng Tây Bắc.

Không phân biệt dân tộc nào, tất cả đều coi chiến thắng của quân đội là chiến thắng chung của dân tộc Việt Nam.`,
      lesson: 'Trong khó khăn, sự đoàn kết giữa các dân tộc càng trở nên mạnh mẽ và thiêng liêng.',
      quote: 'Quân và dân đoàn kết như cá với nước',
      impact: 'Kết thúc ách thống trị của thực dân Pháp tại Đông Dương'
    },
    {
      id: 3,
      title: 'Tình nghĩa đồng bào trong thiên tai',
      period: '1945-nay',
      location: 'Khắp cả nước',
      category: 'Đời sống',
      image: 'https://images.pexels.com/photos/8923812/pexels-photo-8923812.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Tinh thần "tương thân tương ái" của các dân tộc Việt Nam',
      content: `Mỗi khi có thiên tai, lũ lụt xảy ra ở bất kỳ vùng miền nào, tinh thần đoàn kết của các dân tộc Việt Nam lại tỏa sáng.

Năm 2020, khi miền Trung bị lũ lụt nặng nề, đồng bào các dân tộc thiểu số ở Tây Bắc đã gửi hàng tấn gạo, rau củ xuống hỗ trợ. Các em học sinh dân tộc Hmong ở Hà Giang đã quyên góp tiền tiết kiệm để ủng hộ bạn bè miền Trung.

Ngược lại, khi vùng cao có khó khăn, đồng bào miền xuôi cũng nhiệt tình giúp đỡ. Chương trình "Một triệu áo ấm cho em" đã mang hơi ấm từ thành phố lên vùng cao.

Đây chính là hiện thân của lời dạy của Bác Hồ: "Lá lành đùm lá rách".`,
      lesson: 'Tình đoàn kết không chỉ thể hiện trong thời chiến mà còn trong cuộc sống hàng ngày.',
      quote: 'Lá lành đùm lá rách',
      impact: 'Xây dựng xã hội tương thân tương ái, không ai bị bỏ lại phía sau'
    },
    {
      id: 4,
      title: 'Đoàn kết tôn giáo trong xây dựng đất nước',
      period: '1945-nay',
      location: 'Toàn quốc',
      category: 'Tôn giáo',
      image: 'https://images.pexels.com/photos/8923813/pexels-photo-8923813.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Sự hòa hợp giữa các tôn giáo trong việc xây dựng đất nước',
      content: `Chủ tịch Hồ Chí Minh đã khẳng định: "Tôn giáo và không tôn giáo đều là con em của Tổ quốc". Chính sách này đã tạo nên sự đoàn kết tôn giáo độc đáo ở Việt Nam.

Trong các phong trào xây dựng đất nước, các tôn giáo đều tích cực tham gia. Phật giáo với phong trào "Đạo pháp - Dân tộc - Chủ nghĩa xã hội", Công giáo với tinh thần "Sống tốt đời - Đẹp đạo", Cao Đài, Hòa Hảo với truyền thống yêu nước...

Điển hình là Đại lễ Phật đản Vesak 2019 tại Việt Nam, nơi các tôn giáo cùng chung tay tổ chức, thể hiện tinh thần đoàn kết và hòa hợp tôn giáo.

Hay như trong đại dịch COVID-19, các cơ sở tôn giáo đã trở thành điểm cách ly, điểm tiêm chủng, thể hiện tinh thần "tương thân tương ái".`,
      lesson: 'Đa dạng tôn giáo không phải là rào cản mà là sức mạnh khi cùng hướng về mục tiêu chung.',
      quote: 'Tôn giáo và không tôn giáo đều là con em của Tổ quốc',
      impact: 'Tạo nên xã hội hòa hợp tôn giáo, góp phần ổn định và phát triển'
    },
    {
      id: 5,
      title: 'Câu chuyện về làng Sen và tinh thần đoàn kết',
      period: '1890-nay',
      location: 'Làng Sen, Nghệ An',
      category: 'Quê hương',
      image: 'https://images.pexels.com/photos/8923814/pexels-photo-8923814.jpeg?auto=compress&cs=tinysrgb&w=800',
      summary: 'Nơi sinh ra tư tưởng đoàn kết của Chủ tịch Hồ Chí Minh',
      content: `Làng Sen - quê hương của Chủ tịch Hồ Chí Minh - chính là nơi đầu tiên hình thành tư tưởng đoàn kết trong tâm hồn Người.

Từ nhỏ, Nguyễn Sinh Cung đã chứng kiến cảnh làng xóm tương thân tương ái. Khi nhà nào có việc, cả làng cùng giúp đỡ. Mùa gặt, người có nhiều sẽ giúp người có ít. Trẻ em mồ côi được cả làng chăm sóc.

Ông Nguyễn Sinh Sắc - cha của Bác Hồ - thường dạy: "Làm người phải biết thương người". Bà Hoàng Thị Loan - mẹ của Bác - luôn chia sẻ với hàng xóm khó khăn.

Chính từ môi trường này, tư tưởng "đại đoàn kết" đã được gieo mầm trong tâm hồn Bác Hồ. Sau này, Người đã mở rộng tình yêu thương từ làng Sen ra toàn dân tộc, từ dân tộc Việt Nam ra toàn thế giới.`,
      lesson: 'Tư tưởng đoàn kết bắt nguồn từ tình yêu thương giản dị trong gia đình và làng xóm.',
      quote: 'Làm người phải biết thương người',
      impact: 'Hình thành nền tảng tư tưởng đoàn kết của một vị lãnh tụ vĩ đại'
    }
  ];

  const categories = [
    { id: 'all', label: 'Tất cả', color: 'bg-gray-500' },
    { id: 'Lịch sử', label: 'Lịch sử', color: 'bg-red-500' },
    { id: 'Kháng chiến', label: 'Kháng chiến', color: 'bg-orange-500' },
    { id: 'Đời sống', label: 'Đời sống', color: 'bg-green-500' },
    { id: 'Tôn giáo', label: 'Tôn giáo', color: 'bg-blue-500' },
    { id: 'Quê hương', label: 'Quê hương', color: 'bg-purple-500' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredStories = selectedCategory === 'all' 
    ? stories 
    : stories.filter(story => story.category === selectedCategory);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % filteredStories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + filteredStories.length) % filteredStories.length);
  };

  const currentStoryData = filteredStories[currentStory];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <BookHeart className="w-10 h-10 text-rose-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Câu chuyện Đoàn kết
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Những câu chuyện cảm động về tinh thần đại đoàn kết dân tộc 
            qua các thời kỳ lịch sử Việt Nam
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
                onClick={() => {
                  setSelectedCategory(category.id);
                  setCurrentStory(0);
                }}
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

      {/* Story Viewer */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {currentStoryData && (
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Story Header */}
              <div className="relative h-64 md:h-80">
                <img 
                  src={currentStoryData.image} 
                  alt={currentStoryData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <div className="flex items-center space-x-4 mb-3 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {currentStoryData.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {currentStoryData.location}
                    </div>
                    <span className="px-2 py-1 bg-rose-600 rounded-full text-xs">
                      {currentStoryData.category}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {currentStoryData.title}
                  </h2>
                  <p className="text-lg opacity-90">
                    {currentStoryData.summary}
                  </p>
                </div>
              </div>

              {/* Story Content */}
              <div className="p-8">
                <div className="prose prose-lg max-w-none mb-8">
                  {currentStoryData.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl mb-6">
                  <Quote className="w-8 h-8 text-rose-600 mb-3" />
                  <blockquote className="text-xl font-medium text-gray-800 italic mb-2">
                    "{currentStoryData.quote}"
                  </blockquote>
                  <cite className="text-rose-600 font-semibold">
                    — Chủ tịch Hồ Chí Minh
                  </cite>
                </div>

                {/* Lesson & Impact */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Star className="w-5 h-5 text-yellow-600 mr-2" />
                      <h4 className="font-bold text-gray-800">Bài học</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {currentStoryData.lesson}
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Heart className="w-5 h-5 text-green-600 mr-2" />
                      <h4 className="font-bold text-gray-800">Tác động</h4>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {currentStoryData.impact}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="bg-gray-50 px-8 py-6 flex items-center justify-between">
                <button
                  onClick={prevStory}
                  className="flex items-center space-x-2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors duration-200"
                >
                  <ChevronLeft size={20} />
                  <span>Câu chuyện trước</span>
                </button>
                
                <div className="flex items-center space-x-2">
                  {filteredStories.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStory(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === currentStory ? 'bg-rose-600' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextStory}
                  className="flex items-center space-x-2 px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors duration-200"
                >
                  <span>Câu chuyện tiếp</span>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          )}
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
                className={`cursor-pointer transition-all duration-300 hover:-translate-y-2 ${
                  index === currentStory ? 'ring-4 ring-rose-300' : ''
                }`}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="px-2 py-1 bg-rose-100 text-rose-600 rounded-full text-xs font-medium">
                        {story.category}
                      </span>
                      <span className="text-xs text-gray-500">{story.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {story.summary}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 bg-gradient-to-r from-rose-600 to-pink-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Thống kê câu chuyện
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">{stories.length}</div>
              <div className="text-rose-200">Câu chuyện</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">{categories.length - 1}</div>
              <div className="text-rose-200">Chủ đề</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-rose-200">Năm lịch sử</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-rose-200">Cảm xúc</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UnityStories;