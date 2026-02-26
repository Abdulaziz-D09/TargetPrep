const fs = require('fs');
const path = require('path');

const pageFile = path.join(__dirname, 'target-prep/src/app/practice/test/[id]/page.tsx');
let pageCode = fs.readFileSync(pageFile, 'utf8');

// 1. Add states for Check Work and Desmos
pageCode = pageCode.replace(
    `const [isNavPanelOpen, setIsNavPanelOpen] = useState(false);`,
    `const [isNavPanelOpen, setIsNavPanelOpen] = useState(false);\n    const [showCheckWork, setShowCheckWork] = useState(false);\n    const [isDesmosOpen, setIsDesmosOpen] = useState(false);`
);

// 2. Adjust dragging boundaries and handle Next logic
pageCode = pageCode.replace(
    `if (newWidth > 20 && newWidth < 80) setLeftPanelWidth(newWidth);`,
    `if (newWidth > 10 && newWidth < 90) setLeftPanelWidth(newWidth);`
);

// 3. Update handleNext
pageCode = pageCode.replace(
    `const handleNext = () => {
        if (currentQuestionIndex < totalQuestions - 1) {
            nextQuestion();
        } else {
            if (currentModuleIndex < currentSection.modules.length - 1) {
                setTransitionState('moduleEnd');
            } else if (currentSectionIndex < test.sections.length - 1) {
                setTransitionState('sectionEnd');
            } else {
                finishTest();
            }
        }
    };`,
    `const handleNext = () => {
        if (showCheckWork) {
            setShowCheckWork(false);
            if (currentModuleIndex < currentSection.modules.length - 1) {
                setTransitionState('moduleEnd');
            } else if (currentSectionIndex < test.sections.length - 1) {
                setTransitionState('sectionEnd');
            } else {
                finishTest();
            }
            return;
        }

        if (currentQuestionIndex < totalQuestions - 1) {
            nextQuestion();
        } else {
            setShowCheckWork(true);
        }
    };`
);

// 4. Update transition screen UI to match "This Module Is Over" and Check Work
pageCode = pageCode.replace(
    `if (transitionState !== 'none') {
        const isModule = transitionState === 'moduleEnd';
        return (
            <div className="h-full flex items-center justify-center bg-slate-50 p-8 fade-in">
                <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg border border-slate-200 p-12">
                    <div className={\`w-20 h-20 \${isModule ? 'bg-blue-100' : 'bg-emerald-100'} rounded-full flex items-center justify-center mx-auto mb-6\`}>
                        {isModule ? <Coffee className="w-10 h-10 text-blue-600" /> : <CheckCircle className="w-10 h-10 text-emerald-600" />}
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">
                        {isModule ? \`Module \${currentModuleIndex + 1} Complete!\` : 'Section Complete!'}
                    </h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">
                        {isModule ? 'Great job! Take a short break before starting the next module. You have a 10-minute break.' : 'You\\'ve completed this section. Next up: Math. You may take a break before continuing.'}
                    </p>
                    <button onClick={startNextPart} className={\`w-full \${isModule ? 'bg-blue-600 hover:bg-blue-700 shadow-blue-200' : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200'} text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5\`}>
                        {isModule ? \`Start Module \${currentModuleIndex + 2}\` : 'Continue to Math'}
                    </button>
                </div>
            </div>
        );
    }`,
    `if (transitionState !== 'none') {
        const isModule = transitionState === 'moduleEnd';
        
        // Auto-advance for moduleEnd
        if (isModule) {
            setTimeout(() => {
                startNextPart();
            }, 3000);
            return (
                <div className="h-full flex flex-col items-center justify-center bg-white p-8 fade-in">
                    <h2 className="text-[26px] font-normal text-[#3b82f6] mb-6">This Module Is Over</h2>
                    <div className="text-center text-[#111827] space-y-3 mb-10 text-[15px]">
                        <p>All your work has been saved.</p>
                        <p>You'll move on automatically in just a moment.</p>
                        <p>Do not refresh this page or quit the app.</p>
                    </div>
                    <div className="w-8 h-8 rounded-full border-[3px] border-slate-200 border-t-slate-800 animate-spin"></div>
                </div>
            );
        }

        return (
            <div className="h-full flex items-center justify-center bg-slate-50 p-8 fade-in">
                <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-lg border border-slate-200 p-12">
                    <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Section Complete!</h2>
                    <p className="text-slate-600 mb-8 leading-relaxed">You've completed this section. Next up: Math. You may take a break before continuing.</p>
                    <button onClick={startNextPart} className="w-full bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                        Continue to Math
                    </button>
                </div>
            </div>
        );
    }`
);

