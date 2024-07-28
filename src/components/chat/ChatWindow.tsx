'use client';

import React, { useState } from "react";
import SpeechRecognition from "../SpeechRecognition";
import ChatMessage from "./ChatMessage";

interface Message {
	role: 'user' | 'assistant';
	content: string;
}

const ChatWindow = () =>{
	const [text,setTranscript] = useState("");
	const [messages, setMessages] = useState<Message[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async () => {
		if (!text.trim() || isLoading) return;

		setIsLoading(true);
		const newMessages: Message[] = [...messages, { role: 'user', content: text }];
		setMessages(newMessages);

		try {
			const response = await fetch('/api/chat', {
				method: 'POST',
				body: JSON.stringify({ messages: newMessages }),
				headers: {
					'Content-Type': 'application/json'
				}
			});
		if (!response.ok) {
			throw new Error('Failed to fetch response from API');
		}
		const data = await response.json();
		setMessages((prevMessages) => [...prevMessages, { role: 'assistant', content: data.message }]);
		} catch (error) {
			console.error('Error:', error);
		} finally {
			setTranscript('');
			setIsLoading(false);
		}
	}

	return (
		<div>
			<div className="flex flex-col h-[600px] w-[600px] border rounded-lg">
				<div className="flex-1 overflow-y-auto p-4">
					{messages.map((message, index) => (
                        <ChatMessage key={index} role={message.role} content={message.content} />
                    ))}
				</div>
			</div>
			<div className="items-center py-7">
                <SpeechRecognition onTranscript={setTranscript} />
                <p className="mt-2">現在の音声入力: {text}</p>
                <button
                    onClick={handleSubmit}
                    disabled={isLoading || !text.trim()}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400 mt-2"
                >
                    {isLoading ? "送信中..." : "送信"}
                </button>
            </div>
		</div>
			
	)
}

export default ChatWindow;