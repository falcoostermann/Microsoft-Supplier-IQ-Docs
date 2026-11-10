# Installation

## 1. Download the package

Download the [Microsoft Supplier IQ unmanaged solution](../downloads/MicrosoftSupplierIQ_1_0_0_0_unmanaged.zip).

The package is an unmanaged pilot and development baseline. Use a managed solution and a controlled release pipeline for production.

## 2. Import the solution

Import from Power Apps:

1. Open **Solutions** in the target environment.
2. Select **Import solution**.
3. Upload the downloaded ZIP package.
4. Map all connection references.
5. Complete the import and publish all customizations.

Alternatively, use Power Platform CLI:

```powershell
pac auth create --environment "https://<environment>.crm.dynamics.com"
pac solution import `
  --path ".\MicrosoftSupplierIQ_1_0_0_0_unmanaged.zip" `
  --publish-changes
```

## 3. Map connection references

Configure:

| Connection reference | Connector |
|---|---|
| `siq_Dataverse` | Microsoft Dataverse |
| `siq_Office365Outlook` | Office 365 Outlook |
| `siq_ContentConversion` | Content Conversion |
| `siq_Teams` | Microsoft Teams |
| `siq_SharePoint` | SharePoint |

## 4. Configure environment-specific values

Review and replace environment-specific values for:

- model-driven app deep links;
- Dataverse environment URLs;
- SharePoint site and library locations;
- Microsoft 365 Copilot Agent IDs;
- AI Builder custom prompt references.

Use environment variables for production ALM instead of editing flow definitions directly.

## 5. Configure AI Builder prompts

The package references four AI model components. Validate or replace the custom prompts used for:

- Outlook activity relevance scoring;
- supplier activity summaries;
- supplier news;
- presentation generation.

Update the affected flows with the correct prompt references for the target environment.

## 6. Seed the Prompt Catalog

Download the [sample Prompt Catalog workbook](../downloads/Supplier-IQ-Standard-Prompts.xlsx), then:

1. Open **Tables > Supplier IQ Prompt**.
2. Select **Import > Import data from Excel**.
3. Upload the workbook.
4. Map the columns to the matching Dataverse columns.
5. review the import and confirm the localized rows.

See [Prompt Catalog configuration](../configuration/prompts.md) for field guidance and ongoing maintenance.

## 7. Configure supplier Accounts

Set **Is Supplier** to **Yes** on every active Account that Supplier IQ should treat as a supplier. Configure Account ownership and Procurement Team Membership records to control the Supplier Cockpit portfolio.

See [Supplier accounts](../configuration/supplier-accounts.md).

## 8. Assign security

Assign **Supplier IQ User** to all users. Assign the supplemental **Supplier IQ Administrator** role only to users who maintain Prompt Catalog entries.

## 9. Smoke test

1. Open the Microsoft Supplier IQ app.
2. Verify Get Started navigation.
3. Verify the Supplier Cockpit portfolio.
4. Authorize Outlook and scan recent activity.
5. Track an email and confirm the Dataverse regarding record.
6. Generate Supplier Insights and verify the cache status.
7. Open a prompt, select a supplier, and confirm the prepared prompt.
8. Verify scheduled reminders and required SharePoint output.
