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

## Integrity

Release files can be verified with:

```powershell
Get-FileHash .\MicrosoftSupplierIQ_1_0_0_0_unmanaged.zip -Algorithm SHA256
Get-FileHash .\Supplier-IQ-Standard-Prompts.xlsx -Algorithm SHA256
```

| File | SHA-256 |
|---|---|
| `MicrosoftSupplierIQ_1_0_0_0_unmanaged.zip` | `E09649B99C7347A25E32391F30E6563364776ED767EE7E85AD0494EDC7B0B5EF` |
| `Supplier-IQ-Standard-Prompts.xlsx` | `A8D39489D5449E961351FC0E53FB3306F9A57C3CD71051E9FF42CC48A1E4A8F6` |
