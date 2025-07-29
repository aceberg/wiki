var relearn_searchindex = [
  {
    "breadcrumb": "Aceberg's wiki \u003e WatchYourLAN",
    "content": "Main page (light theme) History Grafana dashboard example",
    "description": "Main page (light theme) History Grafana dashboard example",
    "tags": [],
    "title": "Screenshots",
    "uri": "/wiki/watchyourlan/screenshots/index.html"
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
    "breadcrumb": "Aceberg's wiki \u003e ForAuth",
    "content": "FAQ",
    "description": "FAQ",
    "tags": [],
    "title": "FAQ",
    "uri": "/wiki/forauth/faq/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki \u003e WatchYourLAN",
    "content": "Replace $YOURTIMEZONE with correct time zone and $YOURIFACE with network interface you want to scan. Network mode must be host. Set $DOCKERDATAPATH for container to save data:\n​ sh docker run --name wyl \\ -e \"IFACES=$YOURIFACE\" \\ -e \"TZ=$YOURTIMEZONE\" \\ --network=\"host\" \\ -v $DOCKERDATAPATH/wyl:/data/WatchYourLAN \\ aceberg/watchyourlan Web GUI should be at http://localhost:8840",
    "description": "Replace $YOURTIMEZONE with correct time zone and $YOURIFACE with network interface you want to scan. Network mode must be host. Set $DOCKERDATAPATH for container to save data:\n​ sh docker run --name wyl \\ -e \"IFACES=$YOURIFACE\" \\ -e \"TZ=$YOURTIMEZONE\" \\ --network=\"host\" \\ -v $DOCKERDATAPATH/wyl:/data/WatchYourLAN \\ aceberg/watchyourlan Web GUI should be at http://localhost:8840",
    "tags": [],
    "title": "Quick Start",
    "uri": "/wiki/watchyourlan/quick-start/index.html"
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
    "breadcrumb": "Aceberg's wiki \u003e AnyAppStart",
    "content": "API",
    "description": "API",
    "tags": [],
    "title": "API",
    "uri": "/wiki/anyappstart/api/index.html"
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
    "breadcrumb": "Aceberg's wiki \u003e WatchYourLAN",
    "content": "GET /api/all Returns all hosts in json.\nGET /api/history Returns all History. Not recommended, the output can be a lot.\nGET /api/history/:mac/:date Returns only history of a device with this mac filtered by date. date format can be anything from 2 to 2025-07 to 2025-07-26.\nGET /api/history/:mac?num=20 Returns only last 20 lines of history of a device with this mac.\nGET /api/host/:id Returns host with this id in json.\nGET /api/port/:addr/:port Gets state of one port of addr. Returns true if port is open or false otherwise. Request example:\ncurl \"http://0.0.0.0:8840/api/port/192.168.2.2/8844\" GET /api/edit/:id/:name/*known Edit host with ID id. Can change name. known is optional, when set to toggle will change Known state.\nGET /api/host/del/:id Remove host with ID id.\nGET /api/notify_test Send test notification.\nGET /api/status/*iface Show status (Total number of hosts, online/offline, known/unknown). The iface parameter is optional and shows status for one interface only. For all interfaces just call /api/status/.",
    "description": "GET /api/all Returns all hosts in json.\nGET /api/history Returns all History. Not recommended, the output can be a lot.\nGET /api/history/:mac/:date Returns only history of a device with this mac filtered by date. date format can be anything from 2 to 2025-07 to 2025-07-26.\nGET /api/history/:mac?num=20 Returns only last 20 lines of history of a device with this mac.\nGET /api/host/:id Returns host with this id in json.\nGET /api/port/:addr/:port Gets state of one port of addr. Returns true if port is open or false otherwise. Request example:",
    "tags": [],
    "title": "API",
    "uri": "/wiki/watchyourlan/api/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki",
    "content": "This is a new chapter.",
    "description": "This is a new chapter.",
    "tags": [],
    "title": "AnyAppStart",
    "uri": "/wiki/anyappstart/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki",
    "content": "",
    "description": "",
    "tags": [],
    "title": "ForAuth",
    "uri": "/wiki/forauth/index.html"
  },
  {
    "breadcrumb": "Aceberg's wiki",
    "content": "Lightweight network IP scanner with web GUI. Features:\nSend notification when new host is found Monitor hosts online/offline history Keep a list of all hosts in the network Send data to InfluxDB2 or Prometheus to make a Grafana dashboard",
    "description": "Lightweight network IP scanner with web GUI. Features:\nSend notification when new host is found Monitor hosts online/offline history Keep a list of all hosts in the network Send data to InfluxDB2 or Prometheus to make a Grafana dashboard",
    "tags": [],
    "title": "WatchYourLAN",
    "uri": "/wiki/watchyourlan/index.html"
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
