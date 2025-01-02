import type { Grader } from 'batch/schema';
import { eq } from 'drizzle-orm';
import { match } from 'ts-pattern';
import { db } from '~/db/db';
import { kanjisTable } from '~/db/schema';
import { graderPattern } from '../grader-pattern';

export async function deleteKanjiRecords(grade: Grader) {
  match(grade)
    .with(graderPattern, async (num) => {
      await db.delete(kanjisTable).where(eq(kanjisTable.grade, num));
    })
    .otherwise(() => {
      throw new Error('Invalid grade');
    });
}
