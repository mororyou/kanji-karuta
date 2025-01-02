import { zKanjiSchema, type FileSchema } from 'batch/schema';
import { readFileSync } from 'fs';

export type ReadCsvProps = FileSchema;

export const readCsv = ({ filePath, grader }: ReadCsvProps) => {
  const csvData = readFileSync(filePath, 'utf-8');

  const lines = csvData.split(/\r?\n/).map((line) => {
    const res = line.split(',');
    const parse = zKanjiSchema.parse({
      character: res[0],
      number_of_strokes: parseInt(res[1]),
      on_reading: res[2],
      kun_reading: res[3],
      grade: grader,
    });
    return parse;
  });

  return lines;
};
