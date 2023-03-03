import { Options } from '../../types';
import { SastSettings, CodeTestResults } from './types';
export declare function getCodeTestResults(root: string, options: Options, sastSettings: SastSettings, requestId: string): Promise<CodeTestResults | null>;
