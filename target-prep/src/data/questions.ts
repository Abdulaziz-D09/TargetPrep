export interface Question {
    id: string;
    type: 'Reading' | 'Grammar' | 'Math';
    passage?: string;
    question: string;
    options: string[];
    answer: number;
    explanation: string;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    calc?: boolean;
}

export interface TestModule {
    questions: Question[];
    timeMinutes: number;
}

export interface TestSection {
    name: string;
    modules: TestModule[];
}

export interface PracticeTest {
    id: number;
    title: string;
    description: string;
    type: string;
    duration: string;
    totalQuestions: number;
    moduleCount: number;
    color: string;
    sections: TestSection[];
}

const englishModule1: Question[] = [
    {
        "id": "e1-1",
        "type": "Reading",
        "passage": "[EM1Q1] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-2",
        "type": "Reading",
        "passage": "[EM1Q2] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-3",
        "type": "Reading",
        "passage": "[EM1Q3] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-4",
        "type": "Reading",
        "passage": "[EM1Q4] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-5",
        "type": "Reading",
        "passage": "[EM1Q5] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-6",
        "type": "Reading",
        "passage": "[EM1Q6] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-7",
        "type": "Reading",
        "passage": "[EM1Q7] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-8",
        "type": "Reading",
        "passage": "[EM1Q8] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-9",
        "type": "Reading",
        "passage": "[EM1Q9] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-10",
        "type": "Reading",
        "passage": "[EM1Q10] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-11",
        "type": "Reading",
        "passage": "[EM1Q11] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-12",
        "type": "Reading",
        "passage": "[EM1Q12] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-13",
        "type": "Reading",
        "passage": "[EM1Q13] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-14",
        "type": "Reading",
        "passage": "[EM1Q14] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-15",
        "type": "Reading",
        "passage": "[EM1Q15] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-16",
        "type": "Reading",
        "passage": "[EM1Q16] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-17",
        "type": "Reading",
        "passage": "[EM1Q17] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-18",
        "type": "Reading",
        "passage": "[EM1Q18] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-19",
        "type": "Reading",
        "passage": "[EM1Q19] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-20",
        "type": "Reading",
        "passage": "[EM1Q20] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-21",
        "type": "Reading",
        "passage": "[EM1Q21] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-22",
        "type": "Reading",
        "passage": "[EM1Q22] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-23",
        "type": "Reading",
        "passage": "[EM1Q23] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-24",
        "type": "Reading",
        "passage": "[EM1Q24] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-25",
        "type": "Reading",
        "passage": "[EM1Q25] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-26",
        "type": "Reading",
        "passage": "[EM1Q26] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    },
    {
        "id": "e1-27",
        "type": "Reading",
        "passage": "[EM1Q27] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
        "question": "As used in the text, the word \"whispers\" most nearly means:",
        "options": [
            "Quiet sounds",
            "Subtle suggestions",
            "Warnings",
            "Faint traces"
        ],
        "answer": 1,
        "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
        "difficulty": "Medium"
    }
];

const englishModule2: Question[] = [
    {
        "id": "e2-1",
        "type": "Reading",
        "passage": "[EM2Q1] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-2",
        "type": "Reading",
        "passage": "[EM2Q2] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-3",
        "type": "Reading",
        "passage": "[EM2Q3] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-4",
        "type": "Reading",
        "passage": "[EM2Q4] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-5",
        "type": "Reading",
        "passage": "[EM2Q5] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-6",
        "type": "Reading",
        "passage": "[EM2Q6] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-7",
        "type": "Reading",
        "passage": "[EM2Q7] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-8",
        "type": "Reading",
        "passage": "[EM2Q8] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-9",
        "type": "Reading",
        "passage": "[EM2Q9] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-10",
        "type": "Reading",
        "passage": "[EM2Q10] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-11",
        "type": "Reading",
        "passage": "[EM2Q11] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-12",
        "type": "Reading",
        "passage": "[EM2Q12] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-13",
        "type": "Reading",
        "passage": "[EM2Q13] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-14",
        "type": "Reading",
        "passage": "[EM2Q14] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-15",
        "type": "Reading",
        "passage": "[EM2Q15] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-16",
        "type": "Reading",
        "passage": "[EM2Q16] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-17",
        "type": "Reading",
        "passage": "[EM2Q17] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-18",
        "type": "Reading",
        "passage": "[EM2Q18] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-19",
        "type": "Reading",
        "passage": "[EM2Q19] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-20",
        "type": "Reading",
        "passage": "[EM2Q20] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-21",
        "type": "Reading",
        "passage": "[EM2Q21] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-22",
        "type": "Reading",
        "passage": "[EM2Q22] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-23",
        "type": "Reading",
        "passage": "[EM2Q23] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-24",
        "type": "Reading",
        "passage": "[EM2Q24] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-25",
        "type": "Reading",
        "passage": "[EM2Q25] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-26",
        "type": "Reading",
        "passage": "[EM2Q26] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    },
    {
        "id": "e2-27",
        "type": "Reading",
        "passage": "[EM2Q27] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
        "question": "The primary purpose of the green roof is to:",
        "options": [
            "Reduce building costs",
            "Provide a habitat and reduce heat",
            "Impress the city council",
            "Block out city noise"
        ],
        "answer": 1,
        "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
        "difficulty": "Easy"
    }
];

export const practiceTests: PracticeTest[] = [
    {
        "id": 1,
        "title": "Practice Test 1",
        "description": "Full English SAT test",
        "type": "Full English",
        "duration": "1h 4m",
        "totalQuestions": 54,
        "moduleCount": 2,
        "color": "blue",
        "sections": [
            {
                "name": "Reading and Writing",
                "modules": [
                    {
                        "questions": [
                            {
                                "id": "e1-1",
                                "type": "Reading",
                                "passage": "[EM1Q1] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-2",
                                "type": "Reading",
                                "passage": "[EM1Q2] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-3",
                                "type": "Reading",
                                "passage": "[EM1Q3] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-4",
                                "type": "Reading",
                                "passage": "[EM1Q4] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-5",
                                "type": "Reading",
                                "passage": "[EM1Q5] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-6",
                                "type": "Reading",
                                "passage": "[EM1Q6] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-7",
                                "type": "Reading",
                                "passage": "[EM1Q7] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-8",
                                "type": "Reading",
                                "passage": "[EM1Q8] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-9",
                                "type": "Reading",
                                "passage": "[EM1Q9] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-10",
                                "type": "Reading",
                                "passage": "[EM1Q10] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-11",
                                "type": "Reading",
                                "passage": "[EM1Q11] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-12",
                                "type": "Reading",
                                "passage": "[EM1Q12] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-13",
                                "type": "Reading",
                                "passage": "[EM1Q13] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-14",
                                "type": "Reading",
                                "passage": "[EM1Q14] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-15",
                                "type": "Reading",
                                "passage": "[EM1Q15] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-16",
                                "type": "Reading",
                                "passage": "[EM1Q16] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-17",
                                "type": "Reading",
                                "passage": "[EM1Q17] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-18",
                                "type": "Reading",
                                "passage": "[EM1Q18] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-19",
                                "type": "Reading",
                                "passage": "[EM1Q19] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-20",
                                "type": "Reading",
                                "passage": "[EM1Q20] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-21",
                                "type": "Reading",
                                "passage": "[EM1Q21] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-22",
                                "type": "Reading",
                                "passage": "[EM1Q22] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-23",
                                "type": "Reading",
                                "passage": "[EM1Q23] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-24",
                                "type": "Reading",
                                "passage": "[EM1Q24] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-25",
                                "type": "Reading",
                                "passage": "[EM1Q25] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-26",
                                "type": "Reading",
                                "passage": "[EM1Q26] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-27",
                                "type": "Reading",
                                "passage": "[EM1Q27] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            }
                        ],
                        "timeMinutes": 32
                    },
                    {
                        "questions": [
                            {
                                "id": "e2-1",
                                "type": "Reading",
                                "passage": "[EM2Q1] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-2",
                                "type": "Reading",
                                "passage": "[EM2Q2] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-3",
                                "type": "Reading",
                                "passage": "[EM2Q3] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-4",
                                "type": "Reading",
                                "passage": "[EM2Q4] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-5",
                                "type": "Reading",
                                "passage": "[EM2Q5] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-6",
                                "type": "Reading",
                                "passage": "[EM2Q6] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-7",
                                "type": "Reading",
                                "passage": "[EM2Q7] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-8",
                                "type": "Reading",
                                "passage": "[EM2Q8] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-9",
                                "type": "Reading",
                                "passage": "[EM2Q9] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-10",
                                "type": "Reading",
                                "passage": "[EM2Q10] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-11",
                                "type": "Reading",
                                "passage": "[EM2Q11] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-12",
                                "type": "Reading",
                                "passage": "[EM2Q12] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-13",
                                "type": "Reading",
                                "passage": "[EM2Q13] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-14",
                                "type": "Reading",
                                "passage": "[EM2Q14] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-15",
                                "type": "Reading",
                                "passage": "[EM2Q15] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-16",
                                "type": "Reading",
                                "passage": "[EM2Q16] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-17",
                                "type": "Reading",
                                "passage": "[EM2Q17] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-18",
                                "type": "Reading",
                                "passage": "[EM2Q18] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-19",
                                "type": "Reading",
                                "passage": "[EM2Q19] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-20",
                                "type": "Reading",
                                "passage": "[EM2Q20] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-21",
                                "type": "Reading",
                                "passage": "[EM2Q21] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-22",
                                "type": "Reading",
                                "passage": "[EM2Q22] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-23",
                                "type": "Reading",
                                "passage": "[EM2Q23] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-24",
                                "type": "Reading",
                                "passage": "[EM2Q24] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-25",
                                "type": "Reading",
                                "passage": "[EM2Q25] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-26",
                                "type": "Reading",
                                "passage": "[EM2Q26] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-27",
                                "type": "Reading",
                                "passage": "[EM2Q27] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            }
                        ],
                        "timeMinutes": 32
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "title": "Practice Test 2",
        "description": "Full English SAT test",
        "type": "Full English",
        "duration": "1h 4m",
        "totalQuestions": 54,
        "moduleCount": 2,
        "color": "purple",
        "sections": [
            {
                "name": "Reading and Writing",
                "modules": [
                    {
                        "questions": [
                            {
                                "id": "e1-1",
                                "type": "Reading",
                                "passage": "[EM1Q1] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-2",
                                "type": "Reading",
                                "passage": "[EM1Q2] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-3",
                                "type": "Reading",
                                "passage": "[EM1Q3] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-4",
                                "type": "Reading",
                                "passage": "[EM1Q4] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-5",
                                "type": "Reading",
                                "passage": "[EM1Q5] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-6",
                                "type": "Reading",
                                "passage": "[EM1Q6] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-7",
                                "type": "Reading",
                                "passage": "[EM1Q7] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-8",
                                "type": "Reading",
                                "passage": "[EM1Q8] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-9",
                                "type": "Reading",
                                "passage": "[EM1Q9] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-10",
                                "type": "Reading",
                                "passage": "[EM1Q10] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-11",
                                "type": "Reading",
                                "passage": "[EM1Q11] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-12",
                                "type": "Reading",
                                "passage": "[EM1Q12] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-13",
                                "type": "Reading",
                                "passage": "[EM1Q13] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-14",
                                "type": "Reading",
                                "passage": "[EM1Q14] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-15",
                                "type": "Reading",
                                "passage": "[EM1Q15] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-16",
                                "type": "Reading",
                                "passage": "[EM1Q16] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-17",
                                "type": "Reading",
                                "passage": "[EM1Q17] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-18",
                                "type": "Reading",
                                "passage": "[EM1Q18] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-19",
                                "type": "Reading",
                                "passage": "[EM1Q19] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-20",
                                "type": "Reading",
                                "passage": "[EM1Q20] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-21",
                                "type": "Reading",
                                "passage": "[EM1Q21] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-22",
                                "type": "Reading",
                                "passage": "[EM1Q22] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-23",
                                "type": "Reading",
                                "passage": "[EM1Q23] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-24",
                                "type": "Reading",
                                "passage": "[EM1Q24] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-25",
                                "type": "Reading",
                                "passage": "[EM1Q25] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-26",
                                "type": "Reading",
                                "passage": "[EM1Q26] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-27",
                                "type": "Reading",
                                "passage": "[EM1Q27] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            }
                        ],
                        "timeMinutes": 32
                    },
                    {
                        "questions": [
                            {
                                "id": "e2-1",
                                "type": "Reading",
                                "passage": "[EM2Q1] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-2",
                                "type": "Reading",
                                "passage": "[EM2Q2] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-3",
                                "type": "Reading",
                                "passage": "[EM2Q3] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-4",
                                "type": "Reading",
                                "passage": "[EM2Q4] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-5",
                                "type": "Reading",
                                "passage": "[EM2Q5] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-6",
                                "type": "Reading",
                                "passage": "[EM2Q6] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-7",
                                "type": "Reading",
                                "passage": "[EM2Q7] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-8",
                                "type": "Reading",
                                "passage": "[EM2Q8] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-9",
                                "type": "Reading",
                                "passage": "[EM2Q9] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-10",
                                "type": "Reading",
                                "passage": "[EM2Q10] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-11",
                                "type": "Reading",
                                "passage": "[EM2Q11] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-12",
                                "type": "Reading",
                                "passage": "[EM2Q12] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-13",
                                "type": "Reading",
                                "passage": "[EM2Q13] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-14",
                                "type": "Reading",
                                "passage": "[EM2Q14] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-15",
                                "type": "Reading",
                                "passage": "[EM2Q15] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-16",
                                "type": "Reading",
                                "passage": "[EM2Q16] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-17",
                                "type": "Reading",
                                "passage": "[EM2Q17] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-18",
                                "type": "Reading",
                                "passage": "[EM2Q18] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-19",
                                "type": "Reading",
                                "passage": "[EM2Q19] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-20",
                                "type": "Reading",
                                "passage": "[EM2Q20] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-21",
                                "type": "Reading",
                                "passage": "[EM2Q21] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-22",
                                "type": "Reading",
                                "passage": "[EM2Q22] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-23",
                                "type": "Reading",
                                "passage": "[EM2Q23] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-24",
                                "type": "Reading",
                                "passage": "[EM2Q24] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-25",
                                "type": "Reading",
                                "passage": "[EM2Q25] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-26",
                                "type": "Reading",
                                "passage": "[EM2Q26] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-27",
                                "type": "Reading",
                                "passage": "[EM2Q27] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            }
                        ],
                        "timeMinutes": 32
                    }
                ]
            }
        ]
    },
    {
        "id": 3,
        "title": "Practice Test 3",
        "description": "Full English SAT test",
        "type": "Full English",
        "duration": "1h 4m",
        "totalQuestions": 54,
        "moduleCount": 2,
        "color": "blue",
        "sections": [
            {
                "name": "Reading and Writing",
                "modules": [
                    {
                        "questions": [
                            {
                                "id": "e1-1",
                                "type": "Reading",
                                "passage": "[EM1Q1] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-2",
                                "type": "Reading",
                                "passage": "[EM1Q2] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-3",
                                "type": "Reading",
                                "passage": "[EM1Q3] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-4",
                                "type": "Reading",
                                "passage": "[EM1Q4] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-5",
                                "type": "Reading",
                                "passage": "[EM1Q5] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-6",
                                "type": "Reading",
                                "passage": "[EM1Q6] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-7",
                                "type": "Reading",
                                "passage": "[EM1Q7] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-8",
                                "type": "Reading",
                                "passage": "[EM1Q8] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-9",
                                "type": "Reading",
                                "passage": "[EM1Q9] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-10",
                                "type": "Reading",
                                "passage": "[EM1Q10] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-11",
                                "type": "Reading",
                                "passage": "[EM1Q11] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-12",
                                "type": "Reading",
                                "passage": "[EM1Q12] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-13",
                                "type": "Reading",
                                "passage": "[EM1Q13] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-14",
                                "type": "Reading",
                                "passage": "[EM1Q14] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-15",
                                "type": "Reading",
                                "passage": "[EM1Q15] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-16",
                                "type": "Reading",
                                "passage": "[EM1Q16] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-17",
                                "type": "Reading",
                                "passage": "[EM1Q17] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-18",
                                "type": "Reading",
                                "passage": "[EM1Q18] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-19",
                                "type": "Reading",
                                "passage": "[EM1Q19] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-20",
                                "type": "Reading",
                                "passage": "[EM1Q20] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-21",
                                "type": "Reading",
                                "passage": "[EM1Q21] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-22",
                                "type": "Reading",
                                "passage": "[EM1Q22] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-23",
                                "type": "Reading",
                                "passage": "[EM1Q23] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-24",
                                "type": "Reading",
                                "passage": "[EM1Q24] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-25",
                                "type": "Reading",
                                "passage": "[EM1Q25] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-26",
                                "type": "Reading",
                                "passage": "[EM1Q26] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-27",
                                "type": "Reading",
                                "passage": "[EM1Q27] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            }
                        ],
                        "timeMinutes": 32
                    },
                    {
                        "questions": [
                            {
                                "id": "e2-1",
                                "type": "Reading",
                                "passage": "[EM2Q1] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-2",
                                "type": "Reading",
                                "passage": "[EM2Q2] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-3",
                                "type": "Reading",
                                "passage": "[EM2Q3] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-4",
                                "type": "Reading",
                                "passage": "[EM2Q4] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-5",
                                "type": "Reading",
                                "passage": "[EM2Q5] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-6",
                                "type": "Reading",
                                "passage": "[EM2Q6] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-7",
                                "type": "Reading",
                                "passage": "[EM2Q7] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-8",
                                "type": "Reading",
                                "passage": "[EM2Q8] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-9",
                                "type": "Reading",
                                "passage": "[EM2Q9] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-10",
                                "type": "Reading",
                                "passage": "[EM2Q10] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-11",
                                "type": "Reading",
                                "passage": "[EM2Q11] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-12",
                                "type": "Reading",
                                "passage": "[EM2Q12] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-13",
                                "type": "Reading",
                                "passage": "[EM2Q13] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-14",
                                "type": "Reading",
                                "passage": "[EM2Q14] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-15",
                                "type": "Reading",
                                "passage": "[EM2Q15] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-16",
                                "type": "Reading",
                                "passage": "[EM2Q16] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-17",
                                "type": "Reading",
                                "passage": "[EM2Q17] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-18",
                                "type": "Reading",
                                "passage": "[EM2Q18] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-19",
                                "type": "Reading",
                                "passage": "[EM2Q19] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-20",
                                "type": "Reading",
                                "passage": "[EM2Q20] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-21",
                                "type": "Reading",
                                "passage": "[EM2Q21] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-22",
                                "type": "Reading",
                                "passage": "[EM2Q22] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-23",
                                "type": "Reading",
                                "passage": "[EM2Q23] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-24",
                                "type": "Reading",
                                "passage": "[EM2Q24] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-25",
                                "type": "Reading",
                                "passage": "[EM2Q25] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-26",
                                "type": "Reading",
                                "passage": "[EM2Q26] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-27",
                                "type": "Reading",
                                "passage": "[EM2Q27] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            }
                        ],
                        "timeMinutes": 32
                    }
                ]
            }
        ]
    },
    {
        "id": 4,
        "title": "Practice Test 4",
        "description": "Full English SAT test",
        "type": "Full English",
        "duration": "1h 4m",
        "totalQuestions": 54,
        "moduleCount": 2,
        "color": "purple",
        "sections": [
            {
                "name": "Reading and Writing",
                "modules": [
                    {
                        "questions": [
                            {
                                "id": "e1-1",
                                "type": "Reading",
                                "passage": "[EM1Q1] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-2",
                                "type": "Reading",
                                "passage": "[EM1Q2] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-3",
                                "type": "Reading",
                                "passage": "[EM1Q3] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-4",
                                "type": "Reading",
                                "passage": "[EM1Q4] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-5",
                                "type": "Reading",
                                "passage": "[EM1Q5] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-6",
                                "type": "Reading",
                                "passage": "[EM1Q6] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-7",
                                "type": "Reading",
                                "passage": "[EM1Q7] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-8",
                                "type": "Reading",
                                "passage": "[EM1Q8] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-9",
                                "type": "Reading",
                                "passage": "[EM1Q9] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-10",
                                "type": "Reading",
                                "passage": "[EM1Q10] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-11",
                                "type": "Reading",
                                "passage": "[EM1Q11] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-12",
                                "type": "Reading",
                                "passage": "[EM1Q12] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-13",
                                "type": "Reading",
                                "passage": "[EM1Q13] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-14",
                                "type": "Reading",
                                "passage": "[EM1Q14] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-15",
                                "type": "Reading",
                                "passage": "[EM1Q15] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-16",
                                "type": "Reading",
                                "passage": "[EM1Q16] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-17",
                                "type": "Reading",
                                "passage": "[EM1Q17] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-18",
                                "type": "Reading",
                                "passage": "[EM1Q18] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-19",
                                "type": "Reading",
                                "passage": "[EM1Q19] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-20",
                                "type": "Reading",
                                "passage": "[EM1Q20] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-21",
                                "type": "Reading",
                                "passage": "[EM1Q21] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-22",
                                "type": "Reading",
                                "passage": "[EM1Q22] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-23",
                                "type": "Reading",
                                "passage": "[EM1Q23] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-24",
                                "type": "Reading",
                                "passage": "[EM1Q24] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-25",
                                "type": "Reading",
                                "passage": "[EM1Q25] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-26",
                                "type": "Reading",
                                "passage": "[EM1Q26] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-27",
                                "type": "Reading",
                                "passage": "[EM1Q27] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            }
                        ],
                        "timeMinutes": 32
                    },
                    {
                        "questions": [
                            {
                                "id": "e2-1",
                                "type": "Reading",
                                "passage": "[EM2Q1] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-2",
                                "type": "Reading",
                                "passage": "[EM2Q2] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-3",
                                "type": "Reading",
                                "passage": "[EM2Q3] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-4",
                                "type": "Reading",
                                "passage": "[EM2Q4] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-5",
                                "type": "Reading",
                                "passage": "[EM2Q5] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-6",
                                "type": "Reading",
                                "passage": "[EM2Q6] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-7",
                                "type": "Reading",
                                "passage": "[EM2Q7] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-8",
                                "type": "Reading",
                                "passage": "[EM2Q8] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-9",
                                "type": "Reading",
                                "passage": "[EM2Q9] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-10",
                                "type": "Reading",
                                "passage": "[EM2Q10] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-11",
                                "type": "Reading",
                                "passage": "[EM2Q11] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-12",
                                "type": "Reading",
                                "passage": "[EM2Q12] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-13",
                                "type": "Reading",
                                "passage": "[EM2Q13] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-14",
                                "type": "Reading",
                                "passage": "[EM2Q14] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-15",
                                "type": "Reading",
                                "passage": "[EM2Q15] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-16",
                                "type": "Reading",
                                "passage": "[EM2Q16] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-17",
                                "type": "Reading",
                                "passage": "[EM2Q17] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-18",
                                "type": "Reading",
                                "passage": "[EM2Q18] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-19",
                                "type": "Reading",
                                "passage": "[EM2Q19] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-20",
                                "type": "Reading",
                                "passage": "[EM2Q20] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-21",
                                "type": "Reading",
                                "passage": "[EM2Q21] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-22",
                                "type": "Reading",
                                "passage": "[EM2Q22] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-23",
                                "type": "Reading",
                                "passage": "[EM2Q23] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-24",
                                "type": "Reading",
                                "passage": "[EM2Q24] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-25",
                                "type": "Reading",
                                "passage": "[EM2Q25] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-26",
                                "type": "Reading",
                                "passage": "[EM2Q26] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-27",
                                "type": "Reading",
                                "passage": "[EM2Q27] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            }
                        ],
                        "timeMinutes": 32
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "title": "Practice Test 5",
        "description": "Full English SAT test",
        "type": "Full English",
        "duration": "1h 4m",
        "totalQuestions": 54,
        "moduleCount": 2,
        "color": "blue",
        "sections": [
            {
                "name": "Reading and Writing",
                "modules": [
                    {
                        "questions": [
                            {
                                "id": "e1-1",
                                "type": "Reading",
                                "passage": "[EM1Q1] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-2",
                                "type": "Reading",
                                "passage": "[EM1Q2] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-3",
                                "type": "Reading",
                                "passage": "[EM1Q3] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-4",
                                "type": "Reading",
                                "passage": "[EM1Q4] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-5",
                                "type": "Reading",
                                "passage": "[EM1Q5] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-6",
                                "type": "Reading",
                                "passage": "[EM1Q6] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-7",
                                "type": "Reading",
                                "passage": "[EM1Q7] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-8",
                                "type": "Reading",
                                "passage": "[EM1Q8] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-9",
                                "type": "Reading",
                                "passage": "[EM1Q9] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-10",
                                "type": "Reading",
                                "passage": "[EM1Q10] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-11",
                                "type": "Reading",
                                "passage": "[EM1Q11] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-12",
                                "type": "Reading",
                                "passage": "[EM1Q12] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-13",
                                "type": "Reading",
                                "passage": "[EM1Q13] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-14",
                                "type": "Reading",
                                "passage": "[EM1Q14] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-15",
                                "type": "Reading",
                                "passage": "[EM1Q15] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-16",
                                "type": "Reading",
                                "passage": "[EM1Q16] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-17",
                                "type": "Reading",
                                "passage": "[EM1Q17] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-18",
                                "type": "Reading",
                                "passage": "[EM1Q18] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-19",
                                "type": "Reading",
                                "passage": "[EM1Q19] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-20",
                                "type": "Reading",
                                "passage": "[EM1Q20] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-21",
                                "type": "Reading",
                                "passage": "[EM1Q21] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-22",
                                "type": "Reading",
                                "passage": "[EM1Q22] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-23",
                                "type": "Reading",
                                "passage": "[EM1Q23] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-24",
                                "type": "Reading",
                                "passage": "[EM1Q24] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-25",
                                "type": "Reading",
                                "passage": "[EM1Q25] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-26",
                                "type": "Reading",
                                "passage": "[EM1Q26] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            },
                            {
                                "id": "e1-27",
                                "type": "Reading",
                                "passage": "[EM1Q27] The explorer stood at the edge of the cliff, gazing at the vast expanse below. The wind howled, carrying whispers of ancient stories that had been told for generations among the mountain people.",
                                "question": "As used in the text, the word \"whispers\" most nearly means:",
                                "options": [
                                    "Quiet sounds",
                                    "Subtle suggestions",
                                    "Warnings",
                                    "Faint traces"
                                ],
                                "answer": 1,
                                "explanation": "In context, \"whispers\" metaphorically refers to subtle suggestions or hints.",
                                "difficulty": "Medium"
                            }
                        ],
                        "timeMinutes": 32
                    },
                    {
                        "questions": [
                            {
                                "id": "e2-1",
                                "type": "Reading",
                                "passage": "[EM2Q1] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-2",
                                "type": "Reading",
                                "passage": "[EM2Q2] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-3",
                                "type": "Reading",
                                "passage": "[EM2Q3] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-4",
                                "type": "Reading",
                                "passage": "[EM2Q4] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-5",
                                "type": "Reading",
                                "passage": "[EM2Q5] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-6",
                                "type": "Reading",
                                "passage": "[EM2Q6] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-7",
                                "type": "Reading",
                                "passage": "[EM2Q7] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-8",
                                "type": "Reading",
                                "passage": "[EM2Q8] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-9",
                                "type": "Reading",
                                "passage": "[EM2Q9] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-10",
                                "type": "Reading",
                                "passage": "[EM2Q10] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-11",
                                "type": "Reading",
                                "passage": "[EM2Q11] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-12",
                                "type": "Reading",
                                "passage": "[EM2Q12] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-13",
                                "type": "Reading",
                                "passage": "[EM2Q13] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-14",
                                "type": "Reading",
                                "passage": "[EM2Q14] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-15",
                                "type": "Reading",
                                "passage": "[EM2Q15] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-16",
                                "type": "Reading",
                                "passage": "[EM2Q16] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-17",
                                "type": "Reading",
                                "passage": "[EM2Q17] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-18",
                                "type": "Reading",
                                "passage": "[EM2Q18] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-19",
                                "type": "Reading",
                                "passage": "[EM2Q19] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-20",
                                "type": "Reading",
                                "passage": "[EM2Q20] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-21",
                                "type": "Reading",
                                "passage": "[EM2Q21] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-22",
                                "type": "Reading",
                                "passage": "[EM2Q22] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-23",
                                "type": "Reading",
                                "passage": "[EM2Q23] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-24",
                                "type": "Reading",
                                "passage": "[EM2Q24] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-25",
                                "type": "Reading",
                                "passage": "[EM2Q25] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-26",
                                "type": "Reading",
                                "passage": "[EM2Q26] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            },
                            {
                                "id": "e2-27",
                                "type": "Reading",
                                "passage": "[EM2Q27] The architectural firm decided to implement a green roof on their latest skyscraper design. This would not only reduce the heat island effect but also provide a small habitat for local birds and insects in the middle of the densely populated urban center.",
                                "question": "The primary purpose of the green roof is to:",
                                "options": [
                                    "Reduce building costs",
                                    "Provide a habitat and reduce heat",
                                    "Impress the city council",
                                    "Block out city noise"
                                ],
                                "answer": 1,
                                "explanation": "The passage mentions reducing the heat island effect and providing a habitat.",
                                "difficulty": "Easy"
                            }
                        ],
                        "timeMinutes": 32
                    }
                ]
            }
        ]
    },

    {
        id: 6,
        title: 'Practice Test 6',
        description: 'Full Section 2',
        type: 'Full Math',
        duration: '1h 10m',
        totalQuestions: 44,
        moduleCount: 2,
        color: 'orange',
        sections: [
            {
                name: 'Math',
                modules: [
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, j) => ({
                            id: `m1-${j + 1}`,
                            type: 'Math',
                            question: `[SM1Q${j + 1}] This is a math question. Provide the correct answer based on the problem statement.`,
                            options: ["10...", "15...", "20...", "25..."],
                            answer: 1,
                            explanation: "Sample math explanation.",
                            difficulty: "Medium",
                            calc: true
                        }))
                    },
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, j) => ({
                            id: `m2-${j + 1}`,
                            type: 'Math',
                            question: `[SM2Q${j + 1}] This is a math question. Provide the correct answer based on the problem statement.`,
                            options: ["1...", "2...", "3...", "4..."],
                            answer: 2,
                            explanation: "Sample math explanation.",
                            difficulty: "Hard",
                            calc: true
                        }))
                    }
                ]
            }
        ]
    },
    {
        id: 7,
        title: 'Practice Test 7',
        description: 'Full Section 2',
        type: 'Full Math',
        duration: '1h 10m',
        totalQuestions: 44,
        moduleCount: 2,
        color: 'orange',
        sections: [
            {
                name: 'Math',
                modules: [
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, j) => ({
                            id: `m1-${j + 1}`,
                            type: 'Math',
                            question: `[SM1Q${j + 1}] This is a math question. Provide the correct answer based on the problem statement.`,
                            options: ["10...", "15...", "20...", "25..."],
                            answer: 1,
                            explanation: "Sample math explanation.",
                            difficulty: "Medium",
                            calc: true
                        }))
                    },
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, j) => ({
                            id: `m2-${j + 1}`,
                            type: 'Math',
                            question: `[SM2Q${j + 1}] This is a math question. Provide the correct answer based on the problem statement.`,
                            options: ["1...", "2...", "3...", "4..."],
                            answer: 2,
                            explanation: "Sample math explanation.",
                            difficulty: "Hard",
                            calc: true
                        }))
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        title: 'Practice Test 8',
        description: 'Full Section 2',
        type: 'Full Math',
        duration: '1h 10m',
        totalQuestions: 44,
        moduleCount: 2,
        color: 'orange',
        sections: [
            {
                name: 'Math',
                modules: [
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, j) => ({
                            id: `m1-${j + 1}`,
                            type: 'Math',
                            question: `[SM1Q${j + 1}] This is a math question. Provide the correct answer based on the problem statement.`,
                            options: ["10...", "15...", "20...", "25..."],
                            answer: 1,
                            explanation: "Sample math explanation.",
                            difficulty: "Medium",
                            calc: true
                        }))
                    },
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, j) => ({
                            id: `m2-${j + 1}`,
                            type: 'Math',
                            question: `[SM2Q${j + 1}] This is a math question. Provide the correct answer based on the problem statement.`,
                            options: ["1...", "2...", "3...", "4..."],
                            answer: 2,
                            explanation: "Sample math explanation.",
                            difficulty: "Hard",
                            calc: true
                        }))
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        title: 'Practice Test 9',
        description: 'Full Section 2',
        type: 'Full Math',
        duration: '1h 10m',
        totalQuestions: 44,
        moduleCount: 2,
        color: 'orange',
        sections: [
            {
                name: 'Math',
                modules: [
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, j) => ({
                            id: `m1-${j + 1}`,
                            type: 'Math',
                            question: `[SM1Q${j + 1}] This is a math question. Provide the correct answer based on the problem statement.`,
                            options: ["10...", "15...", "20...", "25..."],
                            answer: 1,
                            explanation: "Sample math explanation.",
                            difficulty: "Medium",
                            calc: true
                        }))
                    },
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, j) => ({
                            id: `m2-${j + 1}`,
                            type: 'Math',
                            question: `[SM2Q${j + 1}] This is a math question. Provide the correct answer based on the problem statement.`,
                            options: ["1...", "2...", "3...", "4..."],
                            answer: 2,
                            explanation: "Sample math explanation.",
                            difficulty: "Hard",
                            calc: true
                        }))
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        title: 'Practice Test 10',
        description: 'Full Section 2',
        type: 'Full Math',
        duration: '1h 10m',
        totalQuestions: 44,
        moduleCount: 2,
        color: 'orange',
        sections: [
            {
                name: 'Math',
                modules: [
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, j) => ({
                            id: `m1-${j + 1}`,
                            type: 'Math',
                            question: `[SM1Q${j + 1}] This is a math question. Provide the correct answer based on the problem statement.`,
                            options: ["10...", "15...", "20...", "25..."],
                            answer: 1,
                            explanation: "Sample math explanation.",
                            difficulty: "Medium",
                            calc: true
                        }))
                    },
                    {
                        timeMinutes: 35,
                        questions: Array.from({ length: 22 }).map((_, j) => ({
                            id: `m2-${j + 1}`,
                            type: 'Math',
                            question: `[SM2Q${j + 1}] This is a math question. Provide the correct answer based on the problem statement.`,
                            options: ["1...", "2...", "3...", "4..."],
                            answer: 2,
                            explanation: "Sample math explanation.",
                            difficulty: "Hard",
                            calc: true
                        }))
                    }
                ]
            }
        ]
    }
];

export const satDates = [
    { month: 'AUG', date: 'August 23, 2025', target: '2025-08-23T08:00:00', registrationDeadline: 'August 8, 2025', lateRegistrationDeadline: 'August 12, 2025', changeDeadline: 'August 12, 2025' },
    { month: 'SEP', date: 'September 13, 2025', target: '2025-09-13T08:00:00', registrationDeadline: 'August 29, 2025', lateRegistrationDeadline: 'September 2, 2025', changeDeadline: 'September 2, 2025' },
    { month: 'OCT', date: 'October 4, 2025', target: '2025-10-04T08:00:00', registrationDeadline: 'September 19, 2025', lateRegistrationDeadline: 'September 23, 2025', changeDeadline: 'September 23, 2025' },
    { month: 'NOV', date: 'November 8, 2025', target: '2025-11-08T08:00:00', registrationDeadline: 'October 24, 2025', lateRegistrationDeadline: 'October 28, 2025', changeDeadline: 'October 28, 2025' },
    { month: 'DEC', date: 'December 6, 2025', target: '2025-12-06T08:00:00', registrationDeadline: 'November 21, 2025', lateRegistrationDeadline: 'November 25, 2025', changeDeadline: 'November 25, 2025' },
    { month: 'MAR', date: 'March 14, 2026', target: '2026-03-14T08:00:00', registrationDeadline: 'February 27, 2026', lateRegistrationDeadline: 'March 3, 2026', changeDeadline: 'March 3, 2026' },
    { month: 'MAY', date: 'May 2, 2026', target: '2026-05-02T08:00:00', registrationDeadline: 'April 17, 2026', lateRegistrationDeadline: 'April 21, 2026', changeDeadline: 'April 21, 2026' },
    { month: 'JUN', date: 'June 6, 2026', target: '2026-06-06T08:00:00', registrationDeadline: 'May 22, 2026', lateRegistrationDeadline: 'May 26, 2026', changeDeadline: 'May 26, 2026' },
];

export const studyResources = [
    { id: 1, title: 'Grammar Rules Guide', description: 'Comprehensive guide to SAT grammar and punctuation rules.', category: 'English', icon: 'book-open', color: 'purple' },
    { id: 2, title: 'Reading Strategies', description: 'Techniques for active reading and passage analysis.', category: 'English', icon: 'eye', color: 'emerald' },
    { id: 3, title: 'SAT Vocabulary 500', description: 'Most frequently tested vocabulary words with examples.', category: 'English', icon: 'file-text', color: 'rose' },
];