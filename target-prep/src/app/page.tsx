'use client';
import { useEffect, useState } from 'react';
import { Clock, Flame, TrendingUp, CheckCircle, Calendar, ExternalLink, ArrowRight, ChevronRight, X, AlertCircle, FileCheck2, Info } from 'lucide-react';
import Link from 'next/link';
import { satDates } from '@/data/questions';

export default function HomePage() {
  const [date, setDate] = useState('');
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [stats, setStats] = useState({ streak: 12, avgScore: 1280, completed: 8 });
  const [expired, setExpired] = useState(false);
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [drawerTimeLeft, setDrawerTimeLeft] = useState<{ days: number, hours: number, mins: number, secs: number } | null>(null);
  const [drawerRegTimeLeft, setDrawerRegTimeLeft] = useState<{ days: number, hours: number, mins: number, secs: number } | null>(null);

  useEffect(() => {
    setDate(new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));

    // Attempt to merge real localStorage data if available, otherwise use defaults
    try {
      const data = localStorage.getItem('targetprep_progress');
      if (data) {
        const p = JSON.parse(data);
        const tests = p.completedTests || [];
        if (tests.length > 0) {
          const avg = Math.round(tests.reduce((a: any, t: any) => a + t.totalScore, 0) / tests.length);
          setStats({ streak: p.streak || 12, avgScore: avg, completed: tests.length });
        }
      }
    } catch { }

    const targetDate = new Date('March 14, 2026 08:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setExpired(true);
        return false;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
      return true;
    };

    // Call immediately to prevent the 1-second mounting lag
    updateCountdown();

    const interval = setInterval(() => {
      const keepGoing = updateCountdown();
      if (!keepGoing) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!selectedDate) return;

    const targetTestDate = new Date(selectedDate.target).getTime();
    const regDeadlineArr = selectedDate.registrationDeadline.split(', ');
    const regYear = regDeadlineArr.length === 2 ? regDeadlineArr[1] : new Date().getFullYear();
    const regStr = `${selectedDate.registrationDeadline}, ${regYear} 23:59:59`;
    const targetRegDate = new Date(regStr).getTime();

    const updateDrawerCountdown = () => {
      const now = new Date().getTime();
      const testDist = targetTestDate - now;
      const regDist = targetRegDate - now;

      if (testDist > 0) {
        setDrawerTimeLeft({
          days: Math.floor(testDist / (1000 * 60 * 60 * 24)),
          hours: Math.floor((testDist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((testDist % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((testDist % (1000 * 60)) / 1000),
        });
      } else setDrawerTimeLeft(null);

      if (regDist > 0) {
        setDrawerRegTimeLeft({
          days: Math.floor(regDist / (1000 * 60 * 60 * 24)),
          hours: Math.floor((regDist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((regDist % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((regDist % (1000 * 60)) / 1000),
        });
      } else setDrawerRegTimeLeft(null);
    };

    updateDrawerCountdown();
    const intId = setInterval(updateDrawerCountdown, 1000);
    return () => clearInterval(intId);
  }, [selectedDate]);
  return (
    <>
      <div className="view-section">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 pt-12 lg:pt-0">
          <div>
            <p className="text-slate-600">Welcome back! Ready to ace your SAT?</p>
          </div>
          <div className="text-left sm:text-right">
            <p className="text-sm text-slate-500 mb-1">{date}</p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl shadow-blue-200 mb-8 relative overflow-hidden fade-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 text-blue-100">
              <Clock className="w-5 h-5" />
              <span className="font-semibold tracking-wide uppercase text-sm">Next SAT Countdown</span>
            </div>

            {expired ? (
              <div className="text-2xl font-bold mt-4">Exam time has arrived! Good luck! 🎯</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                {[
                  { label: 'Days', val: timeLeft.days },
                  { label: 'Hours', val: timeLeft.hours },
                  { label: 'Minutes', val: timeLeft.minutes },
                  { label: 'Seconds', val: timeLeft.seconds }
                ].map((item) => (
                  <div key={item.label} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20">
                    <div className="text-4xl font-bold mb-1">{item.val.toString().padStart(2, '0')}</div>
                    <div className="text-sm text-blue-100 font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
            )}
            <p className="mt-4 text-blue-100 text-sm">Next SAT Test: March 14th, 2026 8:00 AM</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 fade-in">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 transition-shadow hover:shadow-md">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <Flame className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Streak</h3>
            <p className="text-2xl font-bold text-slate-900 mb-1">{stats.streak} Days</p>
            <p className="text-sm text-slate-500">Keep it up!</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 transition-shadow hover:shadow-md">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Avg. Score</h3>
            <p className="text-2xl font-bold text-slate-900 mb-1">{stats.avgScore}</p>
            <p className="text-sm text-slate-500">+40 from last test</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 transition-shadow hover:shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Completed</h3>
            <p className="text-2xl font-bold text-slate-900 mb-1">{stats.completed} Tests</p>
            <p className="text-sm text-slate-500">Great progress!</p>
          </div>
        </div>

        {/* Upcoming Dates & Registration */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 fade-in">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-lg text-slate-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                Upcoming SAT Dates
              </h3>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">2026</span>
            </div>
            <div className="space-y-3">
              {satDates.filter(d => new Date(d.target).getTime() > new Date().getTime()).slice(0, 3).map((date, i) => {
                const isFirst = i === 0;
                const bg = isFirst ? 'bg-blue-100' : 'bg-slate-100';
                const text = isFirst ? 'text-blue-600' : 'text-slate-600';
                return (
                  <div onClick={() => setSelectedDate(date)} key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors cursor-pointer group shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center ${text} font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors`}>
                        {date.month}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-900">{date.date}</p>
                        <p className="text-xs text-slate-500">Registration Deadline: {date.registrationDeadline}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-sm p-6 text-white flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 backdrop-blur-sm">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-2">Ready to Register?</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Secure your spot for the upcoming SAT. Early registration ensures you get your preferred testing location.
              </p>
            </div>
            <a href="https://satreg.collegeboard.org" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Register for SAT
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Centered Modal Overlay */}
      {
        selectedDate && (
          <div className="fixed inset-0 lg:left-64 z-50 flex items-center justify-center p-4">
            {/* Blurry Backdrop */}
            <div
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedDate(null)}
            ></div>

            {/* Centered Modal Panel */}
            <div className="relative w-full max-w-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[90vh] ">

              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-slate-50/80 backdrop-blur">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-1">{selectedDate.date}</h2>
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Registration Open
                  </div>
                </div>
                <button
                  onClick={() => setSelectedDate(null)}
                  className="p-2 -mr-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8">

                {/* Deadlines Section */}
                <section>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                    <Calendar className="w-4 h-4" /> Dates & Deadlines
                  </h3>
                  <div className="bg-white border text-[14px] border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="p-4 border-b border-slate-100 flex justify-between items-center group hover:bg-slate-50 transition-colors">
                      <span className="font-medium text-slate-700">Registration Deadline</span>
                      <span className="font-bold text-slate-900">{selectedDate.registrationDeadline}</span>
                    </div>
                    <div className="p-4 border-b border-slate-100 flex flex-col group hover:bg-slate-50 transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-slate-700">Late Registration</span>
                        <span className="font-bold text-slate-900">{selectedDate.lateRegistrationDeadline}</span>
                      </div>
                      <span className="text-xs text-orange-600 flex items-center gap-1"><AlertCircle className="w-3 h-3" /> Additional $34 late fee applies</span>
                    </div>
                    <div className="p-4 flex justify-between items-center group hover:bg-slate-50 transition-colors">
                      <span className="font-medium text-slate-700">Changes / Cancellation</span>
                      <span className="font-bold text-slate-900">{selectedDate.changeDeadline}</span>
                    </div>
                  </div>
                </section>

                {/* Fees Section */}
                <section>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                    <Info className="w-4 h-4" /> Fees structure
                  </h3>
                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-200 space-y-3 shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 text-[15px]">Standard Registration</span>
                      <span className="font-bold text-slate-900">$68</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 text-[15px]">Late Registration Fee</span>
                      <span className="font-bold text-slate-900">+$34</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 text-[15px]">Test Center Change</span>
                      <span className="font-bold text-slate-900">+$29</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 text-[15px]">Cancel Registration</span>
                      <span className="font-bold text-slate-900">+$29</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 text-[15px]">International Fee</span>
                      <span className="font-bold text-slate-900">+$43</span>
                    </div>
                    <div className="pt-3 border-t border-slate-200 mt-2 flex justify-between items-center">
                      <span className="font-bold text-slate-900">Total (International)</span>
                      <span className="font-bold text-[#2563EB]">$111</span>
                    </div>
                  </div>
                </section>

                {/* Requirements Section */}
                <section>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
                    <FileCheck2 className="w-4 h-4" /> What to Bring & Requirements
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Acceptable photo ID (Valid Passport, Driver's License, or School ID).",
                      "Printed or digital admission ticket from College Board.",
                      "Fully charged testing device with Bluebook app installed.",
                      "Arrive at test center by 7:45 AM (doors close roughly at 8:00 AM)."
                    ].map((req, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className="min-w-[20px] pt-0.5">
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                        </div>
                        <span className="text-sm text-slate-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Modal Footer CTA */}
              <div className="flex justify-center w-full p-4 bg-white border-t border-slate-200">
                <a href="https://satreg.collegeboard.org" target="_blank" rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#111827] text-white px-6 py-3.5 rounded-lg font-bold hover:bg-[#374151] transition-colors shadow-lg">
                  Register for this SAT
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        )
      }
    </>
  );
}