// 5. Update header left side & Tools (Top Bar)
pageCode = pageCode.replace(
    `<button
                        onClick={() => setIsDirectionsOpen(!isDirectionsOpen)}
                        className="flex items-center gap-2 text-[#374151] font-bold text-[15px] hover:bg-[#E5E7EB] px-3 py-1.5 rounded-md transition-colors"
                    >
                        Directions
                        <ChevronDown className={\`w-4 h-4 transition-transform \${isDirectionsOpen ? 'rotate-180' : ''}\`} />
                    </button>`,
    `<span className="font-bold text-[#111827] text-[15px] mr-4 ml-4">{currentSection?.name}: Module {currentModuleIndex + 1}</span>
                    <button
                        onClick={() => setIsDirectionsOpen(!isDirectionsOpen)}
                        className="flex items-center gap-1.5 text-[#374151] font-bold text-[13px] hover:bg-black/5 px-2 py-1 rounded transition-colors"
                    >
                        Directions
                        <ChevronDown className={\`w-[14px] h-[14px] transition-transform \${isDirectionsOpen ? 'rotate-180' : ''}\`} />
                    </button>`
);

pageCode = pageCode.replace(
    `<button
                        onClick={() => setIsHighlightActive(!isHighlightActive)}
                        className={\`flex flex-col items-center justify-center gap-1.5 w-[80px] h-[64px] rounded-lg transition-colors border border-transparent \${isHighlightActive ? 'bg-slate-200 text-slate-900 shadow-inner' : 'hover:bg-black/5 text-slate-700'}\`}
                    >
                        <Highlighter className="w-[24px] h-[24px]" />
                        <span className="font-bold text-[12px] leading-none">Highlight</span>
                    </button>`,
    `{currentSection?.name === 'Math' ? (
                        <button
                            onClick={() => setIsDesmosOpen(!isDesmosOpen)}
                            className={\`flex flex-col items-center justify-center gap-1.5 w-[80px] h-[64px] rounded-lg transition-colors border border-transparent \${isDesmosOpen ? 'bg-slate-200 text-slate-900 shadow-inner' : 'hover:bg-black/5 text-slate-700'}\`}
                        >
                            <Calculator className="w-[24px] h-[24px]" />
                            <span className="font-bold text-[12px] leading-none">Calculator</span>
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsHighlightActive(!isHighlightActive)}
                            className={\`flex flex-col items-center justify-center gap-1.5 w-[80px] h-[64px] rounded-lg transition-colors border border-transparent \${isHighlightActive ? 'bg-slate-200 text-slate-900 shadow-inner' : 'hover:bg-black/5 text-slate-700'}\`}
                        >
                            <Highlighter className="w-[24px] h-[24px]" />
                            <span className="font-bold text-[12px] leading-none">Highlight</span>
                        </button>
                    )}`
);

pageCode = pageCode.replace(
    `<button
                        onClick={() => { if (confirm('Are you sure you want to Save and Exit?')) { resetTest(); router.push('/practice'); } }}
                        className="flex flex-col items-center justify-center gap-1.5 w-[84px] h-[64px] rounded-lg hover:bg-black/5 text-slate-700 transition-colors ml-2"
                    >
                        <span className="bg-slate-700 text-white rounded-[4px] text-[13px] px-2 py-0.5 font-bold leading-tight flex items-center justify-center">X</span>
                        <span className="font-bold text-[12px] leading-none">Save & Exit</span>
                    </button>`,
    `{/* More Button (Replaces Save & Exit) */}
                    <button
                        onClick={() => { if (confirm('Are you sure you want to Save and Exit?')) { resetTest(); router.push('/practice'); } }}
                        className="flex flex-col items-center justify-center gap-1.5 w-[84px] h-[64px] rounded-lg hover:bg-black/5 text-slate-700 transition-colors ml-2 mr-4"
                    >
                        <MoreHorizontal className="w-[24px] h-[24px]" />
                        <span className="font-bold text-[12px] leading-none">More</span>
                    </button>`
);

