import React, { useState, useEffect } from 'react';

// --- SVG Icon Components ---
const VideoCameraIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const XIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const CalendarIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const MicOnIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>;
const MicOffIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.586 15.586a2 2 0 01-2.828 0L6 9.414m10.586 0L9.414 6M4 11a7 7 0 0011.89 5.89M12 18v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v.01" /></svg>;
const CameraOnIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>;
const CameraOffIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>;
const PhoneMissedCallIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const SearchIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
const ArrowLeftIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>;
const ShareScreenIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const ChatIcon = (props) => <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>;

// --- Mock Data ---
const expertsData = [
    { id: 1, name: "Priya Sharma", avatar: "https://placehold.co/100x100/FEE2E2/333333?text=PS", domain: "Backend", company: "Amazon", role: "SDE II", availableSlots: ["4:00 PM", "4:30 PM", "5:00 PM"], about: "Priya is a seasoned backend engineer with experience in building scalable microservices and distributed systems at Amazon." },
    { id: 2, name: "Rohan Mehra", avatar: "https://placehold.co/100x100/D1FAE5/333333?text=RM", domain: "Frontend", company: "Flipkart", role: "Senior Frontend Engineer", availableSlots: ["3:00 PM", "3:30 PM", "4:00 PM"], about: "Rohan specializes in creating performant and accessible user interfaces using modern frontend frameworks like React and Vue." },
    { id: 3, name: "Anjali Verma", avatar: "https://placehold.co/100x100/E0E7FF/333333?text=AV", domain: "Full Stack", company: "Microsoft", role: "Software Engineer", availableSlots: ["6:00 PM", "6:30 PM"], about: "Anjali has a passion for building end-to-end solutions, from database design to UI implementation, on the Microsoft Azure platform." },
    { id: 4, name: "Vikram Singh", avatar: "https://placehold.co/100x100/FEF3C7/333333?text=VS", domain: "AI/ML", company: "Google", role: "AI Research Scientist", availableSlots: ["5:30 PM", "6:00 PM", "7:00 PM"], about: "Vikram works on cutting-edge AI research at Google, with a focus on natural language processing and large language models." },
    { id: 5, name: "Sameer Khan", avatar: "https://placehold.co/100x100/F3E8FF/333333?text=SK", domain: "DevOps", company: "Netflix", role: "Senior DevOps Engineer", availableSlots: ["4:30 PM", "5:00 PM"], about: "Sameer ensures the reliability and scalability of Netflix's streaming services through robust CI/CD pipelines and infrastructure automation." },
    { id: 6, name: "Neha Desai", avatar: "https://placehold.co/100x100/FCE7F3/333333?text=ND", domain: "Frontend", company: "Swiggy", role: "Frontend Lead", availableSlots: ["5:00 PM", "5:30 PM", "6:30 PM"], about: "Neha leads a team of talented frontend developers at Swiggy, focusing on creating a delightful user experience for millions of users." },
];

const domains = ["All", ...new Set(expertsData.map(e => e.domain))];

// --- Sub-Components ---

const ExpertList = ({ experts, onSelectExpert, onFilterChange, onSearchChange, activeFilter, searchTerm }) => (
    <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800">Connect with Industry Experts</h1>
            <p className="text-lg text-gray-500 mt-2">Schedule a one-on-one session to get guidance and mentorship.</p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8 sticky top-6 bg-white z-10 py-4 rounded-2xl shadow-md">
            <div className="relative px-4">
                <SearchIcon className="w-5 h-5 text-gray-400 absolute left-8 top-1/2 -translate-y-1/2" />
                <input
                    type="text"
                    placeholder="Search by name, company, or role..."
                    value={searchTerm}
                    onChange={onSearchChange}
                    className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
            </div>
            <div className="flex justify-center flex-wrap gap-2 mt-4 px-4">
                {domains.map(domain => (
                    <button
                        key={domain}
                        onClick={() => onFilterChange(domain)}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeFilter === domain ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                    >
                        {domain}
                    </button>
                ))}
            </div>
        </div>

        {/* Expert List */}
        <div className="space-y-4">
            {experts.map(expert => (
                <div
                    key={expert.id}
                    onClick={() => onSelectExpert(expert)}
                    className="bg-white p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex items-center gap-4 cursor-pointer"
                >
                    <img src={expert.avatar} alt={expert.name} className="w-16 h-16 rounded-full" />
                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900">{expert.name}</h3>
                        <p className="text-gray-600">{expert.role} at <span className="font-semibold">{expert.company}</span></p>
                    </div>
                    <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-3 py-1.5 rounded-full">{expert.domain}</span>
                </div>
            ))}
        </div>
    </div>
);

