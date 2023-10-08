# Intro

This repo contains the results from my second attempt to genearte a POC for the following [idea](https://handsome-femur-998.notion.site/TBD-d2425bb47fc1408e90e4ab928590f0bb?pvs=4) using [smol developer](https://github.com/smol-ai/developer).

To the first attempt can be found [here](https://github.com/ermartinez13/poc-with-smol-v1/tree/main).

To see and play around with version 2 of the generated application, checkout [this](https://codesandbox.io/p/github/ermartinez13/poc-with-smol-v2/main?workspaceId=ce2ee9c5-9e3c-4906-8a66-51ac2d9f846b) codesandbox.

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
