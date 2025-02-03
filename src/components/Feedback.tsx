import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, RefreshCw, ArrowRight, LightbulbIcon } from "lucide-react"
import { MathJax, MathJaxContext } from "better-react-mathjax"

interface FeedbackProps {
  isCorrect: boolean | null
  explanation: string
  onTryAgain: () => void
  onNextQuestion: () => void
}

export function Feedback({ isCorrect, explanation, onTryAgain, onNextQuestion }: FeedbackProps) {
  if (isCorrect === null) return null

  return (
    <MathJaxContext>
      <Card className={`border-2 ${isCorrect ? 'border-green-500' : 'border-red-500'}`}>
        <CardHeader className={`pb-3 ${isCorrect ? 'bg-green-50' : 'bg-red-50'}`}>
          <CardTitle className="flex items-center gap-2">
            {isCorrect ? (
              <>
                <CheckCircle className="w-6 h-6 text-green-500" />
                <span className="text-green-700">Correct! Well done!</span>
              </>
            ) : (
              <>
                <XCircle className="w-6 h-6 text-red-500" />
                <span className="text-red-700">Let's understand this better</span>
              </>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          {/* Step by Step Solution */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-blue-600 font-medium">
              <LightbulbIcon className="w-5 h-5" />
              <h3>Step-by-Step Solution</h3>
            </div>
            
            <div className="pl-7 space-y-4">
              {/* Initial Problem */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600 mb-2 text-sm font-medium">Given Expression:</p>
                <MathJax className="text-lg">
                  {`\\[ x^2 + 2x + 1 \\]`}
                </MathJax>
              </div>

              {/* Steps */}
              <div className="space-y-3">
                <div>
                  <p className="text-gray-600 mb-1 text-sm font-medium">1. Apply the Power Rule:</p>
                  <MathJax>
                    {`\\[ \\frac{d}{dx}(x^2) = 2x \\]`}
                  </MathJax>
                </div>
                
                <div>
                  <p className="text-gray-600 mb-1 text-sm font-medium">2. Apply the Constant Multiple Rule:</p>
                  <MathJax>
                    {`\\[ \\frac{d}{dx}(2x) = 2 \\]`}
                  </MathJax>
                </div>
                
                <div>
                  <p className="text-gray-600 mb-1 text-sm font-medium">3. Apply the Constant Rule:</p>
                  <MathJax>
                    {`\\[ \\frac{d}{dx}(1) = 0 \\]`}
                  </MathJax>
                </div>
              </div>

              {/* Final Answer */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <p className="text-blue-600 mb-2 text-sm font-medium">Final Answer:</p>
                <MathJax className="text-lg">
                  {`\\[ \\frac{d}{dx}(x^2 + 2x + 1) = 2x + 2 + 0 = 2x + 2 \\]`}
                </MathJax>
              </div>
            </div>
          </div>

          {/* Action Button */}
          <Button 
            onClick={isCorrect ? onNextQuestion : onTryAgain}
            className={`w-full h-12 text-lg font-medium gap-2 ${
              isCorrect 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isCorrect ? (
              <>
                Next Question
                <ArrowRight className="w-5 h-5" />
              </>
            ) : (
              <>
                <RefreshCw className="w-5 h-5" />
                Try Again
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </MathJaxContext>
  )
} 