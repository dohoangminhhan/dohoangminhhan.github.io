# Security Policy

This repository hosts the public academic website at https://dohoangminhhan.github.io/.

## Reporting a security issue

Please report suspected vulnerabilities **privately** to dohoangminhhan2005@gmail.com with the subject `Website security report`.

Include the affected URL, a minimal description, and steps to reproduce without accessing other people's data. Please do not publish an unpatched vulnerability as a public issue or pull request.

## Scope

This website is statically hosted using GitHub Pages. It has no application accounts, authentication service, or backend database in this repository.

Files committed to this public repository, including research manuscripts and project reports, can be read and downloaded by anyone. Do not store passwords, access tokens, private keys, confidential datasets, or unpublished documents without permission.

## Maintainer checklist

- Keep GitHub two-factor authentication enabled and review authorized third-party applications.
- Limit repository write access and periodically audit organization members.
- Protect the default branch from force pushes and deletion using an active GitHub ruleset.
- Review pull requests before merging.
- Confirm publication and distribution permissions before uploading PDF manuscripts.
- Review the site after changing the Content Security Policy.
