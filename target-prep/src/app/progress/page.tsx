'use client';
import { useEffect, useState } from 'react';
import { BarChart2, TrendingUp, Target, Activity, Calendar } from 'lucide-react';
import { CompletedTest } from '@/store/testStore';

export default function ProgressPage() {
    const [history, setHistory] = useState<CompletedTest[]>([]);
    const [stats, setStats] = useState({ total: 0, avg: 0, highest: 0, readingAvg: 0, mathAvg: 0 });

    useEffect(() => {
        try {
            const data = localStorage.getItem('targetprep_progress');
            if (data) {
                const { completedTests } = JSON.parse(data);
                if (completedTests?.length > 0) {
                    setHistory(completedTests);
                    const total = completedTests.length;
                    const avg = Math.round(completedTests.reduce((a: number, t: CompletedTest) => a + t.totalScore, 0) / total);
                    const highest = Math.max(...completedTests.map((t: CompletedTest) => t.totalScore));
                    const readingAvg = Math.round(completedTests.reduce((a: number, t: CompletedTest) => a + t.englishScore, 0) / total);
                    const mathAvg = Math.round(completedTests.reduce((a: number, t: CompletedTest) => a + t.mathScore, 0) / total);
                    setStats({ total, avg, highest, readingAvg, mathAvg });
                }
            }
        } catch { }
    }, []);

    if (history.length === 0) {
        return (
            <div className="view-section flex flex-col items-center justify-center min-h-[80vh] text-center fade-in">
                <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-6 shadow-sm border border-blue-100">
                    <BarChart2 className="w-10 h-10 text-blue-500" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">No Data Yet</h2>
                <p className="text-slate-500 max-w-sm mb-8 leading-relaxed text-lg">Take your first practice test to start tracking your progress and estimated SAT score.</p>
                <a href="/practice" className="btn-primary shadow-[0_8px_20px_rgba(37,99,235,0.2)]">Go to Practice Tests</a>
            </div>
        );
    }

    return (
        <div className="view-section fade-in">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Your Analytics</h2>
                <p className="text-slate-500 text-lg">Track your improvement over time with detailed score breakdowns.</p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <div className="glass-card p-6 border-l-4 border-l-blue-500 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-blue-50 rounded-full blur-xl group-hover:bg-blue-100 transition-colors" />
                    <div className="flex items-center gap-2 mb-4 relative z-10">
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                        <h3 className="font-semibold text-slate-500 text-sm uppercase tracking-wider">Average Score</h3>
                    </div>
                    <p className="text-4xl font-bold text-slate-900 mb-1 relative z-10 tracking-tight">{stats.avg}</p>
                </div>

                <div className="glass-card p-6 border-l-4 border-l-purple-500 relative overflow-hidden group">
                    <div className="absolute -right-4 -top-4 w-20 h-20 bg-purple-50 rounded-full blur-xl group-hover:bg-purple-100 transition-colors" />
                    <div className="flex items-center gap-2 mb-4 relative z-10">
                        <Target className="w-5 h-5 text-purple-500" />
                        <h3 className="font-semibold text-slate-500 text-sm uppercase tracking-wider">Highest Score</h3>
                    </div>
                    <p className="text-4xl font-bold text-slate-900 mb-1 relative z-10 tracking-tight">{stats.highest}</p>
                </div>

                <div className="glass-card p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                        <h3 className="font-semibold text-slate-500 text-sm uppercase tracking-wider">Reading Avg</h3>
                    </div>
                    <p className="text-4xl font-bold text-slate-900 tracking-tight">{stats.readingAvg}</p>
                </div>

                <div className="glass-card p-6">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-orange-500" />
                        <h3 className="font-semibold text-slate-500 text-sm uppercase tracking-wider">Math Avg</h3>
                    </div>
                    <p className="text-4xl font-bold text-slate-900 tracking-tight">{stats.mathAvg}</p>
                </div>
            </div>

            {/* History List */}
            <h3 className="font-bold text-xl text-slate-900 mb-6 flex items-center gap-2"><Calendar className="w-5 h-5 text-slate-400" /> Test History</h3>
            <div className="space-y-4">
                {history.slice().reverse().map((test, i) => {
                    const date = new Date(test.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                    return (
                        <div key={i} className="glass-card p-6 hover:border-blue-200 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <h4 className="font-bold text-slate-900 text-lg mb-1 tracking-tight">{test.testTitle}</h4>
                                <p className="text-sm font-medium text-slate-500">{date}</p>
                            </div>

                            <div className="flex items-center gap-6 sm:gap-10">
                                <div className="text-center">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Reading</p>
                                    <p className="font-bold text-slate-900 text-lg">{test.englishScore}</p>
                                </div>
                                <div className="h-10 w-px bg-slate-200" />
                                <div className="text-center">
                                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Math</p>
                                    <p className="font-bold text-slate-900 text-lg">{test.mathScore}</p>
                                </div>
                                <div className="h-12 w-px bg-slate-200 hidden sm:block" />
                                <div className="text-center bg-blue-50/50 px-6 py-2 rounded-xl border border-blue-100">
                                    <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider mb-0.5">Total</p>
                                    <p className="text-2xl font-bold text-blue-700 tracking-tight">{test.totalScore}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
