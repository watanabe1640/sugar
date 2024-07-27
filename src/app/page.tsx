'use client';

import dynamic from 'next/dynamic'
import { useState } from 'react'

const SpeechRecognition = dynamic(() => import('@/components/SpeechRecognition'), { ssr: false })
const TranscriptDisplay = dynamic(() => import('@/components/TranscriptDisplay'), { ssr: false })

export default function Home() {
  const [transcript, setTranscript] = useState('')

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Speech Recognition Demo</h1>
      <SpeechRecognition onTranscript={setTranscript} />
      <TranscriptDisplay transcript={transcript} />
    </main>
  )
}