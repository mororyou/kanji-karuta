CREATE TABLE `kanjis` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`strokes` integer,
	`character` text(1),
	`read` text(255) DEFAULT '',
	`kun_read` text(255) DEFAULT '',
	`grade` integer DEFAULT 1
);
--> statement-breakpoint
CREATE UNIQUE INDEX `kanjis_character_unique` ON `kanjis` (`character`);--> statement-breakpoint
CREATE TABLE `records` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(255),
	`score` integer,
	`time` text(255),
	`date` text(255),
	`grade` integer DEFAULT 1
);
