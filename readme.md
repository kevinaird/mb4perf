# MB4Perf - Mountebank in Bun

A Dockerfile for the [Mountebank](https://github.com/bbyars/mountebank/tree/master) service virtualization tool running in the BunJS runtime for additional performance. Hopefully. 

TODO - Benchmarks

## Usage

````sh
# Build with the following command
docker build --tag=kevinaird/mb4perf .

# Run wih the following
docker run --rm --name mb4perf \
 -p 5525:2525 \
 -it kevinaird/mb4perf

````