export interface Options {
  method: "POST";
  headers: {
    Authorization: string;
    "Content-Type": "application/json";
  };
  body: string;
}

export interface Body {
  model: string;
  stream: boolean;
  max_tokens: number;
  enable_thinking: boolean;
  thinking_budget: number;
  min_p: number;
  temperature: number;
  top_p: number;
  top_k: number;
  frequency_penalty: number;
  n: number;
  stop: string[];
  messages: Message[];
}

interface Message {
  role: string;
  content: string;
}

export interface responseData {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  reasoning_content?: string;
}

interface Choice {
  index: number;
  message: {
    role: string;
    content: string;
    reasoning_content?: string;
  };
}
