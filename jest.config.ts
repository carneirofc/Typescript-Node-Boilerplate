export default {
  clearMocks: true,
  coverageDirectory: "coverage",
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "node"],
  testEnvironment: "node",
  testPathIgnorePatterns: ["/node_modules/", ".git", "Dockerfile", ".vscode"],
  watchPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/Dockerfile"],
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/test/**/*.test.(ts|js)"],
};
