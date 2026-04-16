---
date: '2'
title: 'LogHive'
cover: './loghive.png'
github: 'https://github.com/prathamagrawal/loghive'
external: 'https://pypi.org/project/loghive/'
tech:
  - Python
  - RabbitMQ
  - Redis
  - PostgresDB
  - Docker
---

Built a log archival pipeline for high-volume systems with compression, indexed retrieval, and controlled back-pressure handling.

- Benchmarked the system for high-throughput ingestion while maintaining 99.99% write durability on PostgreSQL.
- Added adaptive RabbitMQ consumer scaling and Redis-based producer rate limiting to prevent queue saturation during traffic spikes.
