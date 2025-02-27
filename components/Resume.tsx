import React from 'react';
import Button from './Button';
import { RootState, useDispatch, useSelector } from '@/lib/store';
import { setResumeButton } from '../lib/features/resume/resume-slice';
import Education from './resume/Education';
import ProfessionalSkill from './resume/ProfessionalSkill';
import Exprience from './resume/Exprience';

export default function Resume() {
    const dispatch = useDispatch();
    const selectedButton = useSelector((state: RootState) => state.resume.selectedButton);

    const buttonDesign = 'px-[10px] py-[15px] transition duration-900 ease-in-out w-full sm:w-[33.33%]';
    const hoverEffect =
        'hover:text-yellow-400 hover:z-[999] hover:rounded-md hover:shadow-md hover:shadow-slate-500';
    const selectedButtonCss = 'text-[#30c1ff99] z-[999] bg-slate-100 rounded-md shadow-md shadow-slate-500';

    let RenderedComponent = Education;
    if (selectedButton === 'education') {
        RenderedComponent = Education;
    } else if (selectedButton === 'experience') {
        RenderedComponent = Exprience;
    } else if (selectedButton === 'skill') {
        RenderedComponent = ProfessionalSkill;
    }

    return (
        <div className="flex flex-col justify-center items-center px-4 sm:px-8 w-full min-h-full">
            {/* Header Section */}
            <div className="flex justify-center items-center text-center">
                <div>
                    <h6 className="font-thin text-[14px] text-yellow-400 sm:text-[16px]">
                        1 year of experience in web development
                    </h6>
                    <h1 className="pt-[10px] font-semibold text-3xl text-slate-300 sm:text-4xl tracking-[5px] sm:tracking-[10px]">
                        My Resume
                    </h1>
                </div>
            </div>

            {/* Button List */}
            <div
                id="resumebuttonlist"
                className="flex sm:flex-row flex-col justify-center items-center bg-gray-100 shadow-[8px_8px_15px_rgba(0,0,0,0.25)] hover:shadow-teal-200 mt-[25px] rounded-md w-full text-[15px] md:text-[20px] text-gray-400 sm:text-[22px] transform transition-all hover:translate-y-1 duration-500 ease-in-out"
            >
                <Button
                    className={`${buttonDesign} ${hoverEffect} ${selectedButton === 'education' ? selectedButtonCss : ''}`}
                    text="Education"
                    onClick={() => dispatch(setResumeButton('education'))}
                />
                <Button
                    className={`${buttonDesign} ${hoverEffect} ${selectedButton === 'experience' ? selectedButtonCss : ''}`}
                    text="Experience"
                    onClick={() => dispatch(setResumeButton('experience'))}
                />
                <Button
                    className={`${buttonDesign} ${hoverEffect} ${selectedButton === 'skill' ? selectedButtonCss : ''}`}
                    text="Professional Skill"
                    onClick={() => dispatch(setResumeButton('skill'))}
                />
            </div>

            {/* Rendered Component */}
            <div className="flex justify-center mt-8 sm:mt-12 w-full">
                <RenderedComponent />
            </div>
        </div>
    );
}
