import path from 'path';
import { match } from 'ts-pattern';
import { fileURLToPath } from 'url';
import type { FileSchema } from './schema';
import { graderPattern } from './utils/grader-pattern';
import { deleteKanjiRecords } from './utils/query/delete';
import { readCsv } from './utils/read-csv';

const args = process.argv.slice(2);

const importBatch = async (args: string[]) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const grader: FileSchema = match(Number(args[0]))
    .with(graderPattern, (num) => {
      return {
        filePath: `${__dirname}/elementary/${num}.csv`,
        grader: num,
      };
    })
    .otherwise(() => {
      throw new Error('Invalid grade');
    });

  const kanjiData = await readCsv(grader);

  // Delete records for the specified grade
  await deleteKanjiRecords(grader.grader);

  // Insert records for the specified grade
  // await insertKanjiRecords(kanjiData);
};

importBatch(args);
