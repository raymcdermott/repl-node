![CI-Lint](https://github.com/raymcdermott/repl-node/workflows/CI-Lint/badge.svg)



# REPL-REPL - server

A Clojure server designed to expose a shared PREPL.

The server is designed to be accessible via a web socket.

An EDN map will contain the expression(s) to be evaluated.

## Usage

In this mode, a PREPL socket server will be started on an available port.

The command takes these run time parameters:
- `http-port` - a number above 1024, on which the web server will be exposed
- `shared-secret` - to hand out to clients so that they can connect

```bash
$ clojure -A:repl 8888 warm-blooded-lizards-rock
```

## Hosting
The server is intended to be hosted on an OS built using LinuxKit.

The container is used to create an image via a GitHub action.

The image will be published on GitHub packages. 

## Why LinuxKit?
When providing a public REPL there is a possibility of access and disruption to the underlying operating system. With LinuxKit, Alpine Linux is used as the base operating system and can be defined to contain only the minimal features needed to run Clojure (no shells / logins / etc.). It is further secured by running over a read-only file system. 

If possible the LinuxKit image should be used as an entire compute instance (on AWS, Azure, GCP or other cloud / ISP) to minimize the value of the runtime environment.

## Plan

The first version will be considered feature complete once the server provides

##### REPL features

- [X] Shared REPL state
- [X] Shared view of edits in real-time 
- [X] Shared REPL history
- [X] Dynamic addition of new libraries to the REPL

##### Networking and hosting

- [ ] Docker image
- [ ] Consul configuration
- [ ] Cloudflare DNS support

##### Security aspects

- [ ] Custom LinuxKit OS image
- [X] Authentication using shared secret

### Heroku Deployment


  
## Planned features

After the initial version these additional features are planned

- [ ] Incremental feedback on long running REPL evaluations
- [ ] Cancel long running REPL evaluations
- [ ] nodeJS REPLs (as another image)

## [License](LICENSE)

Copyright © 2019 Ray McDermott

[Distributed under the GPL v3](LICENSE)
