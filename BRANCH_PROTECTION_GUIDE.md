# Branch Protection Setup Guide

This repository includes configuration files and workflows to help protect the main branch from deletion and unauthorized changes.

## Quick Setup (Recommended)

### Option 1: Using GitHub App (Automated)

1. Install the **[Probot: Settings](https://github.com/apps/settings)** GitHub App on your repository
2. The app will automatically apply the branch protection rules defined in `.github/settings.yml`
3. No manual configuration required!

### Option 2: Manual Configuration

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Branches**
3. Click **Add rule** or **Add protection rule**
4. Configure the following settings:

   **Branch name pattern:** `main`
   
   **Protection rules:**
   - ✅ Restrict deletions
   - ✅ Restrict pushes that create files (if needed)
   - ✅ Require pull request reviews before merging
     - Required approving reviews: 1
     - ✅ Dismiss stale reviews when new commits are pushed
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Do not allow bypassing the above settings (Enforce for administrators)

5. Click **Create** or **Save changes**

## Files Included

### `.github/settings.yml`
Configuration file for the Probot Settings app that automatically configures:
- Branch protection rules
- Repository settings
- Prevents main branch deletion
- Requires pull request reviews

### `.github/workflows/branch-protection.yml`
GitHub Actions workflow that:
- Runs on pushes and pull requests to main
- Validates branch protection configuration
- Provides recommendations for protection settings
- Serves as a reminder to enable proper protections

### `CODEOWNERS`
Defines code ownership and review requirements:
- Requires review from repository owners for all changes
- Extra protection for critical configuration files
- Ensures accountability for repository changes

## Protection Features

Once properly configured, the main branch will be protected against:
- ❌ **Direct deletion** of the main branch
- ❌ **Force pushes** that rewrite history
- ❌ **Direct pushes** without pull request review
- ❌ **Unreviewed changes** to critical files

## Verification

To verify that branch protection is active:

1. Go to **Settings** → **Branches** in your GitHub repository
2. Look for a rule on the `main` branch
3. Check that "Restrict deletions" is enabled
4. Try to delete the main branch (it should be prevented)

## Troubleshooting

**Q: The settings aren't being applied automatically**
A: Make sure the Probot Settings app is installed and has the necessary permissions

**Q: I can still push directly to main**
A: Check that branch protection rules are enabled in repository settings and that "Enforce for administrators" is checked if you're an admin

**Q: CODEOWNERS isn't working**
A: Ensure "Require review from CODEOWNERS" is enabled in the branch protection settings

## Additional Security Measures

For enhanced security, consider:
- Enabling two-factor authentication for all contributors
- Using signed commits
- Regular security audits of repository access
- Monitoring repository activity logs

---

For more information on GitHub branch protection, see the [official documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/defining-the-mergeability-of-pull-requests/about-protected-branches).