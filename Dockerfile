FROM oven/bun:latest

EXPOSE 2525

ENV NODE_ENV=production
ENV MOUNTEBANK_VERSION=2.9.1

COPY . .

RUN bun install --production --ignore-scripts
RUN chmod +x ./start.sh

ENTRYPOINT [ "./start.sh" ] 