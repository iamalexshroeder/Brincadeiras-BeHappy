DELETE FROM "Interaction";
DELETE FROM "Comment";
DELETE FROM "Notification";
DELETE FROM "XPTransaction";
DELETE FROM "Brincadeira";
UPDATE "User" SET "xp" = 0, "streak_weeks" = 0, "profile_xp_claimed" = false, "last_published_at" = NULL;
