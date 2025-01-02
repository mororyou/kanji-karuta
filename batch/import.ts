import path from 'path';
import { match } from 'ts-pattern';
import { fileURLToPath } from 'url';
import type { FileSchema } from './schema';
import { graderPattern } from './utils/grader-pattern';
import { insertKanjiRecords } from './utils/query';
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

  // TODO: never throws
  try {
    // read csv file
    const kanjiData = await readCsv(grader);

    // Todo: Delete records for the specified grade

    // Insert records for the specified grade
    await insertKanjiRecords(kanjiData);
  } catch (error) {
    console.log('error -> ', error);
  }
};

importBatch(args);
