import React from 'react';
import Button from './Button';
import { RootState, useDispatch, useSelector } from '@/lib/store';
import { setResumeButton } from '../lib/features/resume/resume-slice';
import Education from './resume/Education';
import ProfessionalSkill from './resume/ProfessionalSkill';
import ExprienceLayout from './resume/Exprience';



export default function Resume() {
    const dispatch = useDispatch();
    const selectedButton = useSelector((state: RootState) => state.resume.selectedButton);

    const RenderedComponent = {
        education: Education,
        experience: ExprienceLayout,
        skill: ProfessionalSkill,
    }[selectedButton];

    return (
        <div className="flex flex-col items-center px-4 sm:px-8 w-full min-h-full space-y-8">
            {/* Header Section */}
            <div className="text-center space-y-4">
                <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2 rounded-full shadow-lg">
                    <span className="text-sm font-semibold text-white tracking-wide">
                        1 Year 4 Months Professional Experience
                    </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Professional Journey
                </h1>
            </div>

            {/* Navigation Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
                <Button
                    className={`p-6 rounded-xl transition-all duration-300 ${
                        selectedButton === 'education' 
                            ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-100 text-white'
                            : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100'
                    }`}
                    text={
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-semibold mb-2">Education</span>
                            <span className="text-sm">Academic Background</span>
                        </div>
                    }
                    onClick={() => dispatch(setResumeButton('education'))}
                />
                
                <Button
                    className={`p-6 rounded-xl transition-all duration-300 ${
                        selectedButton === 'experience' 
                            ? 'bg-gradient-to-br from-purple-500 to-indigo-600 shadow-2xl shadow-purple-100 text-white'
                            : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100'
                    }`}
                    text={
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-semibold mb-2">Experience</span>
                            <span className="text-sm">Work History</span>
                        </div>
                    }
                    onClick={() => dispatch(setResumeButton('experience'))}
                />
                
                <Button
                    className={`p-6 rounded-xl transition-all duration-300 ${
                        selectedButton === 'skill' 
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl shadow-green-100 text-white'
                            : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg border border-gray-100'
                    }`}
                    text={
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-semibold mb-2">Skills</span>
                            <span className="text-sm">Technical Expertise</span>
                        </div>
                    }
                    onClick={() => dispatch(setResumeButton('skill'))}
                />
            </div>

            {/* Animated Content Area */}
            <div className="w-full max-w-6xl">
                <div className="rounded-2xl bg-white shadow-xl p-6 md:p-8 border border-gray-100 transition-all duration-300 hover:shadow-2xl">
                    <RenderedComponent />
                </div>
            </div>
        </div>
    );
}