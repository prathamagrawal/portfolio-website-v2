---
date: '1'
title: 'Mirror-DB'
cover: './mirror-db-architecture.jpeg'
github: 'https://github.com/prathamagrawal/mirror-db'
external: 'https://github.com/users/prathamagrawal/packages/container/package/mirror-db%2Fmirror-db'
tech:
  - Kubernetes
  - PostgreSQL
  - PgBouncer
  - Helm Chart
---

Designed a high-availability PostgreSQL cluster on Kubernetes to address production downtime during primary failover.

- Achieved sub-60 second automatic failover with a 4-node replication topology and service-driven role switching.
- Reduced connection overhead by 70-90% using PgBouncer pooling and supported read/write splitting for zero-downtime operations.
- Implemented dynamic service discovery, automated pod labeling, and a monitoring stack for health, replication, and failover visibility.
