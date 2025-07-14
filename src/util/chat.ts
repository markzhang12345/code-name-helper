import { Options, responseData } from "../interface/chat";
import { getConfig } from "./config";
import { selectStyle } from "./selectStyle";

const prompt = '你是一个代码命名助手，根据我提供的描述或者代码片段，给出一组合适的函数名、变量名或类名。严格按照JSON数组格式返回结果，例如：["name1", "name2", "name3"]。不要添加任何其他文字或解释。';

export async function callLLM(selectedText: string): Promise<string[]> {
  try {
    const selectedStyle = await selectStyle();
    const { apiKey, body } = getConfig();
    const options: Options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ` + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...body,
        messages: [
          { role: "system", content: prompt },
          { role: "system", content: `请使用 ${selectedStyle} 风格命名` },
          { role: "user", content: selectedText },
        ],
      }),
    };

    const response = await fetch("https://api.siliconflow.cn/v1/chat/completions", options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = (await response.json()) as responseData;
    if (data.choices.length > 0) {
      const content = data.choices[0].message.content;
      try {
        const names = JSON.parse(content);
        if (Array.isArray(names) && names.length > 0) {
          return names.map((name) => name.trim());
        } else {
          throw new Error("Invalid response format, expected an array of names.");
        }
      } catch (parseError) {
        console.warn("解析 JSON 失败:", content);
        throw new Error("Invalid response format, expected an array of names.");
      }
    } else {
      throw new Error("No choices returned from the LLM.");
    }
  } catch (error) {
    console.error("LLM API call failed:", error);
    throw error;
  }
}
