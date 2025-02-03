'use client'

import { useState } from "react"
import { SubjectSelection } from "@/components/SubjectSelection"
import { QuestionDisplay } from "@/components/QuestionDisplay"
import { TutorChat } from "@/components/TutorChat"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface Question {
  id: number
  subject: string
  topic: string
  question: string
  difficulty: "Easy" | "Medium" | "Hard"
}

interface PracticeSectionProps {
  questions: Question[]
}

export function PracticeSection({ questions }: PracticeSectionProps) {
  const [subject, setSubject] = useState("")
  const [topic, setTopic] = useState("")
  const [isStarted, setIsStarted] = useState(false)
  const [answer, setAnswer] = useState("")
  const [feedback, setFeedback] = useState<string | null>(null)

  const filteredQuestions = questions.filter(
    q => q.subject === subject && q.topic === topic
  )

  const handleSubmitAnswer = () => {
    // In a real app, this would validate the answer against correct solution
    setFeedback("Your answer has been submitted for review!")
  }

  if (isStarted && filteredQuestions.length > 0) {
    return (
      <div className="grid grid-cols-2 gap-6">
        {/* Left column: Question and Answer section */}
        <div className="space-y-6">
          <QuestionDisplay
            question={filteredQuestions[0].question}
            difficulty={filteredQuestions[0].difficulty}
          />
          
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Textarea
                  placeholder="Type your answer here..."
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="min-h-[200px]"
                />
                <Button 
                  onClick={handleSubmitAnswer}
                  className="w-full"
                >
                  Submit Answer
                </Button>
                {feedback && (
                  <div className="p-4 bg-green-50 text-green-700 rounded-lg">
                    {feedback}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column: AI Tutor Chat */}
        <div className="h-[calc(100vh-theme(spacing.8)*2)]">
          <TutorChat />
        </div>
      </div>
    )
  }

  return (
    <SubjectSelection
      subject={subject}
      topic={topic}
      onSubjectChange={setSubject}
      onTopicChange={setTopic}
      onStart={() => setIsStarted(true)}
    />
  )
} 