// 6. Split Pane Adjustments & Check Work UI Container
// Find "<main className=\"flex-1 flex overflow-hidden\">"
pageCode = pageCode.replace(
    `<main className="flex-1 flex overflow-hidden">`,
    `<main className="flex-1 flex overflow-hidden justify-center bg-[#F3F4F6] pb-[70px]">
                {!showCheckWork ? (
                <div className="w-full max-w-[1400px] bg-white mx-4 mt-2 mb-2 rounded border border-slate-200 shadow-sm flex overflow-hidden relative">`
);

// Left Pane contents 
pageCode = pageCode.replace(
    `{/* Left Pane (Passage) */}
                <div className="overflow-y-auto p-4 lg:p-8 pr-4 lg:pr-6 flex justify-center bg-white" style={{ width: \`\${leftPanelWidth}%\` }}>
                    <div className="w-full max-w-[800px] relative mt-2">
                        {currentQuestion?.passage ? (
                            <HighlightableText
                                text={currentQuestion.passage}
                                highlights={highlights[questionKey] || []}
                                onAddHighlight={(h) => addHighlight(questionKey, { ...h, id: Math.random().toString(36).substring(2, 11) })}
                                onRemoveHighlight={(id) => removeHighlight(questionKey, id)}
                                onUpdateHighlight={(id, updates) => updateHighlight(questionKey, id, updates)}
                                isHighlightModeActive={isHighlightActive}
                            />
                        ) : (
                            <div className="text-[17px] text-[#6B7280] leading-[1.8] font-serif italic text-center mt-20">
                                No passage for this question.
                            </div>
                        )}
                    </div>
                </div>`,
    `{/* Left Pane (Passage or Desmos) */}
                {currentSection?.name === 'Math' ? (
                    <div className={\`overflow-hidden bg-white relative \${isDesmosOpen ? 'flex' : 'hidden'}\`} style={{ width: \`\${leftPanelWidth}%\` }}>
                        <iframe src="https://www.desmos.com/calculator" width="100%" height="100%" frameBorder={0} style={{ border: 'none' }} className="absolute inset-0 z-10"></iframe>
                    </div>
                ) : (
                    <div className="overflow-y-auto p-4 lg:p-10 pr-4 lg:pr-6 flex justify-center bg-white" style={{ width: \`\${leftPanelWidth}%\` }}>
                        <div className="w-full max-w-[800px] relative mt-2">
                            {currentQuestion?.passage ? (
                                <HighlightableText
                                    text={currentQuestion.passage}
                                    highlights={highlights[questionKey] || []}
                                    onAddHighlight={(h) => addHighlight(questionKey, { ...h, id: Math.random().toString(36).substring(2, 11) })}
                                    onRemoveHighlight={(id) => removeHighlight(questionKey, id)}
                                    onUpdateHighlight={(id, updates) => updateHighlight(questionKey, id, updates)}
                                    isHighlightModeActive={isHighlightActive}
                                />
                            ) : (
                                <div className="text-[17px] text-[#6B7280] leading-[1.8] font-serif italic text-center mt-20">
                                    No passage for this question.
                                </div>
                            )}
                        </div>
                    </div>
                )}`
);

pageCode = pageCode.replace(
    `{/* Resizable Divider */}
                <div
                    onMouseDown={() => setIsDragging(true)}
                    className="w-2 bg-violet-500 border-x border-violet-600 cursor-col-resize hover:bg-violet-600 active:bg-violet-700 flex items-center justify-center flex-shrink-0 transition-colors z-10"
                >
                    <div className="h-10 w-8 bg-slate-800 rounded-md flex items-center justify-center text-slate-300 shadow-md">
                        <ArrowLeft className="w-3 h-3 -mr-1" />
                        <ArrowRight className="w-3 h-3 -ml-0.5" />
                    </div>
                </div>`,
    `{/* Resizable Divider */}
                {(!Math || (currentSection?.name === 'Math' && isDesmosOpen) || currentSection?.name !== 'Math') && (
                    <div
                        onMouseDown={() => setIsDragging(true)}
                        className="w-[3px] bg-[#E5E7EB] hover:bg-[#D1D5DB] cursor-col-resize flex items-center justify-center flex-shrink-0 transition-colors z-20 relative group"
                    >
                        {/* The handle with triangles */}
                        <div className="h-[50px] w-[14px] bg-white border border-[#D1D5DB] rounded-full flex flex-col items-center justify-center shadow-sm absolute left-1/2 -translate-x-1/2 group-hover:bg-[#F3F4F6]">
                            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-r-[5px] border-r-slate-400 mb-1 pointer-events-none"></div>
                            <div className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[5px] border-l-slate-400 pointer-events-none"></div>
                        </div>
                    </div>
                )}`
);

