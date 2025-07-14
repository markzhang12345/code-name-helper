import * as vscode from "vscode";

export async function showGeneratedName(names: string[], editor: vscode.TextEditor, selection: vscode.Selection) {
  if (!names || names.length === 0) {
    vscode.window.showWarningMessage("没有生成有效的名称建议");
    return;
  }

  // 过滤掉空的名称
  const validNames = names.filter((name) => name && name.trim().length > 0);

  if (validNames.length === 0) {
    vscode.window.showWarningMessage("没有生成有效的名称建议");
    return;
  }

  // 创建 QuickPick 选项
  const items: vscode.QuickPickItem[] = validNames.map((name, index) => ({
    label: name.trim(),
    detail: "复制到剪贴板",
  }));

  const quickPick = vscode.window.createQuickPick();
  quickPick.items = items;
  quickPick.title = "名称建议";
  quickPick.placeholder = "选择一个名称复制到剪贴板";
  quickPick.canSelectMany = false;

  quickPick.onDidChangeSelection(async (selectedItems) => {
    if (selectedItems.length > 0) {
      const selectedName = selectedItems[0].label;

      await vscode.env.clipboard.writeText(selectedName);
      vscode.window.showInformationMessage(`已复制: ${selectedName}`);

      quickPick.hide();
    }
  });

  quickPick.onDidHide(() => {
    quickPick.dispose();
  });

  quickPick.show();
}
