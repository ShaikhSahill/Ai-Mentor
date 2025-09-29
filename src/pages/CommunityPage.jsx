import React, { useState } from 'react';

// --- SVG Icon Components ---
// A collection of SVG icons used throughout the component.

const ImageIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const CodeIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
const AtSymbolIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>;
const HeartIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 20.036l-7.682-7.682a4.5 4.5 0 010-6.364z" /></svg>;
const ChatAltIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;
const BookmarkIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>;
const PaperAirplaneIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>;
const XIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const AiIcon = () => <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">AI</div>;


// --- Dummy Data ---

const communities = [
    { id: 'frontend', name: 'Frontend Wizards', members: 128, totalMembers: 150, color: 'blue', icon: '🎨' },
    { id: 'backend', name: 'Backend Builders', members: 92, totalMembers: 120, color: 'green', icon: '⚙️' },
    { id: 'fullstack', name: 'Full Stack Mavericks', members: 215, totalMembers: 250, color: 'purple', icon: '🚀' },
    { id: 'aiml', name: 'AI & ML Explorers', members: 78, totalMembers: 100, color: 'pink', icon: '🧠' },
];

const questions = [
    {
        id: 1,
        author: 'Alex Chen',
        level: 'Beginner',
        time: '2 hours ago',
        avatar: 'https://placehold.co/40x40/BFEAF5/333333?text=A',
        title: 'How to handle state management in React?',
        body: 'I\'m struggling with managing state across multiple components. Should I use Context API or Redux? What are the best practices for a medium-sized application?',
        likes: 12,
        repliesCount: 5,
        replies: [
            { type: 'ai', body: 'For medium-sized apps, Context API is often sufficient. Consider Redux only if you need time-travel debugging or complex state logic. Here are some resources that might help...' },
            { type: 'user', author: 'Sarah Kim', level: 'Expert', time: '1 hour ago', avatar: 'https://placehold.co/40x40/FEE2E2/333333?text=S', body: 'I\'d recommend starting with Context API for your use case. It\'s simpler and built into React. Only move to Redux if you find Context becoming unwieldy.', likes: 8 }
        ]
    },
     {
        id: 2,
        author: 'Maria Garcia',
        level: 'Intermediate',
        time: '5 hours ago',
        avatar: 'https://placehold.co/40x40/D1FAE5/333333?text=M',
        title: 'Best way to structure a Node.js backend project?',
        body: 'What is a scalable and maintainable way to structure folders and files in a Node.js Express application? I\'ve seen MVC, domain-driven, and other patterns.',
        likes: 25,
        repliesCount: 3,
        replies: []
    }
];

const chatData = {
    frontend: [
        { id: 1, user: 'Eva', avatar: 'https://placehold.co/40x40/FFE8E8/333333?text=E', message: 'Anyone tried the new features in Tailwind CSS v4?' },
        { id: 2, user: 'You', avatar: 'https://placehold.co/40x40/E8F5E9/333333?text=Y', message: 'Not yet, but I heard the Oxide engine is a game changer!' },
        { id: 3, user: 'Leo', avatar: 'https://placehold.co/40x40/E3F2FD/333333?text=L', message: 'Yeah, the build times are supposed to be insane. 🚀' },
    ],
    backend: [
        { id: 1, user: 'Ben', avatar: 'https://placehold.co/40x40/F3E5F5/333333?text=B', message: 'I\'m having some trouble with database indexing in Postgres. Any tips?' },
        { id: 2, user: 'Chloe', avatar: 'https://placehold.co/40x40/FFFDE7/333333?text=C', message: 'Make sure you\'re using a B-tree index on your foreign keys. It usually helps a lot with join performance.' },
        { id: 3, user: 'You', avatar: 'https://placehold.co/40x40/E8F5E9/333333?text=Y', message: 'Good point, Chloe. I\'ll check that. Thanks!' },
    ],
    fullstack: [
        { id: 1, user: 'Zoe', avatar: 'https://placehold.co/40x40/F1F8E9/333333?text=Z', message: 'What\'s everyone\'s favorite full-stack framework right now? Next.js, SvelteKit, Nuxt...?' },
        { id: 2, user: 'You', avatar: 'https://placehold.co/40x40/E8F5E9/333333?text=Y', message: 'I\'ve been really enjoying SvelteKit for personal projects. The simplicity is amazing.' },
    ],
    aiml: [
        { id: 1, user: 'David', avatar: 'https://placehold.co/40x40/E0F7FA/333333?text=D', message: 'Has anyone worked with the new Gemini models via API? The performance seems incredible.' },
    ]
};


