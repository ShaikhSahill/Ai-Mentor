import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Reusable SVG Icon Components ---
const CheckIcon = () => (
    <svg className="w-6 h-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ExclamationIcon = () => (
    <svg className="w-6 h-6 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
    </svg>
);

const ClockIcon = () => (
    <svg className="w-8 h-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const DollarIcon = () => (
    <svg className="w-8 h-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const EffortIcon = () => (
    <svg className="w-8 h-8 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
);

const ChevronDownIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

// New Back Arrow Icon
const BackArrowIcon = () => (
    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);


// --- Dynamic Data Store ---
const careerTransitionData = {
    'swe-ds': {
        transferableSkills: [
            { name: 'Problem Solving', level: 90 },
            { name: 'Analytical Thinking', level: 85 },
            { name: 'Algorithms & Data Structures', level: 80 },
            { name: 'Version Control (Git)', level: 95 },
        ],
        skillsToDevelop: [
            { name: 'Machine Learning', duration: '6 months' },
            { name: 'Statistics & Probability', duration: '4 months' },
            { name: 'Python/R for Data Science', duration: '3 months' },
            { name: 'Data Visualization Tools', duration: '2 months' },
        ],
        timeline: '8-12',
        salaryChange: '+35%',
        effortLevel: 'High',
    },
    'pm-ux': {
        transferableSkills: [
            { name: 'User Empathy', level: 80 },
            { name: 'Communication', level: 95 },
            { name: 'Product Strategy', level: 70 },
            { name: 'Stakeholder Management', level: 85 },
        ],
        skillsToDevelop: [
            { name: 'Wireframing & Prototyping', duration: '3 months' },
            { name: 'User Research Methods', duration: '4 months' },
            { name: 'Interaction Design', duration: '3 months' },
            { name: 'Visual Design Principles', duration: '2 months' },
        ],
        timeline: '6-9',
        salaryChange: '+15%',
        effortLevel: 'Medium',
    },
    'default': {
        transferableSkills: [],
        skillsToDevelop: [],
        timeline: 'N/A',
        salaryChange: 'N/A',
        effortLevel: 'N/A',
    }
};

const careerOptions = [
    { value: 'swe', label: 'Software Engineer' },
    { value: 'ds', label: 'Data Scientist' },
    { value: 'pm', label: 'Product Manager' },
    { value: 'ux', label: 'UX Designer' },
];

// --- Sub-components for better structure ---
const SkillBar = ({ name, level, colorClass }) => (
    <div>
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-slate-700">{name}</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2.5">
            <div className={`${colorClass} h-2.5 rounded-full`} style={{ width: `${level}%` }}></div>
        </div>
    </div>
);

const DevelopmentSkill = ({ name, duration }) => (
    <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700">{name}</span>
        <span className="text-xs font-semibold bg-red-100 text-red-700 px-2 py-0.5 rounded-full">{duration}</span>
    </div>
);

const InfoCard = ({ icon, title, value }) => (
    <div className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm h-full flex flex-col items-center justify-center">
        {icon}
        <p className="text-3xl font-bold text-slate-900 mt-2">{title}</p>
        <p className="text-sm text-slate-500">{value}</p>
    </div>
);

