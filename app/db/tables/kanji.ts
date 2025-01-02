import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const kanjis = sqliteTable('kanjis', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  character: text('character', { length: 1 }).unique(),
  on_reading: text('read', { length: 255 }).default(''),
  kun_reading: text('kun_read', { length: 255 }).default(''),
  grade: integer('grade').default(1),
});
