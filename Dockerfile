FROM oven/bun:latest

EXPOSE 2525

ENV NODE_ENV=production
ENV MOUNTEBANK_VERSION=2.4.0

COPY . .

RUN bun install --production --ignore-scripts

CMD bun start