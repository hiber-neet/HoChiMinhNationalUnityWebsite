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
      // Check if the question is related to Ho Chi Minh's thoughts
      if (!isRelatedToHoChiMinh(userMessage)) {
        return "Xin lỗi, tôi chỉ có thể trả lời những câu hỏi liên quan đến tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế. Bạn có thể hỏi tôi về các chủ đề như: đại đoàn kết dân tộc, đoàn kết quốc tế, nguyên tắc đoàn kết, lịch sử cách mạng, hoặc ứng dụng tư tưởng trong thời đại hiện đại.";
      }

      // Create a specialized prompt for Ho Chi Minh's thoughts
      const prompt = `
Bạn là một chuyên gia về tư tưởng Hồ Chí Minh, đặc biệt về đại đoàn kết toàn dân tộc và đoàn kết quốc tế. 
Hãy trả lời câu hỏi sau một cách chính xác, chi tiết và dễ hiểu bằng tiếng Việt. 
CHỈ trả lời những câu hỏi liên quan đến tư tưởng Hồ Chí Minh.

Câu hỏi: ${userMessage}

Yêu cầu:
- Trả lời dựa trên tư tưởng chính thống của Hồ Chí Minh
- Sử dụng các trích dẫn cụ thể nếu có thể
- Giải thích ý nghĩa và ứng dụng thực tiễn
- Độ dài khoảng 100-200 từ
- Giọng điệu trang trọng nhưng dễ hiểu
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

  const isRelatedToHoChiMinh = (message: string): boolean => {
    const lowerMessage = message.toLowerCase();
    
    // Keywords related to Ho Chi Minh's thoughts
    const relatedKeywords = [
      'hồ chí minh', 'bác hồ', 'chủ tịch hồ chí minh', 'người',
      'đại đoàn kết', 'đoàn kết', 'dân tộc', 'toàn dân tộc',
      'đoàn kết quốc tế', 'quốc tế', 'hòa bình', 'độc lập',
      'tự do', 'cách mạng', 'kháng chiến', 'giải phóng',
      'mặt trận', 'việt minh', 'tổ quốc', 'nhân dân',
      'chính sách dân tộc', 'tôn giáo', 'bình đẳng',
      'thống nhất', 'liên minh', 'hợp tác', 'tương trợ',
      'nguyên tắc', 'lý luận', 'tư tưởng', 'triết lý',
      'di chúc', 'lời dạy', 'quan điểm', 'chủ nghĩa',
      'xã hội chủ nghĩa', 'cộng sản', 'marx', 'lenin',
      'asean', 'liên xô', 'trung quốc', 'pháp', 'mỹ',
      'kháng chiến chống pháp', 'kháng chiến chống mỹ',
      'tổng khởi nghĩa', 'cách mạng tháng tám',
      'tuyên ngôn độc lập', 'việt nam dân chủ cộng hòa'
    ];
    
    // Check if message contains any related keywords
    const hasRelatedKeywords = relatedKeywords.some(keyword => 
      lowerMessage.includes(keyword)
    );
    
    // Additional check for question patterns about Ho Chi Minh's thoughts
    const questionPatterns = [
      /tại sao.*đoàn kết/,
      /ý nghĩa.*đại đoàn kết/,
      /nguyên tắc.*hồ chí minh/,
      /tư tưởng.*bác/,
      /quan điểm.*người/,
      /lịch sử.*việt nam/,
      /cách mạng.*dân tộc/,
      /chính sách.*dân tộc/,
      /hợp tác.*quốc tế/,
      /ngoại giao.*việt nam/
    ];
    
    const matchesPattern = questionPatterns.some(pattern => 
      pattern.test(lowerMessage)
    );
    
    return hasRelatedKeywords || matchesPattern;
  };

  const getFallbackResponse = (userMessage: string): string => {
    // Check if the question is related to Ho Chi Minh's thoughts
    if (!isRelatedToHoChiMinh(userMessage)) {
      return "Xin lỗi, tôi chỉ có thể trả lời những câu hỏi liên quan đến tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế. Bạn có thể hỏi tôi về các chủ đề như: đại đoàn kết dân tộc, đoàn kết quốc tế, nguyên tắc đoàn kết, lịch sử cách mạng, hoặc ứng dụng tư tưởng trong thời đại hiện đại.";
    }

    const lowerMessage = userMessage.toLowerCase();
    
    const fallbackResponses = {
      'đại đoàn kết': 'Đại đoàn kết toàn dân tộc là tư tưởng cốt lõi của Chủ tịch Hồ Chí Minh. Người cho rằng: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công". Đây là sức mạnh để vượt qua mọi khó khăn, xây dựng và bảo vệ Tổ quốc.',
      
      'đoàn kết quốc tế': 'Tư tưởng đoàn kết quốc tế của Bác Hồ thể hiện qua quan điểm: "Việt Nam muốn làm bạn với tất cả các nước dân chủ và hòa bình trên thế giới". Người tin rằng đoàn kết quốc tế là sức mạnh để các dân tộc cùng phát triển.',
      
      'nguyên tắc': 'Các nguyên tắc đại đoàn kết theo Hồ Chí Minh: 1) Đoàn kết trên cơ sở lợi ích chung của dân tộc, 2) Đoàn kết trong đa dạng - tôn trọng khác biệt, 3) Đoàn kết có nguyên tắc - không vô điều kiện, 4) Đoàn kết dưới sự lãnh đạo thống nhất.',
      
      'ý nghĩa': 'Đại đoàn kết có ý nghĩa to lớn: tạo sức mạnh tổng hợp vượt trội, giúp vượt qua khó khăn thử thách, xây dựng và bảo vệ Tổ quốc, phát triển kinh tế-xã hội, nâng cao vị thế quốc tế.',
      
      'thực tiễn': 'Trong thực tiễn, tư tưởng này được thể hiện qua Mặt trận Việt Minh, Mặt trận Tổ quốc, chính sách dân tộc bình đẳng, chính sách tôn giáo tự do, và các phong trào yêu nước rộng lớn.',
      
      'lịch sử': 'Lịch sử Việt Nam chứng minh sức mạnh đại đoàn kết: từ cuộc Tổng khởi nghĩa tháng 8/1945, kháng chiến chống Pháp, kháng chiến chống Mỹ, đến công cuộc đổi mới và hội nhập quốc tế hiện nay.',
      
      'hiện đại': 'Tư tưởng đại đoàn kết vẫn có giá trị trong thời đại hiện đại: xây dựng khối đại đoàn kết toàn dân tộc, hội nhập quốc tế, tham gia ASEAN, WTO, góp phần vào hòa bình và phát triển thế giới.'
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
    setInputText('');
    setIsTyping(true);

    try {
      // Get response from Gemini AI
      const botResponseText = await getGeminiResponse(inputText);
      
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

  const quickQuestions = [
    "Đại đoàn kết dân tộc là gì?",
    "Nguyên tắc đoàn kết quốc tế",
    "Ý nghĩa lịch sử của tư tưởng này",
    "Ứng dụng trong thời đại hiện đại"
  ];

  const handleQuickQuestion = (question: string) => {
    setInputText(question);
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

        {/* Quick Questions */}
        {messages.length === 1 && (
          <div className="p-4 bg-gray-50 border-b">
            <p className="text-sm text-gray-600 mb-2">Câu hỏi gợi ý:</p>
            <div className="space-y-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickQuestion(question)}
                  className="w-full text-left text-xs bg-white border border-gray-200 rounded-lg p-2 hover:bg-red-50 hover:border-red-200 transition-colors duration-200"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Messages */}
        <div className="flex-1 p-4 h-80 overflow-y-auto bg-gray-50">
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