// --- Main Community Component ---
const Community = () => {
    const [activeTab, setActiveTab] = useState('Recent');
    const [selectedCommunity, setSelectedCommunity] = useState(null);

    const handleCommunityClick = (community) => {
        setSelectedCommunity(community);
    };

    const closeModal = () => {
        setSelectedCommunity(null);
    };

    // Component for the chat modal popup
    const CommunityChatModal = ({ community, onClose }) => {
        if (!community) return null;

        const messages = chatData[community.id] || [];

        return (
            <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg h-full max-h-[80vh] flex flex-col transform transition-all duration-300 scale-95 animate-modal-enter">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">{community.icon}</span>
                            <h3 className="text-lg font-bold text-gray-800">{community.name}</h3>
                        </div>
                        <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
                            <XIcon className="w-6 h-6 text-gray-500" />
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                       {messages.map((msg) => (
                           <div key={msg.id} className={`flex items-start gap-3 ${msg.user === 'You' ? 'flex-row-reverse' : ''}`}>
                               <img src={msg.avatar} alt={msg.user} className="w-10 h-10 rounded-full" />
                               <div className={`p-3 rounded-2xl max-w-xs md:max-w-md ${msg.user === 'You' ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}>
                                   <p className="text-sm">{msg.message}</p>
                               </div>
                           </div>
                       ))}
                    </div>

                    {/* Message Input */}
                    <div className="p-4 border-t">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="w-full bg-gray-100 border-transparent rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
                                <PaperAirplaneIcon className="w-5 h-5 -rotate-45" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-gray-50 min-h-screen p-4 sm:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Main Content (Left) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Ask a Question */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">Ask a Question</h2>
                        <input type="text" placeholder="Title of your question..." className="w-full p-3 border border-gray-200 rounded-lg mb-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition" />
                        <textarea placeholder="Describe your doubt in detail..." rows="4" className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"></textarea>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4 text-gray-500">
                                <button className="flex items-center gap-1 hover:text-blue-500 transition-colors"><ImageIcon className="w-5 h-5" /> <span className="hidden sm:inline">Image</span></button>
                                <button className="flex items-center gap-1 hover:text-blue-500 transition-colors"><CodeIcon className="w-5 h-5" /> <span className="hidden sm:inline">Code</span></button>
                                <button className="flex items-center gap-1 hover:text-blue-500 transition-colors"><AtSymbolIcon className="w-5 h-5" /> <span className="hidden sm:inline">Mention</span></button>
                            </div>
                            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold py-2 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-md">Post Question</button>
                        </div>
                    </div>

                    {/* Question Feed */}
                    <div>
                        <div className="flex border-b border-gray-200 mb-4">
                            {['Recent', 'Unanswered', 'My Doubts', 'Popular'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`py-2 px-4 text-sm font-semibold transition-colors ${activeTab === tab ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        <div className="space-y-4">
                            {questions.map(q => (
                                <div key={q.id} className="bg-white p-5 rounded-2xl shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <img src={q.avatar} alt={q.author} className="w-10 h-10 rounded-full" />
                                        <div>
                                            <div className="flex items-center gap-2">
                                                <span className="font-bold text-gray-800">{q.author}</span>
                                                <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">{q.level}</span>
                                                <span className="text-xs text-gray-400">• {q.time}</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 mt-1">{q.title}</h3>
                                            <p className="text-gray-600 mt-2 text-sm">{q.body}</p>
                                            <div className="flex items-center gap-6 text-sm text-gray-500 mt-4">
                                                <button className="flex items-center gap-1.5 hover:text-pink-500"><HeartIcon className="w-4 h-4" /> {q.likes}</button>
                                                <button className="flex items-center gap-1.5 hover:text-blue-500"><ChatAltIcon className="w-4 h-4" /> {q.repliesCount} replies</button>
                                                <button className="flex items-center gap-1.5 hover:text-green-500"><BookmarkIcon className="w-4 h-4" /> Save</button>
                                            </div>

                                            {/* Replies Section */}
                                            <div className="mt-4 space-y-4">
                                                {q.replies.map((reply, index) => (
                                                   reply.type === 'ai' ? (
                                                       <div key={index} className="bg-indigo-50 p-4 rounded-lg flex gap-3">
                                                           <AiIcon />
                                                           <div>
                                                               <span className="text-sm font-bold text-indigo-700">AI Suggestion</span>
                                                               <p className="text-sm text-gray-700">{reply.body}</p>
                                                           </div>
                                                       </div>
                                                   ) : (
                                                      <div key={index} className="flex items-start gap-3 pt-3 border-t border-gray-100">
                                                          <img src={reply.avatar} alt={reply.author} className="w-8 h-8 rounded-full" />
                                                          <div>
                                                               <div className="flex items-center gap-2">
                                                                   <span className="font-semibold text-sm text-gray-800">{reply.author}</span>
                                                                   <span className="text-xs font-semibold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">{reply.level}</span>
                                                               </div>
                                                               <p className="text-sm text-gray-600 mt-1">{reply.body}</p>
                                                               <div className="flex items-center gap-4 text-xs text-gray-500 mt-2">
                                                                    <button className="flex items-center gap-1 hover:text-pink-500"><HeartIcon className="w-3 h-3" /> {reply.likes}</button>
                                                                    <button className="hover:text-blue-500">Reply</button>
                                                               </div>
                                                          </div>
                                                      </div>
                                                   )
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* My Community Sidebar (Right) */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-6 rounded-2xl shadow-sm sticky top-6">
                        <h2 className="text-lg font-bold text-gray-800 mb-4">My Community</h2>
                        <div className="space-y-4">
                            {communities.map(community => (
                                <div
                                    key={community.id}
                                    className={`p-4 rounded-lg flex items-center gap-4 cursor-pointer transition-all duration-200 ${
                                        selectedCommunity?.id === community.id 
                                        ? 'bg-indigo-100 ring-2 ring-indigo-500' // Highlighted state
                                        : 'bg-gray-50 hover:bg-gray-100' // Default state
                                    }`}
                                    onClick={() => handleCommunityClick(community)}
                                >
                                    <div className="text-2xl flex-shrink-0">{community.icon}</div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold text-gray-800 truncate">{community.name}</p>
                                        <p className="text-xs text-gray-400 mt-1">{community.members} / {community.totalMembers} Members</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
             <CommunityChatModal community={selectedCommunity} onClose={closeModal} />
        </div>
    );
};

// Add a simple style tag for animations and to ensure Tailwind's dynamic classes are available
const style = `
@keyframes modal-enter {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
.animate-modal-enter {
    animation: modal-enter 0.2s ease-out forwards;
}
/* This is a trick to make sure Tailwind JIT compiler includes these classes */
.bg-blue-500, .bg-green-500, .bg-purple-500, .bg-pink-500 {}
`;

const StyleInjector = () => <style>{style}</style>;

// Final component export
const CommunityPage = () => (
    <>
        <StyleInjector />
        <Community />
    </>
);

export default CommunityPage;