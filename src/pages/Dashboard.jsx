import React from 'react';
import { useNavigate } from 'react-router-dom';

// --- SVG Icon Components ---
// It's a good practice to keep these in a separate file (e.g., Icons.js)

const CheckCircleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#22C55E" />
        <path d="M8.5 12.5L11 15L15.5 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const PlayCircleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#3B82F6" />
        <path d="M10 8.5L14 12L10 15.5V8.5Z" fill="white" />
    </svg>
);

const LockedCircleIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill="#E5E7EB" />
    </svg>
);

const StarIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const CartIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

const TrophyIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z" />
    </svg>
);

const ReactIcon = ({ className }) => (
    <svg className={className} viewBox="-11.5 -10.23174 23 20.46348">
        <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
        <g stroke="#61dafb" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
    </svg>
);

const CheckIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
);

const VideoIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const LightbulbIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const CareerSwapIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
);


// --- Mock Data ---
const roadmapData = [
    { name: 'Frontend Basics', status: 'completed', progress: 100 },
    { name: 'React Development', status: 'inProgress', progress: 75 },
    { name: 'Advanced Patterns', status: 'locked', progress: 0 },
];

const scheduleData = [
    { time: '9:00 AM - 10:30 AM', title: 'React Hooks Deep Dive', type: 'learning', icon: <ReactIcon className="w-5 h-5" /> },
    { time: '2:00 PM - 3:00 PM', title: 'Portfolio Review', type: 'review', icon: <CheckIcon className="w-4 h-4 text-green-500" /> },
    { time: '5:00 PM - 6:00 PM', title: 'Mentor Session', type: 'meeting', icon: <VideoIcon className="w-5 h-5 text-purple-500" /> },
];

const communityData = [
    { name: 'Alex', action: 'shared a React tip', time: '2 min ago', img: 'https://placehold.co/40x40/BFEAF5/333333?text=A' },
    { name: 'Maria', action: 'completed a roadmap', time: '15 min ago', img: 'https://placehold.co/40x40/FEE2E2/333333?text=M' },
    { name: 'John', action: 'started mentoring', time: '1 hour ago', img: 'https://placehold.co/40x40/D1FAE5/333333?text=J' },
];


