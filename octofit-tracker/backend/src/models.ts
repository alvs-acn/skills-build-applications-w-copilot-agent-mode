import mongoose, { Schema, model, type Model } from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  fitnessGoal: string;
  level: string;
}

export interface ITeam {
  name: string;
  sport: string;
  members: string[];
}

export interface IActivity {
  userId: string;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  date: Date;
}

export interface ILeaderboardEntry {
  userId: string;
  score: number;
  rank: number;
}

export interface IWorkout {
  title: string;
  difficulty: string;
  durationMinutes: number;
  focus: string[];
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  fitnessGoal: { type: String, required: true },
  level: { type: String, required: true },
});

const teamSchema = new Schema<ITeam>({
  name: { type: String, required: true },
  sport: { type: String, required: true },
  members: { type: [String], default: [] },
});

const activitySchema = new Schema<IActivity>({
  userId: { type: String, required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const leaderboardSchema = new Schema<ILeaderboardEntry>({
  userId: { type: String, required: true },
  score: { type: Number, required: true },
  rank: { type: Number, required: true },
});

const workoutSchema = new Schema<IWorkout>({
  title: { type: String, required: true },
  difficulty: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  focus: { type: [String], default: [] },
});

export const User = mongoose.models.User || model<IUser>('User', userSchema);
export const Team = mongoose.models.Team || model<ITeam>('Team', teamSchema);
export const Activity = mongoose.models.Activity || model<IActivity>('Activity', activitySchema);
export const LeaderboardEntry = mongoose.models.LeaderboardEntry || model<ILeaderboardEntry>('LeaderboardEntry', leaderboardSchema);
export const Workout = mongoose.models.Workout || model<IWorkout>('Workout', workoutSchema);

export type UserModel = Model<IUser>;
export type TeamModel = Model<ITeam>;
export type ActivityModel = Model<IActivity>;
export type LeaderboardEntryModel = Model<ILeaderboardEntry>;
export type WorkoutModel = Model<IWorkout>;
