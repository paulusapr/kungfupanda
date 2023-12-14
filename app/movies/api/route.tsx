import { MovieType } from 'interfaces/movie';

const movies: MovieType[] = require('../../server/data.json');

export async function GET() {
  return Response.json({ movies });
}