const CustomSelect = ({ label, options, selectedValue, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [selectRef]);

    const handleSelect = (value) => {
        onSelect(value);
        setIsOpen(false);
    };

    const selectedLabel = options.find(opt => opt.value === selectedValue)?.label;

    return (
        <div className="relative" ref={selectRef}>
            <label className="text-sm font-semibold text-slate-600 mb-2 block">{label}</label>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center bg-slate-100 border border-slate-300 rounded-lg px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
                <span className="text-slate-900">{selectedLabel}</span>
                <ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-auto">
                    <ul className="py-1">
                        {options.map(option => (
                            <li
                                key={option.value}
                                onClick={() => handleSelect(option.value)}
                                className="px-4 py-2 text-slate-800 hover:bg-purple-50 cursor-pointer"
                            >
                                {option.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


// --- Main Analysis Component ---
const SwapAnalysis = () => {
    const navigate = useNavigate();
    const [currentCareer, setCurrentCareer] = useState('swe');
    const [targetCareer, setTargetCareer] = useState('ds');
    const [analysisData, setAnalysisData] = useState(careerTransitionData['swe-ds']);

    useEffect(() => {
        const path = `${currentCareer}-${targetCareer}`;
        const reversePath = `${targetCareer}-${currentCareer}`;
        if (currentCareer === targetCareer) {
            setAnalysisData(careerTransitionData.default);
        } else {
            // Check for path and reverse path, fallback to default
            setAnalysisData(careerTransitionData[path] || careerTransitionData[reversePath] || careerTransitionData.default);
        }
    }, [currentCareer, targetCareer]);

    const handleBack = () => {
        navigate('/careerswap'); // This will navigate to the CareerSwap page
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans p-4 sm:p-8 flex items-center justify-center">
             <div className="w-full max-w-5xl mx-auto space-y-8 relative">
                
                {/* Back Button */}
                <div onClick={handleBack} className="absolute -top-4 left-0 sm:-top-8 sm:left-0">
                    <button  className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors">
                        <BackArrowIcon />
                        <span>Back</span>
                    </button>
                </div>
                
                {/* Top Career Selection */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 items-center pt-8">
                    <CustomSelect label="Current Career (A)" options={careerOptions} selectedValue={currentCareer} onSelect={setCurrentCareer} />
                    <div className="mt-7 flex justify-center">
                        <button className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition-colors shadow">
                            &rarr;
                        </button>
                    </div>
                    <CustomSelect label="Target Career (B)" options={careerOptions} selectedValue={targetCareer} onSelect={setTargetCareer} />
                </div>

                {/* Skills Analysis */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Transferable Skills */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm min-h-[250px]">
                        <div className="flex items-center gap-3 mb-6">
                            <CheckIcon />
                            <h3 className="text-lg font-bold text-slate-900">Transferable Skills</h3>
                        </div>
                        {analysisData.transferableSkills.length > 0 ? (
                            <div className="space-y-5">
                                {analysisData.transferableSkills.map(skill => <SkillBar key={skill.name} name={skill.name} level={skill.level} colorClass="bg-green-500" />)}
                            </div>
                        ) : <p className="text-slate-500 text-sm">No specific transferable skills listed for this path.</p>
                        }
                    </div>
                    {/* Skills to Develop */}
                    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm min-h-[250px]">
                        <div className="flex items-center gap-3 mb-6">
                            <ExclamationIcon />
                            <h3 className="text-lg font-bold text-slate-900">Skills to Develop</h3>
                        </div>
                        {analysisData.skillsToDevelop.length > 0 ? (
                            <div className="space-y-5">
                                {analysisData.skillsToDevelop.map(skill => <DevelopmentSkill key={skill.name} name={skill.name} duration={skill.duration} />)}
                            </div>
                         ) : <p className="text-slate-500 text-sm">No specific skills to develop listed for this path.</p>
                        }
                    </div>
                </div>

                {/* Bottom Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <InfoCard icon={<ClockIcon />} title={analysisData.timeline} value="months" />
                    <InfoCard icon={<DollarIcon />} title={analysisData.salaryChange} value="potential increase" />
                    <InfoCard icon={<EffortIcon />} title={analysisData.effortLevel} value="commitment required" />
                </div>
                
                {/* Call to Action */}
                <div className="bg-white border border-slate-200 rounded-xl p-8 text-center shadow-sm">
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Ready to Make the Switch?</h2>
                    <p className="text-slate-600 mb-6">Get a personalized roadmap for your career transition</p>
                    <button className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-3 px-8 rounded-lg hover:opacity-90 transition-opacity shadow">
                        Generate Roadmap for Career Switch
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SwapAnalysis;
