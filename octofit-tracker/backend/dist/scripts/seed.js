import mongoose from 'mongoose';
import { Activity, LeaderboardEntry, Team, User, Workout } from '../models.js';
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';
/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
    try {
        await mongoose.connect(connectionString);
        console.log('Connected to octofit_db');
        await Promise.all([
            User.deleteMany({}),
            Team.deleteMany({}),
            Activity.deleteMany({}),
            LeaderboardEntry.deleteMany({}),
            Workout.deleteMany({}),
        ]);
        const users = await User.insertMany([
            {
                name: 'Maya Chen',
                email: 'maya@example.com',
                fitnessGoal: 'Build endurance',
                level: 'Intermediate',
            },
            {
                name: 'Jordan Alvarez',
                email: 'jordan@example.com',
                fitnessGoal: 'Increase strength',
                level: 'Advanced',
            },
            {
                name: 'Ava Patel',
                email: 'ava@example.com',
                fitnessGoal: 'Improve mobility',
                level: 'Beginner',
            },
        ]);
        const teams = await Team.insertMany([
            {
                name: 'Night Owls',
                sport: 'Running',
                members: users.slice(0, 2).map((user) => user._id.toString()),
            },
            {
                name: 'Core Crushers',
                sport: 'CrossFit',
                members: [users[2]._id.toString()],
            },
        ]);
        await Activity.insertMany([
            {
                userId: users[0]._id.toString(),
                type: 'Run',
                durationMinutes: 35,
                caloriesBurned: 420,
                date: new Date('2026-07-01T06:30:00Z'),
            },
            {
                userId: users[1]._id.toString(),
                type: 'Strength',
                durationMinutes: 50,
                caloriesBurned: 580,
                date: new Date('2026-07-02T18:00:00Z'),
            },
            {
                userId: users[2]._id.toString(),
                type: 'Yoga',
                durationMinutes: 30,
                caloriesBurned: 180,
                date: new Date('2026-07-03T07:15:00Z'),
            },
        ]);
        await LeaderboardEntry.insertMany([
            { userId: users[0]._id.toString(), score: 980, rank: 1 },
            { userId: users[1]._id.toString(), score: 945, rank: 2 },
            { userId: users[2]._id.toString(), score: 900, rank: 3 },
        ]);
        await Workout.insertMany([
            {
                title: 'Tempo Run Intervals',
                difficulty: 'Intermediate',
                durationMinutes: 40,
                focus: ['Cardio', 'Endurance'],
            },
            {
                title: 'Upper Body Power Circuit',
                difficulty: 'Advanced',
                durationMinutes: 45,
                focus: ['Strength', 'Power'],
            },
            {
                title: 'Mobility Flow',
                difficulty: 'Beginner',
                durationMinutes: 20,
                focus: ['Flexibility', 'Recovery'],
            },
        ]);
        console.log(`Seeded ${users.length} users, ${teams.length} teams, activities, leaderboard entries, and workouts`);
        console.log('Database seeding complete');
        await mongoose.disconnect();
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
}
seedDatabase();
