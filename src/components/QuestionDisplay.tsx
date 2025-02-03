import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface QuestionDisplayProps {
  question: string
  difficulty: "Easy" | "Medium" | "Hard"
}

export function QuestionDisplay({ question, difficulty }: QuestionDisplayProps) {
  const difficultyColors = {
    Easy: "text-green-600 bg-green-50",
    Medium: "text-yellow-600 bg-yellow-50",
    Hard: "text-red-600 bg-red-50"
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Question</CardTitle>
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColors[difficulty]}`}>
            {difficulty}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-lg leading-7 text-gray-700">{question}</p>
      </CardContent>
    </Card>
  )
} 