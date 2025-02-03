'use client'

import { useState } from "react"
import { SubjectSelection } from "@/components/SubjectSelection"
import { QuestionDisplay } from "@/components/QuestionDisplay"
import { AnswerInput } from "@/components/AnswerInput"
import { TutorChat } from "@/components/TutorChat"
import { Feedback } from "@/components/Feedback"

// Mock questions for demo
const mockQuestions = [
  {
    id: 1,
    question: "What is the derivative of x² + 2x + 1?",
    difficulty: "Medium" as const,
    answer: "2x + 2",
    explanation: "Using the power rule: d/dx(x²) = 2x, and d/dx(2x) = 2, d/dx(1) = 0",
  },
  // Add more questions as needed
]

export default function Home() {
  const [subject, setSubject] = useState("")
  const [topic, setTopic] = useState("")
  const [started, setStarted] = useState(false)
  const [answer, setAnswer] = useState("")
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  const currentQuestion = mockQuestions[currentQuestionIndex]

  const handleStart = () => {
    setStarted(true)
  }

  const handleSubmitAnswer = () => {
    // Simple string comparison - in production, you'd want more sophisticated answer checking
    const correct = answer.trim().toLowerCase() === currentQuestion.answer.toLowerCase()
    setIsCorrect(correct)
  }

  const handleTryAgain = () => {
    setAnswer("")
    setIsCorrect(null)
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % mockQuestions.length)
    setAnswer("")
    setIsCorrect(null)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            Practice Exam Assistant
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {!started ? (
          <div className="max-w-2xl mx-auto">
            <SubjectSelection
              subject={subject}
              topic={topic}
              onSubjectChange={setSubject}
              onTopicChange={setTopic}
              onStart={handleStart}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Question and Answer */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200">
                <QuestionDisplay
                  question={currentQuestion.question}
                  difficulty={currentQuestion.difficulty}
                />
              </div>
              
              <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200 overflow-hidden">
                <AnswerInput
                  type={subject === "Math" ? "math" : "code"}
                  value={answer}
                  onChange={setAnswer}
                  onSubmit={handleSubmitAnswer}
                />
              </div>

              {isCorrect !== null && (
                <div className="animate-in slide-in-from-bottom duration-300">
                  <Feedback
                    isCorrect={isCorrect}
                    explanation={currentQuestion.explanation}
                    onTryAgain={handleTryAgain}
                    onNextQuestion={handleNextQuestion}
                  />
                </div>
              )}
            </div>

            {/* Right Column - Tutor Chat */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-200 h-[calc(100vh-12rem)] sticky top-8">
                <TutorChat />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
