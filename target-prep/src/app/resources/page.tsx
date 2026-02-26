'use client';
import { BookOpen } from 'lucide-react';

export default function ResourcesPage() {
    return (
        <div className="view-section">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Study Resources</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-12 text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Resources coming soon</h3>
                <p className="text-slate-500">Access study guides, formula sheets, and vocabulary lists.</p>
            </div>
        </div>
    );
}
