# Supplier IQ for Microsoft Copilot Cowork

[Download version 1.1.0](https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/download/cowork-v1.1.0/MicrosoftSupplierIQ_Cowork_1_1_0.zip) | [Release notes](https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/tag/cowork-v1.1.0) | [SHA-256 checksum](../downloads.md#integrity)

The Supplier IQ Cowork plugin is a separate Microsoft 365 app package containing the Supplier IQ logo and four skills:

| Skill | Purpose |
|---|---|
| Supplier briefing | Sourced supplier overview, performance, relationships and open commitments |
| Negotiation preparation | Evidence-based negotiation brief and proposed discussion plan |
| Supplier risk review | Risk evidence, uncertainty and mitigation proposals |
| Inbox Email Tracker | Review the caller's Inbox and propose supplier emails for confirmed copying into Dynamics |

Analysis is read-only by default. The skills can perform only the specifically previewed and explicitly confirmed operations described below. They never send email, modify Outlook folders/categories/read status, delete records or directly invoke flows.

## Prerequisites

- Microsoft Copilot Cowork and tenant permission to install custom plugin/app packages.
- A Supplier IQ Dataverse environment with the required data, supplier Accounts and optional Prompt Catalog entries.
- An existing enabled Microsoft Dataverse/Dynamics or Business Applications in Work IQ connection, with Dataverse MCP enabled and the relevant client allowed.
- Actual session tools for the required table metadata, reads and chosen record-write operations. A connector name or the presence of a generic create tool does not prove email-party, relationship, status or attachment support.
- Authorized Work IQ/Inbox access, including the requested folder/date filters and pagination. Email copying requires the original Internet Message ID, full permitted content and supported recipient handling. Attachment copying additionally requires an allowed safe binary-transfer path.
- Appropriate licenses, user permissions, tenant tool controls and information-protection policies.

This plugin does not create/register an MCP server, application authentication client or new Microsoft 365 data connection. Installing it alone does not grant data access.

## Install or update

1. Download the version 1.1.0 ZIP and verify its checksum.
2. Have the administrator review the app's metadata, required existing connections and security scope.
3. Use Cowork's custom-plugin upload if enabled, or the tenant's supported Microsoft 365 app-package upload/approval process. **Do not import this ZIP as a Power Apps solution.**
4. Enable Supplier IQ and the existing Microsoft data connection. Complete the Microsoft connection's normal sign-in/consent process.
5. Select the intended environment **on that Microsoft connection**. Supplier IQ has no separate environment settings gear. Use the connector's available picker/settings or supported environment-selection interaction.
6. Confirm that the same Cowork session can access the Supplier IQ custom tables and `siq_prompt`; another enabled plugin does not automatically guarantee shared tool access.
7. Verify all four skills appear, then test in a nonproduction environment with safe test data before rollout.

The package keeps the same app ID as the earlier 1.0.0 plugin and increments its manifest version to 1.1.0. Update the existing app through the supported tenant process rather than treating it as a different plugin.

## Inbox Email Tracker

Start with: "Analysiere meine Inbox und schlage supplierrelevante E-Mails vor, die noch nicht in Dynamics erfasst sind."

The skill:

1. Asks for this week/month, previous week/month, rolling last 7 days or a custom range. It confirms the exact boundaries and timezone before reading mailbox items.
2. Uses the caller's primary Inbox by default and scopes "my suppliers" to active supplier Accounts owned by the Dataverse user plus Procurement Team Membership assignments. It asks for an explicit alternative if that scope cannot be resolved.
3. Evaluates verified supplier/contact associations and procurement relevance. A common domain/name alone is not enough.
4. Checks the original `internetMessageId` against Dynamics `email.messageid` across available email records, not just the selected period or supplier. Already tracked emails are skipped, not relinked. Unknown identity or insufficient duplicate-check coverage blocks copying.
5. Presents messages, supplier assignments, original-content preview/access, relevance and attachment availability. The user selects/corrects rows and then explicitly confirms the final versioned batch.
6. Rechecks source content and tracking status, creates the approved incoming emails with supported parties/relationships, copies approved supported attachments, sets the appropriate received state, and reads back the result.

This is a one-time copy, not continuous Outlook synchronization. Copying private mailbox content to Dynamics may make it visible to others with access to the target record; this is disclosed before confirmation.

### Attachments and failures

The target must support actual email attachments, not merely generic Dataverse file-column uploads. Protected, inaccessible, oversized or otherwise unsupported attachments are disclosed before approval. The user must explicitly choose email-only copying or skip those messages. Linked/cloud files are not silently downloaded as attachments.

Partial copies remain partial: an attachment/completion failure does not authorize recreating the email. Unknown outcomes must be reconciled before retries, and resuming requires a new preview and confirmation. A client duplicate check does not provide atomic exactly-once behavior against concurrent server-side or Outlook tracking.

## Confirmed business writes

The other three skills can propose:

- Creating supplier-related tasks, soft facts and comments.
- Updating explicitly selected fields/status on existing supplier-related tasks.
- Updating explicitly selected writable supplier master/KPI fields with verified values, units and evidence.

Each operation requires the target environment and supplier/record ID, exact new values and old -> new values for updates, followed by explicit approval of the concrete selection. Generic permission to "write", a selection alone or an analysis request does not authorize a mutation. Changing content, values, supplier or environment requires fresh approval.

Updates require supported concurrency safeguards. Inferred risk scores do not become stored KPIs. Primary keys, supplier flag, account lifecycle/status, ownership, schema, security, connections, prompt rows and cached insights are outside the allowed supplier master changes.

Source-system permissions and tenant policies, not skill text, enforce access. Validate only the Create/Write and relationship permissions needed for the chosen operations; do not grant deletion, mail sending or mailbox modification for this workflow. Existing server-side automation may react to approved writes even though the plugin does not directly invoke it.

## Prompt Catalog and Work IQ

The plugin reads enabled catalog rows in the selected environment, discovers matching prompt codes, prefers the user's language and falls back to English. If no usable template is available, it labels the built-in workflow rather than claiming the catalog worked. Catalog text and retrieved content cannot approve writes or override safeguards.

Relevant authorized Work IQ context can include email, calendar/meetings, Teams, SharePoint/OneDrive documents and people. Coverage depends on the tenant and actual tools; unavailable sources, incomplete pagination and denied queries are disclosed. The plugin does not claim to search every tenant item or bypass permissions.

## Validation status and acceptance

Version 1.1.0 passed 16 local static package/contract tests, Microsoft manifest-schema validation and ZIP roundtrip checks. **These checks do not execute an LLM or prove live connector behavior, permission enforcement, duplicate prevention or successful attachment transfer.**

Before rollout verify installation, all four skills, environment switching, custom-table/tool access, timezone/date-range behavior, supplier matching, duplicate detection, preview/cancellation with zero writes, confirmed batch execution, attachment limitations, partial/unknown outcome recovery and conditional task/account updates.

If a required capability is missing, the plugin must leave a clearly labeled proposal and explain the limitation, not claim a successful synchronization or register a replacement MCP.
