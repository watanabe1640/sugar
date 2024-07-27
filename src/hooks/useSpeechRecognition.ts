import { useCallback, useEffect, useRef } from 'react'

const useSpeechRecognition = (onTranscript: (transcript: string) => void) => {
  const recognitionRef = useRef<SpeechRecognition | null>(null)

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      
      if (recognitionRef.current) {
        recognitionRef.current.continuous = true
        recognitionRef.current.interimResults = true

        recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
          const transcript = Array.from(event.results)
            .map(result => result[0].transcript)
            .join('')
          onTranscript(transcript)
        }
      }
    } else {
      console.error('Speech recognition is not supported in this browser.')
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop()
      }
    }
  }, [onTranscript])

  const startListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start()
      } catch (error) {
        console.error('Error starting speech recognition:', error)
      }
    } else {
      console.error('Speech recognition is not initialized.')
    }
  }, [])

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop()
      } catch (error) {
        console.error('Error stopping speech recognition:', error)
      }
    }
  }, [])

  return { startListening, stopListening }
}

export default useSpeechRecognition