# TypeScript Learning Project

This project is dedicated to learning TypeScript and understanding its core concepts and features.

## Installation Steps

Follow these steps to set up and run the TypeScript project:

### 1. Initialize npm project

```bash
npm init -y
```

This command creates a `package.json` file with default values, which manages your project dependencies and scripts.

### 2. Install TypeScript as a development dependency

```bash
npm install -D typescript
```

This installs TypeScript locally in your project as a dev dependency, allowing you to compile TypeScript code to JavaScript.

### 3. Initialize TypeScript configuration

```bash
npx tsc --init
```

This generates a `tsconfig.json` file, which contains TypeScript compiler options and project settings. This file controls how TypeScript compiles your code.

### 4. Add build scripts to package.json

Add the following scripts to your `package.json`

```json
"scripts": {
  "build": "tsc -p tsconfig.json",
  "dev": "tsc -w -p tsconfig.json"
}
```

**What each script does:**

- `build`: Compiles all TypeScript files once according to the settings in `tsconfig.json`
- `dev`: Runs TypeScript compiler in watch mode (`-w`), which automatically recompiles files whenever changes are detected

## Running the Project

To run the project in development mode with auto-recompilation:

```bash
npm run dev
```

This will start the TypeScript compiler in watch mode, continuously monitoring your `.ts` files for changes and automatically compiling them to JavaScript.
