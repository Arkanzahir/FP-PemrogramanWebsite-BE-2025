// File: src/api/game/game-list/pair-or-no-pair/router.ts

import { Router, Request, Response } from 'express';
import { getPairOrNoPairQuestions, updatePlayCount } from './service';

const pairOrNoPairRouter = Router();

/**
 * GET /start
 * Mengambil semua items untuk game
 */
pairOrNoPairRouter.get('/start', async (req: Request, res: Response) => {
  try {
    const game_template_id = req.query.game_template_id as string | undefined;

    const data = await getPairOrNoPairQuestions(game_template_id);

    // Validasi: Minimal harus ada items
    if (data.items.length === 0) {
      return res.status(404).json({
        error: 'No items found for this game. Please create items first.',
      });
    }

    res.status(200).json({
      message: 'Game Started',
      items: data.items,
    });
  } catch (error) {
    console.error('Error fetching game data:', error);
    return res.status(500).json({
      error: 'Failed to fetch game data from database',
    });
  }
});

/**
 * POST /play-count
 * Update play count ketika user exit game
 */
pairOrNoPairRouter.post('/play-count', async (req: Request, res: Response) => {
  try {
    const { game_id } = req.body;

    if (!game_id) {
      return res.status(400).json({
        error: 'game_id is required',
      });
    }

    await updatePlayCount(game_id);

    res.status(200).json({
      success: true,
      message: 'Play count updated successfully',
    });
  } catch (error) {
    console.error('Error updating play count:', error);
    return res.status(500).json({
      error: 'Failed to update play count',
    });
  }
});

export default pairOrNoPairRouter;