const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="p-4 sm:p-6 bg-gray-100 min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {/* --- Career Roadmap Progress --- */}
                <div 
                    className="lg:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => navigate('/roadmap')}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Career Roadmap Progress</h2>
                        <span className="text-blue-500 font-bold">68% Complete</span>
                    </div>
                    <div className="space-y-5">
                        {roadmapData.map((item, index) => {
                            const statusIcons = {
                                completed: <CheckCircleIcon className="w-6 h-6" />,
                                inProgress: <PlayCircleIcon className="w-6 h-6" />,
                                locked: <LockedCircleIcon className="w-6 h-6" />,
                            };
                            return (
                                <div key={index} className="flex items-center gap-4">
                                    {statusIcons[item.status]}
                                    <div className="w-full">
                                        <p className="text-sm font-medium text-gray-600">{item.name}</p>
                                        <div className="bg-gray-200 rounded-full h-2 mt-1">
                                            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${item.progress}%` }}></div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* --- Your Progress --- */}
                <div 
                    className="lg:col-span-1 xl:col-span-1 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer flex flex-col items-center text-center"
                    // onClick={() => navigate('/profile')}
                >
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Your Progress</h2>
                    <div className="relative w-28 h-28">
                        <svg className="w-full h-full" viewBox="0 0 36 36">
                            <path
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#E5E7EB"
                                strokeWidth="3"
                            />
                            <path
                                d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#8B5CF6"
                                strokeWidth="3"
                                strokeDasharray="66, 100"
                                strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-purple-600">42</div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Credits</p>
                    <div className="flex items-center gap-2 mt-4">
                        <StarIcon className="w-6 h-6 text-yellow-400" />
                        <span className="text-xl font-bold text-gray-700">2,850 XP</span>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">150 XP to next level</p>
                    <div className="flex gap-4 mt-6">
                        <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" onClick={(e) => { e.stopPropagation(); navigate('/store'); }}>
                            <CartIcon className="w-5 h-5 text-gray-600"/>
                        </button>
                        <button className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors" onClick={(e) => { e.stopPropagation(); navigate('/achievements'); }}>
                            <TrophyIcon className="w-5 h-5 text-gray-600"/>
                        </button>
                    </div>
                </div>

                {/* --- Today's Schedule --- */}
                <div 
                    className="lg:col-span-1 xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                    // onClick={() => navigate('/schedule')}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">Today's Schedule</h2>
                        <span className="text-sm font-medium text-orange-500 flex items-center gap-1">
                            <span className="text-lg">🔥</span> 7 day streak
                        </span>
                    </div>
                    <div className="space-y-3">
                        {scheduleData.map((item, index) => {
                             const bgColors = {
                                learning: 'bg-blue-50',
                                review: 'bg-green-50',
                                meeting: 'bg-purple-50',
                             };
                             const iconBgColors = {
                                learning: 'bg-blue-100',
                                review: 'bg-green-100',
                                meeting: 'bg-purple-100',
                             };
                            return(
                                <div key={index} className={`flex items-center p-3 rounded-lg ${bgColors[item.type]}`}>
                                    <div className={`p-2 rounded-full mr-4 ${iconBgColors[item.type]}`}>
                                       {item.icon}
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-700 text-sm">{item.title}</p>
                                        <p className="text-xs text-gray-500">{item.time}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                {/* --- Quick Learning --- */}
                <div 
                    className="lg:col-span-1 xl:col-span-2 bg-gradient-to-br from-cyan-100 to-blue-200 p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer flex flex-col justify-between"
                    onClick={() => navigate('/microlearning')}
                >
                    <div>
                        <div className="bg-white/50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                           <LightbulbIcon className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-lg font-bold text-gray-800">JavaScript ES6 Features</h2>
                        <p className="text-sm text-gray-600">5 min micro-lesson</p>
                    </div>
                    <button 
                        className="mt-6 w-full bg-white text-blue-600 font-semibold py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors active:scale-95"
                        onClick={(e) => { e.stopPropagation(); navigate('/microlearning'); }}
                    >
                        Start Learning
                    </button>
                </div>

                {/* --- Career Swap Simulator --- */}
                <div 
                    className="lg:col-span-2 xl:col-span-2 bg-gradient-to-br from-pink-300 to-purple-400 text-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer flex items-center justify-between"
                    onClick={() => navigate('/careerswap')}
                >
                    <div>
                        <h2 className="text-xl font-bold">Career Swap Simulator</h2>
                        <p className="text-sm opacity-90 mt-1">Explore different career paths with AI.</p>
                         <button 
                            className="mt-6 bg-white text-pink-500 font-semibold py-2 px-6 rounded-lg shadow-sm hover:bg-gray-50 transition-colors active:scale-95"
                            onClick={(e) => { e.stopPropagation(); navigate('/careerswap'); }}
                         >
                            Try Career Swap
                        </button>
                    </div>
                    <div className="bg-white/30 w-16 h-16 rounded-full flex items-center justify-center">
                        <CareerSwapIcon className="w-8 h-8"/>
                    </div>
                </div>
                
                {/* --- Community --- */}
                <div 
                    className="lg:col-span-1 xl:col-span-2 bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => navigate('/community')}
                >
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Community</h2>
                    <div className="space-y-4">
                       {communityData.map((item, index) => (
                           <div key={index} className="flex items-center gap-3">
                               <img src={item.img} alt={item.name} className="w-10 h-10 rounded-full" />
                               <div>
                                   <p className="text-sm text-gray-700">
                                       <span className="font-semibold">{item.name}</span> {item.action}
                                   </p>
                                   <p className="text-xs text-gray-400">{item.time}</p>
                               </div>
                           </div>
                       ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;