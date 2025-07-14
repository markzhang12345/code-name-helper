# Code Name Helper (代码命名助手)

Code Name Helper 是一款智能的 VS Code 扩展，根据您选中的代码片段或功能描述，为您生成高质量、符合规范的变量名或函数名。

## 功能特性

- **智能命名**：选中一段代码或文字描述，即可获得多个命名建议。
- **风格多样**：支持多种常见命名风格（如小驼峰 `camelCase`、大驼峰 `PascalCase`、蛇形 `snake_case` 等），一键选择。
- **操作便捷**：通过右键菜单或快捷键 `Ctrl+Shift+T` 快速调用。
- **即时复制**：在建议列表中选择心仪的名称，即可自动复制到剪贴板。
- **高度可配**：支持自定义 AI 模型参数，满足个性化需求。

### 演示

![功能演示](https://github.com/markzhang12345/GitHubImage/blob/main/code-name-helper/out.gif?raw=true)

## 安装方法 (Installation)

由于本插件尚未在 VS Code Marketplace 上发布，您需要通过以下方式手动安装：

### 从 VSIX 文件安装 (推荐)

1.  前往本项目的 [GitHub Releases](https://github.com/markzhang12345/code-name-helper/releases) 页面。(请将链接替换为您的实际 Releases 页面)
2.  下载最新版本的 `.vsix` 文件 (例如 `code-name-helper-1.0.0.vsix`)。
3.  打开 VS Code。
4.  在左侧的扩展视图中，点击顶部的 `...` 菜单。
5.  选择 **"从 VSIX 安装..." (Install from VSIX...)**。
6.  选择您刚刚下载的 `.vsix` 文件进行安装。

## 使用方法

1.  在 VS Code 编辑器中，选中一段代码或者一段描述性文字。
2.  按下快捷键 `Ctrl+Shift+T` (在 Mac 上是 `Cmd+Shift+T`)，或者在选中的文本上右键，选择 "GenerateName"。
3.  在弹出的窗口中选择您想要的命名风格。
4.  插件将列出 AI 生成的名称建议。
5.  点击其中一个建议，它将被自动复制到您的剪贴板。

## 配置要求

在使用本插件前，您需要：

1.  获取一个 AI 服务（现阶段仅支持 Silicon Flow）的 API Key。
2.  在 VS Code 的设置中配置您的 API Key。

## 插件设置

本插件提供以下配置项，您可以在 VS Code 的 `settings.json` 中进行设置：

- `code-name-helper.apiKey`: (必须) 用于请求 AI 服务的 API Key。
  ```json
  "code-name-helper.apiKey": "sk-xxxxxxxxxxxxxxxxxxxx"
  ```
- `code-name-helper.body`: (可选) AI 模型的请求参数。您可以根据所使用模型的文档进行调整。

  ```json
  "code-name-helper.body": {
    "model": "Qwen/Qwen3-8B",
    "temperature": 0.7,
    "max_tokens": 512
  }
  ```

  - 其中模型参数默认为`Qwen/Qwen3-8B`，此模型在 Silicon Flow 中可免费使用

## 已知问题

当前版本暂无已知问题。如果您遇到任何 bug，欢迎在 [GitHub Issues](https://github.com/markzhang12345/code-name-helper/issues) 中提出。

## 发布日志

详细的版本更新历史请查看 [CHANGELOG.md](CHANGELOG.md)。
