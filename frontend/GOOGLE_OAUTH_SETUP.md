# Google “Continue with Google” setup

If you see **403** or **“The given origin is not allowed for the given client ID”**, the URL you’re using to open the app is not in Google’s allowed list. You must add it in Google Cloud Console.

## Step 1: Get your exact origin

Open your app (Sign in or Sign up). Under the “Continue with Google” button you’ll see a line like:

**Add this exact URL in Google Console:** `http://localhost:5173`

If you use a different port or open the site as `http://127.0.0.1:5173`, the shown URL will be different. **Use that exact URL** in the next step.

## Step 2: Add it in Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com/) and select your project.
2. Open **APIs & Services** → **Credentials**.
3. Under **OAuth 2.0 Client IDs**, click your **Web application** client (the one whose Client ID is in your `.env` as `VITE_GOOGLE_CLIENT_ID`).
4. Under **Authorized JavaScript origins** click **+ ADD URI** and add **both** (if you’re not sure which one your browser uses):
   - `http://localhost:5173`
   - `http://127.0.0.1:5173`  
   Use the exact port if yours is different (e.g. `5174`).
5. Click **Save**. Wait 1–2 minutes.
6. Hard refresh the app (Ctrl+Shift+R or Cmd+Shift+R) and try “Continue with Google” again.

## Checklist

- [ ] Origin is exactly `http://...` (no `https` on localhost unless you use it).
- [ ] No trailing slash: `http://localhost:5173` not `http://localhost:5173/`.
- [ ] Port matches your dev server (default Vite: `5173`).
- [ ] Both `localhost` and `127.0.0.1` added if you might use either.
- [ ] You saved the OAuth client and waited a minute.

## Production

When you deploy, add your production URL to **Authorized JavaScript origins** as well, e.g. `https://yourdomain.com`.
