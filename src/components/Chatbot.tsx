import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Xin chào! Tôi là trợ lý AI về tư tưởng Hồ Chí Minh. Bạn có thể hỏi tôi về đại đoàn kết dân tộc, đoàn kết quốc tế, hoặc bất kỳ khía cạnh nào khác về tư tưởng của Bác.',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || 'demo-key');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getGeminiResponse = async (userMessage: string): Promise<string> => {
    try {
      // Create a flexible prompt that can answer any question
      const prompt = `
Bạn là một trợ lý AI thông minh, có thể trả lời mọi câu hỏi bằng tiếng Việt một cách chính xác và hữu ích.

Câu hỏi: ${userMessage}

Hãy trả lời một cách:
- Chính xác và hữu ích
- Dễ hiểu và thân thiện
- Độ dài phù hợp (100-300 từ)
- Sử dụng tiếng Việt tự nhiên
`;

      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API Error:', error);
      return getFallbackResponse(userMessage);
    }
  };

  const getFallbackResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    const fallbackResponses = {
      // PHẦN 1: ĐẠI ĐOÀN KẾT DÂN TỘC
      "đại đoàn kết":
        'Đại đoàn kết toàn dân tộc là tư tưởng cốt lõi của Chủ tịch Hồ Chí Minh. Người khẳng định: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công". Đây là sức mạnh vô địch để vượt qua mọi khó khăn, thử thách, giành độc lập dân tộc, xây dựng và bảo vệ Tổ quốc Việt Nam xã hội chủ nghĩa.',

      "khái niệm đoàn kết":
        "Đại đoàn kết dân tộc là sự liên minh, thống nhất ý chí và hành động của toàn thể nhân dân các dân tộc, các giai tầng, tầng lớp, các đảng phái, tôn giáo, người Việt Nam ở trong và ngoài nước dưới sự lãnh đạo của Đảng Cộng sản Việt Nam, vì mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",

      "mục tiêu đoàn kết":
        "Mục tiêu đại đoàn kết của Hồ Chí Minh: 1) Giành độc lập dân tộc, giải phóng nhân dân khỏi chế độ áp bức bóc lột, 2) Xây dựng chế độ dân chủ nhân dân, 3) Xây dựng đất nước độc lập, tự do, hạnh phúc, 4) Xây dựng chủ nghĩa xã hội, tiến lên chủ nghĩa cộng sản.",

      "nguyên tắc đại đoàn kết":
        "Các nguyên tắc đại đoàn kết theo Hồ Chí Minh:\n\n1. Đoàn kết trên nền tảng lợi ích chung của dân tộc - đặt lợi ích Tổ quốc lên trên hết\n\n2. Đoàn kết rộng rãi - không phân biệt giai cấp, dân tộc, tôn giáo, đảng phái, chỉ cần yêu nước\n\n3. Đoàn kết trong đa dạng - tôn trọng sự khác biệt về tín ngưỡng, tập quán, văn hóa\n\n4. Đoàn kết có nguyên tắc - không vô điều kiện, phải phân biệt bạn - thù, phải đấu tranh với kẻ thù và phần tử phản động\n\n5. Đoàn kết dưới sự lãnh đạo thống nhất của Đảng Cộng sản - lực lượng lãnh đạo cách mạng.",

      "nội dung đoàn kết":
        "Nội dung đại đoàn kết dân tộc:\n\n1. Đoàn kết các giai cấp, tầng lớp nhân dân: công nhân, nông dân, trí thức, thanh niên, phụ nữ, doanh nhân\n\n2. Đoàn kết các dân tộc anh em: 54 dân tộc Việt Nam bình đẳng, đoàn kết, tôn trọng lẫn nhau\n\n3. Đoàn kết các tôn giáo: Phật giáo, Công giáo, Tin lành, Hồi giáo, Cao Đài, Hòa Hảo... cùng chung sống hòa thuận\n\n4. Đoàn kết giữa người trong nước và người Việt Nam ở ngoài nước\n\n5. Đoàn kết các lực lượng yêu nước, tiến bộ, dù có quan điểm chính trị khác nhau.",

      "phương pháp đoàn kết":
        "Phương pháp thực hiện đại đoàn kết:\n\n1. Vận động quần chúng bằng tuyên truyền, giáo dục, thuyết phục\n\n2. Phát huy quyền làm chủ của nhân dân trong mọi lĩnh vực\n\n3. Xây dựng và hoàn thiện Mặt trận Tổ quốc - tổ chức chính trị - xã hội rộng rãi\n\n4. Thực hiện dân chủ, công khai, minh bạch trong quản lý nhà nước và xã hội\n\n5. Giải quyết thỏa đáng lợi ích hợp pháp của các giai tầng, tầng lớp nhân dân\n\n6. Kết hợp chặt chẽ giữa đoàn kết và đấu tranh.",

      // PHẦN 2: MẶT TRẬN DÂN TỘC THỐNG NHẤT
      "mặt trận":
        "Mặt trận dân tộc thống nhất là hình thức tổ chức đại đoàn kết. Hồ Chí Minh sáng lập Mặt trận Việt Minh (1941), Mặt trận Liên Việt (1946), Mặt trận Tổ quốc Việt Nam (1955). Đây là tổ chức chính trị - xã hội rộng rãi nhất, tập hợp mọi lực lượng yêu nước, tiến bộ trong xã hội.",

      "việt minh":
        "Mặt trận Việt Minh (Việt Nam Độc lập Đồng minh) được thành lập ngày 19/5/1941 tại Pác Bó - Cao Bằng do Hồ Chí Minh khởi xướng. Đây là liên minh rộng rãi của các giai cấp, các đảng phái yêu nước để đấu tranh giành độc lập dân tộc. Việt Minh đã lãnh đạo Tổng khởi nghĩa tháng Tám 1945 thành công.",

      "mặt trận tổ quốc":
        "Mặt trận Tổ quốc Việt Nam được thành lập năm 1955, là sự kế thừa và phát triển của Mặt trận Việt Minh và Liên Việt. Nhiệm vụ: tập hợp, vận động nhân dân thực hiện đường lối của Đảng và chính sách pháp luật của Nhà nước, giám sát hoạt động của cơ quan nhà nước, đại biểu dân cử và cán bộ công chức.",

      "vai trò mặt trận":
        "Vai trò của Mặt trận Tổ quốc:\n\n1. Diễn đàn dân chủ rộng rãi của nhân dân\n\n2. Cầu nối giữa Đảng, Nhà nước với nhân dân\n\n3. Tập hợp, phát huy sức mạnh đại đoàn kết toàn dân tộc\n\n4. Giám sát hoạt động của cơ quan nhà nước và cán bộ, công chức\n\n5. Động viên nhân dân thực hiện các chủ trương của Đảng, chính sách pháp luật của Nhà nước.",

      // PHẦN 3: CHÍNH SÁCH DÂN TỘC
      "chính sách dân tộc":
        "Chính sách dân tộc của Hồ Chí Minh:\n\n1. Bình đẳng giữa các dân tộc - không dân tộc nào áp bức, kỳ thị dân tộc khác\n\n2. Đoàn kết, tương trợ giữa các dân tộc\n\n3. Phát triển toàn diện các dân tộc thiểu số về kinh tế, văn hóa, xã hội\n\n4. Tôn trọng, giữ gìn bản sắc văn hóa của mỗi dân tộc\n\n5. Đào tạo cán bộ là người dân tộc thiểu số\n\n6. Thực hiện tự chủ, tự quản trong khuôn khổ Nhà nước thống nhất.",

      "bình đẳng dân tộc":
        'Hồ Chí Minh khẳng định: "Các dân tộc ở Việt Nam bình đẳng về mọi mặt". Nguyên tắc bình đẳng thể hiện:\n\n- Bình đẳng về quyền chính trị: tham gia bầu cử, ứng cử\n- Bình đẳng về kinh tế: được phát triển sản xuất, nâng cao đời sống\n- Bình đẳng về văn hóa: sử dụng tiếng nói, chữ viết, giữ gìn phong tục tập quán\n- Bình đẳng về pháp luật: không phân biệt đối xử trước pháp luật.',

      "đoàn kết dân tộc thiểu số":
        'Hồ Chí Minh luôn quan tâm đến đồng bào dân tộc thiểu số. Người viết thư cho đồng bào các dân tộc thiểu số, khẳng định: "Người Thổ, Mường, Mán, Dao, Gia Rai, Ê đê... đều là con cháu Việt Nam, đều là anh em ruột thịt". Người chủ trương xóa bỏ chế độ thổ ty, phát triển kinh tế miền núi, đào tạo cán bộ dân tộc.',

      // PHẦN 4: CHÍNH SÁCH TÔN GIÁO
      "chính sách tôn giáo":
        "Chính sách tôn giáo của Hồ Chí Minh:\n\n1. Tôn trọng quyền tự do tín ngưỡng, tôn giáo của mọi người\n\n2. Bình đẳng giữa các tôn giáo, không tôn giáo nào được ưu tiên hay kỳ thị\n\n3. Tín đồ các tôn giáo là công dân nước Việt Nam, có đầy đủ quyền và nghĩa vụ như mọi công dân khác\n\n4. Nhà nước bảo vệ hoạt động tôn giáo chính đáng, hợp pháp\n\n5. Không lợi dụng tôn giáo để chống phá chính quyền nhân dân.",

      "tôn giáo":
        'Hồ Chí Minh khẳng định: "Người có đạo cũng như người không đạo đều là con Việt Nam, đều là anh em". Người kêu gọi đồng bào các tôn giáo đoàn kết, cùng xây dựng đất nước. Các tôn giáo ở Việt Nam: Phật giáo, Công giáo, Tin lành, Hồi giáo, Cao Đài, Hòa Hảo, Phạm Môn, Tứ ân Hiếu nghĩa... đều được tôn trọng và bảo vệ.',

      "hòa hợp tôn giáo":
        'Đại đoàn kết tôn giáo thể hiện:\n\n- Đoàn kết "Người có đạo với người không đạo"\n- Đoàn kết giữa các tôn giáo với nhau\n- Tín đồ các tôn giáo tham gia xây dựng đất nước, bảo vệ Tổ quốc\n- Các giáo hội tôn giáo là thành viên của Mặt trận Tổ quốc\n- Không lợi dụng tôn giáo để chia rẽ dân tộc.',

      // PHẦN 5: ĐOÀN KẾT QUỐC TẾ
      "đoàn kết quốc tế":
        'Tư tưởng đoàn kết quốc tế của Hồ Chí Minh:\n\n"Việt Nam muốn làm bạn với tất cả các nước dân chủ và hòa bình trên thế giới". Đây là tư tưởng nhất quán, xuyên suốt trong đường lối đối ngoại của Việt Nam. Đoàn kết quốc tế vừa là sức mạnh, vừa là trách nhiệm quốc tế của Việt Nam.',

      "nội dung đoàn kết quốc tế":
        "Nội dung đoàn kết quốc tế:\n\n1. Đoàn kết với các nước xã hội chủ nghĩa (thời kỳ cách mạng)\n\n2. Đoàn kết với phong trào công nhân và phong trào cộng sản quốc tế\n\n3. Đoàn kết với các dân tộc bị áp bức trong phong trào giải phóng dân tộc\n\n4. Đoàn kết với lực lượng yêu chuộng hòa bình, tiến bộ trên thế giới\n\n5. Đoàn kết với nhân dân các nước trong khu vực và toàn thế giới.",

      "nguyên tắc đoàn kết quốc tế":
        "Nguyên tắc đoàn kết quốc tế:\n\n1. Tôn trọng độc lập, chủ quyền của các nước\n\n2. Không can thiệp vào nội bộ của nhau\n\n3. Bình đẳng, cùng có lợi, tôn trọng lẫn nhau\n\n4. Giải quyết tranh chấp bằng thương lượng hòa bình\n\n5. Kết hợp lợi ích quốc gia với lợi ích quốc tế\n\n6. Đặt độc lập dân tộc lên hàng đầu, không phụ thuộc vào nước ngoài.",

      "chính sách đối ngoại":
        "Chính sách đối ngoại của Hồ Chí Minh:\n\n1. Độc lập, tự chủ\n\n2. Đa phương hóa, đa dạng hóa quan hệ quốc tế\n\n3. Việt Nam là bạn, đối tác tin cậy của các nước\n\n4. Sẵn sàng là thành viên có trách nhiệm trong cộng đồng quốc tế\n\n5. Kiên quyết đấu tranh bảo vệ độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ\n\n6. Không kết minh quân sự, không liên kết với nước này chống nước kia.",

      "hợp tác quốc tế":
        'Hồ Chí Minh chủ trương: "Việt Nam muốn hòa thuận với tất cả các nước, nhất là các nước láng giềng". Việt Nam tích cực hợp tác:\n\n- Về chính trị - ngoại giao: thiết lập quan hệ ngoại giao với nhiều nước\n- Về kinh tế: thu hút đầu tư, mở rộng thương mại\n- Về văn hóa - giáo dục: trao đổi văn hóa, đào tạo nguồn nhân lực\n- Về khoa học - công nghệ: chuyển giao công nghệ, hợp tác nghiên cứu.',

      // PHẦN 6: VAI TRÒ CỦA VIỆT NAM TRONG KHU VỰC VÀ THẾ GIỚI
      asean:
        "Việt Nam gia nhập ASEAN (Hiệp hội các quốc gia Đông Nam Á) năm 1995, thể hiện chủ trương đoàn kết, hợp tác với các nước trong khu vực. Việt Nam đóng góp tích cực cho ASEAN: tham gia xây dựng Cộng đồng ASEAN, thúc đẩy hòa bình, ổn định và phát triển khu vực, đảm nhận vai trò Chủ tịch ASEAN nhiều lần.",

      "liên hợp quốc":
        "Việt Nam gia nhập Liên hợp quốc năm 1977, khẳng định vị thế và trách nhiệm quốc tế. Việt Nam đã đảm nhận vai trò Ủy viên không thường trực Hội đồng Bảo an LHQ nhiều lần, tham gia lực lượng gìn giữ hòa bình LHQ, đóng góp cho hòa bình, an ninh và phát triển toàn cầu.",

      wto: "Việt Nam gia nhập WTO (Tổ chức Thương mại Thế giới) năm 2007, đánh dấu bước ngoặt trong hội nhập kinh tế quốc tế. Việt Nam cam kết mở cửa thị trường, hội nhập sâu rộng vào nền kinh tế thế giới, thúc đẩy xuất khẩu, thu hút đầu tư nước ngoài.",

      "vai trò quốc tế":
        "Vai trò của Việt Nam trong cộng đồng quốc tế:\n\n1. Thành viên tích cực, có trách nhiệm của các tổ chức quốc tế\n\n2. Đóng góp cho hòa bình, ổn định khu vực và thế giới\n\n3. Thúc đẩy hợp tác kinh tế, thương mại quốc tế\n\n4. Tham gia giải quyết các vấn đề toàn cầu: biến đổi khí hậu, an ninh lương thực, dịch bệnh\n\n5. Bảo vệ lợi ích chính đáng của các nước đang phát triển.",

      // PHẦN 7: Ý NGHĨA VÀ GIÁ TRỊ
      "ý nghĩa":
        "Ý nghĩa của đại đoàn kết dân tộc:\n\n1. Tạo sức mạnh tổng hợp vượt trội, đánh bại mọi thế lực xâm lược\n\n2. Là nguồn lực quan trọng để xây dựng và bảo vệ Tổ quốc\n\n3. Giúp vượt qua mọi khó khăn, thử thách trong sự nghiệp cách mạng\n\n4. Tạo sự ổn định chính trị - xã hội, môi trường thuận lợi cho phát triển\n\n5. Nâng cao vị thế, uy tín của Việt Nam trên trường quốc tế.",

      "giá trị lịch sử":
        'Giá trị lịch sử của tư tưởng đại đoàn kết:\n\n- Tổng khởi nghĩa tháng Tám 1945: sức mạnh đại đoàn kết giành chính quyền\n- Kháng chiến chống Pháp (1945-1954): toàn dân đoàn kết đánh thắng thực dân\n- Kháng chiến chống Mỹ (1954-1975): "Không có gì quý hơn độc lập tự do"\n- Công cuộc đổi mới (1986-nay): đoàn kết xây dựng đất nước phát triển.',

      "giá trị thời đại":
        'Giá trị thời đại của tư tưởng đại đoàn kết:\n\n1. Xây dựng khối đại đoàn kết toàn dân tộc vững mạnh\n\n2. Phát huy dân chủ xã hội chủ nghĩa, quyền làm chủ của nhân dân\n\n3. Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của dân, do dân, vì dân\n\n4. Hội nhập quốc tế sâu rộng, nâng cao vị thế Việt Nam\n\n5. Đấu tranh chống các âm mưu "diễn biến hòa bình", chia rẽ dân tộc.',

      // PHẦN 8: ỨNG DỤNG THỰC TIỄN
      "thực tiễn":
        "Ứng dụng thực tiễn tư tưởng đại đoàn kết:\n\n1. Xây dựng Đảng trong sạch vững mạnh, gắn bó mật thiết với nhân dân\n\n2. Hoàn thiện Nhà nước pháp quyền, phát huy quyền làm chủ của nhân dân\n\n3. Phát triển Mặt trận Tổ quốc và các tổ chức chính trị - xã hội\n\n4. Thực hiện chính sách dân tộc, tôn giáo đúng đắn\n\n5. Mở rộng quan hệ đối ngoại, hội nhập quốc tế sâu rộng\n\n6. Phát triển kinh tế - xã hội, nâng cao đời sống nhân dân.",

      // PHẦN 9: TRÍCH DẪN QUAN TRỌNG
      "trích dẫn":
        'Những trích dẫn nổi tiếng của Hồ Chí Minh về đại đoàn kết:\n\n1. "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công"\n\n2. "Không có gì quý hơn độc lập tự do"\n\n3. "Đoàn kết là sức mạnh vô địch"\n\n4. "Dù người Thổ, Mường, Mán, Dao, Gia Rai, Ê Đê... đều là con cháu Việt Nam, đều là anh em ruột thịt"\n\n5. "Người có đạo cũng như người không đạo đều là con Việt Nam, đều là anh em"\n\n6. "Việt Nam muốn làm bạn với tất cả các nước dân chủ và hòa bình trên thế giới".',

      "danh ngôn":
        'Danh ngôn Hồ Chí Minh về đoàn kết:\n\n- "Nhất là phải đoàn kết, đoàn kết nữa, đoàn kết mãi"\n- "Đoàn kết chặt chẽ, kỷ luật nghiêm minh, yêu nước sâu sắc và tự nguyện hy sinh"\n- "Nhân dân là gốc, Đảng là lá. Lá phải quấn lấy gốc, gốc phải giữ lấy lá"\n- "Có đoàn kết thì mới có sức mạnh"\n- "Trong đoàn kết có lực lượng, trong lực lượng có thắng lợi".',

      // PHẦN 10: LỊCH SỬ CỤ THỂ
      "tổng khởi nghĩa":
        "Tổng khởi nghĩa tháng Tám 1945 là minh chứng sống động cho sức mạnh đại đoàn kết. Dưới sự lãnh đạo của Mặt trận Việt Minh do Hồ Chí Minh sáng lập, toàn thể nhân dân từ Nam ra Bắc đã đồng loạt đứng lên giành chính quyền. Ngày 2/9/1945, Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.",

      "kháng chiến chống pháp":
        'Kháng chiến chống Pháp (1945-1954): Sức mạnh đại đoàn kết toàn dân tộc đã giúp nhân dân Việt Nam đánh thắng thực dân Pháp. Chiến thắng Điện Biên Phủ (7/5/1954) "lừng lẫy năm châu, chấn động địa cầu" là kết quả của sự đoàn kết nhất trí, ý chí kiên cường của toàn dân tộc dưới sự lãnh đạo của Đảng và Chủ tịch Hồ Chí Minh.',

      "kháng chiến chống mỹ":
        'Kháng chiến chống Mỹ cứu nước (1954-1975): Với khẩu hiệu "Không có gì quý hơn độc lập tự do", nhân dân cả nước đoàn kết một lòng, kiên trì đấu tranh, đánh bại đế quốc Mỹ - đế quốc hùng mạnh nhất thế giới. Chiến dịch Hồ Chí Minh lịch sử (30/4/1975) giải phóng miền Nam, thống nhất đất nước.',

      "đổi mới":
        "Công cuộc đổi mới từ năm 1986 đến nay: Dưới sự lãnh đạo của Đảng, phát huy sức mạnh đại đoàn kết toàn dân tộc, Việt Nam đã đạt được nhiều thành tựu to lớn: kinh tế tăng trưởng nhanh, đời sống nhân dân được cải thiện, đất nước hội nhập sâu rộng vào thế giới, vị thế quốc tế được nâng cao.",

      "cách mạng tháng tám":
        "Cách mạng tháng Tám 1945 thành công nhờ sức mạnh đại đoàn kết dân tộc. Mặt trận Việt Minh tập hợp được mọi tầng lớp nhân dân, mọi đảng phái yêu nước, tạo nên phong trào cách mạng sôi nổi trong cả nước. Đây là cuộc cách mạng giải phóng dân tộc thành công đầu tiên ở Đông Nam Á.",

      // PHẦN 11: CÁC GIAI ĐOẠN LỊCH SỬ
      "trước 1945":
        'Giai đoạn trước 1945: Hồ Chí Minh thành lập Mặt trận Việt Minh (19/5/1941), đề ra đường lối đại đoàn kết toàn dân tộc. Chủ trương: "Đoàn kết tất cả những người Việt Nam yêu nước, không phân biệt giàu nghèo, già trẻ, trai gái, tôn giáo, đảng phái để chống Nhật, Pháp, giành độc lập cho Tổ quốc".',

      "1945-1954":
        'Giai đoạn 1945-1954 (Kháng chiến chống Pháp): Thực hiện khẩu hiệu "Kháng chiến tất thắng", toàn dân đoàn kết trong cuộc kháng chiến trường kỳ. Mặt trận Liên Việt (1946) ra đời, mở rộng khối đại đoàn kết. Người Việt Nam ở hải ngoại cũng tích cực ủng hộ kháng chiến.',

      "1954-1975":
        "Giai đoạn 1954-1975 (Kháng chiến chống Mỹ): Mặt trận Tổ quốc Việt Nam (1955) thành lập, tiếp tục phát huy sức mạnh đại đoàn kết. Miền Bắc tập trung xây dựng chủ nghĩa xã hội, chi viện cho miền Nam. Miền Nam có Mặt trận Dân tộc Giải phóng miền Nam (1960) lãnh đạo đấu tranh giải phóng.",

      "1975-1986":
        "Giai đoạn 1975-1986 (Sau thống nhất): Đất nước thống nhất, bước vào thời kỳ quá độ lên chủ nghĩa xã hội. Mặt trận Tổ quốc thống nhất cả nước (1977). Đại đoàn kết được phát huy để khắc phục hậu quả chiến tranh, xây dựng đất nước mới.",

      "1986-nay":
        "Giai đoạn 1986-nay (Đổi mới và hội nhập): Đại hội VI của Đảng (1986) khởi xướng công cuộc đổi mới. Việt Nam mở rộng quan hệ quốc tế, gia nhập ASEAN (1995), WTO (2007), tham gia nhiều tổ chức quốc tế. Khối đại đoàn kết được củng cố, mở rộng, bao gồm cả người Việt Nam ở ngoài nước.",

      // PHẦN 12: CÁC TỔNG CHỨC LIÊN QUAN
      "đảng cộng sản":
        'Đảng Cộng sản Việt Nam (thành lập 3/2/1930) là lực lượng lãnh đạo cách mạng Việt Nam. Hồ Chí Minh khẳng định: "Đảng là người lãnh đạo, nhân dân là chủ". Đảng lãnh đạo sự nghiệp cách mạng, xây dựng và bảo vệ Tổ quốc, đồng thời là hạt nhân chính trị của khối đại đoàn kết toàn dân tộc.',

      "nhà nước":
        "Nhà nước Việt Nam Dân chủ Cộng hòa (nay là Cộng hòa Xã hội Chủ nghĩa Việt Nam) là Nhà nước của dân, do dân, vì dân. Hồ Chí Minh thiết kế bộ máy nhà nước dân chủ, trong sạch, vững mạnh, phục vụ nhân dân. Nhân dân thực hiện quyền làm chủ thông qua bầu cử, trung cầu ý dân.",

      "công đoàn":
        "Công đoàn Việt Nam là tổ chức chính trị - xã hội của giai cấp công nhân và người lao động. Hồ Chí Minh quan tâm xây dựng công đoàn vững mạnh, bảo vệ quyền lợi chính đáng của công nhân, động viên công nhân thi đua lao động sản xuất, xây dựng và bảo vệ Tổ quốc.",

      "đoàn thanh niên":
        'Đoàn Thanh niên Cộng sản Hồ Chí Minh là tổ chức chính trị - xã hội của thanh niên Việt Nam. Hồ Chí Minh dành tình cảm đặc biệt cho thanh niên, coi thanh niên là "chủ nhân tương lai của nước nhà". Người căn dặn: "Đời sống của thanh niên là đời sống của cách mạng, đời sống của Tổ quốc".',

      "hội phụ nữ":
        'Hội Liên hiệp Phụ nữ Việt Nam là tổ chức chính trị - xã hội của phụ nữ. Hồ Chí Minh khẳng định: "Giải phóng phụ nữ là giải phóng một nửa xã hội". Người kêu gọi phụ nữ tích cực tham gia cách mạng, xây dựng và bảo vệ Tổ quốc, thực hiện bình đẳng nam nữ.',

      "hội nông dân":
        'Hội Nông dân Việt Nam là tổ chức chính trị - xã hội của nông dân. Hồ Chí Minh coi nông dân là "đại đa số dân cư", là lực lượng cách mạng cơ bản. Người chủ trương thực hiện cải cách ruộng đất, phát triển kinh tế nông nghiệp, nâng cao đời sống nông dân.',

      // PHẦN 13: VẤN ĐỀ HIỆN ĐẠI
      "toàn cầu hóa":
        "Trong bối cảnh toàn cầu hóa, tư tưởng đại đoàn kết của Hồ Chí Minh vẫn có giá trị to lớn. Việt Nam cần:\n\n1. Giữ vững độc lập dân tộc, chủ quyền quốc gia\n2. Hội nhập quốc tế sâu rộng nhưng chủ động, tích cực\n3. Kết hợp sức mạnh dân tộc với sức mạnh thời đại\n4. Phát huy nội lực, tranh thủ ngoại lực\n5. Bảo vệ lợi ích quốc gia - dân tộc trong hội nhập.",

      "thách thức":
        'Các thách thức đối với đại đoàn kết hiện nay:\n\n1. Âm mưu "diễn biến hòa bình", "tự diễn biến", "tự chuyển hóa" của thế lực thù địch\n2. Chia rẽ khối đại đoàn kết dân tộc\n3. Lợi dụng vấn đề dân tộc, tôn giáo, dân chủ, nhân quyền\n4. Tham nhũng, quan liêu, xa rời nhân dân\n5. Suy thoái tư tưởng chính trị, đạo đức, lối sống.',

      "giải pháp":
        "Giải pháp củng cố đại đoàn kết:\n\n1. Xây dựng Đảng trong sạch vững mạnh\n2. Phát triển kinh tế - xã hội, nâng cao đời sống nhân dân\n3. Thực hiện dân chủ, công khai, minh bạch\n4. Đấu tranh chống tham nhũng, tiêu cực\n5. Tăng cường giáo dục lý tưởng cách mạng\n6. Nâng cao hiệu quả hoạt động của Mặt trận Tổ quốc.",

      "người việt nam ở nước ngoài":
        'Hồ Chí Minh luôn quan tâm đến người Việt Nam ở ngoài nước. Người coi họ là "một bộ phận không tách rời của cộng đồng dân tộc Việt Nam". Hiện nay, có khoảng 5 triệu người Việt Nam sinh sống, làm việc, học tập ở ngoài nước. Đảng và Nhà nước luôn coi trọng, động viên họ đoàn kết, giữ gìn bản sắc dân tộc, đóng góp cho Tổ quốc.',

      "biển đảo":
        "Bảo vệ chủ quyền biển đảo là nhiệm vụ thiêng liêng của toàn dân tộc. Hồ Chí Minh khẳng định chủ quyền của Việt Nam đối với quần đảo Hoàng Sa và Trường Sa. Toàn dân tộc đoàn kết bảo vệ từng tấc đất, từng tấc biển thiêng liêng của Tổ quốc, kiên quyết đấu tranh với mọi hành động xâm phạm chủ quyền.",

      // PHẦN 14: QUAN HỆ QUỐC TẾ CỤ THỂ
      "quan hệ với trung quốc":
        'Quan hệ Việt Nam - Trung Quốc: "Láng giềng tốt đẹp, đối tác hợp tác toàn diện, chiến lược, tin cậy lẫn nhau về chính trị". Hai nước có quan hệ truyền thống hữu nghị, hợp tác trên nhiều lĩnh vực. Việt Nam kiên trì đường lối độc lập, tự chủ, không phụ thuộc vào nước khác.',

      "quan hệ với nga":
        "Quan hệ Việt Nam - Nga: Đối tác chiến lược toàn diện. Liên Xô (cũ) đã giúp đỡ to lớn cho Việt Nam trong kháng chiến và xây dựng đất nước. Nga là đối tác quan trọng của Việt Nam về chính trị, quốc phòng, kinh tế, khoa học - công nghệ.",

      "quan hệ với mỹ":
        "Quan hệ Việt Nam - Mỹ: Từ kẻ thù trong chiến tranh đến đối tác toàn diện. Năm 1995, hai nước bình thường hóa quan hệ. Năm 2023, nâng cấp lên đối tác chiến lược toàn diện. Đây là ví dụ điển hình về hòa giải, hòa hợp dân tộc, hướng tới tương lai.",

      "quan hệ với nhật bản":
        "Quan hệ Việt Nam - Nhật Bản: Đối tác chiến lược sâu rộng và toàn diện vì hòa bình và thịnh vượng ở châu Á. Nhật Bản là nhà đầu tư lớn, đối tác ODA quan trọng của Việt Nam. Hai nước hợp tác chặt chẽ trên nhiều lĩnh vực.",

      "quan hệ với hàn quốc":
        "Quan hệ Việt Nam - Hàn Quốc: Đối tác chiến lược toàn diện. Hàn Quốc là nhà đầu tư lớn thứ hai vào Việt Nam. Kim ngạch thương mại hai nước đạt hàng chục tỷ USD mỗi năm. Hợp tác văn hóa, giáo dục ngày càng phát triển.",

      "quan hệ với châu âu":
        "Quan hệ Việt Nam - EU: Hiệp định Thương mại Tự do Việt Nam - EU (EVFTA) có hiệu lực từ 2020, mở ra cơ hội lớn cho hợp tác kinh tế, thương mại. EU là thị trường xuất khẩu quan trọng và đối tác phát triển của Việt Nam.",

      // PHẦN 15: CÁC PHONG TRÀO YÊU NƯỚC
      "phong trào thi đua":
        'Phong trào thi đua yêu nước do Hồ Chí Minh phát động (11/6/1948) là hình thức động viên nhân dân phát huy sức mạnh đại đoàn kết. Khẩu hiệu "Thi đua ái quốc" trở thành truyền thống tốt đẹp của dân tộc. Các phong trào: Thi đua sản xuất, Thi đua chiến đấu, Thi đua học tập...',

      "cuộc vận động":
        'Các cuộc vận động lớn:\n\n1. "Học tập và làm theo tấm gương đạo đức Hồ Chí Minh"\n2. "Toàn dân đoàn kết xây dựng nông thôn mới, đô thị văn minh"\n3. "Cả nước chung tay vì người nghèo - không để ai bị bỏ lại phía sau"\n4. "Người Việt Nam ưu tiên dùng hàng Việt Nam"\n5. "Xây dựng gia đình 5 không, 3 sạch".',

      "thi đua ái quốc":
        'Thi đua ái quốc là phong trào quần chúng rộng lớn, thể hiện tinh thần yêu nước, đoàn kết, cống hiến của nhân dân. Hồ Chí Minh viết: "Thi đua là yêu nước. Yêu nước thì phải thi đua". Phong trào thi đua đã tạo ra sức mạnh to lớn trong kháng chiến và xây dựng đất nước.',

      // PHẦN 16: GIÁ TRỊ VĂN HÓA
      "văn hóa đoàn kết":
        'Văn hóa đoàn kết của dân tộc Việt Nam:\n\n1. Tinh thần "tương thân, tương ái"\n2. Truyền thống "lá lành đùm lá rách"\n3. "Một cây làm chẳng nên non, ba cây chụm lại nên hòn núi cao"\n4. "Bầu ơi thương lấy bí cùng"\n5. Tinh thần "uống nước nhớ nguồn".',

      "bản sắc dân tộc":
        'Bản sắc văn hóa dân tộc Việt Nam:\n\n- Truyền thống yêu nước, đoàn kết\n- Lòng nhân ái, khoan dung\n- Cần cù, sáng tạo\n- Trung thực, tin cậy\n- Tinh thần cộng đồng "tôn sư trọng đạo"\n\nHồ Chí Minh luôn nhấn mạnh phải giữ gìn và phát huy bản sắc văn hóa dân tộc.',
    };
    
    for (const [key, response] of Object.entries(fallbackResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return 'Cảm ơn bạn đã quan tâm đến tư tưởng Hồ Chí Minh. Bạn có thể hỏi tôi về: đại đoàn kết dân tộc, đoàn kết quốc tế, các nguyên tắc, ý nghĩa lịch sử, hoặc ứng dụng trong thời đại hiện đại. Tôi sẽ cố gắng trả lời một cách chi tiết nhất.';
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText('');
    setIsTyping(true);

    try {
      // Get response from Gemini AI
      const botResponseText = await getGeminiResponse(currentInput);
      
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting bot response:', error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Xin lỗi, tôi đang gặp sự cố kỹ thuật. Vui lòng thử lại sau ít phút.',
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle size={24} />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl transition-all duration-300 z-50 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <Bot size={16} className="text-red-600" />
            </div>
            <div>
              <span className="font-semibold">Trợ lý AI Hồ Chí Minh</span>
              <div className="text-xs text-red-200">Powered by Gemini AI</div>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-red-700 p-1 rounded transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 h-96 overflow-y-auto bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-lg ${
                  message.isBot
                    ? 'bg-white text-gray-800 border border-gray-200 shadow-sm'
                    : 'bg-gradient-to-r from-red-600 to-red-700 text-white'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={12} className="text-red-600" />
                    </div>
                  )}
                  {!message.isBot && <User size={16} className="mt-1 flex-shrink-0" />}
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString('vi-VN', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="mb-4 flex justify-start">
              <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-lg shadow-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                    <Bot size={12} className="text-red-600" />
                  </div>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">AI đang suy nghĩ...</span>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-white rounded-b-lg">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Hỏi về tư tưởng Hồ Chí Minh..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              disabled={isTyping}
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim() || isTyping}
              className="px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center"
            >
              <Send size={16} />
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Được hỗ trợ bởi Gemini AI - Trả lời thông minh về tư tưởng Hồ Chí Minh
          </p>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
