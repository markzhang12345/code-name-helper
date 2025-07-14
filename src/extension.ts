import * as vscode from "vscode";
import { callLLM } from "./util/chat";
import { showGeneratedName } from "./util/show";

export function activate(context: vscode.ExtensionContext) {
  console.log("插件已激活！");

  const disposable = vscode.commands.registerCommand("code-name-helper.generateName", async () => {
    const editor = vscode.window.activeTextEditor;

    if (!editor) {
      return;
    }

    const selection = editor.selection;

    if (selection.isEmpty) {
      return;
    }

    const selectedText = editor.document.getText(selection);

    console.log("选中的内容：", selectedText);

    try {
      const names = await callLLM(selectedText);
      console.log("生成的名称：", names);

      await showGeneratedName(names, editor, selection);
    } catch (error) {
      console.error("生成名称失败：", error);
      vscode.window.showErrorMessage("生成名称失败，请检查配置和网络连接");
    }

    // 显示生成的名称
  });

  context.subscriptions.push(disposable);
}

export function deactivate() {
  console.log("插件已停用");
}
