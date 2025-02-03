import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Code } from "lucide-react"

interface SubjectSelectionProps {
  subject: string
  topic: string
  onSubjectChange: (value: string) => void
  onTopicChange: (value: string) => void
  onStart: () => void
}

export function SubjectSelection({ 
  subject, 
  topic, 
  onSubjectChange, 
  onTopicChange, 
  onStart 
}: SubjectSelectionProps) {
  const topics = {
    Math: ["Algebra", "Calculus", "Trigonometry"],
    Coding: ["Python Basics", "Loops", "Recursion"],
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Choose Your Subject</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div 
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              subject === 'Math' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
            }`}
            onClick={() => onSubjectChange('Math')}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${subject === 'Math' ? 'bg-blue-500' : 'bg-gray-100'}`}>
                <BookOpen className={`w-5 h-5 ${subject === 'Math' ? 'text-white' : 'text-gray-500'}`} />
              </div>
              <div>
                <h3 className="font-semibold">Mathematics</h3>
                <p className="text-sm text-gray-500">Algebra, Calculus & more</p>
              </div>
            </div>
          </div>

          <div 
            className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
              subject === 'Coding' 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
            }`}
            onClick={() => onSubjectChange('Coding')}
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${subject === 'Coding' ? 'bg-blue-500' : 'bg-gray-100'}`}>
                <Code className={`w-5 h-5 ${subject === 'Coding' ? 'text-white' : 'text-gray-500'}`} />
              </div>
              <div>
                <h3 className="font-semibold">Programming</h3>
                <p className="text-sm text-gray-500">Python, Java & more</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Select Topic
          </label>
          <Select value={topic} onValueChange={onTopicChange} disabled={!subject}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a topic" />
            </SelectTrigger>
            <SelectContent>
              {subject &&
                topics[subject as keyof typeof topics].map((t) => (
                  <SelectItem key={t} value={t}>
                    {t}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={onStart} 
          disabled={!subject || !topic}
          className="w-full h-12 text-lg font-medium"
        >
          Start Practice
        </Button>
      </CardContent>
    </Card>
  )
} 