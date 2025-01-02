import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const kanjisTable = sqliteTable('kanjis', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  number_of_strokes: integer('strokes'),
  character: text('character', { length: 1 }).unique(),
  on_reading: text('read', { length: 255 }).default(''),
  kun_reading: text('kun_read', { length: 255 }).default(''),
  grade: integer('grade').default(1),
});
