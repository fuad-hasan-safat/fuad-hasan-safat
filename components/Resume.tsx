import Button from './Button';
import { RootState, useDispatch, useSelector } from '@/lib/store';
import { setResumeButton } from '../lib/features/resume/resume-slice';
import Education from './resume/Education';
import ProfessionalSkill from './resume/ProfessionalSkill';
import ExprienceLayout from './resume/Exprience';

const tabs = [
    { key: 'education', label: 'Education', sub: 'Academic' },
    { key: 'experience', label: 'Experience', sub: 'Work History' },
    { key: 'skill', label: 'Skills', sub: 'Expertise' },
] as const;

export default function Resume() {
    const dispatch = useDispatch();
    const selectedButton = useSelector((state: RootState) => state.resume.selectedButton);

    const RenderedComponent = {
        education: Education,
        experience: ExprienceLayout,
        skill: ProfessionalSkill,
    }[selectedButton];

    const startDate = new Date('2024-02-18');
    const totalMonths = Math.floor((new Date().getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 30));
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;

    return (
        <div className="flex flex-col items-center w-full space-y-10">
            {/* Header */}
            <div className="text-center space-y-3">
                <div className="inline-flex items-center bg-cyan-400/10 border border-cyan-400/20 px-5 py-1.5 rounded-full">
                    <span className="text-sm font-medium text-cyan-400 tracking-wide">
                        {years > 0 && `${years}y `}{months > 0 && `${months}m `}Professional Experience
                    </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Professional Journey
                </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex bg-slate-800/60 backdrop-blur-sm p-1.5 rounded-xl border border-slate-700/50 gap-1">
                {tabs.map((tab) => {
                    const isActive = selectedButton === tab.key;
                    return (
                        <Button
                            key={tab.key}
                            className={`px-6 py-3 rounded-lg transition-all duration-200 ${
                                isActive
                                    ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-700/50'
                            }`}
                            text={
                                <div className="flex flex-col items-center gap-0.5">
                                    <span className="font-semibold text-sm">{tab.label}</span>
                                    <span className={`text-xs ${isActive ? 'text-cyan-100' : 'text-slate-500'}`}>{tab.sub}</span>
                                </div>
                            }
                            onClick={() => dispatch(setResumeButton(tab.key))}
                        />
                    );
                })}
            </div>

            {/* Content */}
            <div className="w-full">
                <RenderedComponent />
            </div>
        </div>
    );
}