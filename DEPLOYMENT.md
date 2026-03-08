# 🚀 BreathArena Landing Page - Deployment Guide

## ✅ What's Been Completed

- ✅ Professional coming soon page created
- ✅ Hero background image (premium sleep imagery)
- ✅ Email waitlist capture form
- ✅ Mobile responsive design
- ✅ GitHub repo created and pushed
- ✅ Ready for deployment

## 📦 Deployment to Vercel (Free + Auto SSL)

### Step 1: Sign up for Vercel
1. Go to: **https://vercel.com/signup**
2. Click "Continue with GitHub"
3. Authorize Vercel to access your GitHub

### Step 2: Import Repository
1. Click "Add New Project"
2. Select `breatharena-landing` from your GitHub repos
3. Click "Import"

### Step 3: Configure Project
- **Framework Preset**: Other (static site)
- **Root Directory**: `./`
- **Build Command**: (leave empty)
- **Output Directory**: `./`
- Click "Deploy"

### Step 4: Add Custom Domain (BreathArena.com)
1. After deployment, go to **Project Settings** → **Domains**
2. Click "Add Domain"
3. Enter: `breatharena.com`
4. Vercel will show DNS records to add

### Step 5: Configure DNS at Domain Registrar

**Where did you buy BreathArena.com?** (GoDaddy, Namecheap, etc.)

#### For Namecheap:
1. Login → Domain List → Manage
2. Advanced DNS → Add New Record
3. Add these records:
   ```
   Type: A Record
   Host: @
   Value: 76.76.21.21
   TTL: Automatic
   
   Type: CNAME
   Host: www
   Value: cname.vercel-dns.com
   TTL: Automatic
   ```

#### For GoDaddy:
1. Login → My Products → Domains → DNS
2. Add these records:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 600 seconds
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 1 Hour
   ```

### Step 6: Verify Domain
- Wait 10-60 minutes for DNS propagation
- Vercel will automatically issue SSL certificate (HTTPS)
- Your site will be live at: **https://breatharena.com** 🎉

---

## 🔧 Email Capture Setup (Next Step)

Currently, emails are stored in browser localStorage (temporary).

### Option 1: Google Sheets (Easiest)
1. Create Google Sheet
2. Use Google Apps Script to receive form submissions
3. Update `script.js` with the script URL

### Option 2: Simple Backend (Vercel Functions)
1. Create `/api/waitlist.js` endpoint
2. Store in Airtable/Notion/Google Sheets
3. Update form to call your API

### Option 3: Email Service (Mailchimp/ConvertKit)
1. Create free account
2. Get API key
3. Integrate with form

**Recommendation**: Start with Google Sheets for simplicity.

---

## 📊 What to Track

- Number of signups per day
- Traffic sources (where visitors come from)
- Conversion rate (visits → email signups)

**Add Google Analytics:**
1. Get tracking ID from analytics.google.com
2. Add script tag to `<head>` in index.html

---

## 🎯 Next Steps After Deployment

1. ✅ Deploy to Vercel
2. ✅ Connect custom domain
3. ✅ Verify HTTPS is working
4. 🔲 Set up email capture backend
5. 🔲 Share on social media
6. 🔲 Start collecting emails

---

**Questions?** Check Vercel docs or ping me!

---

**Deployed**: March 8, 2026  
**Repo**: https://github.com/Halfmoon0707/breatharena-landing
