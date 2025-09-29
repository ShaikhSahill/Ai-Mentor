import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import SwapAnalysis from '../components/SwapAnalysis';
import { useNavigate } from "react-router-dom";

// --- SVG Icon Components ---

const LightbulbIcon = () => (
    <svg className="w-5 h-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 SvgIconComponent001.5-11.649m-1.5 11.649a6.01 6.01 SvgIconComponent01-1.5-11.649M12 18h.008v.008H12v-.008z" />
    </svg>
);

const SwapIcon = () => (
    <svg className="w-5 h-5 text-purple-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
    </svg>
);

const UploadIcon = () => (
    <svg className="w-12 h-12 text-slate-400 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
    </svg>
);

const RocketIcon = () => (
     <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a14.98 14.98 0 00-5.84-2.56m0 0a14.98 14.98 0 00-5.84 2.56m5.84-2.56V4.72a.75.75 0 00-1.5 0v4.82m0 0a6 6 0 01-5.84-7.38V4.72a.75.75 0 00-1.5 0v4.82m0 0a14.983 14.983 0 005.84 2.56m-5.84-2.56a14.983 14.983 0 00-5.84-2.56m11.68 0a14.983 14.983 0 005.84 2.56m-5.84-2.56a14.983 14.983 0 00-5.84 2.56m11.68 0V4.72a.75.75 0 00-1.5 0v4.82" />
    </svg>
);

const ChevronDownIcon = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
);

