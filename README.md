# Final Project Website Programming 2025 - WordIT

this is the backend repository for WordIT. A Website where you can play, learn, and having fun at the same time.

## How To Start

1. Make sure you have `Bun` installed. [Bun Website](https://bun.com/)

2. Install the dependencies
```bash
bun install
```

3. Create a env file. For development, name it `.env.development`
```conf
POSTGRES_USER=""       # Hanya gunakan huruf kecil, angka, dan simbol underscore
POSTGRES_PASSWORD=""
POSTGRES_HOST="localhost"
POSTGRES_PORT="5432"
POSTGRES_NAME=""   # Hanya gunakan huruf kecil, angka, dan simbol _ atau -

DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_NAME}?schema=public"

JWT_ACCESS_SECRET=""

HOST="localhost"
PORT="4000"
BASE_URL="http://${HOST}:${PORT}"

NODE_ENV="development"
```

4. Create your database on docker
```bash
bun docker:up:dev
```

5. Migrate the `Prisma Schema` to your database
```bash
bun migrate:dev
```

6. Fill your database with dummy data
```bash
bun seed:dev
```

7. Run the project
```bash
bun start:dev
```

## How to Dev

- Please follow the current project format

- Before commiting your work, check your code format
```bash
bun lint
```

- To run a quick fix on your code, run
```bash
bun lint:fix
```

- If you've just create a new prisma model, please create a dummy data in a file and name it using format `[name].data.csv`. Then update the `seeder.ts`

## Folder & Files Explanation

- Check pagination example on `user` module