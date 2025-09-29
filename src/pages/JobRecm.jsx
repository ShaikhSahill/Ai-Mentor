import React from 'react';

// --- SVG Icon Components ---
// A collection of reusable SVG icons for a clean and consistent UI.

const PlusIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

const ChevronDownIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const UploadIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
    </svg>
);

const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const CheckCircleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const InformationCircleIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


const ClockIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CurrencyRupeeIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9.75M8.25 12H12m9 7.5l-4.5-4.5M12 12v9M12 21a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
);

const ArrowLeftIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

const SaveIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
    </svg>
);

const SpinnerIcon = (props) => (
    <svg {...props} className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
);


// --- Mock Data ---

const topMatchesData = [
    { id: 1, title: "AI Research Intern", company: "TechCorp Solutions", logo: "https://placehold.co/40x40/7C3AED/FFFFFF?text=T", duration: "6 months", salary: "₹25,000/month", skills: ["Python", "Machine Learning", "TensorFlow"], source: "AICTE", sourceColor: "bg-indigo-100 text-indigo-700", description: "Join our innovative AI team to work on cutting-edge research projects. You will be responsible for developing and testing new machine learning models, contributing to our core AI products." },
    { id: 2, title: "Frontend Developer", company: "StartupHub Inc", logo: "https://placehold.co/40x40/10B981/FFFFFF?text=S", duration: "3 months", salary: "₹20,000/month", skills: ["React", "JavaScript", "CSS"], source: "LinkedIn", sourceColor: "bg-green-100 text-green-700", description: "We are looking for a creative Frontend Developer to build beautiful and responsive user interfaces. You will work closely with our design and backend teams to deliver a seamless user experience." },
    { id: 3, title: "Data Science Intern", company: "DataCorp Analytics", logo: "https://placehold.co/40x40/F59E0B/FFFFFF?text=D", duration: "4 months", salary: "₹30,000/month", skills: ["Python", "SQL", "Tableau"], source: "PM Portal", sourceColor: "bg-amber-100 text-amber-700", description: "As a Data Science Intern, you will analyze large datasets to extract meaningful insights, create visualizations, and help guide business decisions with data-driven strategies." },
    { id: 4, title: "Backend Developer", company: "FinTech Innovations", logo: "https://placehold.co/40x40/3B82F6/FFFFFF?text=F", duration: "5 months", salary: "₹28,000/month", skills: ["Node.js", "MongoDB", "API"], source: "AICTE", sourceColor: "bg-indigo-100 text-indigo-700", description: "Develop robust and scalable server-side applications and APIs. You will be a key part of our engineering team, ensuring the reliability and performance of our financial technology platform." },
];

const similarRolesData = [
    { id: 5, title: "Mobile App Developer", company: "MobileTech Co", logo: "https://placehold.co/32x32/6366F1/FFFFFF?text=M", salary: "₹22,000/month", skills: ["Flutter", "Dart"] },
    { id: 6, title: "UX/UI Designer", company: "DesignStudio Pro", logo: "https://placehold.co/32x32/EC4899/FFFFFF?text=D", salary: "₹18,000/month", skills: ["Figma", "Adobe XD"] },
    { id: 7, title: "Digital Marketing", company: "MarketPro Agency", logo: "https://placehold.co/32x32/F97316/FFFFFF?text=M", salary: "₹15,000/month", skills: ["SEO", "Google Ads"] },
];


// --- Sub-Components ---

