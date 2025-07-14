import * as vscode from "vscode";

const namingStyles = [
  { label: "simple", value: "简单命名 (例: name)", description: "简单命名 (例: name)" },
  { label: "camelCase", value: "小驼峰命名法 (例: getUserName)", description: "小驼峰命名法 (例: getUserName)" },
  { label: "PascalCase", value: "大驼峰命名法 (例: GetUserName)", description: "大驼峰命名法 (例: GetUserName)" },
  { label: "snake_case", value: "蛇形命名法 (例: get_user_name)", description: "蛇形命名法 (例: get_user_name)" },
  { label: "kebab-case", value: "串式命名法 (例: get-user-name)", description: "串式命名法 (例: get-user-name)" },
];

export async function selectStyle(): Promise<string | undefined> {
  try {
    // 选择代码风格
    const selectedStyle = await vscode.window.showQuickPick(
      namingStyles.map((style) => ({
        label: style.label,
        description: style.description,
        value: style.value,
      })),
      {
        placeHolder: "选择命名风格",
        matchOnDescription: true,
      }
    );

    if (!selectedStyle) {
      return undefined;
    }
    return selectedStyle.value;
  } catch (error) {
    console.error("Style selection failed:", error);
    return undefined;
  }
}
