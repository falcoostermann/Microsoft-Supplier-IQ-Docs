# Security

Supplier IQ uses two additive Dataverse roles.

| Role | Can do | Access | Does not grant |
|---|---|---|---|
| **Supplier IQ User** | Use the Supplier IQ app, maintain supplier-related records and run the supported experiences | Accounts, Contacts, activities, Supplier IQ operational tables, and read-only Prompt Catalog | Creating, editing, or deleting Prompt Catalog rows; environment administration; access to rows restricted by other Dataverse controls |
| **Supplier IQ Administrator** | Create, read, edit, and delete Prompt Catalog rows across the environment | Supplier IQ Prompt, including the relationship privileges required to manage prompt rows | Access to the Supplier IQ app, Accounts, activities, or other Supplier IQ tables when assigned by itself |

Assign **Supplier IQ Administrator** together with **Supplier IQ User**. Effective Dataverse permissions are additive.

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