const ExpertDetailPage = ({ expert, onSchedule, onBack }) => {
    const [selectedSlot, setSelectedSlot] = useState(null);

    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
             <button onClick={onBack} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900 mb-6">
                <ArrowLeftIcon className="w-5 h-5" />
                Back to Experts
            </button>
            <div className="bg-white p-8 rounded-2xl shadow-xl border-gray-100">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <div className="text-center flex-shrink-0">
                        <img src={expert.avatar} alt={expert.name} className="w-32 h-32 rounded-full border-4 border-indigo-200" />
                        <h2 className="text-3xl font-bold text-gray-800 mt-4">{expert.name}</h2>
                        <p className="text-indigo-600 font-semibold text-lg">{expert.role}</p>
                        <p className="text-gray-500">{expert.company}</p>
                        <span className="mt-4 inline-block bg-indigo-50 text-indigo-700 text-sm font-semibold px-4 py-1.5 rounded-full">{expert.domain}</span>
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-3">About</h3>
                        <p className="text-gray-600 leading-relaxed">{expert.about}</p>
                        
                        <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mb-3 mt-8">Schedule a Meeting</h3>
                         <div className="flex items-center gap-2 text-gray-700 font-semibold mb-3">
                            <CalendarIcon className="w-5 h-5" />
                            <span>Today, September 29</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                            {expert.availableSlots.map(slot => (
                                <button
                                    key={slot}
                                    onClick={() => setSelectedSlot(slot)}
                                    className={`p-3 border-2 rounded-lg font-semibold text-sm transition-colors ${selectedSlot === slot ? 'bg-indigo-600 text-white border-indigo-600' : 'border-gray-300 text-gray-700 hover:border-indigo-500 hover:bg-indigo-50'}`}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => onSchedule(expert)}
                            disabled={!selectedSlot}
                            className="w-full mt-6 bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                             <VideoCameraIcon className="w-5 h-5" />
                            Confirm Schedule
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const VideoCallView = ({ expert, onEndCall }) => {
    const [timer, setTimer] = useState(0);
    const [isMicOn, setIsMicOn] = useState(true);
    const [isCameraOn, setIsCameraOn] = useState(true);


    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (seconds) => new Date(seconds * 1000).toISOString().substr(14, 5);

    return (
        <div className="bg-gray-900 text-white h-screen w-full flex flex-col relative overflow-hidden font-sans">
            {/* Main Video Feed */}
            <div className="flex-1 relative flex items-center justify-center">
                <img
                    src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    alt="Main call participant"
                    className="w-full h-full object-cover"
                />
                 <div className="absolute bottom-4 left-4 bg-black/50 p-2 px-4 rounded-lg text-lg font-semibold backdrop-blur-sm">{expert.name}</div>
            </div>

            {/* Picture-in-Picture (Self View) */}
            <div className="absolute top-6 right-6 w-1/4 max-w-xs h-auto bg-gray-800 rounded-xl overflow-hidden border-2 border-gray-700 shadow-2xl">
                {isCameraOn ? (
                    <img
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                        alt="Self view"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <div className="w-full aspect-video h-full flex items-center justify-center bg-gray-800">
                        <CameraOffIcon className="w-12 h-12 text-gray-500" />
                    </div>
                )}
            </div>
            
            {/* Controls Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex justify-center">
                <div className="bg-gray-800/80 backdrop-blur-sm p-4 rounded-full flex items-center gap-5">
                    <button
                        onClick={() => setIsMicOn(!isMicOn)}
                        className={`p-3 rounded-full transition-colors ${isMicOn ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-500 hover:bg-red-600'}`}
                    >
                        {isMicOn ? <MicOnIcon className="w-6 h-6 text-white" /> : <MicOffIcon className="w-6 h-6 text-white" />}
                    </button>
                    <button
                        onClick={() => setIsCameraOn(!isCameraOn)}
                        className={`p-3 rounded-full transition-colors ${isCameraOn ? 'bg-gray-600 hover:bg-gray-500' : 'bg-red-500 hover:bg-red-600'}`}
                    >
                        {isCameraOn ? <CameraOnIcon className="w-6 h-6 text-white" /> : <CameraOffIcon className="w-6 h-6 text-white" />}
                    </button>
                    <button className="p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors">
                        <ShareScreenIcon className="w-6 h-6 text-white" />
                    </button>
                     <button className="p-3 bg-gray-600 rounded-full hover:bg-gray-500 transition-colors">
                        <ChatIcon className="w-6 h-6 text-white" />
                    </button>
                    <button
                        onClick={onEndCall}
                        className="p-4 bg-red-600 rounded-full hover:bg-red-700 transition-colors transform hover:scale-110"
                    >
                        <PhoneMissedCallIcon className="w-7 h-7 text-white" />
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Main Component ---
const PeerConnection = () => {
    const [view, setView] = useState('list'); // 'list', 'detail', 'video'
    const [selectedExpert, setSelectedExpert] = useState(null);
    const [callExpert, setCallExpert] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [activeFilter, setActiveFilter] = useState("All");

    const handleSelectExpert = (expert) => {
        setSelectedExpert(expert);
        setView('detail');
    };

    const handleSchedule = (expert) => {
        setCallExpert(expert);
        setView('video');
    };

    const handleEndCall = () => {
        setCallExpert(null);
        setSelectedExpert(null);
        setView('list');
    };
    
    const handleBackToList = () => {
        setSelectedExpert(null);
        setView('list');
    };
    
    const filteredExperts = expertsData.filter(expert => {
        const matchesFilter = activeFilter === "All" || expert.domain === activeFilter;
        const matchesSearch = searchTerm === "" ||
            expert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            expert.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
            expert.company.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const renderContent = () => {
        switch (view) {
            case 'detail':
                return <ExpertDetailPage expert={selectedExpert} onSchedule={handleSchedule} onBack={handleBackToList} />;
            case 'video':
                return <VideoCallView expert={callExpert} onEndCall={handleEndCall} />;
            case 'list':
            default:
                return (
                    <ExpertList
                        experts={filteredExperts}
                        onSelectExpert={handleSelectExpert}
                        onFilterChange={setActiveFilter}
                        onSearchChange={(e) => setSearchTerm(e.target.value)}
                        activeFilter={activeFilter}
                        searchTerm={searchTerm}
                    />
                );
        }
    };

    const pageContainerClass = view === 'video' 
        ? "bg-gray-900" 
        : "bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 font-sans";

    return (
        <div className={pageContainerClass}>
            {renderContent()}
        </div>
    );
};

// --- Style Injector for Animations ---
const StyleInjector = () => {
    const style = `
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade-in { animation: fade-in 0.5s ease-out forwards; }
    `;
    return <style>{style}</style>;
};

const PeerConnectionPageWithStyles = () => (
    <>
        <StyleInjector />
        <PeerConnection />
    </>
);

export default PeerConnectionPageWithStyles;

