import { z } from 'zod';

export const UpdatePlayCountSchema = z.object({
  game_id: z.string().min(1, 'Game ID is required'),
});

export type IUpdatePlayCount = z.infer<typeof UpdatePlayCountSchema>;
