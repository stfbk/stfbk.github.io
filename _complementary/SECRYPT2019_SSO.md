---
title: A Wizard-Based Approach for Secure Code Generation of Single Sign-On and Access Delegation Solutions for Mobile Native Apps
paper: SECRYPT2019_SSO

tools:
    - mIDAssistant

people:
    - AmirSharif
    - RobertoCarbone
    - SilvioRanise
    - GiadaSciarretta

peopleOrder: surname

---

## Tools
mIDAssistant is an Android Studio plugin that guides native mobile app developers with secure integration of Single Sign-On Login ([OpenID Connect](http://openid.net/specs/openid-connect-core-1_0.html)) and Access Delegation ([OAuth 2.0](https://tools.ietf.org/html/rfc6749)) solutions within their apps.

It provides a wizard-based approach that guides developers to integrate multiple third-party IdM providers within their native apps. The mIDAssistant Plugin aims to support native app developers for integration of IdM Providers which are either fully-compliant with the RFC 8252, or which are currently not fully compliant with [RFC 8252](https://tools.ietf.org/html/rfc8252) but that can be still used in a secure manner. The current version of mIDAssistant is able to:
- Enforce the usage of best current practices (BCP) for native apps set out in [RFC 8252 - OAuth 2.0 for Native Apps](https://tools.ietf.org/html/rfc8252) with thanks to the integration of [AppAuth](https://appauth.io/).
- Avoid the need to download several SDKs and understanding their online documentations (a list of known IdM Providers with their configuration information is embedded within our tool).
- Automatically integrating the secure customized code to enable the communication with the different IdM Providers.
- Support Amazon, Auth0, Google, IBM, Microsoft, OKTA, Ping, and Yahoo as OpenID Connect IdM Providers.
- Support Box, DropBox, Google, and Microsoft as OAuth 2.0 IdM Providers.