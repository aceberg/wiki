+++
title = 'API'
weight = 50
+++

```ruby
GET /api/all
```
Returns all hosts in `json`.


```ruby
GET /api/history
```
Returns all History. Not recommended, the output can be a lot.

```ruby
GET /api/history/:mac/:date
```
Returns only history of a device with this `mac` filtered by `date`. `date` format can be anything from `2` to `2025-07` to `2025-07-26`.

```ruby
GET /api/history/:mac?num=20
```
Returns only last 20 lines of history of a device with this `mac`.


```ruby
GET /api/host/:id
```
Returns host with this `id` in `json`.


```ruby
GET /api/port/:addr/:port
```
Gets state of one `port` of `addr`. Returns `true` if port is open or `false` otherwise. Request example:

```bash
curl "http://0.0.0.0:8840/api/port/192.168.2.2/8844"
```

```ruby
GET /api/edit/:id/:name/*known
```
Edit host with ID `id`. Can change `name`. `known` is optional, when set to `toggle` will change Known state.


```ruby
GET /api/host/del/:id
```
Remove host with ID `id`.


```ruby
GET /api/notify_test
```
Send test notification.


```ruby
GET /api/status/*iface
```
Show status (Total number of hosts, online/offline, known/unknown). The `iface` parameter is optional and shows status for one interface only. For all interfaces just call `/api/status/`.