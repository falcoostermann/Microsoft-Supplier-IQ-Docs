# Automation and integrations

Supplier IQ uses a small set of purpose-built flows with explicit connection ownership and operational boundaries.

## Power Automate inventory

| Flow | Trigger | Main connectors | Purpose |
|---|---|---|---|
| Power Apps - Fetch latest Outlook Activities | Power Apps V2 | Outlook, Dataverse, Content Conversion, AI Builder | Reads mailbox and calendar context, excludes tracked or dismissed items, and scores relevance |
| Power Apps - Link Email to Dataverse | Power Apps V2 | Outlook, Dataverse | Creates or updates the Dataverse email and links it to the confirmed record |
| Power Apps - Link Appointment to Dataverse | Power Apps V2 | Dataverse | Creates or links an appointment |
| Power Apps - Dismiss Email | Power Apps V2 | Dataverse | Persists a dismissed Outlook activity ID |
| Power Apps - Generate Supplier Summary | Dataverse row modified | Dataverse, AI Builder | Generates and caches a supplier activity summary |
| Power Apps - Generate Supplier News | Dataverse row modified | Dataverse, AI Builder | Generates and caches supplier news |
| Create E-Mail in Dataverse | Interactive | Outlook, Dataverse | Creates an email activity and applies the Outlook category |
| Create PowerPoint Document | Interactive | Dataverse, SharePoint, AI Builder | Generates and stores a supplier presentation |
| Daily - check tasks and send reminder | Scheduled | Dataverse, Teams | Sends task reminders |
| Weekly - Send Teams Notification to track emails | Scheduled | Teams | Reminds users to review the Email Tracker |

## Connection references

- `siq_Dataverse`
- `siq_Office365Outlook`
- `siq_ContentConversion`
- `siq_Teams`
- `siq_SharePoint`

## Operational recommendations

- configure owners and connection references explicitly per environment;
- retain user-context Outlook connections for personal mailbox operations;
- define retry and concurrency policies for external actions;
- monitor failed and long-running flow runs;
- alert when cache rows remain in `Queued` or `Generating`;
- use environment variables for URLs, app IDs, and SharePoint configuration;
- review DLP, auditing, retention, and service-account ownership.
