import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	collectCoverage: true,
	coverageDirectory: "coverage",
	coverageProvider: "v8",
	preset: "ts-jest",
	transform: {
		"^.+\\.tsx?$": ["ts-jest", {}],
	},
};

export default config;
