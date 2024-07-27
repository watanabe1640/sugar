interface ControlButtonProgs {
	isRecording: boolean;
	onToggle: () => void;
}

const ControlButton: React.FC<ControlButtonProgs> = (
	{isRecording, onToggle }) => {
		return (
			<button
				onClick={onToggle}
				className={`w-full py-2 px-4 rounded-lg font-semibold text-white ${
					isRecording ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'
				  }`}
			>
				{isRecording ? 'Stop' : 'Start'}
			</button>
		);
	};

	export default ControlButton;