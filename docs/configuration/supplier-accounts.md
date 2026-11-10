# Supplier accounts

Supplier IQ uses the standard Dataverse Account table. The **Is Supplier** column is the primary functional switch.

![Supplier Cockpit showing the buyer's supplier portfolio, performance indicators, tasks, and appointments](../assets/screenshots/supplier-cockpit.png)

*Supplier Cockpit with demonstration supplier and task data.*

## Make an Account available

An Account must meet both conditions:

1. **Status = Active**
2. **Is Supplier = Yes**

Accounts where **Is Supplier** is No or blank are excluded from Supplier IQ supplier queries.

## Prompt Catalog selection

The supplier dropdown in the Prompt Catalog loads every Account the current user can read where:

```text
statecode = Active
siq_issupplier = Yes
name is not empty
```

The list is sorted alphabetically. It is dynamic: new supplier Accounts appear automatically and no supplier names are hard-coded.

After the user selects an Account, the catalog replaces the supplier placeholder in the editable prompt. The standard sample prompts use:

```text
[SUPPLIER NAME(S)]
```

The user can review and edit the prepared prompt before copying it or opening it in Microsoft 365 Copilot.

## Supplier Cockpit portfolio

The Supplier Cockpit applies additional portfolio logic. It shows active supplier Accounts that are:

- owned by the current user; or
- assigned to the current user through a Supplier IQ Procurement Team Member record.

The results are sorted alphabetically and currently limited to the first 50 supplier Accounts.

## Security behavior

The **Is Supplier** filter controls application behavior, not Dataverse row-level security. Users still need read privileges for Account and any related records. Use Dataverse ownership, business units, teams, sharing, and security roles when record-level access must be restricted.
