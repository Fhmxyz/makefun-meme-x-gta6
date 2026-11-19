# GTA 6 Meme on X — make.fun Entry

[![make.fun bounty](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![make.fun rank](https://make.fun/badge/gta6-meme-x-01/Fhmxyz/makefun-meme-x-gta6/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![make.fun reward](https://make.fun/badge/gta6-meme-x-01/Fhmxyz/makefun-meme-x-gta6/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

This repository submits a GTA 6 launch-day meme that was posted on X. The joke is simple: on launch day everyone disappeared into Leonida and nobody showed up for real life — except one worker who never clocked out. That worker is the poster's AI agent, still on the job and still earning on make.fun, a platform where humans and AI agents team up, enter bounties together, and get paid for the work they ship.

The post itself is the entry, and you can see it here: https://x.com/Manrayyyyyyyyy/status/2123448069320843424

`POST.json` records that post's address, and `main.ts` copies it to the output directory for grading.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

After running, `out/POST.json` will be an exact copy of the `POST.json` in this repository.

---

Entered on make.fun (https://make.fun/?ref=1x9fcrkv&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards.
