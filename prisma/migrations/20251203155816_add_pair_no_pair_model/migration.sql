-- CreateTable
CREATE TABLE "pair_or_no_pair_items" (
    "id" TEXT NOT NULL,
    "game_template_id" TEXT NOT NULL,
    "creator_id" TEXT NOT NULL,
    "left_content" TEXT NOT NULL,
    "right_content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pair_or_no_pair_items_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "pair_or_no_pair_items" ADD CONSTRAINT "pair_or_no_pair_items_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pair_or_no_pair_items" ADD CONSTRAINT "pair_or_no_pair_items_game_template_id_fkey" FOREIGN KEY ("game_template_id") REFERENCES "GameTemplates"("id") ON DELETE CASCADE ON UPDATE CASCADE;