// --- Custom Select Component ---
const CustomSelect = ({ label, options, selectedValue, onSelect, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectRef]);

    const handleSelect = (value) => {
        onSelect(value);
        setIsOpen(false);
    };

    const selectedLabel = options.find(opt => opt.value === selectedValue)?.label || placeholder;

    

    return (
        <div className="relative" ref={selectRef}>
            <label className="text-sm text-gray-600 mb-2 block">{label}</label>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full h-[42px] flex justify-between items-center bg-slate-100 border border-slate-300 rounded-md px-3 py-2 text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            >
                <span className={selectedValue ? 'text-slate-900' : 'text-gray-500'}>{selectedLabel}</span>
                <ChevronDownIcon className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-auto">
                    <ul className="py-1">
                        {options.map(option => (
                            <li
                                key={option.value}
                                onClick={() => handleSelect(option.value)}
                                className="px-3 py-2 text-sm text-slate-800 hover:bg-purple-50 cursor-pointer"
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

// --- Main App Component ---
const CareerSwap = () => {
    // --- State Management ---
    const [skills, setSkills] = useState(['JavaScript', 'React', 'CSS']);
    const [currentSkill, setCurrentSkill] = useState('');
    const [currentRole, setCurrentRole] = useState('');
    const [targetRole, setTargetRole] = useState('');
    const [uploadedFile, setUploadedFile] = useState(null);
    const navigate = useNavigate(); // <-- useNavigate hook

    const currentRoles = [
        { value: 'dev', label: 'Web Developer' },
        { value: 'da', label: 'Data Analyst' },
        { value: 'mkt', label: 'Marketing Specialist' },
        { value: 'hr', label: 'HR Manager' },
    ];

    const targetRoles = [
        { value: 'ux', label: 'UX Designer' },
        { value: 'ds', label: 'Data Scientist' },
        { value: 'pm', label: 'Product Manager' },
        { value: 'se', label: 'Software Engineer' },
    ];
    
    // --- Handlers ---
    const handleSkillAdd = (e) => {
        if (e.key === 'Enter' && currentSkill.trim() !== '' && !skills.includes(currentSkill.trim())) {
            setSkills([...skills, currentSkill.trim()]);
            setCurrentSkill('');
        }
    };

    const handleSkillRemove = (skillToRemove) => {
        setSkills(skills.filter(skill => skill !== skillToRemove));
    };

    const handleReset = () => {
        setSkills(['JavaScript', 'React', 'CSS']);
        setCurrentSkill('');
        setCurrentRole('');
        setTargetRole('');
        setUploadedFile(null);
    };
    
    const onDrop = useCallback(acceptedFiles => {
        setUploadedFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, multiple: false });
    //make function to Redirect to swap analysis page on button click
    

    // --- Render ---
    const handleSimulate = () => {
        navigate('/analysis'); // <-- navigate to /analysis route
    };
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 sm:p-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Main Content (Left and Center Columns) */}
                <main className="lg:col-span-2 space-y-8">
                    {/* Career Transition Card */}
                    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Career Transition</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           <CustomSelect
                                label="Current Career"
                                options={currentRoles}
                                selectedValue={currentRole}
                                onSelect={setCurrentRole}
                                placeholder="Select your current role"
                           />
                           <CustomSelect
                                label="Target Career"
                                options={targetRoles}
                                selectedValue={targetRole}
                                onSelect={setTargetRole}
                                placeholder="Select your target role"
                           />
                        </div>
                    </div>

                    {/* Current Skills Card */}
                    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-900 mb-4">Current Skills</h2>
                        <div className="bg-slate-100 border border-slate-300 rounded-md p-2 mb-4">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {skills.map(skill => (
                                    <div key={skill} className="bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full flex items-center gap-2">
                                        <span>{skill}</span>
                                        <button onClick={() => handleSkillRemove(skill)} className="text-purple-500 hover:text-purple-700">&times;</button>
                                    </div>
                                ))}
                            </div>
                            <input
                                type="text"
                                value={currentSkill}
                                onChange={e => setCurrentSkill(e.target.value)}
                                onKeyDown={handleSkillAdd}
                                placeholder="Type skills and press Enter..."
                                className="w-full bg-transparent text-slate-900 placeholder-gray-500 focus:outline-none"
                            />
                        </div>
                        
                        <div className="relative text-center my-6">
                            <span className="absolute top-1/2 left-0 w-full h-px bg-slate-200"></span>
                            <span className="relative bg-white px-2 text-slate-500 text-sm">OR</span>
                        </div>
                        
                        <div {...getRootProps()} className={`p-8 border-2 border-dashed border-slate-300 rounded-lg text-center cursor-pointer transition-colors ${isDragActive ? 'bg-purple-50 border-purple-500' : 'hover:bg-slate-50'}`}>
                            <input {...getInputProps()} />
                            <div className="flex flex-col items-center">
                                <UploadIcon />
                                {uploadedFile ? (
                                     <p className="text-purple-600 font-semibold">{uploadedFile.name}</p>
                                ) : (
                                    <p className="text-slate-500">Drag and drop your resume or <span className="text-purple-600 font-semibold">click to browse</span></p>
                                )}
                            </div>
                        </div>

                    </div>
                     {/* Action Buttons */}
                     <div className="flex items-center gap-4">
                        <button onClick={handleSimulate} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity cursor-pointer">
                            <RocketIcon />
                            Simulate Career Switch
                        </button>
                        <button onClick={handleReset} className="w-full bg-white border border-slate-300 text-slate-700 font-bold py-3 px-6 rounded-lg hover:bg-slate-100 transition-colors">
                            Clear & Reset
                        </button>
                    </div>
                </main>

                {/* Sidebar (Right Column) */}
                <aside className="space-y-8">
                    {/* Helpful Tips Card */}
                    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <LightbulbIcon />
                            <h3 className="text-lg font-bold text-slate-900">Helpful Tips</h3>
                        </div>
                        <ul className="space-y-3 text-sm text-gray-600 list-disc list-inside">
                            <li>Be specific with your current skills - include technical tools, soft skills, and certifications.</li>
                            <li>Consider adjacent careers that share similar skill sets for easier transitions.</li>
                            <li>Upload your resume for more accurate skill extraction and analysis.</li>
                        </ul>
                    </div>
                    
                    {/* Popular Career Swaps Card */}
                    <div className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <SwapIcon />
                            <h3 className="text-lg font-bold text-slate-900">Popular Career Swaps</h3>
                        </div>
                        <div className="space-y-4 text-sm">
                            <div className="bg-slate-100 p-3 rounded-md">
                                <p className="font-semibold text-slate-800">Web Developer &rarr; UX Designer</p>
                                <p className="text-gray-500">85% skill overlap</p>
                            </div>
                            <div className="bg-slate-100 p-3 rounded-md">
                                <p className="font-semibold text-slate-800">Data Analyst &rarr; Data Scientist</p>
                                <p className="text-gray-500">78% skill overlap</p>
                            </div>
                            <div className="bg-slate-100 p-3 rounded-md">
                                <p className="font-semibold text-slate-800">Marketing &rarr; Product Manager</p>
                                <p className="text-gray-500">72% skill overlap</p>
                            </div>
                        </div>
                    </div>
                </aside>

            </div>
        </div>
    );
};

export default CareerSwap;

