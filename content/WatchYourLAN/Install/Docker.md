+++
title = 'Docker'
weight = 10

+++
Replace `$YOURTIMEZONE` with correct time zone and `$YOURIFACE` with network interface you want to scan. Network mode must be `host`. Set `$DOCKERDATAPATH` for container to save data:

```shell { title="sh"}
docker run --name wyl \
	-e "IFACES=$YOURIFACE" \
	-e "TZ=$YOURTIMEZONE" \
	--network="host" \
	-v $DOCKERDATAPATH/wyl:/data/WatchYourLAN \
    aceberg/watchyourlan
```
Web GUI should be at [http://localhost:8840](http://localhost:8840)

### docker-compose

```yaml { title="yaml"}
version: "3"
services:
  # node-bootstrap:                     # optional, local themes and icons
  #   image: aceberg/node-bootstrap           # dockerhub
  #   # image: ghcr.io/aceberg/node-bootstrap # or github
  #   restart: unless-stopped
  #   ports:
  #   - 8850:8850
  wyl:
    image: aceberg/watchyourlan           # dockerhub
    # image: ghcr.io/aceberg/watchyourlan # or github
    network_mode: "host"      
    restart: unless-stopped
    # uncomment those if you are using local node-bootstrap:
    # command: "-n http://YOUR_IP:8850"   # put your server IP or DNS name here
    # depends_on:
    #   - node-bootstrap
    volumes:
    - ~/.dockerdata/wyl:/data/WatchYourLAN
    environment:
      TZ: Asia/Novosibirsk              # required: needs your TZ for correct time
      IFACES: "enp4s0 wlxf4ec3892dd51"  # required: 1 or more interface
      # HOST: "0.0.0.0"                   # optional, default: 0.0.0.0
      # PORT: "8840"                      # optional, default: 8840
      # TIMEOUT: "120"                    # optional, time in seconds, default: 120
      # SHOUTRRR_URL: ""                  # optional, set url to notify
      # THEME: "sand"                     # optional
      # COLOR: "dark"                     # optional
```