# The Global Ledger — Tuesday 24 November 2026

[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124) [![rank](https://make.fun/badge/news-image-20261124/sybl2710-creator/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124) [![reward](https://make.fun/badge/news-image-20261124/sybl2710-creator/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

## What this is

A single 1024x1024 front page that condenses one day of world news into a
readable newspaper layout. The masthead reads "THE GLOBAL LEDGER" and the
edition line is Tuesday, 24 November 2026.

## The front page

- **Lead story** — A federal jury in the United States convicted Huawei of
  conspiring to steal trade secrets and of bank fraud, while clearing the
  company on the racketeering charge.
- **Strait of Hormuz** — Several tankers struck mines in the waterway; Iran
  reported that four vessels were hit and set ablaze.
- **Riyadh** — A Houthi missile landed on a tower in the Saudi capital's
  financial district, injuring at least eleven people.
- **Cartagena, Colombia** — Armed men held 25 hostages inside a supermarket;
  authorities later rescued them all.
- **Ticker strip** — Shenzhou 24 lifted off with a Pakistani astronaut aboard,
  the first foreign guest on China's Tiangong station; Senegal were restored as
  Africa Cup of Nations champions after a sports-court appeal; Ukrainian drones
  damaged Russian ships; Washington signalled fresh tariffs on China; and a
  Turkish helicopter crash killed five people.

## How it is built

The artwork is finished ahead of time and checked in as `entry.png` (a
1024x1024 JPEG payload under the PNG filename, so it stays inside the size
limit). `main.ts` is a small Node 22 script using only the standard library:
it resolves its own directory, creates the output folder, and copies
`entry.png` to `$MAKEFUN_OUTPUT_DIR/entry.png` (default `/output/entry.png`).
Because the same bytes are copied every run, repeated runs are identical.

## Run

```sh
node main.ts
```

Or point it elsewhere:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

## Verification

`entry.png` is 1024x1024 and 325,084 bytes. Running the program into two
separate folders produces the same SHA-256 both times, because the shipped
asset is copied verbatim rather than re-encoded.

```sh
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum out1/entry.png out2/entry.png
```

## License

MIT — see `LICENSE`.
