var relearn_searchindex = [
  {
    "breadcrumb": "Aceberg's wiki \u003e AnyAppStart",
    "content": "Main page Item",
    "description": "Main page Item",
    "tags": [],
    "title": "Screenshots",
    "uri": "/wiki/anyappstart/screenshots/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e AnyAppStart",
    "content": "FAQ",
    "description": "FAQ",
    "tags": [],
    "title": "FAQ",
    "uri": "/wiki/anyappstart/faq/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e Exercise Diary",
    "content": "FAQ",
    "description": "FAQ",
    "tags": [],
    "title": "FAQ",
    "uri": "/wiki/exercise-diary/faq/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e ForAuth",
    "content": "FAQ",
    "description": "FAQ",
    "tags": [],
    "title": "FAQ",
    "uri": "/wiki/forauth/faq/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e WatchYourPorts",
    "content": "FAQ",
    "description": "FAQ",
    "tags": [],
    "title": "FAQ",
    "uri": "/wiki/watchyourports/faq/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e AnyAppStart",
    "content": "API",
    "description": "API",
    "tags": [],
    "title": "API",
    "uri": "/wiki/anyappstart/api/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e Exercise Diary",
    "content": "API",
    "description": "API",
    "tags": [],
    "title": "API",
    "uri": "/wiki/exercise-diary/api/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e ForAuth",
    "content": "API",
    "description": "API",
    "tags": [],
    "title": "API",
    "uri": "/wiki/forauth/api/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e WatchYourPorts",
    "content": "API",
    "description": "API",
    "tags": [],
    "title": "API",
    "uri": "/wiki/watchyourports/api/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e WatchYourLAN \u003e Install",
    "content": "Replace $YOURTIMEZONE with correct time zone and $YOURIFACE with network interface you want to scan. Network mode must be host. Set $DOCKERDATAPATH for container to save data:\n​ sh docker run --name wyl \\ -e \"IFACES=$YOURIFACE\" \\ -e \"TZ=$YOURTIMEZONE\" \\ --network=\"host\" \\ -v $DOCKERDATAPATH/wyl:/data/WatchYourLAN \\ aceberg/watchyourlan Web GUI should be at http://localhost:8840\ndocker-compose ​ yaml version: \"3\" services: # node-bootstrap: # optional, local themes and icons # image: aceberg/node-bootstrap # dockerhub # # image: ghcr.io/aceberg/node-bootstrap # or github # restart: unless-stopped # ports: # - 8850:8850 wyl: image: aceberg/watchyourlan # dockerhub # image: ghcr.io/aceberg/watchyourlan # or github network_mode: \"host\" restart: unless-stopped # uncomment those if you are using local node-bootstrap: # command: \"-n http://YOUR_IP:8850\" # put your server IP or DNS name here # depends_on: # - node-bootstrap volumes: - ~/.dockerdata/wyl:/data/WatchYourLAN environment: TZ: Asia/Novosibirsk # required: needs your TZ for correct time IFACES: \"enp4s0 wlxf4ec3892dd51\" # required: 1 or more interface # HOST: \"0.0.0.0\" # optional, default: 0.0.0.0 # PORT: \"8840\" # optional, default: 8840 # TIMEOUT: \"120\" # optional, time in seconds, default: 120 # SHOUTRRR_URL: \"\" # optional, set url to notify # THEME: \"sand\" # optional # COLOR: \"dark\" # optional",
    "description": "Replace $YOURTIMEZONE with correct time zone and $YOURIFACE with network interface you want to scan. Network mode must be host. Set $DOCKERDATAPATH for container to save data:\n​ sh docker run --name wyl \\ -e \"IFACES=$YOURIFACE\" \\ -e \"TZ=$YOURTIMEZONE\" \\ --network=\"host\" \\ -v $DOCKERDATAPATH/wyl:/data/WatchYourLAN \\ aceberg/watchyourlan Web GUI should be at http://localhost:8840\ndocker-compose ​ yaml version: \"3\" services: # node-bootstrap: # optional, local themes and icons # image: aceberg/node-bootstrap # dockerhub # # image: ghcr.io/aceberg/node-bootstrap # or github # restart: unless-stopped # ports: # - 8850:8850 wyl: image: aceberg/watchyourlan # dockerhub # image: ghcr.io/aceberg/watchyourlan # or github network_mode: \"host\" restart: unless-stopped # uncomment those if you are using local node-bootstrap: # command: \"-n http://YOUR_IP:8850\" # put your server IP or DNS name here # depends_on: # - node-bootstrap volumes: - ~/.dockerdata/wyl:/data/WatchYourLAN environment: TZ: Asia/Novosibirsk # required: needs your TZ for correct time IFACES: \"enp4s0 wlxf4ec3892dd51\" # required: 1 or more interface # HOST: \"0.0.0.0\" # optional, default: 0.0.0.0 # PORT: \"8840\" # optional, default: 8840 # TIMEOUT: \"120\" # optional, time in seconds, default: 120 # SHOUTRRR_URL: \"\" # optional, set url to notify # THEME: \"sand\" # optional # COLOR: \"dark\" # optional",
    "tags": [],
    "title": "Docker",
    "uri": "/wiki/watchyourlan/install/docker/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e WatchYourLAN",
    "content": "Main page (light theme) History Grafana dashboard example",
    "description": "Main page (light theme) History Grafana dashboard example",
    "tags": [],
    "title": "Screenshots",
    "uri": "/wiki/watchyourlan/screenshots/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e WatchYourLAN \u003e Install",
    "content": "All binary packages can be found in latest release. There are .deb, .rpm, .apk (Alpine Linux) and .tar.gz files.\nSupported architectures: amd64, i386, arm_v5, arm_v6, arm_v7, arm64.\nDependencies: arp-scan, tzdata.\nFor amd64 there is a deb repo available",
    "description": "All binary packages can be found in latest release. There are .deb, .rpm, .apk (Alpine Linux) and .tar.gz files.\nSupported architectures: amd64, i386, arm_v5, arm_v6, arm_v7, arm64.\nDependencies: arp-scan, tzdata.\nFor amd64 there is a deb repo available",
    "tags": [],
    "title": "Bianry",
    "uri": "/wiki/watchyourlan/install/binary/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e WatchYourLAN",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Install",
    "uri": "/wiki/watchyourlan/install/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e WatchYourLAN",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Config",
    "uri": "/wiki/watchyourlan/config/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki",
    "content": "Lightweight network IP scanner with web GUI. Features:\nSend notification when new host is found Monitor hosts online/offline history Keep a list of all hosts in the network Send data to InfluxDB2 or Prometheus to make a Grafana dashboard Content Screenshots Quick Start FAQ API",
    "description": "Lightweight network IP scanner with web GUI. Features:\nSend notification when new host is found Monitor hosts online/offline history Keep a list of all hosts in the network Send data to InfluxDB2 or Prometheus to make a Grafana dashboard Content Screenshots Quick Start FAQ API",
    "tags": [],
    "title": "WatchYourLAN",
    "uri": "/wiki/watchyourlan/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e WatchYourLAN",
    "content": "FAQ",
    "description": "FAQ",
    "tags": [],
    "title": "FAQ",
    "uri": "/wiki/watchyourlan/faq/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e WatchYourLAN",
    "content": "GET /api/all Returns all hosts in json.\nGET /api/history Returns all History. Not recommended, the output can be a lot.\nGET /api/history/:mac/:date Returns only history of a device with this mac filtered by date. date format can be anything from 2 to 2025-07 to 2025-07-26.\nGET /api/history/:mac?num=20 Returns only last 20 lines of history of a device with this mac.\nGET /api/host/:id Returns host with this id in json.\nGET /api/port/:addr/:port Gets state of one port of addr. Returns true if port is open or false otherwise. Request example:\ncurl \"http://0.0.0.0:8840/api/port/192.168.2.2/8844\" GET /api/edit/:id/:name/*known Edit host with ID id. Can change name. known is optional, when set to toggle will change Known state.\nGET /api/host/del/:id Remove host with ID id.\nGET /api/notify_test Send test notification.\nGET /api/status/*iface Show status (Total number of hosts, online/offline, known/unknown). The iface parameter is optional and shows status for one interface only. For all interfaces just call /api/status/.",
    "description": "GET /api/all Returns all hosts in json.\nGET /api/history Returns all History. Not recommended, the output can be a lot.\nGET /api/history/:mac/:date Returns only history of a device with this mac filtered by date. date format can be anything from 2 to 2025-07 to 2025-07-26.\nGET /api/history/:mac?num=20 Returns only last 20 lines of history of a device with this mac.\nGET /api/host/:id Returns host with this id in json.\nGET /api/port/:addr/:port Gets state of one port of addr. Returns true if port is open or false otherwise. Request example:",
    "tags": [],
    "title": "API",
    "uri": "/wiki/watchyourlan/api/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/wiki/categories/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/wiki/tags/index.html"
  }
]
