import { Router } from 'express';
import { Activity, LeaderboardEntry, Team, User, Workout } from './models.js';

const router = Router();

const resourceRoutes = [
  { path: '/api/users', name: 'users', model: User },
  { path: '/api/teams', name: 'teams', model: Team },
  { path: '/api/activities', name: 'activities', model: Activity },
  { path: '/api/leaderboard', name: 'leaderboard', model: LeaderboardEntry },
  { path: '/api/workouts', name: 'workouts', model: Workout },
] as const;

for (const route of resourceRoutes) {
  router.get(route.path, async (_req, res) => {
    try {
      const items = await route.model.find({});
      res.json({
        route: route.path,
        message: `${route.name} endpoint ready`,
        items,
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  });

  router.post(route.path, async (req, res) => {
    try {
      const item = await route.model.create(req.body);
      res.status(201).json({
        route: route.path,
        message: `${route.name} created`,
        item,
      });
    } catch (error) {
      res.status(400).json({ error: 'Failed to create item' });
    }
  });
}

export default router;
