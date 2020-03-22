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

## Plan

The first version will be considered feature complete once the server provides

- [X] Shared REPL state
- [X] Shared view of edits in real-time 
- [X] Shared REPL history
- [X] Authentication using shared secret
- [X] Dynamic addition of new libraries to the REPL
- [ ] Documentation to explain hosting via LinuxKit
  
## Planned features

After the initial version these additional features are planned

- [ ] Incremental feedback on long running REPL evaluations
- [ ] Cancel long running REPL evaluations
- [ ] nodeJS REPLs (as another image)

## [License](LICENSE)

Copyright © 2019 Ray McDermott

[Distributed under the GPL v3](LICENSE)