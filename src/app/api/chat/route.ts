import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { message, option } = await req.json()
  
  // Static example responses based on the selected option
  let response = ''
  
  switch (option) {
    case 'code':
      response = `Here's an example code solution for a binary search:

\`\`\`typescript
function binarySearch(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;
}
\`\`\`

This implementation:
1. Takes a sorted array and target value
2. Returns the index if found
3. Returns -1 if not found`
      break;
      
    case 'explain':
      response = "Let me explain how binary search works. It's a search algorithm that finds the position of a target value within a sorted array. It works by repeatedly dividing the search interval in half..."
      break;
      
    case 'practice':
      response = "Here's a practice question: Implement a function that finds the first occurrence of a number in a sorted array with possible duplicates. Consider edge cases like empty arrays..."
      break;
      
    default:
      response = "Please select a valid option (code, explain, or practice)."
  }
  
  return NextResponse.json({ response })
} 