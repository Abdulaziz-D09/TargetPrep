'use client';
import { Play, HelpCircle, Layers, Clock, Calculator, FileText, BookOpen } from 'lucide-react';
import { practiceTests } from '@/data/questions';
import Link from 'next/link';

export default function PracticePage() {
    return (
        <div className="w-full max-w-[1600px] mx-auto px-6 py-8">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Practice Tests</h2>
                <p className="text-slate-600">Full-length Digital SAT simulations to prepare you for test day.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
                {practiceTests.map((test) => {
                    // Color mapping to match original design
                    const colorClass =
                        test.color === 'blue' ? 'bg-blue-600' :
                            test.color === 'purple' ? 'bg-indigo-600' :
                                test.color === 'emerald' ? 'bg-emerald-600' :
                                    'bg-orange-600';

                    const bgHoverClass =
                        test.color === 'blue' ? 'hover:bg-blue-700' :
                            test.color === 'purple' ? 'hover:bg-indigo-700' :
                                test.color === 'emerald' ? 'hover:bg-emerald-700' :
                                    'hover:bg-orange-700';

                    const textBadgeClass =
                        test.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                            test.color === 'purple' ? 'bg-indigo-100 text-indigo-700' :
                                test.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                                    'bg-orange-100 text-orange-700';

                    return (
                        <div key={test.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
                            <div className={`h-2 ${colorClass}`}></div>
                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-3">
                                    <span className={`${textBadgeClass} text-xs font-bold px-2 py-1 rounded`}>{test.type}</span>
                                    <span className="text-slate-400 text-xs">{test.duration}</span>
                                </div>
                                <h3 className="font-bold text-[19px] text-slate-900 mb-2 leading-tight">{test.title}</h3>
                                <p className="text-[13px] text-slate-600 mb-3">{test.description}</p>
                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                    <span className="flex items-center gap-1"><HelpCircle className="w-[14px] h-[14px]" /> {test.totalQuestions} Questions</span>
                                    <span className="flex items-center gap-1"><Layers className="w-[14px] h-[14px]" /> {test.moduleCount} Modules</span>
                                </div>
                                <div className="mt-auto pt-2">
                                    <Link href={`/practice/test/${test.id}`} className={`w-full ${colorClass} ${bgHoverClass} text-white py-[8px] rounded-[6px] text-[14px] font-bold transition-colors flex items-center justify-center gap-2`}>
                                        Start Test
                                        <Play className="w-[14px] h-[14px]" fill="currentColor" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
