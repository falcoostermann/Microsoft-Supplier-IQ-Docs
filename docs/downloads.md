# Downloads

## Microsoft Supplier IQ solution

[Download the unmanaged solution](https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/download/solution-v1.0.1.0/MicrosoftSupplierIQ_1_0_1_0_unmanaged.zip) | [Release notes](https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/tag/solution-v1.0.1.0) | [Installation](getting-started/installation.md#2-import-the-solution)

| Property | Value |
|---|---|
| Solution display name | Microsoft Supplier IQ |
| Unique name | `microsoftsupplieriq` |
| Version | `1.0.1.0` |
| Publisher | Microsoft |
| Customization prefix | `siq` |
| Package type | Unmanaged |

> **Important**
>
> This package is a pilot and development baseline. Import it into a non-production environment first. Create a managed package and complete environment-specific hardening before production deployment.

## Sample Prompt Catalog workbook

[Download the sample prompts](https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/download/solution-v1.0.1.0/Supplier-IQ-Standard-Prompts.xlsx) | [Release notes](https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/tag/solution-v1.0.1.0) | [Import instructions](getting-started/installation.md#6-seed-the-prompt-catalog)

The workbook contains localized Prompt Catalog sample rows for native Dataverse Excel import. Review Agent IDs and prompt content before importing into a customer environment.

## Microsoft Copilot Cowork plugin

[Download the Cowork plugin ZIP](https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/download/cowork-v1.1.0/MicrosoftSupplierIQ_Cowork_1_1_0.zip) | [Release notes](https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/tag/cowork-v1.1.0) | [Installation and usage](getting-started/cowork-plugin.md)

The separate Microsoft 365 app package contains four skills: supplier briefing, negotiation preparation, supplier risk review and Inbox Email Tracker. It uses the signed-in user's existing Microsoft connection and permissions. Analysis is read-only by default, while eligible writes require a concrete preview and explicit user confirmation.

> **Important**
>
> Do not import this ZIP through Power Apps solution import. Use the supported Cowork/Microsoft 365 custom-app package process. Local package checks passed, but connector interoperability, permissions, confirmed writes and attachment transfer still require validation in the target tenant.

## Integrity

Release files can be verified with:

```powershell
Get-FileHash .\MicrosoftSupplierIQ_1_0_1_0_unmanaged.zip -Algorithm SHA256
Get-FileHash .\Supplier-IQ-Standard-Prompts.xlsx -Algorithm SHA256
Get-FileHash .\MicrosoftSupplierIQ_Cowork_1_1_0.zip -Algorithm SHA256
```

| File | SHA-256 |
|---|---|
| `MicrosoftSupplierIQ_1_0_1_0_unmanaged.zip` | `DE771DF2DF3A22ECA3E35ABA9F09FE5EC399EF158AA12D2C5CB4DF332FD07906` |
| `MicrosoftSupplierIQ_Cowork_1_1_0.zip` | `6C08B896CDAB9551B7005ED74430D196945AA73274C205532BE6E39DF841CA9F` |
| `Supplier-IQ-Standard-Prompts.xlsx` | `6BDCAC84587A4335CF88338DAFDC3E52D371BB87FF3E4D5709AF46A44574FC23` |
