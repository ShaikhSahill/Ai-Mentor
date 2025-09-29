import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    addEdge,
    Controls,
    Background,
    Handle,
    Position,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { Clock, Download, Share2, ChevronDown, Bot, Code, Database, Layers3, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

// --- MOCK DATA STORE (Simulating AI Generation) ---
// In a real application, this would come from an API call to your AI backend.
const roadmapData = {
    "Frontend Developer": {
        title: "Frontend Developer Roadmap",
        progress: 15, // e.g., 15%
        nodes: [
            { id: '1', type: 'custom', position: { x: 0, y: 150 }, data: { label: 'Internet' } },
            { id: '2', type: 'custom', position: { x: 250, y: 0 }, data: { label: 'HTML' } },
            { id: '3', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'CSS' } },
            { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { label: 'JavaScript' } },
            { id: '5', type: 'custom', position: { x: 500, y: 300 }, data: { label: 'Version Control Systems' } },
            { id: '6', type: 'custom', position: { x: 750, y: 225 }, data: { label: 'GitHub' } },
            { id: '7', type: 'custom', position: { x: 750, y: 300 }, data: { label: 'GitLab' } },
            { id: '8', type: 'custom', position: { x: 750, y: 375 }, data: { label: 'Bitbucket' } },
            { id: '9', type: 'custom', position: { x: -250, y: 50 }, data: { label: 'Learn the basics' } },
            { id: '10', type: 'custom', position: { x: -250, y: 125 }, data: { label: 'Writing Semantic HTML' } },
            { id: '11', type: 'custom', position: { x: -250, y: 200 }, data: { label: 'Forms and Validations' } },
            { id: '12', type: 'custom', position: { x: -250, y: 275 }, data: { label: 'Accessibility' } },
            { id: '13', type: 'custom', position: { x: 500, y: 75 }, data: { label: 'Learn the basics' } },
            { id: '14', type: 'custom', position: { x: 500, y: 150 }, data: { label: 'Making Layouts' } },
            { id: '15', type: 'custom', position: { x: 500, y: 225 }, data: { label: 'Responsive Design' } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep' },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep' },
            { id: 'e5-6', source: '5', target: '6', type: 'smoothstep', animated: true },
            { id: 'e5-7', source: '5', target: '7', type: 'smoothstep', animated: true },
            { id: 'e5-8', source: '5', target: '8', type: 'smoothstep', animated: true },
            { id: 'e2-9', source: '2', target: '9', type: 'smoothstep', animated: true, style: { strokeDasharray: '5 5' } },
            { id: 'e2-10', source: '2', target: '10', type: 'smoothstep', animated: true, style: { strokeDasharray: '5 5' } },
            { id: 'e2-11', source: '2', target: '11', type: 'smoothstep', animated: true, style: { strokeDasharray: '5 5' } },
            { id: 'e2-12', source: '2', target: '12', type: 'smoothstep', animated: true, style: { strokeDasharray: '5 5' } },
            { id: 'e3-13', source: '3', target: '13', type: 'smoothstep', animated: true, style: { strokeDasharray: '5 5' } },
            { id: 'e3-14', source: '3', target: '14', type: 'smoothstep', animated: true, style: { strokeDasharray: '5 5' } },
            { id: 'e3-15', source: '3', target: '15', type: 'smoothstep', animated: true, style: { strokeDasharray: '5 5' } },
        ],
        faqs: [
            { q: "How long does it take to become a frontend developer?", a: "The time it takes can vary greatly depending on your background and the time you dedicate. On average, it can take anywhere from 6 to 12 months of consistent study and practice to become job-ready." },
            { q: "Do I need a computer science degree?", a: "No, a computer science degree is not strictly required. Many successful frontend developers are self-taught or have completed coding bootcamps. A strong portfolio of projects is often more important to employers." },
            { q: "What's the average salary for frontend developers?", a: "Salaries vary based on location, experience, and company size. In the US, entry-level salaries can start around $60,000-$75,000, with senior developers earning well over $120,000." },
            { q: "Should I learn React, Vue, or Angular?", a: "React is currently the most popular and has the largest job market. However, all three are powerful frameworks. It's best to start with one (React is a great choice) and learn it well, then you can explore others later if needed." },
        ],
    },
    "Backend Developer": {
        title: "Backend Developer Roadmap",
        progress: 30,
        nodes: [
             { id: '1', type: 'custom', position: { x: 0, y: 150 }, data: { label: 'Server-side Language' } },
             { id: '2', type: 'custom', position: { x: 250, y: 0 }, data: { label: 'Node.js' } },
             { id: '3', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'Python' } },
             { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { label: 'Go' } },
             { id: '5', type: 'custom', position: { x: -250, y: 150 }, data: { label: 'Databases' } },
             { id: '6', type: 'custom', position: { x: -500, y: 75 }, data: { label: 'SQL (Postgres)' } },
             { id: '7', type: 'custom', position: { x: -500, y: 225 }, data: { label: 'NoSQL (MongoDB)' } },
        ],
        edges: [
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep' },
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e1-4', source: '1', target: '4', type: 'smoothstep' },
            { id: 'e5-1', source: '5', target: '1', type: 'smoothstep' },
            { id: 'e6-5', source: '6', target: '5', type: 'smoothstep', animated: true },
            { id: 'e7-5', source: '7', target: '5', type: 'smoothstep', animated: true },
        ],
        faqs: [
            { q: "What does a backend developer do?", a: "A backend developer builds and maintains the server-side logic, databases, and APIs that power a web application. They work on the parts of the application that the user doesn't see." },
            { q: "Which backend language is best to learn?", a: "There's no single 'best' language. Python is great for beginners and data science, Node.js (JavaScript) is excellent for building fast and scalable applications, and Go is known for its performance. The choice often depends on the specific project and company." },
        ],
    },
     "AI Engineer": {
        title: "AI Engineer Roadmap",
        progress: 5,
        nodes: [
            { id: '1', type: 'custom', position: { x: 0, y: 150 }, data: { label: 'Core AI Concepts' } },
            { id: '2', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'Machine Learning Models' } },
            { id: '3', type: 'custom', position: { x: 500, y: 0 }, data: { label: 'Supervised Learning' } },
            { id: '4', type: 'custom', position: { x: 500, y: 150 }, data: { label: 'Unsupervised Learning' } },
            { id: '5', type: 'custom', position: { x: 500, y: 300 }, data: { label: 'Reinforcement Learning' } },
            { id: '6', type: 'custom', position: { x: -250, y: 150 }, data: { label: 'Python & Libraries' } },
        ],
        edges: [
            { id: 'e6-1', source: '6', target: '1', type: 'smoothstep'},
            { id: 'e1-2', source: '1', target: '2', type: 'smoothstep'},
            { id: 'e2-3', source: '2', target: '3', type: 'smoothstep', animated: true, style: { strokeDasharray: '5 5' } },
            { id: 'e2-4', source: '2', target: '4', type: 'smoothstep', animated: true, style: { strokeDasharray: '5 5' } },
            { id: 'e2-5', source: '2', target: '5', type: 'smoothstep', animated: true, style: { strokeDasharray: '5 5' } },
        ],
        faqs: [
            { q: "What skills are essential for an AI Engineer?", a: "Strong programming skills (especially in Python), a deep understanding of math (linear algebra, calculus, probability), and expertise in machine learning frameworks like TensorFlow or PyTorch are crucial." },
        ],
    },
     "Fullstack Developer": {
        title: "Fullstack Developer Roadmap",
        progress: 0,
        nodes: [
            { id: '1', type: 'custom', position: { x: 0, y: 150 }, data: { label: 'Frontend' } },
            { id: '2', type: 'custom', position: { x: 0, y: 300 }, data: { label: 'Backend' } },
            { id: '3', type: 'custom', position: { x: 250, y: 150 }, data: { label: 'HTML/CSS/JS' } },
            { id: '4', type: 'custom', position: { x: 250, y: 300 }, data: { label: 'Node.js/Python' } },
            { id: '5', type: 'custom', position: { x: 500, y: 225 }, data: { label: 'Databases' } },
        ],
        edges: [
            { id: 'e1-3', source: '1', target: '3', type: 'smoothstep' },
            { id: 'e2-4', source: '2', target: '4', type: 'smoothstep' },
            { id: 'e3-5', source: '3', target: '5', type: 'smoothstep', animated: true },
            { id: 'e4-5', source: '4', target: '5', type: 'smoothstep', animated: true },
        ],
        faqs: [
             { q: "What is a Fullstack Developer?", a: "A fullstack developer is a versatile engineer who can work on both the frontend (client-side) and backend (server-side) parts of an application. They have a broad range of skills covering the entire software stack." },
        ],
    }
};

