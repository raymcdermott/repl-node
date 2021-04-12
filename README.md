![CI-Test](https://github.com/raymcdermott/repl-node/workflows/CI-Test/badge.svg)
![CI-Lint](https://github.com/raymcdermott/repl-node/workflows/CI-Lint/badge.svg)


# REPL-REPL - server

A Clojure server designed to expose a shared REPL.

The server is designed to be accessible via a web socket.

An EDN map will contain the expression(s) to be evaluated.

## Usage

```bash
$ clojure -A:repl
```

The web server will be exposed on port `56665` by default

Optionally you can provide a port number:

```bash
$ clojure -A:repl 8888
```

Optionally you can provide the port number via an environment variable `PORT`:

```bash
$ PORT=8998 clojure -A:repl 
```

In all cases, a PREPL socket server will be started locally on an available port.

# Docker

## Build
To build the prepl node Docker image

```bash
docker build -t prepl-node .
```

## Run
To run the prepl node from Docker

```bash
docker run -p 56665:56665 prepl-node
```

The default docker image exposes the web socket on `56665`. You can expose it on a local port (`8192` in the example)

```bash
docker run -p 8192:56665 prepl-node
```

**NOTE:** Since the client tries to connect locally to `56665` you also need to update that part!

## Zero Caching
There is no attempt to provide caching of dependencies. PR me :)

## Hosting
A GitHub action builds and publishes a Docker image on GitHub packages.

The server running the image should be hosted on an OS built using LinuxKit.

## Why Docker?
When providing a public REPL there is a possibility of deliberate or accidental access and disruption to the underlying operating system. Running the REPL within a docker container is an improvement on this situation by ensuring that the REPL is running in an isolated environment. 

## Why LinuxKit?
LinuxKit takes this further by providing a secure runtime that will only run services via Docker containers.

Alpine Linux is used as the base operating system which is designed for security and a minimal runtime surface area. 

The LinuxKit image can be defined to contain only the minimal features needed to run Java / Clojure (no shells / logins / etc.). 
 
Linuxkit is further secured by running the OS from a read-only file system. This means that even if an intruder gains access to the OS, it's impossible for them to change the OS and its tools. 

## Plan
The first version will be considered feature complete once the server provides

##### REPL features

- [X] Shared REPL state
- [X] Shared view of edits in real-time 
- [X] Dynamic addition of new libraries to the REPL
- [X] Incremental feedback (where given) on long running REPL evaluations

##### Hosting

- [X] Docker image

##### Security aspects

- [ ] Custom LinuxKit OS image
- [X] Authentication using shared secret
  
## Planned features

After the initial version these additional features are planned

- [ ] nodeJS REPLs (as another image)

- [ ] Cancel long running REPL evaluations

- [ ] Hosting examples
- [ ] Networking examples

## [License](LICENSE)

Copyright © 2019 Ray McDermott

[Distributed under the GPL v3](LICENSE)
