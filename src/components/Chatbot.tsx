import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

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
      id: "1",
      text: "Xin chào! Tôi là trợ lý AI về tư tưởng Hồ Chí Minh. Bạn có thể hỏi tôi về đại đoàn kết dân tộc, đoàn kết quốc tế, hoặc bất kỳ khía cạnh nào khác về tư tưởng của Bác.",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Gemini AI
  const genAI = new GoogleGenerativeAI(
    import.meta.env.VITE_GEMINI_API_KEY || "demo-key"
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getGeminiResponse = async (userMessage: string): Promise<string> => {
    try {
      // Create a specialized prompt for Ho Chi Minh's thoughts
      const prompt = `
Bạn là một chuyên gia về tư tưởng Hồ Chí Minh
Hãy trả lời câu hỏi sau một cách chính xác, chi tiết và dễ hiểu bằng tiếng Việt. 
Nếu câu hỏi không liên quan đến tư tưởng Hồ Chí Minh, hãy cố gắng liên kết với chủ đề này nếu có thể.
Nếu bạn nhận lời chào hoặc những lời không liên quan thì gợi ý vào chủ đề liên quan đến tư tưởng Hồ Chí Minh

Câu hỏi: ${userMessage}

Yêu cầu:
- Trả lời dựa trên tư tưởng chính thống của Hồ Chí Minh
- Sử dụng các trích dẫn cụ thể nếu có thể
- Giải thích ý nghĩa và ứng dụng thực tiễn
- Độ dài khoảng 100-200 từ
- Giọng điệu trang trọng nhưng dễ hiểu
`;

      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error("Gemini API Error:", error);
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
    };

    for (const [key, response] of Object.entries(fallbackResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }

    return "Cảm ơn bạn đã quan tâm đến tư tưởng Hồ Chí Minh. Bạn có thể hỏi tôi về: đại đoàn kết dân tộc, đoàn kết quốc tế, các nguyên tắc, ý nghĩa lịch sử, hoặc ứng dụng trong thời đại hiện đại. Tôi sẽ cố gắng trả lời một cách chi tiết nhất.";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    const currentInput = inputText;
    setInputText("");
    setIsTyping(true);

    try {
      // Get response from Gemini AI
      const botResponseText = await getGeminiResponse(currentInput);

      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
    } catch (error) {
      console.error("Error getting bot response:", error);
      const errorResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Xin lỗi, tôi đang gặp sự cố kỹ thuật. Vui lòng thử lại sau ít phút.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
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
          isOpen ? "scale-0" : "scale-100"
        }`}
      >
        <MessageCircle size={24} />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-lg shadow-2xl transition-all duration-300 z-50 ${
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
              <Bot size={16} className="text-red-600" />
            </div>
            <div>
              <span className="font-semibold">Trợ lý AI</span>
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
              className={`mb-4 flex ${
                message.isBot ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`max-w-xs px-4 py-3 rounded-lg ${
                  message.isBot
                    ? "bg-white text-gray-800 border border-gray-200 shadow-sm"
                    : "bg-gradient-to-r from-red-600 to-red-700 text-white"
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot && (
                    <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot size={12} className="text-red-600" />
                    </div>
                  )}
                  {!message.isBot && (
                    <User size={16} className="mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.text}
                    </p>
                    <p className="text-xs opacity-70 mt-2">
                      {message.timestamp.toLocaleTimeString("vi-VN", {
                        hour: "2-digit",
                        minute: "2-digit",
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
                    <div
                      className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-red-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500">
                    AI đang suy nghĩ...
                  </span>
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
        </div>
      </div>
    </>
  );
};

export default Chatbot;
