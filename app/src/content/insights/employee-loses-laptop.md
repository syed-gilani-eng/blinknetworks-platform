---
title: "What Should Happen When an Employee Loses a Laptop?"
description: "A practical incident response guide for lost employee laptops covering access restriction, encryption checks, remote actions, and privacy obligations."
category: "Microsoft 365 & Endpoint Management"
publishedDate: 2026-09-22
image: "/images/insights/article-employee-loses-laptop.webp"
imageAlt: "Illustration of a lost laptop separated from a protected business environment with identity and layered security controls"
featured: false
draft: false
order: 4
---

An employee calls from a client visit: their laptop bag is missing. The immediate concern is the device, but the business also needs to consider the information stored on it and the accounts it could access.

Report the loss immediately through your organisation's incident process. Do not wait until you have finished searching. The response should bring together authorised IT staff, the business owner and, where relevant, the privacy lead. Some actions can happen in parallel; a lost laptop does not come with one universal sequence of buttons to press.

The steps below are a planning guide for business owners, not instructions for employees to wipe devices or change company-wide settings themselves.

## Report the facts without delaying for perfect information

Tell your manager or IT contact when and where the laptop was last seen, whether it may have been stolen and whether it was on or unlocked. Provide the asset number or serial number if available, but do not delay reporting to find it.

Explain what you were using: email, customer files, accounting software, a password manager or remote access. Mention any notebook, security key or phone lost with the bag. That context helps responders assess exposure.

Use another trusted way to contact the business if necessary. Do not send passwords or recovery keys in the incident report, and do not confront a suspected thief. Where theft is suspected, follow the business's process for contacting police and recording the report number.

## Put one person in charge of the response

Assign an incident owner who records decisions, keeps the employee informed and coordinates specialists. This prevents separate people from taking conflicting actions or assuming somebody else has completed a task.

Start a timeline with the loss, discovery and report times. Record what is known, what is uncertain and which actions have been requested. For a small firm, a securely held incident record and clear ownership can be more useful than an elaborate procedure nobody has rehearsed.

## Restrict exposed access

Authorised IT staff should assess whether to block the device, and apply [Microsoft 365 account security controls](/insights/microsoft-365-security-basics/) to restrict affected accounts, revoke sessions and change exposed credentials. Include business applications outside Microsoft 365 and any remote-access credentials on the laptop.

Changing a password is not a universal way to end every active session. Microsoft notes that access revocation can take time and that some applications control their own session tokens. Responders must account for those differences and verify the result. [Microsoft emergency access revocation](https://learn.microsoft.com/en-us/entra/identity/users/users-revoke-access)

Blocking cloud access also does not erase files already downloaded to the laptop. Treat account access and locally stored information as separate parts of the assessment. Document the effect on the employee's work so a secure replacement arrangement can be prepared.

## Verify protection and assess the information involved

Check management records for encryption status, device configuration and recent activity. BitLocker can help protect data on a lost Windows device, but the assessment must consider whether protection was active and whether the device or relevant credentials were already accessible. [Microsoft BitLocker overview](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/)

Identify the actual information involved: downloaded customer records, cached email, employee details or other sensitive material. Saying that the business "works in the cloud" does not answer whether local copies existed.

Separate evidence from assumptions. If you cannot verify encryption, record that uncertainty. If sign-in records show no suspicious activity, retain the finding without treating it as proof that no local information was accessed.

## Decide whether a remote action is appropriate

A management platform such as Microsoft Intune may support remote wiping on an enrolled, supported device. A wipe can remove data and configurations, and its behaviour depends on platform and selected options. [Microsoft Intune wipe guidance](https://learn.microsoft.com/en-us/intune/device-management/actions/wipe)

An authorised responder should verify the exact device and consider ownership, personal information and evidence preservation before approving a destructive action. A personally owned laptop needs particular care. Do not treat "retire," "delete" and "wipe" as interchangeable instructions.

A remote command is not proof of erasure. An offline or unreachable device may not receive it. Check completion status and continue assessing exposure rather than assuming a queued action has solved the problem. Coordinate identity and management changes so an ill-timed removal does not undermine the chosen response.

## Assess privacy and notification obligations

Where PIPEDA applies, a breach of security safeguards involving personal information under the organisation's control must be reported to the Office of the Privacy Commissioner of Canada, and affected individuals notified, when it creates a real risk of significant harm. Reporting and notification are required as soon as feasible after that determination. Records of all such breaches must be kept, including those that do not meet the reporting threshold, for at least two years. [OPC breach guidance](https://www.priv.gc.ca/en/privacy-topics/privacy-for-businesses/privacy-breaches-at-your-business/gd_pb_201810/)

Do not assume every lost laptop requires the same notification, or that encryption automatically removes all obligations. Have the privacy lead or legal adviser assess the facts, applicable laws, contracts and insurance conditions promptly. This article provides general information, not legal advice.

## Restore work and close the gaps

Provide a configured replacement device and restore approved access and business information. Keep recovery separate from incident closure: someone can resume work while the investigation and follow-up continue.

If the laptop is recovered, have IT inspect it before reconnecting it to business systems. Preserve relevant evidence and follow the incident owner's direction.

Finally, run a [small-business cybersecurity checklist](/insights/small-business-cybersecurity-checklist/) review to identify what slowed the response. Could you identify the device, verify protection and reach the right people? Were any important files stored only locally? Use those answers to improve the device inventory, onboarding and incident process.

BlinkNetworks helps businesses across Toronto and the GTA plan [endpoint management](/services/microsoft-365-endpoint-management/) and practical IT processes. Contact BlinkNetworks to review how your organisation would handle a lost work device before it happens.
