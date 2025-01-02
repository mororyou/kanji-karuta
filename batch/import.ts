import path from 'path';
import { match } from 'ts-pattern';
import { fileURLToPath } from 'url';
import type { FileSchema } from './schema';
import { readCsv } from './utils/read-csv';

const args = process.argv.slice(2);

const importBatch = async (args: string[]) => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const grader: FileSchema = match(Number(args[0]))
    .with(1, (num) => {
      return {
        filePath: `${__dirname}/elementary/${num}.csv`,
        grader: num,
      };
    })
    .otherwise(() => {
      throw new Error('Invalid grader');
    });

  const kanjiData = await readCsv(grader);
  console.log(kanjiData);
};

importBatch(args);
