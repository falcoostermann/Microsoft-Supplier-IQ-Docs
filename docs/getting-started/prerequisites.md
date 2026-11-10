# Prerequisites

A Supplier IQ pilot needs licenses, capacity, a Dataverse environment, and an authorized setup team.

<div class="siq-summary-grid" markdown>

<div class="siq-summary-card" markdown>
### Microsoft 365 Copilot
Copilot experiences and prompt hand-off.
</div>

<div class="siq-summary-card" markdown>
### Dynamics 365 Sales
Model-driven app and Dataverse foundation.
</div>

<div class="siq-summary-card" markdown>
### Copilot Credits
AI scoring, summaries, news, and documents.
</div>

<div class="siq-summary-card" markdown>
### Power Platform
Environment with Dataverse and the required connectors.
</div>

</div>

Plan approximately **500–1,000 Copilot Credits** for an initial pilot, then monitor actual use.

!!! warning "Validate current licensing"
    Packaging can change. Confirm licenses and capacity with your Microsoft representative.

## Setup access

The setup team needs:

- Power Platform System Administrator or System Customizer access
- solution import and connection-reference permissions
- Copilot and AI Builder configuration access
- access to the target SharePoint site

## Connections

Supplier IQ connects to **Dataverse**, **Outlook**, **Content Conversion**, **Teams**, and **SharePoint**. Each Email Tracker user authorizes their personal Outlook connection.

## Pilot path

1. Prepare Dataverse, region, security group, DLP, auditing, and retention.
2. License pilot users and enable the required Copilot experiences.
3. [Install and configure Supplier IQ](installation.md).
4. Assign roles, authorize Outlook, and onboard a focused buyer group.

## Ready when

- [ ] Buyers see the correct supplier portfolio.
- [ ] Outlook activity can be reviewed and tracked.
- [ ] Supplier summaries and news generate successfully.
- [ ] Prompts receive the selected supplier context.
- [ ] Teams reminders reach the expected users.
