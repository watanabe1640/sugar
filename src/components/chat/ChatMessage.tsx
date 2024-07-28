interface ChatMessageProps {
	role: 'user' | 'assistant';
	content: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({role, content}) => {
	const isUser = role ==='user';
	return (
		<div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
		<div
		  className={`max-w-3/4 p-3 rounded-lg ${
			isUser ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
		  }`}
		>
		  {content}
		</div>
	  </div>
	);
}

export default ChatMessage;