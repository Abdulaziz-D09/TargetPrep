'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Home, FileText, BarChart2, BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/practice', label: 'Practice Tests', icon: FileText },
    { href: '/progress', label: 'Progress', icon: BarChart2 },
    { href: '/resources', label: 'Resources', icon: BookOpen },
];

export default function Sidebar() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/';
        return pathname.startsWith(href);
    };

    // Hide sidebar completely when taking a test
    if (pathname.startsWith('/practice/test/')) {
        return null;
    }

    const sidebarContent = (
        <div className="flex flex-col h-full">
            <div className="p-6 sm:p-8">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm flex-shrink-0 bg-white border border-slate-100 p-0.5">
                        <Image src="/logo.jpg" alt="Target Prep Logo" width={40} height={40} className="w-full h-full object-cover rounded-lg" />
                    </div>
                    <div>
                        <h1 className="font-bold text-xl text-slate-900 tracking-tight leading-none mb-1">Target Prep</h1>
                        <p className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">Platform</p>
                    </div>
                </div>
            </div>

            <nav className="flex-1 px-4 space-y-1.5">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm sidebar-item group ${active ? 'active' : ''
                                }`}
                        >
                            <Icon className={`w-[18px] h-[18px] transition-colors ${active ? 'text-white' : 'text-slate-400 group-hover:text-slate-700'}`} />
                            <span className="tracking-tight">{item.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-6">
                <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 p-4 rounded-xl cursor-not-allowed opacity-70">
                    <div className="w-8 h-8 rounded-full bg-slate-200" />
                    <div className="flex flex-col">
                        <span className="text-sm font-semibold text-slate-700">Student Account</span>
                        <span className="text-xs text-slate-400">Basic Plan</span>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile Toggle */}
            <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white border border-slate-200 text-slate-600 shadow-sm"
            >
                <Menu className="w-5 h-5" />
            </button>

            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex w-64 bg-white border-r border-slate-200 flex-col h-full shadow-sm z-10 shrink-0">
                {sidebarContent}
            </aside>

            {/* Mobile Sidebar */}
            {mobileOpen && (
                <div className="lg:hidden">
                    <div className="fixed inset-0 bg-slate-900/50 z-40" onClick={() => setMobileOpen(false)} />
                    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 flex flex-col z-50 shadow-2xl">
                        <button
                            onClick={() => setMobileOpen(false)}
                            className="absolute top-6 right-4 p-1 rounded-md text-slate-400 hover:text-slate-600 bg-white"
                        >
                            <X className="w-5 h-5" />
                        </button>
                        {sidebarContent}
                    </aside>
                </div>
            )}
        </>
    );
}
