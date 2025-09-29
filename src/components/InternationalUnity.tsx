import React from 'react';
import { Globe, Handshake, Space as Peace, Users, MapPin, Heart, Star } from 'lucide-react';

const InternationalUnity: React.FC = () => {
  const principles = [
    {
      icon: Peace,
      title: 'Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích chung',
      description: 'Các lực lượng cách mạng và tiến bộ trên thế giới phải đoàn kết vì mục tiêu chung là hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.\nHồ Chí Minh nhấn mạnh: “Có lý, có tình”, đoàn kết nhưng không đồng nhất tuyệt đối, phải tôn trọng sự khác biệt.'
    
    },
    {
      icon: Handshake,
      title: 'Đoàn kết trên cơ sở độc lập, tự chủ, tự cường',
      description: 'Việt Nam đoàn kết với các lực lượng quốc tế nhưng không phụ thuộc, phải giữ vững độc lập dân tộc và quyền tự quyết. Nguyên tắc này vừa đảm bảo lợi ích dân tộc, vừa góp phần vào phong trào chung.'
    },
    {
      icon: Users,
      title: 'Đoàn kết phải xuất phát từ lợi ích và nhu cầu thực tế của cách mạng mỗi nước',
      description: 'Không áp đặt, không can thiệp thô bạo vào công việc nội bộ của nhau. Mỗi quốc gia có con đường đi riêng, nhưng cùng hướng đến mục tiêu vì con người.'
    },
    {
      icon: Heart,
      title: 'Đoàn kết trên tinh thần nhân văn, thủy chung, trong sáng',
      description: 'Hồ Chí Minh luôn nhấn mạnh yếu tố “thủy chung trước sau như một”, giữ gìn tình đoàn kết thật sự, chống lợi dụng. Tôn trọng, thương yêu, giúp đỡ lẫn nhau trên tinh thần “giúp bạn là tự giúp mình”.'
    },
        {
      icon: Star,
      title: 'Kết hợp đoàn kết quốc tế với đại đoàn kết dân tộc',
      description: 'Muốn đoàn kết quốc tế thành công, trước hết phải có khối đại đoàn kết toàn dân tộc vững chắc. Đây là nền tảng để Việt Nam thực hiện tốt nghĩa vụ quốc tế.'
    }

  ];

  const relationships = [
    {
      region: 'Liên Xô và các nước Đông Âu',
      description: 'Quan hệ đặc biệt với khối xã hội chủ nghĩa',
      achievements: ['Hỗ trợ kỹ thuật', 'Đào tạo nhân lực', 'Viện trợ quân sự']
    },
    {
      region: 'Trung Quốc',
      description: 'Mối quan hệ láng giềng hữu nghị truyền thống',
      achievements: ['Hợp tác biên giới', 'Trao đổi văn hóa', 'Hỗ trợ kháng chiến']
    },
    {
      region: 'Các nước Đông Nam Á',
      description: 'Xây dựng khu vực hòa bình, hợp tác',
      achievements: ['ASEAN', 'Hợp tác kinh tế', 'An ninh khu vực']
    },
    {
      region: 'Phong trào Không liên kết',
      description: 'Tham gia tích cực phong trào các nước không liên kết',
      achievements: ['Hòa bình thế giới', 'Chống thực dân', 'Tự quyết dân tộc']
    }
  ];

  const modernApplications = [
    {
      title: 'Hội nhập quốc tế',
      description: 'Việt Nam tích cực tham gia các tổ chức quốc tế',
      examples: ['Thành viên ASEAN', 'Gia nhập WTO', 'Hội đồng Bảo an LHQ']
    },
    {
      title: 'Hợp tác kinh tế',
      description: 'Phát triển quan hệ thương mại và đầu tư',
      examples: ['CPTPP', 'EVFTA', 'RCEP']
    },
    {
      title: 'Ngoại giao đa phương',
      description: 'Chính sách đối ngoại đa dạng hóa, đa phương hóa',
      examples: ['APEC', 'ASEM', 'Mekong-Ganga']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <Globe className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Đoàn kết quốc tế
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            "Việt Nam muốn làm bạn với tất cả các nước dân chủ và hòa bình trên thế giới" 
            - Tư tưởng đoàn kết quốc tế của Chủ tịch Hồ Chí Minh
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Triết lý đoàn kết quốc tế
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tư tưởng đoàn kết quốc tế của Hồ Chí Minh xuất phát từ quan điểm nhân văn sâu sắc: 
                  <strong> "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng"</strong>. 
                  Người tin rằng sự hợp tác và đoàn kết giữa các dân tộc là chìa khóa 
                  để xây dựng một thế giới hòa bình, công bằng.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Đoàn kết quốc tế không chỉ là chiến lược ngoại giao mà còn là nguyên tắc đạo đức, thể hiện tinh thần tương thân tương ái, hỗ trợ lẫn nhau. Hồ Chí Minh luôn gắn lợi ích dân tộc với lợi ích của phong trào cách mạng thế giới, kết hợp sức mạnh dân tộc với sức mạnh thời đại để tạo ra mặt trận nhân dân tiến bộ toàn cầu. Triết lý này vừa giúp cách mạng Việt Nam giành thắng lợi, vừa đóng góp vào hòa bình, độc lập và tiến bộ xã hội trên thế giới..
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
            Nguyên tắc cơ bản
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
               <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center">
  <div className="flex justify-center mb-4">
    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
      <Icon className="w-7 h-7 text-white" />
    </div>
  </div>
  <h3 className="text-lg font-bold text-gray-800 mb-3">{principle.title}</h3>
  <p className="text-gray-600 text-sm leading-relaxed">{principle.description}</p>
</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Historical Relationships */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
            Quan hệ quốc tế trong lịch sử
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {relationships.map((relationship, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">{relationship.region}</h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{relationship.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-800 text-sm">Thành tựu chính:</h4>
                  {relationship.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-2" />
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Applications */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Ứng dụng trong thời đại hiện đại
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {modernApplications.map((application, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">{application.title}</h3>
                <p className="mb-4 leading-relaxed">{application.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-yellow-300">Ví dụ:</h4>
                  {application.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                      <span className="text-sm">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-6xl text-blue-600 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 mb-6 italic leading-relaxed">
              Việt Nam muốn làm bạn với tất cả các nước dân chủ và hòa bình trên thế giới, 
              không phân biệt chế độ chính trị và xã hội khác nhau.
            </blockquote>
            <cite className="text-lg text-blue-600 font-semibold">
              — Chủ tịch Hồ Chí Minh
            </cite>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Tác động và ý nghĩa
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Trong quá khứ</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Tạo mặt trận quốc tế rộng lớn</li>
                  <li>• Giành được sự ủng hộ quốc tế</li>
                  <li>• Thành công trong kháng chiến</li>
                  <li>• Nâng cao vị thế Việt Nam</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Hiện tại và tương lai</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Hội nhập kinh tế quốc tế</li>
                  <li>• Đóng góp vào hòa bình thế giới</li>
                  <li>• Xây dựng cộng đồng ASEAN</li>
                  <li>• Phát triển bền vững toàn cầu</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternationalUnity;