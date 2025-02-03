import { PracticeSection } from "@/components/PracticeSection"

// This component runs on the server
async function getData() {
  // Option 1: If you have a real API endpoint, use it instead
  // const res = await fetch('https://your-real-api.com/data')
  
  // Option 2: For development/testing, return mock data
  return {
    questions: [
      {
        id: 1,
        subject: "Math",
        topic: "Algebra",
        question: "What is a binary search?",
        difficulty: "Medium" as const
      },
      {
        id: 2,
        subject: "Coding",
        topic: "Python Basics",
        question: "Implement a function to reverse a linked list",
        difficulty: "Hard" as const
      },
      {
        id: 3,
        subject: "Math",
        topic: "Calculus",
        question: "Write a function to check if a string is a palindrome",
        difficulty: "Easy" as const
      }
    ]
  }
}

export default async function Page() {
  const data = await getData()
  
  return (
    <main className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto">
        <PracticeSection questions={data.questions} />
      </div>
    </main>
  )
} 