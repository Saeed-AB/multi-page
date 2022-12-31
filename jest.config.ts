import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./src/setup.jest.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.jest.json",
    },
  },
};

export default jestConfig;
