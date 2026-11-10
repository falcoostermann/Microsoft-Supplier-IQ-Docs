# Security

Supplier IQ uses two Dataverse roles.

<div class="siq-summary-grid" markdown>

<div class="siq-summary-card" markdown>
### Supplier IQ User
Use the app, activities, and prompts. Prompt Catalog is read-only.
</div>

<div class="siq-summary-card" markdown>
### Supplier IQ Administrator
Supplemental role for creating, editing, and deleting prompts.
</div>

</div>

## Recommended assignment

| Entra group or Dataverse team | Dataverse role |
|---|---|
| Supplier IQ Users | Supplier IQ User |
| Supplier IQ Administrators | Supplier IQ User + Supplier IQ Administrator |

The solution does not create Entra groups. Environment access and group membership remain deployment-specific.

## What controls access

- **Is Supplier** determines which Accounts qualify.
- **Ownership and Procurement Team Membership** shape the cockpit portfolio.
- **Dataverse security** determines which rows users can actually read or change.

## Production checks

- [ ] Validate least privilege for Accounts, Contacts, activities, and custom tables.
- [ ] Restrict Prompt Catalog maintenance to administrators.
- [ ] Configure DLP for Outlook, Teams, SharePoint, Dataverse, and AI Builder.
- [ ] Define auditing, retention, and deletion policies.
- [ ] Review connection owners and service accounts.
- [ ] Test with a non-administrator.

## Administrator scope

The supplemental role grants organization-level **Read, Create, Write, Delete, Append, and Append To** on Supplier IQ Prompt. The settings icon checks these privileges directly, not the role name.
