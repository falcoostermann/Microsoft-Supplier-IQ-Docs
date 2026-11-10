# Downloads

## Microsoft Supplier IQ solution

[Download the unmanaged solution](downloads/MicrosoftSupplierIQ_1_0_0_0_unmanaged.zip)

| Property | Value |
|---|---|
| Solution display name | Microsoft Supplier IQ |
| Unique name | `microsoftsupplieriq` |
| Version | `1.0.0.0` |
| Publisher | Microsoft |
| Customization prefix | `siq` |
| Package type | Unmanaged |

> **Important**
>
> This package is a pilot and development baseline. Import it into a non-production environment first. Create a managed package and complete environment-specific hardening before production deployment.

## Sample Prompt Catalog workbook

[Download the sample prompts](downloads/Supplier-IQ-Standard-Prompts.xlsx)

The workbook contains localized Prompt Catalog sample rows for native Dataverse Excel import. Review Agent IDs and prompt content before importing into a customer environment.

## Supplier IQ Cowork plugin 1.1.0

[Download the Cowork plugin ZIP](https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/download/cowork-v1.1.0/MicrosoftSupplierIQ_Cowork_1_1_0.zip) | [Release notes](https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/tag/cowork-v1.1.0) | [Installation and usage](getting-started/cowork-plugin.md)

The separate Microsoft 365 app package contains four skills and the Supplier IQ logo:

- Supplier briefing, negotiation preparation and supplier risk review.
- An Inbox Email Tracker that first confirms the timeframe, proposes relevant supplier emails not already tracked in Dynamics, and copies only a specifically confirmed selection with supported attachments.
- Confirmed task, soft-fact and comment creation, task updates, and explicit supplier master/KPI field updates.

The plugin reuses existing Microsoft Dataverse and Work IQ capabilities. Environment selection stays on the Microsoft connection. It does not send email or install a new MCP server.

> **Important**
>
> Do not import this ZIP through Power Apps solution import. Use the supported Cowork/Microsoft 365 custom-app package process. Local package checks passed, but connector interoperability, permissions, confirmed writes and attachment transfer still require validation in the target tenant.

## Integrity

Release files can be verified with:

```powershell
Get-FileHash .\MicrosoftSupplierIQ_1_0_0_0_unmanaged.zip -Algorithm SHA256
Get-FileHash .\Supplier-IQ-Standard-Prompts.xlsx -Algorithm SHA256
Get-FileHash .\MicrosoftSupplierIQ_Cowork_1_1_0.zip -Algorithm SHA256
```

| File | SHA-256 |
|---|---|
| `MicrosoftSupplierIQ_1_0_0_0_unmanaged.zip` | `E09649B99C7347A25E32391F30E6563364776ED767EE7E85AD0494EDC7B0B5EF` |
| `Supplier-IQ-Standard-Prompts.xlsx` | `A8D39489D5449E961351FC0E53FB3306F9A57C3CD71051E9FF42CC48A1E4A8F6` |
| `MicrosoftSupplierIQ_Cowork_1_1_0.zip` | `6C08B896CDAB9551B7005ED74430D196945AA73274C205532BE6E39DF841CA9F` |
