# -- deps --
FROM oven/bun:1 AS deps
WORKDIR /app
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# -- build --
FROM oven/bun:1 AS build
WORKDIR /app
COPY --from=deps /app/node_modules node_modules
COPY . .
RUN bun run build

# -- runtime --
FROM oven/bun:1-slim
WORKDIR /app
COPY --from=build /app/build build
COPY --from=build /app/package.json .
EXPOSE 3000
ENV PORT=3000
CMD ["bun", "run", "./build/index.js"]
