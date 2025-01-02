import { z } from 'zod';

// 学年
export const zGrader = z.number().min(1).max(6);
export type Grader = z.infer<typeof zGrader>;

// ファイルパスと学年
export const zFileSchema = z.object({
  filePath: z.string(),
  grader: zGrader,
});
export type FileSchema = z.infer<typeof zFileSchema>;

// 漢字
export const zKanjiSchema = z.object({
  character: z.string().length(1),
  number_of_strokes: z.number(),
  on_reading: z.string().max(255).nullable(),
  kun_reading: z.string().max(255).nullable(),
  grade: zGrader,
});
export type KanjiSchema = z.infer<typeof zKanjiSchema>;
