'use client';

import { useState, useCallback } from 'react'
import useSpeechRecognition from '@/hooks/useSpeechRecognition'

interface SpeechRecognitionProps {
  onTranscript: (transcript: string) => void
}

const SpeechRecognition: React.FC<SpeechRecognitionProps> = ({ onTranscript }) => {
  const [isListening, setIsListening] = useState(false)
  const { startListening, stopListening } = useSpeechRecognition(onTranscript)

  const handleToggleListening = useCallback(() => {
    if (isListening) {
      stopListening()
    } else {
      startListening()
    }
    setIsListening(!isListening)
  }, [isListening, startListening, stopListening])

  return (
    <div className="mb-8">
      <button
        onClick={handleToggleListening}
        className={`px-4 py-2 rounded-full ${
          isListening ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
        } text-white font-semibold transition-colors`}
      >
        {isListening ? 'Stop Listening' : 'Start Listening'}
      </button>
    </div>
  )
}

export default SpeechRecognition