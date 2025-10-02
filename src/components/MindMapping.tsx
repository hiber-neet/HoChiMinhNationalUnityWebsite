import React, { useState, useRef, useEffect } from 'react';
import { Brain, Plus, Minus, RotateCcw, Info, Eye, EyeOff, Maximize2 } from 'lucide-react';

interface Node {
  id: string;
  title: string;
  description: string;
  category: 'core' | 'national' | 'international' | 'principle' | 'method' | 'result';
  x: number;
  y: number;
  connections: string[];
  color: string;
  level: number;
}

interface Connection {
  from: string;
  to: string;
  label: string;
  type: 'strong' | 'medium' | 'weak';
}

const MindMapping: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [showConnections, setShowConnections] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const svgRef = useRef<SVGSVGElement>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  const nodes: Node[] = [
    // Core concept
    {
      id: 'core',
      title: 'Tư tưởng Hồ Chí Minh',
      description: 'Hệ thống tư tưởng toàn diện về đoàn kết dân tộc và quốc tế',
      category: 'core',
      x: 400,
      y: 300,
      connections: ['national-unity', 'international-unity'],
      color: '#dc2626',
      level: 0
    },
    
    // National Unity Branch
    {
      id: 'national-unity',
      title: 'Đại đoàn kết toàn dân tộc',
      description: 'Sự liên minh của toàn thể nhân dân các dân tộc, giai cấp, tôn giáo',
      category: 'national',
      x: 200,
      y: 150,
      connections: ['ethnic-equality', 'class-unity', 'religious-harmony', 'vietnam-front'],
      color: '#2563eb',
      level: 1
    },
    {
      id: 'ethnic-equality',
      title: 'Bình đẳng dân tộc',
      description: '54 dân tộc Việt Nam bình đẳng, không ai là chủ, không ai là khách',
      category: 'principle',
      x: 50,
      y: 50,
      connections: ['cultural-diversity'],
      color: '#059669',
      level: 2
    },
    {
      id: 'class-unity',
      title: 'Đoàn kết các giai cấp',
      description: 'Công nhân, nông dân, trí thức, doanh nhân cùng xây dựng đất nước',
      category: 'principle',
      x: 150,
      y: 50,
      connections: ['workers-farmers'],
      color: '#059669',
      level: 2
    },
    {
      id: 'religious-harmony',
      title: 'Hòa hợp tôn giáo',
      description: 'Tôn giáo và không tôn giáo đều là con em của Tổ quốc',
      category: 'principle',
      x: 250,
      y: 50,
      connections: ['freedom-belief'],
      color: '#059669',
      level: 2
    },
    {
      id: 'vietnam-front',
      title: 'Mặt trận Tổ quốc',
      description: 'Tổ chức chính trị-xã hội rộng rãi nhất của nhân dân',
      category: 'method',
      x: 350,
      y: 50,
      connections: ['democratic-participation'],
      color: '#7c3aed',
      level: 2
    },

    // International Unity Branch
    {
      id: 'international-unity',
      title: 'Đoàn kết quốc tế',
      description: 'Việt Nam muốn làm bạn với tất cả các nước dân chủ và hòa bình',
      category: 'international',
      x: 600,
      y: 150,
      connections: ['peace-cooperation', 'independence-sovereignty', 'mutual-benefit', 'non-alignment'],
      color: '#dc2626',
      level: 1
    },
    {
      id: 'peace-cooperation',
      title: 'Hòa bình hợp tác',
      description: 'Giải quyết tranh chấp bằng đối thoại, không dùng vũ lực',
      category: 'principle',
      x: 550,
      y: 50,
      connections: ['world-peace'],
      color: '#059669',
      level: 2
    },
    {
      id: 'independence-sovereignty',
      title: 'Độc lập chủ quyền',
      description: 'Đoàn kết trên cơ sở tôn trọng độc lập, chủ quyền của nhau',
      category: 'principle',
      x: 650,
      y: 50,
      connections: ['self-determination'],
      color: '#059669',
      level: 2
    },
    {
      id: 'mutual-benefit',
      title: 'Cùng có lợi',
      description: 'Hợp tác vì lợi ích chung, không áp đặt, không can thiệp',
      category: 'principle',
      x: 750,
      y: 50,
      connections: ['win-win'],
      color: '#059669',
      level: 2
    },
    {
      id: 'non-alignment',
      title: 'Không liên kết',
      description: 'Không tham gia khối quân sự, đa dạng hóa quan hệ quốc tế',
      category: 'method',
      x: 850,
      y: 50,
      connections: ['multilateral-diplomacy'],
      color: '#7c3aed',
      level: 2
    },

    // Supporting concepts
    {
      id: 'cultural-diversity',
      title: 'Đa dạng văn hóa',
      description: 'Bảo tồn và phát huy bản sắc văn hóa các dân tộc',
      category: 'result',
      x: 50,
      y: 250,
      connections: [],
      color: '#ea580c',
      level: 3
    },
    {
      id: 'workers-farmers',
      title: 'Liên minh Công-Nông',
      description: 'Nền tảng giai cấp của chế độ dân chủ nhân dân',
      category: 'result',
      x: 150,
      y: 250,
      connections: [],
      color: '#ea580c',
      level: 3
    },
    {
      id: 'freedom-belief',
      title: 'Tự do tín ngưỡng',
      description: 'Quyền tự do tín ngưỡng, tôn giáo được bảo đảm',
      category: 'result',
      x: 250,
      y: 250,
      connections: [],
      color: '#ea580c',
      level: 3
    },
    {
      id: 'democratic-participation',
      title: 'Tham gia dân chủ',
      description: 'Nhân dân làm chủ, tham gia quản lý nhà nước và xã hội',
      category: 'result',
      x: 350,
      y: 250,
      connections: [],
      color: '#ea580c',
      level: 3
    },
    {
      id: 'world-peace',
      title: 'Hòa bình thế giới',
      description: 'Góp phần xây dựng thế giới hòa bình, ổn định',
      category: 'result',
      x: 550,
      y: 250,
      connections: [],
      color: '#ea580c',
      level: 3
    },
    {
      id: 'self-determination',
      title: 'Tự quyết dân tộc',
      description: 'Ủng hộ quyền tự quyết của các dân tộc trên thế giới',
      category: 'result',
      x: 650,
      y: 250,
      connections: [],
      color: '#ea580c',
      level: 3
    },
    {
      id: 'win-win',
      title: 'Cùng thắng',
      description: 'Hợp tác để cùng phát triển, cùng thịnh vượng',
      category: 'result',
      x: 750,
      y: 250,
      connections: [],
      color: '#ea580c',
      level: 3
    },
    {
      id: 'multilateral-diplomacy',
      title: 'Ngoại giao đa phương',
      description: 'Tham gia tích cực các tổ chức quốc tế',
      category: 'result',
      x: 850,
      y: 250,
      connections: [],
      color: '#ea580c',
      level: 3
    }
  ];

  const connections: Connection[] = [
    { from: 'core', to: 'national-unity', label: 'Nền tảng', type: 'strong' },
    { from: 'core', to: 'international-unity', label: 'Mở rộng', type: 'strong' },
    { from: 'national-unity', to: 'ethnic-equality', label: 'Bao gồm', type: 'medium' },
    { from: 'national-unity', to: 'class-unity', label: 'Bao gồm', type: 'medium' },
    { from: 'national-unity', to: 'religious-harmony', label: 'Bao gồm', type: 'medium' },
    { from: 'national-unity', to: 'vietnam-front', label: 'Thể hiện qua', type: 'medium' },
    { from: 'international-unity', to: 'peace-cooperation', label: 'Dựa trên', type: 'medium' },
    { from: 'international-unity', to: 'independence-sovereignty', label: 'Dựa trên', type: 'medium' },
    { from: 'international-unity', to: 'mutual-benefit', label: 'Dựa trên', type: 'medium' },
    { from: 'international-unity', to: 'non-alignment', label: 'Phương pháp', type: 'medium' },
    { from: 'ethnic-equality', to: 'cultural-diversity', label: 'Dẫn đến', type: 'weak' },
    { from: 'class-unity', to: 'workers-farmers', label: 'Cốt lõi', type: 'weak' },
    { from: 'religious-harmony', to: 'freedom-belief', label: 'Đảm bảo', type: 'weak' },
    { from: 'vietnam-front', to: 'democratic-participation', label: 'Tạo điều kiện', type: 'weak' },
    { from: 'peace-cooperation', to: 'world-peace', label: 'Góp phần', type: 'weak' },
    { from: 'independence-sovereignty', to: 'self-determination', label: 'Ủng hộ', type: 'weak' },
    { from: 'mutual-benefit', to: 'win-win', label: 'Thực hiện', type: 'weak' },
    { from: 'non-alignment', to: 'multilateral-diplomacy', label: 'Thông qua', type: 'weak' }
  ];

  const categories = [
    { id: 'all', label: 'Tất cả', color: '#6b7280' },
    { id: 'core', label: 'Tư tưởng cốt lõi', color: '#dc2626' },
    { id: 'national', label: 'Đoàn kết dân tộc', color: '#2563eb' },
    { id: 'international', label: 'Đoàn kết quốc tế', color: '#dc2626' },
    { id: 'principle', label: 'Nguyên tắc', color: '#059669' },
    { id: 'method', label: 'Phương pháp', color: '#7c3aed' },
    { id: 'result', label: 'Kết quả', color: '#ea580c' }
  ];

  const filteredNodes = activeCategory === 'all' 
    ? nodes 
    : nodes.filter(node => node.category === activeCategory);

  const getConnectionPath = (from: Node, to: Node) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const dr = Math.sqrt(dx * dx + dy * dy);
    return `M${from.x},${from.y}A${dr},${dr} 0 0,1 ${to.x},${to.y}`;
  };

  const handleNodeClick = (nodeId: string) => {
    setSelectedNode(selectedNode === nodeId ? null : nodeId);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const handleReset = () => {
    setZoom(1);
    setSelectedNode(null);
    setDragOffset({ x: 0, y: 0 });
  };

  const selectedNodeData = selectedNode ? nodes.find(n => n.id === selectedNode) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Header */}
      <section className="py-16 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <div className="w-20 h-20 mx-auto mb-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <Brain className="w-10 h-10 text-indigo-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bản đồ tư duy
          </h1>
          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Khám phá mối quan hệ giữa các khái niệm trong tư tưởng Hồ Chí Minh 
            về đại đoàn kết toàn dân tộc và đoàn kết quốc tế
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-6 px-4 bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  style={{
                    backgroundColor: activeCategory === category.id ? category.color : undefined
                  }}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setShowConnections(!showConnections)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  showConnections ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'
                }`}
                title="Hiện/ẩn kết nối"
              >
                {showConnections ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
              <button
                onClick={() => setShowLabels(!showLabels)}
                className={`p-2 rounded-lg transition-colors duration-200 ${
                  showLabels ? 'bg-indigo-100 text-indigo-600' : 'bg-gray-100 text-gray-600'
                }`}
                title="Hiện/ẩn nhãn"
              >
                <Info size={18} />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                title="Thu nhỏ"
              >
                <Minus size={18} />
              </button>
              <span className="text-sm text-gray-600 min-w-[60px] text-center">
                {Math.round(zoom * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                title="Phóng to"
              >
                <Plus size={18} />
              </button>
              <button
                onClick={handleReset}
                className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                title="Đặt lại"
              >
                <RotateCcw size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mind Map */}
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="relative" style={{ height: '600px' }}>
              <svg
                ref={svgRef}
                width="100%"
                height="100%"
                viewBox="0 0 900 300"
                className="cursor-move"
                style={{ transform: `scale(${zoom}) translate(${dragOffset.x}px, ${dragOffset.y}px)` }}
              >
                {/* Connections */}
                {showConnections && connections.map((connection, index) => {
                  const fromNode = filteredNodes.find(n => n.id === connection.from);
                  const toNode = filteredNodes.find(n => n.id === connection.to);
                  
                  if (!fromNode || !toNode) return null;

                  const strokeWidth = connection.type === 'strong' ? 3 : connection.type === 'medium' ? 2 : 1;
                  const opacity = connection.type === 'strong' ? 0.8 : connection.type === 'medium' ? 0.6 : 0.4;

                  return (
                    <g key={index}>
                      <path
                        d={getConnectionPath(fromNode, toNode)}
                        stroke="#6b7280"
                        strokeWidth={strokeWidth}
                        fill="none"
                        opacity={opacity}
                        markerEnd="url(#arrowhead)"
                      />
                      {showLabels && (
                        <text
                          x={(fromNode.x + toNode.x) / 2}
                          y={(fromNode.y + toNode.y) / 2}
                          textAnchor="middle"
                          className="text-xs fill-gray-500"
                          dy="-5"
                        >
                          {connection.label}
                        </text>
                      )}
                    </g>
                  );
                })}

                {/* Arrow marker */}
                <defs>
                  <marker
                    id="arrowhead"
                    markerWidth="10"
                    markerHeight="7"
                    refX="9"
                    refY="3.5"
                    orient="auto"
                  >
                    <polygon
                      points="0 0, 10 3.5, 0 7"
                      fill="#6b7280"
                      opacity="0.6"
                    />
                  </marker>
                </defs>

                {/* Nodes */}
                {filteredNodes.map((node) => (
                  <g key={node.id}>
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.level === 0 ? 40 : node.level === 1 ? 30 : node.level === 2 ? 25 : 20}
                      fill={node.color}
                      stroke={selectedNode === node.id ? '#fbbf24' : 'white'}
                      strokeWidth={selectedNode === node.id ? 4 : 2}
                      className="cursor-pointer transition-all duration-200 hover:stroke-yellow-400 hover:stroke-4"
                      onClick={() => handleNodeClick(node.id)}
                    />
                    <text
                      x={node.x}
                      y={node.y}
                      textAnchor="middle"
                      className="text-xs font-medium fill-white pointer-events-none"
                      dy="0.35em"
                    >
                      {node.title.length > 15 ? node.title.substring(0, 15) + '...' : node.title}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Node Details */}
      {selectedNodeData && (
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                  style={{ backgroundColor: selectedNodeData.color }}
                >
                  <span className="text-white font-bold">
                    {selectedNodeData.title.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {selectedNodeData.title}
                  </h3>
                  <span 
                    className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white mt-2"
                    style={{ backgroundColor: selectedNodeData.color }}
                  >
                    {categories.find(c => c.id === selectedNodeData.category)?.label}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedNodeData.description}
              </p>

              {selectedNodeData.connections.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Kết nối với:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedNodeData.connections.map(connectionId => {
                      const connectedNode = nodes.find(n => n.id === connectionId);
                      return connectedNode ? (
                        <button
                          key={connectionId}
                          onClick={() => setSelectedNode(connectionId)}
                          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors duration-200"
                        >
                          {connectedNode.title}
                        </button>
                      ) : null;
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Legend */}
      <section className="py-8 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Chú giải
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(1).map(category => (
              <div key={category.id} className="flex items-center space-x-3">
                <div 
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: category.color }}
                ></div>
                <span className="text-gray-700 font-medium">{category.label}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-1 bg-gray-400"></div>
                <span>Kết nối mạnh</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-0.5 bg-gray-400"></div>
                <span>Kết nối trung bình</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-px bg-gray-400"></div>
                <span>Kết nối yếu</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-8 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Hướng dẫn sử dụng</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-indigo-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Click vào node</h4>
              <p className="text-sm opacity-90">Nhấp vào các khái niệm để xem thông tin chi tiết</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-indigo-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Lọc theo danh mục</h4>
              <p className="text-sm opacity-90">Sử dụng các nút lọc để xem từng nhóm khái niệm</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-indigo-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Zoom và điều khiển</h4>
              <p className="text-sm opacity-90">Phóng to/thu nhỏ và ẩn/hiện kết nối</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-indigo-600 font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Khám phá kết nối</h4>
              <p className="text-sm opacity-90">Theo dõi các mũi tên để hiểu mối quan hệ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MindMapping;