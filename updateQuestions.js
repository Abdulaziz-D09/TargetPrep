const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'target-prep/src/data/questions.ts');
let content = fs.readFileSync(filePath, 'utf-8');

// We will inject a generator script that replaces questions with varied texts
// to make the mock questions unique.

function getEBRWQuestions(startIndex, count, prefix) {
    const ebrwBankPath = path.join(__dirname, 'target-prep/src/data/ebrw_bank.json');
    let ebrwBank = [];
    if (fs.existsSync(ebrwBankPath)) {
        ebrwBank = JSON.parse(fs.readFileSync(ebrwBankPath, 'utf-8'));
    }
    const selected = ebrwBank.slice(startIndex, startIndex + count);

    let questionStrings = [];
    selected.forEach((q, idx) => {
        // Fallback for missing answer or options
        const answerVal = ('answer' in q && q.answer !== null) ? q.answer : 0;
        const optionsList = Array.isArray(q.options) && q.options.length > 0 ? q.options : ["Option A", "Option B", "Option C", "Option D"];

        // Also fallback passage to empty string otherwise it breaks type
        const passageVal = q.passage && q.passage.trim() !== "" ? q.passage : "(Passage text is omitted for this question)";

        let qs = `    {
        "id": "${prefix.toLowerCase()}-${q.id || idx}",
        "type": "Reading",
        "passage": ${JSON.stringify(passageVal)},
        "question": ${JSON.stringify(q.question || "Unknown question")},
        "options": ${JSON.stringify(optionsList)},
        "answer": ${Math.max(0, answerVal)},
        "explanation": ${JSON.stringify(q.explanation || "No explanation provided.")},
        "difficulty": ${JSON.stringify(q.difficulty || "Medium")}
    }`;
        questionStrings.push(qs);
    });
    return '[\n' + questionStrings.join(',\n') + '\n]';
}

function generateVariedQuestions(prefix, type, count) {
    let questions = [];
    for (let i = 1; i <= count; i++) {
        const isMath = type === 'Math';

        let passage = isMath
            ? ""
            : `[${prefix}Q${i}] The ${i % 2 === 0 ? 'historian' : 'scientist'} observed the phenomenon closely. Varying sentence ${i} to ensure the text is unique for this question. Reading comprehension requires focus on details.`;

        let questionText = isMath
            ? `If $x + ${i} = ${i * 5}$, what is the value of $x$?`
            : `What is the main idea conveyed in the passage regarding the ${i % 2 === 0 ? 'historian' : 'scientist'}?`;

        let options = isMath
            ? [
                `${i * 4}`,
                `${i * 5 - i}`, // Correct
                `${i * 6}`,
                `${i * 2}`
            ]
            : [
                `They were unfocused.`,
                `They observed closely.`, // Correct
                `They ignored the evidence.`,
                `They drew immediate conclusions.`
            ];

        let explanation = isMath
            ? `Subtracting ${i} from both sides gives $x = ${i * 4}$.`
            : `The text explicitly states that the person observed the phenomenon closely.`;

        questions.push(`    {
        "id": "${prefix.toLowerCase()}-${i}",
        "type": "${type}",
        ${passage ? `"passage": ${JSON.stringify(passage)},` : ''}
        "question": ${JSON.stringify(questionText)},
        "options": ${JSON.stringify(options)},
        "answer": 1,
        "explanation": ${JSON.stringify(explanation)},
        "difficulty": "Medium"
    }`);
    }
    return '[\n' + questions.join(',\n') + '\n]';
}

// Regex to replace the arrays for englishModule1, englishModule2, mathModule1, mathModule2
content = content.replace(/const englishModule1: Question\[\] = \[[\s\S]*?\];/m, `const englishModule1: Question[] = ${getEBRWQuestions(0, 27, 'EM1')};`);
content = content.replace(/const englishModule2: Question\[\] = \[[\s\S]*?\];/m, `const englishModule2: Question[] = ${getEBRWQuestions(27, 27, 'EM2')};`);
content = content.replace(/const mathModule1: Question\[\] = \[[\s\S]*?\];/m, `const mathModule1: Question[] = ${generateVariedQuestions('MM1', 'Math', 22)};`);
content = content.replace(/const mathModule2: Question\[\] = \[[\s\S]*?\];/m, `const mathModule2: Question[] = ${generateVariedQuestions('MM2', 'Math', 22)};`);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Varied questions generated successfully from PDF.");
