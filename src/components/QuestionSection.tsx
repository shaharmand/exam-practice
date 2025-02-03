'use client'

import { QuestionDisplay } from "@/components/QuestionDisplay"
import { Select } from "@/components/ui/select"
import { useState } from "react"

const subjects = [
  { value: "algorithms", label: "Algorithms & Data Structures" },
  { value: "system-design", label: "System Design" },
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
]

interface Question {
  id: number
  subject: string
  question: string
  difficulty: "Easy" | "Medium" | "Hard"
}

interface QuestionSectionProps {
  questions: Question[]
}

export function QuestionSection({ questions }: QuestionSectionProps) {
  const [selectedSubject, setSelectedSubject] = useState(subjects[0].value)

  const filteredQuestions = questions.filter(q => q.subject === selectedSubject)

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Select Subject
        </label>
        <Select
          id="subject"
          defaultValue={selectedSubject}
          items={subjects}
          onValueChange={setSelectedSubject}
        />
      </div>

      <div className="space-y-6">
        {filteredQuestions.map((q) => (
          <QuestionDisplay
            key={q.id}
            question={q.question}
            difficulty={q.difficulty}
          />
        ))}
      </div>
    </div>
  )
} 