# Prerequisites

Supplier IQ uses existing Microsoft cloud services. A pilot normally requires two user licenses, Copilot capacity, a Dataverse environment, and four organizational setup steps.

## Licenses and capacity

| Requirement | Why it is needed |
|---|---|
| Microsoft 365 Copilot | Copilot experiences in Outlook and Microsoft 365, including prompt hand-off to supported agents such as Researcher or Sales Agent |
| Dynamics 365 Sales Enterprise or Premium | Model-driven app foundation, Dataverse capabilities, and required first-party Sales components |
| Copilot Credits / AI Builder capacity | AI Builder prompts used for email scoring, supplier summaries, supplier news, and document generation |
| Power Platform environment with Dataverse | Hosts the Supplier IQ solution, data model, apps, flows, and security roles |

For an initial pilot, plan approximately **500 to 1,000 Copilot Credits** and monitor actual consumption. Usage varies with prompt design, record volume, and how frequently users refresh AI-generated content.

> **Validate current licensing**
>
> Microsoft licensing and product packaging can change. Confirm the required licenses and capacity with your Microsoft representative before rollout.

## Administrative access

The setup team needs:

- Power Platform System Administrator or System Customizer access
- permission to import solutions and configure connection references
- permission to deploy or enable Microsoft 365 Copilot experiences
- access to create or configure AI Builder custom prompts
- access to the target SharePoint site used for generated documents

## Required connectors

Supplier IQ uses connection references for:

- Microsoft Dataverse
- Office 365 Outlook
- Content Conversion
- Microsoft Teams
- SharePoint

Each Email Tracker user must authorize their personal Office 365 Outlook run-only connection.

## Organizational setup

### 1. Set up the Dataverse environment

Create or select a Power Platform environment with Dataverse and the required Dynamics 365 Sales applications. Confirm the environment strategy, region, security group, DLP policy, auditing, and retention requirements.

### 2. Activate Copilot for the pilot users

Assign Microsoft 365 Copilot licenses and enable the required Copilot experiences. Deploy the Outlook add-in and any required Sales Agent capabilities to the pilot buyers.

### 3. Import and configure Supplier IQ

Import the solution, map connection references, configure environment-specific URLs and agent IDs, mark supplier Accounts, and seed the Prompt Catalog.

### 4. Onboard pilot buyers

Assign security roles, authorize Outlook, complete a short enablement session, and start with a small number of well-defined procurement use cases.

## Pilot-ready checklist

A pilot is ready when buyers can:

- open the Supplier Cockpit;
- see only relevant supplier Accounts;
- review Outlook activity in the Email Tracker;
- track emails and meetings to Dataverse;
- request supplier summaries and news;
- select a supplier and prepare a prompt in the Prompt Catalog;
- receive the expected Teams reminders.
