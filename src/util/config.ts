import * as vscode from "vscode";
import { Body } from "../interface/chat";

export function getConfig(): { apiKey: string; body: Body } {
  try {
    const config = vscode.workspace.getConfiguration("code-name-helper");
    const apiKey = config.get<string>("apiKey")!;
    const body = config.get<Body>("body")!;

    return { apiKey, body };
  } catch (error) {
    console.error("获取配置失败:", error);
    throw error;
  }
}
