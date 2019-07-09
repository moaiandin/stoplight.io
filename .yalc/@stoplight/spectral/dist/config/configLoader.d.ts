import { ILintConfig } from '../types/config';
export declare const createEmptyConfig: () => ILintConfig;
export declare const getDefaultRulesetFile: (directory: string) => Promise<string | null>;
