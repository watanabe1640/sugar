interface TranscriptDisplayProps {
	transcript: string
  }
  
  const TranscriptDisplay: React.FC<TranscriptDisplayProps> = ({ transcript }) => {
	return (
	  <div className="w-full max-w-2xl">
		<h2 className="text-2xl font-semibold mb-4">Transcript:</h2>
		<div className="bg-gray-100 p-4 rounded-lg min-h-[100px] whitespace-pre-wrap text-slate-950">
		  {transcript || 'Start speaking to see the transcript here.'}
		</div>
	  </div>
	)
  }
  
  export default TranscriptDisplay