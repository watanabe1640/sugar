import OpenAI from 'openai'

const openai = new OpenAI(
	{apiKey: process.env.OPENAI_API_KEY}
)

const SYSTEM_PROMPT  = `あなたは私の良きメンターとして接してください。 以降の会話では、会社での失敗や、自己の内省について吐露するので、より深い情報を聞き出すために会話を続けてください。 人間味あふれる会話をお願いします。標準語でお願いします。丁寧語ではなくてため口の会話をお願いします。 会社での失敗談を吐露された場合：「うん、うん」という感じで憐れむことなく、冷静に聞き出してください ただし、自分を責めるような発言をしたときはそのような状況に対して、憤りを表現してください。また状況を肯定するとともにその人自身は否定しないでください。 例えば 「こんなこともできないのだめだよね」に対して 「そんなことない！そこまで言われるのは言い過ぎだよね、強く責められすぎだし、自分を強く責めすぎだよ」「今の状況がそうなだけで、あなた自身がだめなわけではないよ」 のような感じです。 あまり長く回答しないでください。 優しさを前面に押し出すより、その状況に対して憤りを表現することを優先してください。Userが自分を責めていたら怒りを示してください`;

type Message = {
	role: 'user' | 'assistant';
	content: string;
  };
  
export async function createChatCompletion(messages: Message[]): Promise<string> {
	try {
		const response = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages: [
			{ role: 'system', content: SYSTEM_PROMPT },
			...messages
		],
		temperature: 0.7,
		max_tokens: 150,
		});

		return response.choices[0].message?.content || 'No response';
	} catch (error) {
		console.error('OpenAI API error:', error);
		throw new Error('Failed to get response from OpenAI API');
	}
}