# Security

Supplier IQ includes two Dataverse security roles. These roles are different from Microsoft Entra security groups.

## Supplier IQ User

Assign **Supplier IQ User** to application users.

The role provides the baseline privileges required for the model-driven app, standard Dynamics tables, activities, and Supplier IQ custom tables. For the Prompt Catalog, it provides organization-level read access without prompt create, update, or delete privileges.

Review the role against the customer's business-unit, ownership, and least-privilege model before production use.

## Supplier IQ Administrator

Assign **Supplier IQ Administrator** as a supplemental role to users who maintain Prompt Catalog content.

It grants organization-level permissions on Supplier IQ Prompt:

- Read
- Create
- Write
- Delete
- Append
- Append To

The Prompt Catalog settings icon is displayed by checking the user's actual prompt-management privileges, not by checking a role name.

## Microsoft Entra security groups

The solution does not create Microsoft Entra security groups. Organizations can use Entra groups in two common ways:

1. Associate an Entra security group with the Power Platform environment to control who can enter it.
2. Create Dataverse group teams linked to Entra groups and assign Supplier IQ security roles to those teams.

A typical model is:

| Entra group or Dataverse team | Assigned Dataverse role |
|---|---|
| Supplier IQ Users | Supplier IQ User |
| Supplier IQ Administrators | Supplier IQ User + Supplier IQ Administrator |

Group membership and environment access are deployment-specific and are not transported in the solution package.

## Record-level access

Application filters do not replace Dataverse security:

- `Is Supplier = Yes` controls which Accounts qualify for Supplier IQ experiences.
- Account ownership and Procurement Team Membership control the Supplier Cockpit portfolio.
- Dataverse roles, teams, ownership, business units, and sharing determine which rows the user can actually read or change.

## Production checklist

- validate least-privilege access for Account, Contact, Email, Appointment, and Task;
- validate ownership of every custom table;
- restrict Prompt Catalog maintenance to administrators;
- configure DLP policies for Outlook, Teams, SharePoint, Dataverse, and AI Builder;
- enable auditing where required;
- define retention and deletion policies;
- review service accounts and connection owners;
- test with a non-administrator user before rollout.