const relatedCareers = [
    { name: "Backend Developer", steps: "95 steps", time: "8 months", icon: <Database className="w-6 h-6 text-emerald-500" />, color: "bg-emerald-100" },
    { name: "Fullstack Developer", steps: "148 steps", time: "12 months", icon: <Layers3 className="w-6 h-6 text-purple-500" />, color: "bg-purple-100" },
    { name: "AI Engineer", steps: "120 steps", time: "10 months", icon: <Bot className="w-6 h-6 text-red-500" />, color: "bg-red-100" },
    { name: "Frontend Developer", steps: "115 steps", time: "8 months", icon: <Code className="w-6 h-6 text-blue-500" />, color: "bg-blue-100" },
];

// --- Custom Node for React Flow ---
const CustomNode = ({ data }) => {
    return (
        <div className="bg-[#fffbeb] border-2 border-yellow-400 rounded-md px-4 py-2 text-sm font-semibold shadow-sm">
            <Handle type="target" position={Position.Left} className="!bg-purple-500" />
            {data.label}
            <Handle type="source" position={Position.Right} className="!bg-green-500" />
        </div>
    );
};

const nodeTypes = { custom: CustomNode };

// --- Accordion Item Component for FAQs ---
const AccordionItem = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-gray-200 rounded-lg">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-700"
            >
                {faq.q}
                <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <p className="p-4 pt-0 text-gray-600">{faq.a}</p>
            </div>
        </div>
    );
};


