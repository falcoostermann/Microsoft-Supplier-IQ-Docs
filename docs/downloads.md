# Downloads

Choose the package you need. Start with the solution, then add sample prompts or the optional Cowork plugin.

<div class="siq-download-grid">
  <div class="siq-download-card">
    <span class="siq-eyebrow">Core solution · 1.0.1.0</span>
    <h2>Microsoft Supplier IQ</h2>
    <p>Unmanaged Dataverse solution for pilot and development environments.</p>
    <div class="siq-actions">
      <a class="siq-button" href="https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/download/solution-v1.0.1.0/MicrosoftSupplierIQ_1_0_1_0_unmanaged.zip">Download solution</a>
      <a href="../getting-started/installation/#2-import-the-solution">Installation</a>
    </div>
  </div>
  <div class="siq-download-card">
    <span class="siq-eyebrow">Sample content</span>
    <h2>Prompt Catalog</h2>
    <p>Localized sample prompts prepared for native Dataverse Excel import.</p>
    <div class="siq-actions">
      <a class="siq-button" href="https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/download/solution-v1.0.1.0/Supplier-IQ-Standard-Prompts.xlsx">Download workbook</a>
      <a href="../getting-started/installation/#6-seed-the-prompt-catalog">Import guidance</a>
    </div>
  </div>
  <div class="siq-download-card">
    <span class="siq-eyebrow">Optional · 1.1.0</span>
    <h2>Copilot Cowork plugin</h2>
    <p>Supplier briefing, negotiation preparation, risk review, and Inbox Email Tracker skills.</p>
    <div class="siq-actions">
      <a class="siq-button" href="https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/download/cowork-v1.1.0/MicrosoftSupplierIQ_Cowork_1_1_0.zip">Download plugin</a>
      <a href="../getting-started/cowork-plugin/">Plugin guidance</a>
    </div>
  </div>
</div>

## Solution details

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
