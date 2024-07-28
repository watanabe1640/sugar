// import React, { useState, FormEvent } from "react";

// interface Message {
// 	role: 'user' | 'assistant';
// 	content: string;
// }
// interface SubmitProps {
// 	onSubmit: (messages: Message[]) => void;
// 	isLoading: boolean;
// }

// const SubmitionButton :React.FC<SubmitProps> = ({onSubmit, isLoading}) => {
// 	const [message, setMessage] = useState("");

// 	const handleSubmit = (e: FormEvent) => {
// 		e.preventDefault();
// 		if (message.trim() && !isLoading) {
// 			onSubmit(message);
// 			setMessage("");
// 		}
// 	}
// 	return (
// 		<button
// 			onClick={handleSubmit}
// 		>

// 		</button>
// 	)
// )