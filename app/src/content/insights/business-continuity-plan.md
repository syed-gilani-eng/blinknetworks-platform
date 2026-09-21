---
title: "What a business continuity plan should cover"
description: "Key considerations to help you prepare for disruption and keep your business moving forward."
category: "Backup & Business Continuity"
publishedDate: 2026-09-16
image: "/images/insights/article-business-continuity.webp"
imageAlt: "Illustration of stacked servers with a circular restore arrow, representing backup and business continuity"
featured: false
draft: false
order: 7
---

## Business continuity, disaster recovery and backup: clarifying the terms

These three terms are often used interchangeably, but they describe different things:

- **Backup** is simply having a copy of your data that can be restored.
- **Disaster recovery** is the process of restoring systems and data after a disruption, using those backups (and other measures) to get technology running again.
- **Business continuity** is broader still: it covers how the entire business keeps operating—people, processes, and communication included—while systems are being recovered.

A business can have backups without a real continuity plan, and that gap is often only discovered during an actual disruption.

## Start by identifying what's critical

Not every system or dataset is equally important to keeping the business running. A useful starting point is identifying:

- Which systems, applications, and data the business cannot operate without for more than a short period.
- Which systems are important but can tolerate a longer outage.
- Who depends on each system, and for what.

This exercise creates the foundation for every other continuity decision that follows.

## Understanding RTO and RPO

Two concepts are central to continuity planning:

- **Recovery Time Objective (RTO)** is how long the business can tolerate a system being unavailable before the impact becomes unacceptable.
- **Recovery Point Objective (RPO)** is how much data loss, measured in time, the business can tolerate—for example, whether losing the last hour of data is acceptable, or only the last few minutes.

Defining RTO and RPO for your most critical systems gives concrete targets to plan and test against, rather than a vague goal of "recovering quickly."

## Backup fundamentals: the 3-2-1 approach

A widely used backup principle is the 3-2-1 approach: keep at least three copies of your data, store them on two different types of media or systems, and keep at least one copy off-site (including cloud-based storage). This reduces the chance that a single event—a hardware failure, a site-level incident, or a targeted attack—can destroy every copy of your data at once.

## Planning for cyber incidents specifically

Continuity planning has traditionally focused on physical disruptions, but cyber incidents—such as ransomware—require their own consideration. A backup can be compromised or encrypted along with production systems if it is not properly isolated. Continuity plans should account for:

- Keeping at least one backup copy isolated from the main network so it cannot be affected by the same incident.
- Having a communication plan that does not rely entirely on systems that might be part of the incident.
- Understanding, in advance, who needs to be involved in a decision to restore from backup versus attempting other recovery steps.

## Communication and roles during a disruption

A continuity plan should clearly state who is responsible for what during a disruption: who makes decisions, who communicates with staff, and who communicates with customers or partners if needed. Without this clarity, even a technically sound recovery can be slowed down by confusion about who is authorized to act.

## Testing and reviewing the plan

A continuity plan that has never been tested is, at best, a set of assumptions. Restoring a sample backup, walking through the plan as a team exercise, and reviewing it after any significant change to systems or staff are all practical ways to keep the plan realistic rather than theoretical.

## A starter checklist

- Critical systems and data have been identified and prioritized.
- RTO and RPO have been defined for the most critical systems.
- Backups follow a 3-2-1 approach, including an off-site or cloud copy.
- At least one backup copy is isolated from the production network.
- Roles and communication responsibilities are documented for a disruption scenario.
- The plan has been tested at least once, and a review cadence is in place.

## Sources and further reading

- [NIST SP 800-34 Rev. 1: Contingency Planning Guide for Federal Information Systems](https://csrc.nist.gov/pubs/sp/800/34/r1/final)
- [Canadian Centre for Cyber Security: Guidance publications](https://www.cyber.gc.ca/en/guidance)