// --- Main Page Component ---
const RoadmapFlow = () => {
    const location = useLocation();
    const initialCareerFromState = location?.state?.selectedCareer;
    const normalizeTitle = (title) => {
        if (!title) return undefined;
        // Normalize a few known variants
        const map = {
            'Full Stack Developer': 'Fullstack Developer',
            'Full-Stack Developer': 'Fullstack Developer',
            'Frontend': 'Frontend Developer',
            'Backend': 'Backend Developer',
        };
        return map[title] || title;
    };
    const [selectedCareer, setSelectedCareer] = useState(normalizeTitle(initialCareerFromState) || "Frontend Developer");
    const [nodes, setNodes, onNodesChange] = useNodesState([]);
    const [edges, setEdges, onEdgesChange] = useEdgesState([]);
    const [currentRoadmap, setCurrentRoadmap] = useState(roadmapData[selectedCareer]);
    const navigate = useNavigate();

    const handleRedirect=()=>{
        navigate("/roadmap")
    }

    useEffect(() => {
        // This simulates the AI fetching and generating data when the career path changes.
        const normalized = normalizeTitle(selectedCareer);
        const fallback = 'Frontend Developer';
        const key = roadmapData[normalized] ? normalized : fallback;
        const newRoadmap = roadmapData[key];
        setCurrentRoadmap(newRoadmap);
        setNodes(newRoadmap.nodes);
        setEdges(newRoadmap.edges);
    }, [selectedCareer, setNodes, setEdges]);

    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), [setEdges]);

    return (
        <div className="bg-gray-50 min-h-screen p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Back Button */}
                <button 
                    onClick={handleRedirect} 
                    className="flex items-center gap-2 mb-6 text-sm font-semibold text-gray-600 hover:text-gray-800 transition"
                >
                    <ArrowLeft size={16} />
                    Go Back
                </button>

                {/* Header */}
                <header className="mb-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800">{currentRoadmap.title}</h1>
                            <p className="text-sm text-gray-500 mt-1">{currentRoadmap.progress}% of 115 steps completed</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition">
                                <Clock size={16} /> Schedule learning
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg font-semibold text-sm text-gray-700 hover:bg-gray-100 transition">
                                <Download size={16} /> Download
                            </button>
                             <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg font-semibold text-sm text-gray-700 hover:bg-gray-100 transition">
                                <Share2 size={16} /> Share
                            </button>
                        </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mt-4">
                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${currentRoadmap.progress}%` }}></div>
                    </div>
                </header>

                {/* Learning Path */}
                <section className="mb-12">
                     <h2 className="text-xl font-bold text-gray-800 mb-4">Learning Path</h2>
                     <div className="w-full h-[500px] bg-white rounded-lg border border-gray-200 shadow-sm p-4">
                        <ReactFlow
                            nodes={nodes}
                            edges={edges}
                            onNodesChange={onNodesChange}
                            onEdgesChange={onEdgesChange}
                            onConnect={onConnect}
                            nodeTypes={nodeTypes}
                            fitView
                        >
                            <Background />
                            <Controls />
                        </ReactFlow>
                     </div>
                </section>

                {/* Frequently Asked Questions */}
                <section className="mb-12">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentRoadmap.faqs.map((faq, index) => (
                            <AccordionItem key={index} faq={faq} />
                        ))}
                    </div>
                </section>

                {/* Related Career Paths */}
                <section>
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Related Career Paths</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {relatedCareers.map((career) => (
                            <button 
                                key={career.name} 
                                onClick={() => setSelectedCareer(career.name)}
                                className={`p-6 bg-white border rounded-lg text-left transition hover:shadow-lg hover:-translate-y-1 ${selectedCareer === career.name ? 'border-blue-500 ring-2 ring-blue-200' : 'border-gray-200'}`}
                            >
                                <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${career.color} mb-4`}>
                                    {career.icon}
                                </div>
                                <h3 className="font-bold text-gray-800">{career.name}</h3>
                                <p className="text-sm text-gray-500">{career.steps} &middot; {career.time}</p>
                            </button>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default RoadmapFlow;

