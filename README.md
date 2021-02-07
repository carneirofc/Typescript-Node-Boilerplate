# Typescript boilerplate with node
For a complete example check https://github.com/microsoft/TypeScript-Node-Starter
## Setup

Install node packages

```bash
npm i
```

Pre-commit is an extremely useful tool

```bash
pip install pre-commit
pre-commit install
```

## Debug

VSCode `.vscode/launch.json`

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Node: Nodemon",
      "processId": "${command:PickProcess}",
      "restart": true,
      "protocol": "inspector"
    }
  ]
}
```
