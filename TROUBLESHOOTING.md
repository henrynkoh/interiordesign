# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### Error: "Unexpected token '<', "<!DOCTYPE "... is not valid JSON"

**What it means:**
The API is returning an HTML page (error page) instead of JSON.

**Possible causes:**
1. API route not found (404)
2. Server not running properly
3. Build/compilation errors
4. Missing environment variables

**Solutions:**

#### 1. Check if server is running
```bash
# Check if Next.js is running
ps aux | grep "next dev"

# If not running, start it
npm run dev
```

#### 2. Check API route exists
Verify the file exists at: `app/api/generate/route.ts`

#### 3. Check for compilation errors
Look at the terminal where `npm run dev` is running for any TypeScript or build errors.

#### 4. Verify environment variable
Make sure `.env.local` exists with:
```
OPENAI_API_KEY=your_actual_key_here
```

#### 5. Restart the server
```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

#### 6. Clear Next.js cache
```bash
rm -rf .next
npm run dev
```

### Error: "OpenAI API key is not configured"

**Solution:**
1. Create `.env.local` file in project root
2. Add: `OPENAI_API_KEY=sk-your-actual-key-here`
3. Restart the server

### Error: "Failed to generate image"

**Possible causes:**
1. Invalid OpenAI API key
2. Insufficient API credits
3. API rate limits
4. Network issues

**Solutions:**
1. Verify API key is correct at platform.openai.com
2. Check API usage and credits
3. Wait a few minutes and try again
4. Check internet connection

### API Route Returns 404

**Check:**
1. File structure: `app/api/generate/route.ts` must exist
2. Export function: Must export `POST` function
3. Server restart: Restart after creating/modifying API routes

### Build Errors

**Common fixes:**
```bash
# Clear cache and rebuild
rm -rf .next
rm -rf node_modules
npm install
npm run dev
```

### Port Already in Use

**Solution:**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
PORT=3001 npm run dev
```

## Still Having Issues?

1. Check browser console for detailed errors
2. Check server terminal for build/runtime errors
3. Verify all dependencies are installed: `npm install`
4. Check Node.js version: `node --version` (needs 18+)
5. Review the error message carefully for clues

## Getting Help

- Check README.md for setup instructions
- Review MANUAL.md for detailed usage
- See TUTORIAL.md for examples
- Check GitHub Issues
- Review server logs in terminal

