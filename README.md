## Introduction
**The idea for the project**

The purpose of this webpage is to entertain the visitor with a word game. The aim of the game is to enter a word similar in meaning to the one shown on the page. If the word entered by the visitor is contained in the English Thesaurus the visitor gets a point. Both succesful and failed guesses are scored and shown on the page.   

**Project preparation**

The site was designed using the Five Planes of User Experience approach. This document follows the steps taken during the preparation of the site, going from the most abstract to the most concrete.

# Plane 1 Strategy
## Project goals
### Owner goals
- Provide online entertainment in the form of a word game.

### User goals
- Spend some time on easy entertainment.
- Be challenged on knowledge of the English language.

### Focus
I calculated the Focus ratio by multiplying Importance and Viability and normalised the results. This enabled me to compare every Opportunity on a scale of 0-100%. The higher the number the more crucial it is for the Opportunity to be addressed. Importance and Feasibility spectrum is perfectly illustrated on Code Institute graph below; Opportunities with high factor of both importance and viability would find themselves on the top right corner of the graph (red area). 
<details>
    <summary>Importance / Viability graph</summary>
    <img src="docs/feasibility-graph.gif">
</details>


| No. | Opportunity / problem                                        | Importance (1 - 5 most important) | Viability / Feasibility (1– 5 most difficult) | Focus ratio |
| --- | ------------------------------------------------------------ | --------------------------------- | --------------------------------------------- | ----------- |
| 1   | Provide entertainment for the visitor                        | 5                                 | 5                                             | 100%        |
| 2   | Provide a challenge in the knowledge of the English language | 4                                 | 5                                             | 80%         |
| 3   | Provide educational element in the English language          | 3                                 | 4                                             | 48%         |

Basing on the above analysis the initial roll-out follows on opportunities 1 through 3 as important and feasible and as such are addressed in the project. 

**Definition**
The website is a recreational site providing entertainment with educational elements within English language scope.

**Value**
Value for the owner is providing light-harted entertainment. 
Value for the visitor is engaging in a simple game with an educational element.

# Plane 2 Scope
## Objective requirements
The visitor wants a site which will provide entertainment and is easy to use.

## Functional specifications
- Site shows random words.
- Visitor enters words that are similar in meaning (or otherwise related to the shown word) using keyboard. 
- After pressing the Submit button or Enter key on keyboard by visitor the word is checked on it's appearance in the thesaurus. 
- Score of successful and unsuccessful tries is kept and shown on the page for the duration of the game.

## Content requirements
Website needs to contain:
- Explanation on nature of the game.
- Game part.
- Score.

## Project rollout
All opportunities listed in the Focus section are expected to be realized in the initial rollout.

# Plane 3 Structure
## Prioritisation
The elements of the project are prioritised in the following order:
1. Provide entertainment for the visitor
2. Provide a challenge in the knowledge of the English language
3. Provide educational element in the English language

## Semantic sections
Webpage has three main semantic sections: 
1. Header: contains the title of the game and doesn't change.
2. Main section: contains two subpages:
    * Introduction and difficulty choice
    * Game part with random word, text area for Visitor's word, Submit button and score.
3. Footer: containing links to Owner's social media platforms and information about the site.

# Plane 4 Skeleton

Site low-fidelity prototypes (wireframes) were created in three versions for various screen sizes: small/smartphone, medium/tablet and large/PC to maintain website responsiveness on various screen sizes:

<details>
    <summary>Starting page</summary>
    <img src="docs/wireframe-starting-page.png">
</details>
<details>
    <summary>Game page</summary>
    <img src="docs/wireframe-game-page.png">
</details>