const JobInputForm = ({ onGetRecommendations, onSave, isAutoAllocate, setIsAutoAllocate, userSkills, setUserSkills, onOpenLinkModal }) => {
    const [skillInput, setSkillInput] = React.useState("");
    const [fileName, setFileName] = React.useState("");
    const fileInputRef = React.useRef(null);

    const addSkill = () => {
        if (skillInput && !userSkills.includes(skillInput)) {
            setUserSkills([...userSkills, skillInput]);
            setSkillInput("");
        }
    };

    const removeSkill = (skillToRemove) => {
        setUserSkills(userSkills.filter(skill => skill !== skillToRemove));
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };

    const handleDragOver = (e) => e.preventDefault();
    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFileName(e.dataTransfer.files[0].name);
        }
    };

    const handleAutoAllocateToggle = () => {
        if (!isAutoAllocate) {
            onOpenLinkModal();
        } else {
            setIsAutoAllocate(false);
        }
    };

    return (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-600 mb-6">One Step Closer to Your Dream Job</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Skills Section */}
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Skills</label>
                    <div className="flex items-center justify-between gap-2 border-2 border-indigo-500 rounded-lg p-1">
                        <input
                            type="text"
                            value={skillInput}
                            onChange={(e) => setSkillInput(e.target.value)}
                            onKeyDown={(e) => { e.key === 'Enter' && addSkill(); }}
                            placeholder="Add a skill"
                            className="flex-grow border-0 focus:ring-0 p-2 text-sm"
                        />
                        <button onClick={addSkill} className="flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-800 p-2 rounded-md transition-colors">
                            <PlusIcon className="w-4 h-4" /> Add Skill
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                        {userSkills.map(skill => (
                            <span key={skill} className="flex items-center gap-1.5 bg-indigo-100 text-indigo-700 text-sm font-medium px-2.5 py-1 rounded-full">
                                {skill}
                                <button onClick={() => removeSkill(skill)}><XIcon className="w-3 h-3" /></button>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Email and Phone Number */}
                <div>
                     <label htmlFor="email-address" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                     <input id="email-address" type="email" placeholder="e.g., your.name@example.com" className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>

                <div>
                     <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                     <input id="phone-number" type="tel" placeholder="e.g., +91 12345 67890" className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>

                {/* Qualification & Location */}
                <div>
                    <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-2">Qualification</label>
                    <div className="relative">
                        <select id="qualification" className="w-full appearance-none bg-white border-2 border-gray-200 rounded-lg py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors">
                            <option>Select qualification</option>
                            <option>Bachelor's Degree</option>
                            <option>Master's Degree</option>
                            <option>PhD</option>
                        </select>
                        <ChevronDownIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                </div>

                <div>
                     <label htmlFor="preference-location" className="block text-sm font-medium text-gray-700 mb-2">Preference Location</label>
                     <input id="preference-location" type="text" placeholder="e.g., Mumbai, Remote" className="w-full border-2 border-gray-200 rounded-lg p-2 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                </div>
                
                 {/* Availability */}
                 <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Availability</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {['Full-time', 'Part-time', 'Remote', 'Hybrid'].map(type => (
                            <div key={type}>
                                <input type="radio" name="availability" id={type} className="sr-only peer" />
                                <label htmlFor={type} className="block w-full text-center border border-gray-300 rounded-lg p-2.5 text-sm cursor-pointer peer-checked:bg-indigo-50 peer-checked:border-indigo-500 peer-checked:text-indigo-700 transition-colors">
                                    {type}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Experience Level & Previous Work */}
                <div className="md:col-span-2">
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
                     <div className="relative">
                         <select id="experience" className="w-full appearance-none bg-white border-2 border-gray-200 rounded-lg py-2.5 px-4 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors">
                             <option>Select experience</option>
                             <option>Internship</option>
                             <option>Entry Level</option>
                             <option>Mid-Level</option>
                             <option>Senior Level</option>
                         </select>
                         <ChevronDownIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                     </div>
                </div>
                <div className="md:col-span-2">
                    <label htmlFor="prev-work" className="block text-sm font-medium text-gray-700 mb-2">Previous Work Experience</label>
                    <textarea id="prev-work" rows="4" placeholder="Briefly describe your previous work experience, projects, or relevant activities..." className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"></textarea>
                </div>
                 
                 <div className="md:col-span-2">
                    <label htmlFor="cover-page" className="block text-sm font-medium text-gray-700 mb-2">Profile Description / Cover Page</label>
                    <textarea id="cover-page" rows="4" placeholder="Write a compelling profile description or cover letter to introduce yourself to employers..." className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"></textarea>
                </div>
                
                {/* Desired Role */}
                 <div className="md:col-span-2">
                     <label htmlFor="desired-role" className="block text-sm font-medium text-gray-700 mb-2">Desired Role</label>
                     <input id="desired-role" type="text" placeholder="e.g., Frontend Developer Intern, Data Analyst, Marketing Intern..." className="w-full border-2 border-gray-200 rounded-lg p-3 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" />
                 </div>
                
                 {/* Upload Resume */}
                <div className="md:col-span-2">
                    <div className="text-center my-4 text-sm font-semibold text-gray-500">OR</div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Resume</label>
                    <div
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current.click()}
                        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-indigo-500 transition-colors"
                    >
                        <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".pdf,.doc,.docx" />
                        <div className="bg-indigo-100 w-14 h-14 rounded-full mx-auto flex items-center justify-center mb-4">
                             <UploadIcon className="w-7 h-7 text-indigo-600"/>
                        </div>
                        {fileName ? (
                            <p className="text-gray-700 font-medium">{fileName}</p>
                        ) : (
                           <>
                             <p className="font-semibold text-indigo-600">Drop your resume here or click to browse</p>
                             <p className="text-xs text-gray-500 mt-1">Supports PDF, DOC, DOCX (Max 5MB)</p>
                           </>
                        )}
                        <button type="button" className="mt-4 bg-white text-gray-700 border border-gray-300 font-semibold py-2 px-4 rounded-lg text-sm hover:bg-gray-50">Choose File</button>
                    </div>
                </div>

            </div>
             {/* Auto Allocation Toggle */}
             <div className="mt-8 flex items-center justify-start">
                <label htmlFor="auto-allocate" className="flex items-center cursor-pointer">
                    <div className="relative">
                        <input type="checkbox" id="auto-allocate" className="sr-only" checked={isAutoAllocate} onChange={handleAutoAllocateToggle} />
                        <div className="block bg-gray-200 w-12 h-6 rounded-full transition"></div>
                        <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition transform ${isAutoAllocate ? 'translate-x-6 bg-indigo-600' : ''}`}></div>
                    </div>
                    <div className="ml-3 text-gray-700 font-medium">
                        Auto Allocation
                    </div>
                </label>
            </div>
            
            <div className="mt-8 flex justify-end gap-3">
                 <button onClick={onSave} className="flex items-center gap-2 bg-gray-100 text-gray-700 font-semibold py-2.5 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                    <SaveIcon className="w-5 h-5"/>
                    Save
                 </button>
                <button onClick={onGetRecommendations} className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:opacity-90 transition-opacity shadow-md">
                    {isAutoAllocate ? 'Get Allocation' : 'Get Recommendations'}
                </button>
            </div>
        </div>
    );
};

const JobResults = ({ onJobSelect, onBackToForm, isAutoAllocate, userSkills }) => {
    const filteredMatches = topMatchesData.filter(job =>
        userSkills.length === 0 || job.skills.some(skill => userSkills.includes(skill))
    );

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header with Back Button */}
            <div className="flex items-center gap-4 mb-8">
                 <button onClick={onBackToForm} className="p-2 rounded-full hover:bg-gray-200 transition-colors">
                     <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
                 </button>
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Your Top Internship & Job Matches</h1>
                    <p className="text-gray-500 mt-1">Based on your profile, here are the best opportunities for you.</p>
                </div>
            </div>

            {/* Top Matches Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredMatches.length > 0 ? (
                    filteredMatches.map(job => (
                        <div key={job.id} 
                             onClick={() => onJobSelect(job)} 
                             className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer">
                            <div className="flex justify-between items-start">
                                 <div className="flex items-center gap-4">
                                     <img src={job.logo} alt={`${job.company} logo`} className="w-12 h-12 rounded-lg"/>
                                     <div>
                                         <h3 className="text-lg font-bold text-gray-900">{job.title}</h3>
                                         <p className="text-sm text-gray-600">{job.company}</p>
                                     </div>
                                 </div>
                                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${job.sourceColor}`}>{job.source}</span>
                            </div>
                            <div className="flex items-center gap-6 text-sm text-gray-500 mt-4 border-t pt-4">
                               <span className="flex items-center gap-1.5"><ClockIcon className="w-4 h-4" />{job.duration}</span>
                               <span className="flex items-center gap-1.5"><CurrencyRupeeIcon className="w-4 h-4" />{job.salary}</span>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {job.skills.map(skill => (
                                    <span key={skill} className="bg-gray-100 text-gray-600 text-xs font-semibold px-2.5 py-1 rounded-full">{skill}</span>
                                ))}
                            </div>
                            {isAutoAllocate && (
                                <div className="mt-4 pt-4 border-t">
                                    <button disabled className="w-full bg-green-100 text-green-700 font-bold py-2 rounded-lg flex items-center justify-center gap-2 cursor-not-allowed">
                                        <CheckCircleIcon className="w-5 h-5" />
                                        Applied
                                    </button>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="md:col-span-2 text-center py-12 bg-white rounded-2xl">
                        <h3 className="text-xl font-semibold text-gray-700">No Jobs Match Your Skills</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your skills in the form to find more opportunities.</p>
                    </div>
                )}
            </div>

            {/* Similar Roles */}
            <div className="mt-12">
                 <div className="flex justify-between items-center mb-4">
                     <h2 className="text-2xl font-bold text-gray-800">Similar Roles You Might Like</h2>
                     <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">View All</a>
                 </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                     {similarRolesData.map(role => (
                         <div key={role.id} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                             <img src={role.logo} alt={`${role.company} logo`} className="w-10 h-10 rounded-md" />
                             <div>
                                 <h4 className="font-bold text-gray-800">{role.title}</h4>
                                 <p className="text-sm text-gray-500">{role.company}</p>
                                 <p className="text-xs text-gray-500 mt-1">{role.salary}</p>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>

             {/* Track Applications */}
            <div className="mt-12 bg-green-50 p-6 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4">
                <div>
                     <h3 className="text-xl font-bold text-green-800">Track Your Applications</h3>
                     <p className="text-green-700">Monitor the status of your submitted applications</p>
                </div>
                <div className="flex items-center gap-6">
                    <div className="text-center"><p className="text-3xl font-bold text-blue-600">5</p><p className="text-sm text-gray-600">Applied</p></div>
                    <div className="text-center"><p className="text-3xl font-bold text-amber-600">2</p><p className="text-sm text-gray-600">In Review</p></div>
                    <div className="text-center"><p className="text-3xl font-bold text-green-600">1</p><p className="text-sm text-gray-600">Interview</p></div>
                </div>
                <button className="bg-green-600 text-white font-semibold py-2.5 px-6 rounded-lg hover:bg-green-700 transition-colors">View Details</button>
            </div>
        </div>
    );
};

const JobDetailModal = ({ job, onApply, onClose, isAutoAllocate }) => {
    if (!job) return null;

    return (
        <div className="fixed inset-0 bg-transparent bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-slide-up">
                <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors z-10">
                    <XIcon className="w-6 h-6 text-gray-600" />
                </button>
                <div className="flex flex-col sm:flex-row justify-between items-start">
                     <div className="flex items-center gap-5">
                         <img src={job.logo} alt={`${job.company} logo`} className="w-16 h-16 rounded-xl"/>
                         <div>
                             <h1 className="text-3xl font-bold text-gray-900">{job.title}</h1>
                             <p className="text-lg text-gray-600">{job.company}</p>
                         </div>
                     </div>
                    <span className={`mt-4 sm:mt-0 text-sm font-bold px-3 py-1.5 rounded-full ${job.sourceColor}`}>{job.source}</span>
                </div>
                <div className="flex items-center gap-8 text-md text-gray-600 mt-6 border-t pt-6">
                   <span className="flex items-center gap-2"><ClockIcon className="w-5 h-5" />{job.duration}</span>
                   <span className="flex items-center gap-2"><CurrencyRupeeIcon className="w-5 h-5" />{job.salary}</span>
                </div>
                
                <div className="mt-6 border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Skills Required</h3>
                    <div className="flex flex-wrap gap-2">
                        {job.skills.map(skill => (
                            <span key={skill} className="bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1.5 rounded-full">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="mt-6 border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">Job Description</h3>
                    <p className="text-gray-600 leading-relaxed">{job.description}</p>
                </div>
                
                <div className="mt-8 border-t pt-6">
                    {isAutoAllocate ? (
                        <button disabled className="w-full bg-green-100 text-green-700 font-bold py-3 rounded-lg flex items-center justify-center gap-2 cursor-not-allowed text-lg">
                            <CheckCircleIcon className="w-6 h-6" />
                            Applied
                        </button>
                    ) : (
                        <button onClick={() => onApply(job.title, job.company)} className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg">Apply Now</button>
                    )}
                </div>
            </div>
        </div>
    );
};

const VerificationModal = ({ isOpen, onClose, onVerify }) => {
    const [isVerifying, setIsVerifying] = React.useState(false);
    
    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsVerifying(true);
        setTimeout(() => {
            onVerify();
            setIsVerifying(false);
        }, 5000);
    };

    return (
        <div className="fixed inset-0 bg-transparent bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full relative animate-slide-up">
                 <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors z-10">
                    <XIcon className="w-6 h-6 text-gray-600" />
                </button>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">AICTE Verification</h2>
                {isVerifying ? (
                    <div className="flex flex-col items-center justify-center h-48">
                         <SpinnerIcon className="w-12 h-12 text-indigo-600"/>
                         <p className="text-gray-600 mt-4 font-semibold text-lg animate-pulse">Verifying Credentials...</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <p className=' text-center text-gray-600 bg-emerald-300'>Add Dummy/Random number <br />(Temporary)</p>
                            <div>
                                <label htmlFor="aicte-id" className="block text-sm font-medium text-gray-700 mb-1">AICTE ID</label>
                                <input id="aicte-id" type="text" required placeholder="Enter your AICTE ID" className="w-full border-2 border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-indigo-500" />
                            </div>
                            <div>
                                <label htmlFor="password" a className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                <input id="password" type="password" required placeholder="Enter your password" className="w-full border-2 border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-indigo-500" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg">
                                Submit for Verification
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

const LinkAccountModal = ({ isOpen, onClose, onLink }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-transparent bg-opacity-60 flex items-center justify-center z-50 p-4 animate-fade-in">
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full relative animate-slide-up text-center">
                 <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-200 transition-colors z-10">
                    <XIcon className="w-6 h-6 text-gray-600" />
                </button>
                <div className="bg-indigo-100 w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4">
                    <InformationCircleIcon className="w-8 h-8 text-indigo-600"/>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Enable Auto Allocation</h2>
                <p className="text-gray-600 mb-6">To automatically apply for jobs, you need to link your AICTE account first.</p>
                <button 
                    onClick={onLink} 
                    className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg"
                >
                    Link Your AICTE Account
                </button>
            </div>
        </div>
    );
};


// --- Main Component ---
const JobRecommendation = () => {
    const [view, setView] = React.useState('form'); // 'form' or 'results'
    const [selectedJob, setSelectedJob] = React.useState(null);
    const [notifications, setNotifications] = React.useState([]);
    const [leftNotifications, setLeftNotifications] = React.useState([]);
    const [infoNotifications, setInfoNotifications] = React.useState([]);
    const [isAutoAllocate, setIsAutoAllocate] = React.useState(false);
    const [userSkills, setUserSkills] = React.useState(["React", "JavaScript"]);
    const [isVerificationModalOpen, setIsVerificationModalOpen] = React.useState(false);
    const [isLinkModalOpen, setIsLinkModalOpen] = React.useState(false);


    const addNotification = (title, message) => {
        const id = Date.now();
        setNotifications(prev => [...prev, { id, title, message }]);
        setTimeout(() => {
            removeNotification(id);
        }, 5000);
    };

    const removeNotification = (id) => {
        setNotifications(prev => prev.filter(n => n.id !== id));
    };
    
    const addLeftNotification = (title, message) => {
        const id = Date.now();
        setLeftNotifications(prev => [...prev, { id, title, message }]);
        setTimeout(() => {
            removeLeftNotification(id);
        }, 5000);
    };

    const removeLeftNotification = (id) => {
        setLeftNotifications(prev => prev.filter(n => n.id !== id));
    };

    const addInfoNotification = (title, message) => {
        const id = Date.now();
        setInfoNotifications(prev => [...prev, { id, title, message }]);
        setTimeout(() => {
            removeInfoNotification(id);
        }, 5000);
    };

    const removeInfoNotification = (id) => {
        setInfoNotifications(prev => prev.filter(n => n.id !== id));
    };

    const handleVerificationSuccess = () => {
        setIsVerificationModalOpen(false);
        setIsAutoAllocate(true);
        addInfoNotification("Verification Successful!", "Auto Allocation has been enabled.");
    };
    
    const handleLinkAccount = () => {
        setIsLinkModalOpen(false);
        setIsVerificationModalOpen(true);
    };

    const handleApply = (title, company) => {
        addNotification("Successfully Applied!", `Your application for ${title} at ${company} has been submitted.`);
        setSelectedJob(null); // Close modal on apply
    };
    
    const handleSave = () => {
        addLeftNotification("Progress Saved!", "Your form inputs have been successfully saved.");
    };

    return (
        <div className="bg-gray-50 min-h-screen p-4 sm:p-6 lg:p-8 font-sans">
            {/* Right Notifications Container */}
            <div className="fixed top-5 right-5 z-50 space-y-3 w-80">
                {notifications.map(n => (
                    <div key={n.id} className="bg-white p-4 rounded-lg shadow-xl border-l-4 border-green-500 animate-fade-in-right">
                       <div className="flex items-start">
                          <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"/>
                          <div className="flex-1">
                            <p className="font-bold text-gray-800">{n.title}</p>
                            <p className="text-sm text-gray-600 mt-1">{n.message}</p>
                          </div>
                          <button onClick={() => removeNotification(n.id)} className="ml-3">
                              <XIcon className="w-5 h-5 text-gray-400 hover:text-gray-600"/>
                          </button>
                       </div>
                    </div>
                ))}
            </div>
            
            {/* Left Notifications Container */}
             <div className="fixed top-5 left-5 z-50 space-y-3 w-80">
                {leftNotifications.map(n => (
                    <div key={n.id} className="bg-white p-4 rounded-lg shadow-xl border-l-4 border-blue-500 animate-fade-in-left">
                       <div className="flex items-start">
                          <CheckCircleIcon className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0"/>
                          <div className="flex-1">
                            <p className="font-bold text-gray-800">{n.title}</p>
                            <p className="text-sm text-gray-600 mt-1">{n.message}</p>
                          </div>
                          <button onClick={() => removeLeftNotification(n.id)} className="ml-3">
                              <XIcon className="w-5 h-5 text-gray-400 hover:text-gray-600"/>
                          </button>
                       </div>
                    </div>
                ))}
            </div>
            
            {/* Center Info Notifications Container */}
            <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 space-y-3 w-96">
                {infoNotifications.map(n => (
                    <div key={n.id} className="bg-white p-4 rounded-lg shadow-xl border-l-4 border-cyan-500 animate-fade-in-down">
                       <div className="flex items-start">
                          <InformationCircleIcon className="w-6 h-6 text-cyan-500 mr-3 flex-shrink-0"/>
                          <div className="flex-1">
                            <p className="font-bold text-gray-800">{n.title}</p>
                            <p className="text-sm text-gray-600 mt-1">{n.message}</p>
                          </div>
                          <button onClick={() => removeInfoNotification(n.id)} className="ml-3">
                              <XIcon className="w-5 h-5 text-gray-400 hover:text-gray-600"/>
                          </button>
                       </div>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            {view === 'form' ? (
                <JobInputForm 
                    onGetRecommendations={() => setView('results')} 
                    onSave={handleSave} 
                    isAutoAllocate={isAutoAllocate}
                    setIsAutoAllocate={setIsAutoAllocate}
                    userSkills={userSkills}
                    setUserSkills={setUserSkills}
                    onOpenLinkModal={() => setIsLinkModalOpen(true)}
                />
            ) : (
                <JobResults 
                    onJobSelect={setSelectedJob} 
                    onBackToForm={() => setView('form')}
                    isAutoAllocate={isAutoAllocate}
                    userSkills={userSkills}
                />
            )}

            {/* Job Detail Modal */}
            <JobDetailModal job={selectedJob} onApply={handleApply} onClose={() => setSelectedJob(null)} isAutoAllocate={isAutoAllocate} />
            
             {/* Link Account Modal */}
             <LinkAccountModal 
                isOpen={isLinkModalOpen}
                onClose={() => setIsLinkModalOpen(false)}
                onLink={handleLinkAccount}
             />

            {/* Verification Modal */}
            <VerificationModal 
                isOpen={isVerificationModalOpen} 
                onClose={() => setIsVerificationModalOpen(false)} 
                onVerify={handleVerificationSuccess}
            />
        </div>
    );
};

// --- Style Injector for Animations ---
// This is a common pattern to add keyframe animations in single-file components.
const StyleInjector = () => {
    const style = `
        @keyframes fade-in-right {
            from { opacity: 0; transform: translateX(100%); }
            to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right { animation: fade-in-right 0.5s ease-out forwards; }
        
        @keyframes fade-in-left {
            from { opacity: 0; transform: translateX(-100%); }
            to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left { animation: fade-in-left 0.5s ease-out forwards; }

        @keyframes fade-in-down {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down { animation: fade-in-down 0.5s ease-out forwards; }

        @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }

        @keyframes slide-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up { animation: slide-up 0.4s ease-out forwards; }
    `;
    return <style>{style}</style>;
};


const JobRecommendationPageWithStyles = () => (
    <>
        <StyleInjector />
        <JobRecommendation />
    </>
);


export default JobRecommendationPageWithStyles;

