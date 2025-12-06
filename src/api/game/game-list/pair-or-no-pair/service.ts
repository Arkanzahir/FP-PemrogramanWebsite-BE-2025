import { prisma } from '@/common';
import { type IPairOrNoPairGameData } from '@/common/interface/games/pair-or-no-pair.interface';

/**
 * Mengambil semua items untuk game
 * Frontend yang akan split jadi 2 stack dan shuffle
 */
export function getPairOrNoPairQuestions(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  game_template_id?: string,
): Promise<IPairOrNoPairGameData> {
  const allItems = [
    {
      id: 'item-001',
      left_content: 'Tiger',
      right_content:
        'https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=320&h=240&fit=crop',
      game_template_id: 'b8b126af-011f-49f8-8616-ec8ed9180e33',
      creator_id: 'd6bba01c-b856-4061-8734-8ab68e1aa68a',
    },
    {
      id: 'item-002',
      left_content: 'Lion',
      right_content:
        'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=320&h=240&fit=crop',
      game_template_id: 'b8b126af-011f-49f8-8616-ec8ed9180e33',
      creator_id: 'd6bba01c-b856-4061-8734-8ab68e1aa68a',
    },
    {
      id: 'item-003',
      left_content: 'Elephant',
      right_content:
        'https://images.unsplash.com/photo-1564760055775-d63b17a55c44?w=320&h=240&fit=crop',
      game_template_id: 'b8b126af-011f-49f8-8616-ec8ed9180e33',
      creator_id: 'd6bba01c-b856-4061-8734-8ab68e1aa68a',
    },
    {
      id: 'item-004',
      left_content: 'Cat',
      right_content:
        'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=320&h=240&fit=crop',
      game_template_id: 'b8b126af-011f-49f8-8616-ec8ed9180e33',
      creator_id: 'd6bba01c-b856-4061-8734-8ab68e1aa68a',
    },
    {
      id: 'item-005',
      left_content: 'Dog',
      right_content:
        'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=320&h=240&fit=crop',
      game_template_id: 'b8b126af-011f-49f8-8616-ec8ed9180e33',
      creator_id: 'd6bba01c-b856-4061-8734-8ab68e1aa68a',
    },
    {
      id: 'item-006',
      left_content: 'Bird',
      right_content:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Eopsaltria_australis_-_Mogo_Campground.jpg/320px-Eopsaltria_australis_-_Mogo_Campground.jpg',
      game_template_id: 'b8b126af-011f-49f8-8616-ec8ed9180e33',
      creator_id: 'd6bba01c-b856-4061-8734-8ab68e1aa68a',
    },
    {
      id: 'item-007',
      left_content: 'Fish',
      right_content:
        'https://images.unsplash.com/photo-1524704654690-b56c05c78a00?w=320&h=240&fit=crop',
      game_template_id: 'b8b126af-011f-49f8-8616-ec8ed9180e33',
      creator_id: 'd6bba01c-b856-4061-8734-8ab68e1aa68a',
    },
    {
      id: 'item-008',
      left_content: 'Apple',
      right_content:
        'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=320&h=240&fit=crop',
      game_template_id: 'b8b126af-011f-49f8-8616-ec8ed9180e33',
      creator_id: 'd6bba01c-b856-4061-8734-8ab68e1aa68a',
    },
    {
      id: 'item-009',
      left_content: 'Banana',
      right_content:
        'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=320&h=240&fit=crop',
      game_template_id: 'b8b126af-011f-49f8-8616-ec8ed9180e33',
      creator_id: 'd6bba01c-b856-4061-8734-8ab68e1aa68a',
    },
    {
      id: 'item-010',
      left_content: 'Watermelon',
      right_content:
        'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?w=320&h=240&fit=crop',
      game_template_id: 'b8b126af-011f-49f8-8616-ec8ed9180e33',
      creator_id: 'd6bba01c-b856-4061-8734-8ab68e1aa68a',
    },
  ];

  return Promise.resolve({
    items: allItems,
  });
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
