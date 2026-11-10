# Installation

Use this guide after the [pilot platform and user group are ready](prerequisites.md).

## 1. Import

[Download Supplier IQ 1.0.1.0](https://github.com/falcoostermann/Microsoft-Supplier-IQ-Docs/releases/download/solution-v1.0.1.0/MicrosoftSupplierIQ_1_0_1_0_unmanaged.zip){ .siq-button }

In Power Apps, open **Solutions**, select **Import solution**, upload the ZIP, complete the import, and publish.

!!! note "Pilot package"
    The download is unmanaged. Use a managed solution and controlled pipeline for production.

### CLI alternative

```powershell
pac auth create --environment "https://<environment>.crm.dynamics.com"
pac solution import `
  --path ".\MicrosoftSupplierIQ_1_0_1_0_unmanaged.zip" `
  --publish-changes
```

## 2. Map connections

| Connection | Connector |
|---|---|
| `siq_Dataverse` | Microsoft Dataverse |
| `siq_Office365Outlook` | Office 365 Outlook |
| `siq_ContentConversion` | Content Conversion |
| `siq_Teams` | Microsoft Teams |
| `siq_SharePoint` | SharePoint |

Then review environment-specific URLs, SharePoint locations, Copilot Agent IDs, and AI Builder prompt references. Use environment variables for production ALM.

## 3. Configure

- **AI prompts:** validate relevance scoring, summaries, supplier news, and presentation generation.
- **Prompt Catalog:** [import the sample workbook](../configuration/prompts.md#import-the-sample-workbook).
- **Suppliers:** set **Is Supplier = Yes** on active Accounts.
- **Security:** assign **Supplier IQ User**; add **Supplier IQ Administrator** only for prompt maintainers.

## 4. Validate

- [ ] Supplier Cockpit shows the expected portfolio.
- [ ] Outlook scan finds recent activity.
- [ ] A tracked email receives the correct Dataverse regarding record.
- [ ] Supplier Insights generate successfully.
- [ ] A catalog prompt receives the selected supplier name.
- [ ] Reminders and SharePoint output reach the expected destination.

## Optional: Cowork

Install the separate [Supplier IQ Cowork plugin](cowork-plugin.md) for supplier skills and Inbox Email Tracker in Microsoft Copilot Cowork.
