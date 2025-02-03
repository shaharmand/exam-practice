import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"
import Editor from "@monaco-editor/react"
import { MathField } from "./MathField"

interface AnswerInputProps {
  type: "math" | "code"
  value: string
  onChange: (value: string) => void
  onSubmit: () => void
}

export function AnswerInput({ type, value, onChange, onSubmit }: AnswerInputProps) {
  const handleEditorChange = (value: string | undefined) => {
    onChange(value || "")
  }

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Your Answer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {type === "math" ? (
          <div className="min-h-[200px] rounded-lg border bg-white">
            <MathField
              value={value}
              onChange={onChange}
              placeholder="Enter your math solution..."
            />
          </div>
        ) : (
          <div className="h-[300px] rounded-lg overflow-hidden border">
            <Editor
              height="100%"
              defaultLanguage="python"
              theme="vs-dark"
              value={value}
              onChange={handleEditorChange}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                automaticLayout: true,
                tabSize: 4,
                padding: { top: 16, bottom: 16 },
              }}
            />
          </div>
        )}
        <Button 
          onClick={onSubmit} 
          className="w-full h-12 text-lg font-medium gap-2"
          size="lg"
        >
          <Send className="w-5 h-5" />
          Submit Answer
        </Button>
      </CardContent>
    </Card>
  )
} 