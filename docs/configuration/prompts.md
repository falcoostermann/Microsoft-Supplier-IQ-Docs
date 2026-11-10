# Prompt Catalog

The Prompt Catalog stores customer-maintainable, localized procurement prompts in the `siq_prompt` Dataverse table.

## How prompts are loaded

- Only rows where **Enabled = Yes** are loaded.
- The catalog uses the current Dynamics 365 user language.
- If a localized row is unavailable, the English row is used as fallback.
- Prompts are ordered by **Sort Order** and title.
- **Prompt Code + Language Code** is unique and must remain stable.

## Prompt columns

| Display purpose | Logical name | Guidance |
|---|---|---|
| Title | `siq_title` | Short card and dialog title |
| Prompt Code | `siq_promptcode` | Stable identifier shared by all language versions |
| Language Code | `siq_languagecode` | Use `en` or `de` |
| Description | `siq_description` | Short explanation for the catalog card |
| Prompt Text | `siq_prompttext` | Full editable prompt |
| Agent | `siq_agent` | Agent display name used for catalog grouping and routing |
| Agent ID | `siq_agentid` | Optional environment-specific agent identifier |
| Category | `siq_category` | Catalog category |
| Tags | `siq_tags` | Semicolon-separated search terms |
| Source | `siq_source` | Origin or owner of the prompt |
| Sort Order | `siq_sortorder` | Numeric display order |
| Enabled | `siq_enabled` | Controls catalog visibility |

## Create a prompt in Dataverse

Users with the **Supplier IQ Administrator** role can open the Prompt Catalog and select the settings icon. The icon is privilege-controlled and opens the active Supplier IQ Prompt view.

To create a prompt:

1. Create a Supplier IQ Prompt row.
2. Enter a stable Prompt Code.
3. Set Language Code to `en` or `de`.
4. Enter title, description, prompt text, agent, and category.
5. Use semicolons between tags.
6. Set Sort Order.
7. Set Enabled to Yes.
8. Save the row and refresh the Prompt Catalog.

Create a separate row for each language while keeping the same Prompt Code.

## Supplier placeholder

All standard prompts are supplier-focused. Use the canonical placeholder:

```text
[SUPPLIER NAME(S)]
```

The Prompt Catalog requires a supplier Account selection and replaces this placeholder with the selected Account name. Other placeholders remain editable.

Do not store the selected supplier name back in the canonical Dataverse prompt row.

## Import the sample workbook

Download [Supplier-IQ-Standard-Prompts.xlsx](../downloads/Supplier-IQ-Standard-Prompts.xlsx).

1. Open **Tables > Supplier IQ Prompt**.
2. Select **Import > Import data from Excel**.
3. Upload the workbook.
4. Map columns to the matching display names.
5. Review the import and confirm the rows.

The workbook contains localized sample prompts. Agent IDs are environment-specific and should be reviewed before import.

For ongoing bulk maintenance, use **Edit data in Excel** from the Supplier IQ Prompt view rather than repeatedly importing the seed workbook.

## Copilot hand-off

The prompt remains editable in the dialog. When the user selects **Open in agent**, Supplier IQ opens the Microsoft 365 Copilot panel and sends the prepared prompt with automatic submission disabled. The user remains in control and can review the final content before sending.
