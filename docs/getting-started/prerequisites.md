# Plan your pilot

Start with a small buyer group, a new non-production environment, and two or three supplier scenarios that matter in daily work.

## What you need

| Requirement | Why |
|---|---|
| Microsoft 365 Copilot | Copilot experiences and prompt hand-off |
| Dynamics 365 Sales Enterprise or Premium | Sales app, Dataverse, and required first-party components |
| [Copilot Credits with pay-as-you-go](https://learn.microsoft.com/en-us/microsoft-copilot-studio/agents-experience/billing-manage-buy-credits) | AI scoring, summaries, supplier news, and document generation |

Use pay-as-you-go for the pilot, monitor actual consumption, and decide on longer-term capacity after you have real usage data.

!!! warning "Validate current licensing"
    Microsoft packaging can change. Confirm the final licensing model with your Microsoft representative.

## Prepare the pilot platform

1. **Create a new environment.** Create a sandbox or production environment with Dataverse and enable Dynamics 365 apps when the database is provisioned. [Microsoft guidance](https://learn.microsoft.com/en-us/power-platform/admin/create-environment)
2. **Deploy Sales agent to Outlook and Microsoft 365 Copilot.** Assign the Sales agent to the pilot users or group from the Microsoft 365 admin center. [Microsoft guidance](https://learn.microsoft.com/en-us/microsoft-sales-copilot/install-sales-as-an-integrated-app)
3. **Install and pin Sales agent in Teams.** Outlook deployment does not install the app in Teams; use a Teams setup policy for the pilot group. [Microsoft guidance](https://learn.microsoft.com/en-us/microsoft-sales-copilot/install-pin-sales-teams)
4. **Activate Sales agent for the Dynamics 365 environment.** Connect the intended environment and complete setup from Dynamics 365 Sales. [Microsoft guidance](https://learn.microsoft.com/en-us/dynamics365/sales/sales-agent-settings-saleshub)
5. **Install Supplier IQ.** Continue with the [Supplier IQ installation](installation.md).

## Choose the pilot group

**Recommended size: 6–10 people**

| Role | Recommended participation |
|---|---|
| Procurement sponsor | 1 decision maker who removes blockers |
| Pilot owner | 1 procurement lead or power user who coordinates feedback |
| Buyers | 3–6 users with active supplier portfolios and frequent Outlook communication |
| Platform administrator | 1 Power Platform or Dynamics 365 administrator, part-time |
| Security or compliance | Optional review role, depending on company policy |

Choose buyers who share recurring supplier scenarios, are willing to give weekly feedback, and can test with real but non-critical records. Start with **3–5 suppliers** and **2–3 use cases** for approximately four weeks.

## Ready to install

- [ ] The three commercial requirements are available.
- [ ] A new Dataverse environment with Dynamics 365 Sales is ready.
- [ ] Sales agent is available in Outlook, Microsoft 365 Copilot, and Teams.
- [ ] Sales agent is connected to the pilot Dynamics 365 environment.
- [ ] Pilot users, suppliers, and use cases are agreed.