pageCode = pageCode.replace(
    `<div className="overflow-y-auto p-4 lg:p-8 pl-4 lg:pl-8 flex justify-center bg-white" style={{ width: \`\${100 - leftPanelWidth}%\` }}>`,
    `<div className="overflow-y-auto p-4 lg:p-10 pl-4 lg:pl-8 flex justify-center bg-white" style={{ width: (currentSection?.name === 'Math' && !isDesmosOpen) ? '100%' : \`\${100 - leftPanelWidth}%\` }}>`
);

// MFR Button updates for hover states
pageCode = pageCode.replace(
    `<button
                                onClick={() => toggleFlag(questionKey)}
                                className="flex flex-1 items-center gap-2 px-4 py-2.5 bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#4B5563] font-bold text-[14px] transition-colors justify-start"
                            >`,
    `<button
                                onClick={() => toggleFlag(questionKey)}
                                className="flex flex-1 items-center gap-2 px-4 py-2.5 bg-white border-b border-[#E5E7EB] group/mfr text-[#4B5563] text-[14px] transition-colors justify-start"
                            >`
);

pageCode = pageCode.replace(
    `<Bookmark className={\`w-[14px] h-[14px] \${flaggedQuestions[questionKey] ? 'fill-slate-600 text-slate-600' : 'text-slate-500'}\`} />
                                <span>Mark for Review</span>`,
    `<Bookmark className={\`w-[14px] h-[14px] transition-colors \${flaggedQuestions[questionKey] ? 'fill-slate-600 text-slate-600' : 'text-slate-400 group-hover/mfr:text-slate-600'}\`} />
                                <span className={flaggedQuestions[questionKey] ? 'font-bold' : 'font-medium group-hover/mfr:font-bold'}>Mark for Review</span>`
);

// Hover states for answers
pageCode = pageCode.replace(
    `<label
                                            htmlFor={\`opt-\${i}\`}
                                            className={\`relative flex-1 p-3 px-4 border min-h-[58px] rounded-[10px] flex items-center cursor-pointer bg-white transition-all overflow-hidden \${isSelected ? 'border-[#111827] shadow-[inset_0_0_0_1px_#111827,0_0_0_1.5px_#111827]' : 'border-slate-400 hover:border-slate-500'}\`}
                                        >`,
    `<label
                                            htmlFor={\`opt-\${i}\`}
                                            className={\`relative flex-1 p-3 px-4 border min-h-[58px] rounded-[10px] flex items-center cursor-pointer transition-all overflow-hidden \${isSelected ? 'border-[#111827] shadow-[inset_0_0_0_1px_#111827,0_0_0_1.5px_#111827] bg-[#f8fafc]' : 'border-slate-400 hover:border-slate-500 bg-white hover:bg-[#F3F4F6]'}\`}
                                        >`
);

