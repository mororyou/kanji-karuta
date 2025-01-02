import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const recordsTable = sqliteTable('records', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name', { length: 255 }),
  score: integer('score'),
  time: text('time', { length: 255 }),
  date: text('date', { length: 255 }),
  grade: integer('grade').default(1),
});
