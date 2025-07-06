# AI Business Presentation

This is a sleek, multilingual presentation template built with React, TypeScript, and Tailwind CSS. It is designed to be deployed as a Static Site on services like Render.com.

## How to Deploy (From Scratch)

Follow these instructions exactly to ensure a successful deployment.

### Step 1: Create a New GitHub Repository

1.  Go to [GitHub](https://github.com/new) and create a **new, empty repository**. Name it something like `ai-presentation-live`.
2.  **Do NOT** initialize it with a `README`, `.gitignore`, or license file. It must be completely empty.
3.  Copy the repository's HTTPS URL (e.g., `https://github.com/YOUR_USERNAME/ai-presentation-live.git`). You will need it in the next step.

### Step 2: Set Up Your Local Project & Push to GitHub

1.  Create a **new, empty folder** on your computer. Name it `ai-presentation-final`.
2.  Place **all the files** from this project into the `ai-presentation-final` folder, making sure to preserve the directory structure (e.g., create the `src`, `src/components` folders).
3.  Open a terminal or command prompt inside the `ai-presentation-final` folder.
4.  Run the following commands one by one, replacing `YOUR_GITHUB_REPO_URL` with the URL you copied in Step 1:

    ```bash
    # Initialize a new Git repository
    git init -b main

    # Add all files to be tracked
    git add .

    # Create your first commit
    git commit -m "Initial commit: Final project setup"

    # Link your local repository to the one on GitHub
    git remote add origin YOUR_GITHUB_REPO_URL

    # Push your code to GitHub
    git push -u origin main
    ```

### Step 3: Deploy on Render.com

1.  Go to your [Render.com Dashboard](https://dashboard.render.com/).
2.  Click **New +** and select **Static Site**.
3.  Connect your GitHub account and select the new repository (`ai-presentation-live`).
4.  Render will ask for your build settings. Fill them in **exactly** like this:

    *   **Name**: `ai-business-presentation` (or any name you like).
    *   **Root Directory**: (leave this field **BLANK**).
    *   **Build Command**: `npm install && npm run build`
    *   **Publish Directory**: `dist`

5.  Click **Create Static Site**.

Render will now pull your code, run the build command, and deploy your site. The first deployment might take a few minutes. Once it is complete, your presentation will be live!