// End of main content
pageCode = pageCode.replace(
    `</div>
                    </div>
                </div>
            </main>`,
    `</div>
                    </div>
                </div>
                </div>
                ) : (
                    <div className="w-full flex justify-center py-10 fade-in bg-white h-full relative">
                        <div className="w-full max-w-4xl flex flex-col items-center">
                            <h2 className="text-[28px] font-normal text-[#111827] mb-4">Check Your Work</h2>
                            <p className="text-[#4B5563] text-center mb-1 text-[15px]">On test day, you won't be able to move on to the next module until time expires.</p>
                            <p className="text-[#4B5563] text-center mb-8 text-[15px]">For these practice questions, you can click <strong>Next</strong> when you're ready to move on.</p>
                            
                            <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm w-full p-6 max-h-[60vh] overflow-y-auto">
                                <div className="flex justify-between items-center mb-6 pb-4 border-b border-[#E5E7EB]">
                                    <h3 className="font-bold text-[16px] text-[#111827]">{currentSection?.name} Questions</h3>
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <div className="w-4 h-4 border-[1.5px] border-dashed border-[#9CA3AF]"></div>
                                            <span className="text-[13px] font-bold text-[#4B5563]">Unanswered</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Bookmark className="w-[14px] h-[14px] fill-red-600 text-red-600" />
                                            <span className="text-[13px] font-bold text-[#4B5563]">For Review</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-11 gap-4 gap-y-6 justify-items-center">
                                    {Array.from({ length: totalQuestions }).map((_, idx) => {
                                        const key = \`\${currentSectionIndex}-\${currentModuleIndex}-\${idx}\`;
                                        const isAnswered = userAnswers[key] !== undefined;
                                        const isFlagged = flaggedQuestions[key];

                                        let boxClass = 'cursor-pointer font-bold text-[15px] flex items-center justify-center relative transition-all ';

                                        if (isAnswered) {
                                            boxClass += 'border-[1.5px] border-blue-600 bg-white text-blue-600 w-10 h-10 hover:bg-blue-50';
                                        } else {
                                            boxClass += 'border-[1.5px] border-dashed border-blue-600 text-blue-600 bg-white w-10 h-10 hover:bg-blue-50';
                                        }

                                        return (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    useTestStore.setState({ currentQuestionIndex: idx });
                                                    setShowCheckWork(false);
                                                }}
                                                className={boxClass}
                                            >
                                                {idx + 1}
                                                {isFlagged && (
                                                    <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                                                        <Bookmark className="w-[12px] h-[12px] fill-red-600 text-red-600" />
                                                    </div>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>`
);

// 7. Footer formatting
const footerFind = `<footer className="bg-blue-50/60 border-t border-blue-100 px-6 py-4 flex items-center justify-between shrink-0 shadow-[0_-2px_10px_rgba(0,0,0,0.02)]">`;
const footerReplace = `<div className="w-full flex justify-center w-full px-6 bg-[#F3F4F6] border-t border-slate-300 border-dashed absolute bottom-[68px]"></div>
            <footer className="bg-[#E5E7EB] border-t border-[#D1D5DB] px-6 h-[70px] flex items-center justify-between shrink-0 absolute bottom-0 left-0 right-0 z-40">`;
pageCode = pageCode.replace(footerFind, footerReplace);

pageCode = pageCode.replace(
    `<div className="flex-1 flex justify-center">
                    <button
                        onClick={() => setIsNavPanelOpen(true)}
                        className="flex items-center gap-2 px-6 py-2 rounded-none font-bold text-slate-900 bg-slate-50 hover:bg-slate-100 transition-colors border-2 border-slate-900 shadow-[2px_2px_0px_#0f172a] active:shadow-none active:translate-y-[2px] active:translate-x-[2px]"
                    >
                        <span className="text-[14px] tracking-wide">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                        <ChevronDown className="w-4 h-4" />
                    </button>
                </div>`,
    `{!showCheckWork && (
                    <div className="flex-1 flex justify-center absolute left-1/2 -translate-x-1/2 -top-[23px]">
                        <button
                            onClick={() => setIsNavPanelOpen(true)}
                            className="group flex flex-col items-center justify-center gap-0 w-[180px] h-[46px] rounded-[5px] font-bold text-white bg-[#222222] hover:bg-[#333333] transition-colors relative shadow-sm"
                        >
                            <span className="text-[14px] tracking-wide mt-1">Question {currentQuestionIndex + 1} of {totalQuestions}</span>
                            <ChevronDown className="w-[18px] h-[18px] mb-1" />
                            <div className="absolute -bottom-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#222222] group-hover:border-t-[#333333]"></div>
                        </button>
                    </div>
                )}`
);

// Bottom left name placeholder
pageCode = pageCode.replace(
    `<div className="text-[#6B7280] font-semibold text-sm w-48 font-serif italic">
                    {/* Math is removed so no calculator text here */}
                </div>`,
    `<div className="text-[#111827] font-bold text-[13px] w-48">
                    Abdulaziz Davronov
                </div>`
);

