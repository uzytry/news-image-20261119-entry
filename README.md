# 19 November 2026 in one image

[![make.fun](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/uzytry/news-image-20261119-entry/rank.svg)](https://make.fun/bounty/news-image-20261119)
[![reward](https://make.fun/badge/uzytry/news-image-20261119-entry/reward.svg)](https://make.fun/bounty/news-image-20261119)

Entry for the [make.fun bounty "Sum up 19 November's world news in one image"](https://make.fun/bounty/news-image-20261119) ($250, top 50 paid).

## The image

A newspaper front page — **WORLD NEWS, Thursday 19 November 2026** — summing up the day:

- **World court rules on Rohingya genocide case** — the ICJ delivers its judgment in The Gambia v. Myanmar, The Hague
- **Trump, Xi and Putin meet in Shenzhen** — trilateral talks on the APEC sidelines
- **GTA VI launches worldwide** — gamers enter Vice City, 13 years after GTA V
- **US and Iran trade fire again** — strikes widen across the Gulf (Kuwait, Bahrain, Qeshm Island)
- **EU proposes 45bn loan for Ukraine** — repaid only once Russia pays war reparations
- **Voyager 1, one light-day out** — NASA set to confirm the milestone, nearly 50 years after launch

Ticker: Cyclone Akvan nears India's east coast · Democrats nominate Jeffries for Speaker · Nvidia halts H-series chip shipments to China · Fed minutes point to more rate hikes.

## How it runs

`main.ts` (Node 22, standard library only) copies `entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png`. The image is a 1024×1024 JPEG (328,467 bytes), deterministic — two runs write identical bytes.

Run locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
