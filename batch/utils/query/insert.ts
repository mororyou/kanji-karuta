import type { Kanji } from 'batch/schema';
import { db } from '~/db/db';
import { kanjisTable } from '~/db/schema';

export type InsertKanjiRecordsProps = readonly Kanji[];

export async function insertKanjiRecords(kanjiData: InsertKanjiRecordsProps) {
  await db.insert(kanjisTable).values([...kanjiData]);
}