pageCode = pageCode.replace(
    `<button
                        onClick={prevQuestion}
                        disabled={currentQuestionIndex === 0}
                        className="bg-white border-2 border-slate-900 text-slate-900 px-6 py-1.5 rounded-none font-bold text-[14px] tracking-wide disabled:opacity-30 disabled:border-slate-400 disabled:text-slate-400 transition-all hover:bg-slate-50 shadow-[2px_2px_0px_#0f172a] active:shadow-none active:translate-y-[2px] active:translate-x-[2px]"
                    >
                        Previous
                    </button>`,
    `<button
                        onClick={() => {
                            if (showCheckWork) {
                                setShowCheckWork(false);
                            } else {
                                prevQuestion();
                            }
                        }}
                        disabled={currentQuestionIndex === 0 && !showCheckWork}
                        className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-2 rounded-full font-bold text-[15px] transition-all disabled:opacity-50 disabled:bg-slate-400 disabled:cursor-not-allowed"
                    >
                        Back
                    </button>`
);

pageCode = pageCode.replace(
    `<button
                        onClick={handleNext}
                        className="bg-slate-900 border-2 border-slate-900 text-white px-8 py-1.5 rounded-none font-bold text-[14px] tracking-wide transition-all hover:bg-slate-800 shadow-[2px_2px_0px_#0f172a] active:shadow-none active:translate-y-[2px] active:translate-x-[2px]"
                    >
                        {isFinalStep ? 'Submit' : 'Next'}
                    </button>`,
    `<button
                        onClick={handleNext}
                        className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-2 rounded-full font-bold text-[15px] transition-all disabled:opacity-50"
                    >
                        {showCheckWork && isFinalStep ? 'Submit' : 'Next'}
                    </button>`
);

pageCode = pageCode.replace(
    `const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
    const isFinalStep = isLastQuestion && currentModuleIndex === currentSection?.modules.length - 1 && currentSectionIndex === test.sections.length - 1;`,
    `const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
    const isFinalStep = currentModuleIndex === currentSection?.modules.length - 1 && currentSectionIndex === test.sections.length - 1;`
);

pageCode = pageCode.replace(
    `const startNextPart = () => {
        if (transitionState === 'moduleEnd') {
            goToModule(currentSectionIndex, currentModuleIndex + 1);
            setTimeRemaining(test.sections[currentSectionIndex].modules[currentModuleIndex + 1].timeMinutes * 60);
        } else if (transitionState === 'sectionEnd') {
            goToModule(currentSectionIndex + 1, 0);
            setTimeRemaining(test.sections[currentSectionIndex + 1].modules[0].timeMinutes * 60);
        }
        setTransitionState('none');
    };`,
    `const startNextPart = () => {
        if (transitionState === 'moduleEnd') {
            goToModule(currentSectionIndex, currentModuleIndex + 1);
            setTimeRemaining(test.sections[currentSectionIndex].modules[currentModuleIndex + 1].timeMinutes * 60);
        } else if (transitionState === 'sectionEnd') {
            goToModule(currentSectionIndex + 1, 0);
            setTimeRemaining(test.sections[currentSectionIndex + 1].modules[0].timeMinutes * 60);
        }
        setTransitionState('none');
        setShowCheckWork(false);
    };`
);


// 8. Update target-prep/src/data/questions.ts
const dataFile = path.join(__dirname, 'target-prep/src/data/questions.ts');
let dataCode = fs.readFileSync(dataFile, 'utf8');

const mathReplacementStr = `
                        ],
                        "timeMinutes": 32
                    }
                ]
            },
            {
                name: 'Math',
                modules: [
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, i) => ({
                            id: \`m1-\${i + 1}\`,
                            type: 'Math' as const,
                            question: \`[SM1Q\${i + 1}] This is a math question. Provide the correct answer based on the problem statement.\`,
                            options: ["10", "15", "20", "25"],
                            answer: 2,
                            explanation: "Sample math explanation.",
                            difficulty: "Medium" as const,
                            calc: true
                        }))
                    },
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, i) => ({
                            id: \`m2-\${i + 1}\`,
                            type: 'Math' as const,
                            question: \`[SM2Q\${i + 1}] This is a math question. Provide the correct answer based on the problem statement.\`,
                            options: ["2", "4", "6", "8"],
                            answer: 1,
                            explanation: "Sample math explanation.",
                            difficulty: "Hard" as const,
                            calc: true
                        }))
                    }
                ]
            }
        ]
    }
];`;

dataCode = dataCode.replace(
    /\s+],\s+"timeMinutes": 32\s+}\s+\]\s+}\s+\]\s+}\s+\];/,
    mathReplacementStr
);

fs.writeFileSync(pageFile, pageCode);
fs.writeFileSync(dataFile, dataCode);
console.log("Success");
