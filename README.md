# Intro

This repo contains the results from my second attempt to genearte a POC for the following [idea](https://handsome-femur-998.notion.site/TBD-d2425bb47fc1408e90e4ab928590f0bb?pvs=4) using [smol developer](https://github.com/smol-ai/developer).

To the first attempt can be found [here](https://github.com/ermartinez13/poc-with-smol-v1/tree/main).

To see and play around with version 2 of the generated application, checkout [this](https://codesandbox.io/p/github/ermartinez13/poc-with-smol-v2/main?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clni2fcis00073b6ggsduarii%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clni2fcis00033b6g1em5e8vt%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clni2fcis00053b6gbyudzm8o%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clni2fcis00063b6g2qkjhr1p%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B60%252C40%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clni2fcis00033b6g1em5e8vt%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clni2fcir00023b6gfxlc55eg%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252FREADME.md%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522id%2522%253A%2522clni2fcis00033b6g1em5e8vt%2522%252C%2522activeTabId%2522%253A%2522clni2fcir00023b6gfxlc55eg%2522%257D%252C%2522clni2fcis00063b6g2qkjhr1p%2522%253A%257B%2522id%2522%253A%2522clni2fcis00063b6g2qkjhr1p%2522%252C%2522activeTabId%2522%253A%2522clni2fplv00aa3b6g365v7e31%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522TASK_PORT%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522port%2522%253A5173%252C%2522id%2522%253A%2522clni2fplv00aa3b6g365v7e31%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522path%2522%253A%2522%252F%2522%257D%255D%257D%252C%2522clni2fcis00053b6gbyudzm8o%2522%253A%257B%2522id%2522%253A%2522clni2fcis00053b6gbyudzm8o%2522%252C%2522activeTabId%2522%253A%2522clni2fcis00043b6g9mroe2nq%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clni2fcis00043b6g9mroe2nq%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clni2fcu6001ee7ghahhmeeem%2522%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522dev%2522%252C%2522id%2522%253A%2522clni2fngf008r3b6ga32tm7xp%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D) codesandbox.

# Improving The Prompt

Okay, its round 2! Our target improvements are:

- generate .tsx files
- persist data to local storage
- use keyboard bindings to trigger actions (eg. forms, timer)
- update model properties to avoid ambiguity
- clarify internal state flow of Timer component
- render list items as data rows

## Results

I was pleasantly suprised to see that the newly generated files included a package.json file, a `/public` directory for the index.html file, and a tsconfig.json. In terms of code quality, I had expected the use of TypeScript to result in fewer syntax and feature implementation bugs than the first iteration but I was sadly disappointed (it seemed like the new application version was ultimately a regression instead of a progression). I once again began addressing the bugs found and stopped once I judged it to not be worth the cost of continuing.

## Final Takeaway

I feel quite strongly that the lion's share of this version's failures rest on the shoulders of my prompting ability (or lack thereof) than anything else. Nonetheless, I can't shake the feeling that perhaps dev agents aren't quite ready to build an entire application with various moving parts in one go. Maybe it's best to scale back and utilize them to craft highly targetted and specced-out features one piece at a time.

# Costs

The new OpenAI usage costs were $1.20.
