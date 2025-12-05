// File: src/api/game/game-list/pair-or-no-pair/service.ts

import { prisma } from '@/common';
import {
  IPairOrNoPairItem,
  IPairOrNoPairGameData,
} from '@/common/interface/games/pair-or-no-pair.interface';

/**
 * Membuat item baru untuk game Pair or No Pair
 */
export async function createPairOrNoPairItem(data: {
  game_template_id: string;
  creator_id: string;
  left_content: string;
  right_content: string;
}) {
  return await prisma.pairOrNoPairItem.create({
    data,
  });
}

/**
 * Mengambil semua items untuk game
 * Frontend yang akan split jadi 2 stack dan shuffle
 */
export async function getPairOrNoPairQuestions(
  game_template_id?: string,
): Promise<IPairOrNoPairGameData> {
  // Query items dari database
  const whereClause = game_template_id ? { game_template_id } : {};

  const allItems = await prisma.pairOrNoPairItem.findMany({
    where: whereClause,
    take: 10, // Ambil 10 pasangan (bisa disesuaikan)
    select: {
      id: true,
      left_content: true,
      right_content: true,
      game_template_id: true,
      creator_id: true,
    },
  });

  // Return semua items tanpa shuffle
  // Frontend yang akan handle shuffle 2 stack secara independen
  return {
    items: allItems,
  };
}

/**
 * Update play count untuk game
 */
export async function updatePlayCount(game_id: string) {
  return await prisma.games.update({
    where: { id: game_id },
    data: {
      total_played: {
        increment: 1,
      },
    },
  });
}
