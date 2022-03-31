---
title: "Session \"Cross-domain sharing of user claims: a proposal for OIDC\" at OAuth Security Workshop 2022"
tags: [seminars]

people:
    - GiadaSciarretta
    - GiuseppeDeMarco
    - FrancescoAntonioMarino
    - AmirSharif
    - RobertoCarbone
    - SilvioRanise
     
---

The session **Cross-domain sharing of user claims: a proposal for OIDC** has been accepted to the [OAuth Security Workshop (OSW) 2022](https://oauth.secworkshop.events/osw2022), which will take place in Trondheim, Norway, from May 4 to May 6, 2022. The session will be presented by Amir Sharif (FBK).

Here is the abstract:

<blockquote>
<p>An Attribute Authority (AA) is an entity responsible for establishing, maintaining, and sharing subject's qualified attributes, such as roles,titles and positions. Examples include professional associations, registers, Chambers of Commerce and Public Administrations. In many identity ecosystems, these entities are distinct from Identity Providers (IdPs) that manage only the basic identity profile information (e.g., name, surname, email and address).</p>

<p>The general scenario involving AAs is the following: a user wants to access an online service that requires additional user’s attributes (e.g., delegation information) in order to grant access to its resources. First, the user logs in a Relying Party (RP) using his/her identity managed by an IdP (e.g., OIDC Provider, OP). Then the RP asks AA for the user’s attributes. The challenge of this scenario, involving usability, security and privacy requirements, lies in finding the right mechanism to share (the minimum and necessary set of) claims of the active user (the user who is currently authenticated with the RP) across multiple domains without requiring his or her re-authentication. To the best of our knowledge, there are no OIDC specifications that cover this aspect.</p>

<p>In the talk, we discuss a proposal in the OIDC context based on a token exchange chain and the use of the user info endpoint as a mechanism to share user claims across domains allowing the AAs to have a proof of user authentication. The proposed flow consists of three main phases:
<ol>
    <li>User authentication. The flow involves user authentication via an OP by following the usual Authorization Code Flow. The OP takes care to collect the consent of the user in relation to the release of the attributes towards the RP and, in addition, informs the user about the possibility for the RP to consult a set of AAs on behalf of the user. The consent is required to make the user aware of the on-going operation, i.e. the possibility for RP to share his/her personal data to third parties. This step allows the OP to include the services of the AAs in the access token (AT1) audience claim, issued to the RP.</li>
    <li>Token exchange chain. First, the RP requests a token exchange to the AA STS (Security Token Service as defined in RFC8693) endpoint in order to obtain a new token AT2 which allows it to access the AA endpoints. For doing that, the AA requests a token exchange to the OP STS endpoint in order to obtain a new token AT_AA which allows it to grant access to the OP userinfo endpoint. In the proposed machine-to-machine flow the token exchange between RP and AA is performed to: authenticate RP and check its federation metadata, extract the claims of the active user (a mechanism to transport user claims across domains), release an access token (AT2) generated and managed by AA. This prevents the use of a stolen or maliciously generated token by an OP.</li>
    <li>OAS3 Resource Server. This flow allows an RP to obtain the qualified attribute claims of the active user from the AA using the access token (AT2).</li>
</ol></p>

<p>During the design of this solution we analyzed other approaches, we will discuss pros and cons in terms of security and privacy of some of them.</p>
</blockquote>