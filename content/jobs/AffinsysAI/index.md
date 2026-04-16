---
date: '2024-01-01'
title: 'Software Engineer'
company: 'Affinsys AI'
location: 'Bangalore, India'
range: 'January 2024 - Present'
url: 'https://affinsys.com/'
---

- Designed and shipped the `DBOps` service, an LLM-driven ETL pipeline generator that converts natural-language requests into executable workflows using Claude via the Anthropic API, structured prompt chaining, and iterative self-correction loops. Reduced manual pipeline authoring time from hours to under 2 minutes for data operations teams.
- Architected the `Datalens` service, a self-serve analytics platform that translates natural language questions into SQL with metadata-driven query construction, SQL sanitization, and a chart catalog supporting 15+ chart types. Cut dashboard creation time by 90% and enabled non-technical stakeholders to build reports independently.
- Led end-to-end development of the multi-tenant `Analytics` service powering 20+ dashboards and 200+ charts for internal and client-facing teams. Introduced materialized SQL views to remove redundant query execution, reducing database load by 40% and improving average API response time from 800ms to 480ms.
- Built the `Analytics Scheduler`, a scheduling engine that automates recurring delivery of 100+ analytics reports via email, reducing manual reporting effort by an estimated 15 engineering hours per week.
- Implemented the `Archival` service to guarantee data consistency and referential integrity across a distributed system of 10+ services, including complex foreign-key relationships, failover strategy, purge workflows, and data/file migration from MinIO to AWS S3.
- Built the `Eventlogger` service, a high-throughput event-driven warehouse that ingests events from 10+ services through AMQP and NATS into 40+ structured tables with asynchronous database writes, achieving sub-second ingestion latency and enabling analytics against a single source of truth.