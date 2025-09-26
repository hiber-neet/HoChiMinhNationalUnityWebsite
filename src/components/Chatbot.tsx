import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

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
      text: 'Xin chào! Tôi là trợ lý ảo về tư tưởng Hồ Chí Minh. Bạn có thể hỏi tôi về đại đoàn kết dân tộc và đoàn kết quốc tế.',
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    'đại đoàn kết': 'Đại đoàn kết toàn dân tộc là tư tưởng cốt lõi của Chủ tịch Hồ Chí Minh. Người cho rằng: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công". Đây là sức mạnh để vượt qua mọi khó khăn.',
    'đoàn kết quốc tế': 'Tư tưởng đoàn kết quốc tế của Bác Hồ thể hiện qua việc xây dựng mối quan hệ hữu nghị với các dân tộc trên thế giới, đặc biệt là các nước xã hội chủ nghĩa và phong trào giải phóng dân tộc.',
    'nguyên tắc': 'Các nguyên tắc đại đoàn kết: 1) Đoàn kết trên cơ sở lợi ích chung của dân tộc, 2) Đoàn kết trong đa dạng, 3) Đoàn kết có nguyên tắc, 4) Đoàn kết dưới sự lãnh đạo của Đảng.',
    'ý nghĩa': 'Đại đoàn kết có ý nghĩa to lớn: tạo sức mạnh tổng hợp, vượt qua khó khăn, xây dựng và bảo vệ Tổ quốc, phát triển đất nước.',
    'thực tiễn': 'Trong thực tiễn, tư tưởng này được thể hiện qua Mặt trận Việt Minh, Mặt trận Tổ quốc, chính sách dân tộc, tôn giáo, và các phong trào yêu nước.',
    'default': 'Tôi hiểu bạn quan tâm đến tư tưởng Hồ Chí Minh. Bạn có thể hỏi về: đại đoàn kết, đoàn kết quốc tế, nguyên tắc, ý nghĩa, hoặc thực tiễn ứng dụng.'
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(botResponses)) {
      if (key !== 'default' && lowerMessage.includes(key)) {
        return response;
      }
    }
    
    return botResponses.default;
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

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
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
        className={`fixed bottom-6 right-6 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center z-50 ${
          isOpen ? 'scale-0' : 'scale-100'
        }`}
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl transition-all duration-300 z-50 ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bot size={20} />
            <span className="font-semibold">Trợ lý Tư tưởng Hồ Chí Minh</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="hover:bg-red-700 p-1 rounded"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 h-80 overflow-y-auto bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  message.isBot
                    ? 'bg-white text-gray-800 border border-gray-200'
                    : 'bg-red-600 text-white'
                }`}
              >
                <div className="flex items-start space-x-2">
                  {message.isBot && <Bot size={16} className="mt-1 text-red-600" />}
                  {!message.isBot && <User size={16} className="mt-1" />}
                  <div>
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
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
              <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-lg">
                <div className="flex items-center space-x-2">
                  <Bot size={16} className="text-red-600" />
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Nhập câu hỏi của bạn..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
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