---
project: F&C_eVoting
website: https://aleph.fbk.eu/projects/e-voting

goals: >
      to design and implement a proof-of-concept end-to-end verifiable electronic voting solution
publications:
    - EVOTEID2022
    - EVOTEID2023
collaborations:
    - IPZS
people:                         # List of IDs of related people
    - MatteoBitussi
    - LauraCristiano
    - RiccardoLongo
    - UmbertoMorelli
    - ChiaraSpadafora
    - AlessandroTomasi
    
---

Electronic voting (e-voting) includes processes in whole or in part executed by electronic means, such as by using voting machines to cast ballots, using scanners to digitize paper ballots, or casting votes remotely over the internet (i-voting).

e-voting needs to satisfy highly complex requirements ([Council of Europe](https://www.coe.int/en/web/electoral-assistance/e-voting), [US Election Assistance Commission](https://www.eac.gov/voting-equipment/voluntary-voting-system-guidelines)), and is potentially subject to more, and more scalable attacks than in-presence paper-based voting at poll stations, and is therefore rightly subject to intense scrutiny.

On the other hand, cryptographic protocols for end-to-end verifiable elections have the potential for enhanced trustworthiness. Some of the interesting components are:

- additively homomorphic encryption to tally enncrypted votes and only decrypt the final sum;
- threshold cryptgraphy and secure multiparty computation to ensure multiple parties must collaborate to perform a decryption and to issue valid voting credentials;
- zero-knowledge proofs to check voting credential correctness, but also fake proofs to fool coercers.

In the course of this project, working as a team with personnell from collaborating partners, we had the opportunity to realize a protocol specification, cryptographic library, back-end services, and front-end android native mobile application. Source code is not currently openly available while the funding agency assesses its options.

## Notte della Ricerca 2023
A demo version of the proof of concept will be shown during the dissemination event [Notte della Ricerca 2023](https://nottedellaricerca.tn.it/) held in occasion of the [European Researcher's Night](https://marie-sklodowska-curie-actions.ec.europa.eu/event/2023-european-researchers-night).

The demo will be accompanied by two posters (in Italian):
- a demo walkthrough: [Vote App: Il Tuo Voto Conta](https://www.canva.com/design/DAFs1nyMc0g/ip_nvaLek0140ip3WU6c9Q/view?utm_content=DAFs1nyMc0g&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)
- a more technical description: [Note Tecniche su VOTE APP: come votare via Internet in maniera sicura con il tuo smartphone](https://fbk-my.sharepoint.com/:b:/g/personal/rlongo_fbk_eu/ETszJHoSC45Mi5Bazla4eAkBcSmn8Ndccq7pVcPQQCw8PA?e=jPcCeM)
