---
title: A Framework for Security and Risk Analysis of Enrollment Procedures
subtitle: Application to Fully-Remote Solutions Based on eDocuments
paper: SECRYPT2021

people:
    - MarcoPernpruner
    - GiadaSciarretta
    - SilvioRanise

---

In this page, we provide further information about the values that have been considered for a Malicious Application (MA) during the risk analysis (Tables 5 and 6 of the paper).

## Without Mitigations
The following values are assigned to MA in case no mitigation is adopted (Table 6):
<table id="table-values-no-mitigations">
  <thead>
    <tr>
      <th rowspan="2">Scenario</th>
      <th rowspan="2" class="border-thick-left border-thick-right">Attacker</th>
      <th colspan="7">Likelihood</th>
      <th colspan="4" class="border-thick-left">Impact</th>
      <th rowspan="2" class="border-thick-left">Risk</th>
    </tr>
    <tr>
      <th><span title="Technical Difficulty">TD</span></th>
      <th><span title="Opportunity">O</span></th>
      <th><span title="Attack Vector">AV</span></th>
      <th><span title="User Interaction">UI</span></th>
      <th><span title="Spread of Attack">SA</span></th>
      <th colspan="2">Overall</th>
      <th class="border-thick-left"><span title="Attack Spread">AS</span></th>
      <th><span title="Attack Detection">AD</span></th>
      <th colspan="2">Overall</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MRTD</td>
      <td class="border-thick-left border-thick-right">{MA}</td>
      <td>6</td>
      <td>9</td>
      <td>7</td>
      <td>7</td>
      <td>6</td>
      <td>7.00</td>
      <td>High</td>
      <td class="border-thick-left">9</td>
      <td>8</td>
      <td>8.50</td>
      <td>High</td>
      <td class="border-thick-left">Critical</td>
    </tr>
    <tr>
      <td>IAS ECC</td>
      <td class="border-thick-left border-thick-right">{MA}</td>
      <td>3</td>
      <td>2</td>
      <td>7</td>
      <td>1</td>
      <td>4</td>
      <td>3.40</td>
      <td>Medium</td>
      <td class="border-thick-left">8</td>
      <td>6</td>
      <td>7.00</td>
      <td>High</td>
      <td class="border-thick-left">High</td>
    </tr>
  </tbody>
</table>

With the following motivations:
<table id="table-details-no-mitigations">
  <thead>
    <tr>
      <th>Scenario</th>
      <th colspan="3" class="border-thick-left border-thick-right">Factor</th>
      <th>Value</th>
      <th class="border-thick-left">Motivation</th>
    </tr>
  </thead>
  <tbody>    
    <tr>
      <td rowspan="7" class="border-thick-right"><span class="rotate">MRTD</span></td>
      <td rowspan="5" class="rotate">Likelihood</td>
      <td>Technical Difficulty</td>
      <td>TD</td>
      <td class="border-thick-left border-thick-right">6</td>
      <td class="text-left">The attacker only needs some technical skills (such as using a proxy) to intercept the communications between the official application and the server, then replicating such communications with tampered data.</td>
    </tr>
    <tr>
      <td>Opportunity</td>
      <td>O</td>
      <td class="border-thick-left border-thick-right">9</td>
      <td class="text-left">MA can successfully compromise the protocol by sending information belonging to other people or even completely fake, due to the lack of proper checks performed server-side. Therefore, the Opportunity is maximum since there are no limitations hindering the attacker.</td>
    </tr>
    <tr>
      <td>Attack Vector</td>
      <td>AV</td>
      <td class="border-thick-left border-thick-right">7</td>
      <td class="text-left">The attack can be performed remotely, by distributing the malicious application through the network.</td>
    </tr>
    <tr>
      <td>User Interaction needed</td>
      <td>UI</td>
      <td class="border-thick-left border-thick-right">7</td>
      <td class="text-left">The user interaction is not required, since the attacker could send any personal information without any need for interacting with the user.</td>
    </tr>
    <tr>
      <td>Spread of Attack</td>
      <td>SA</td>
      <td class="border-thick-left border-thick-right">6</td>
      <td class="text-left">Intercepting the original behaviour of official applications and trying to replicate or alter them may be pretty common.</td>
    </tr>
    <tr>
      <td rowspan="2"><span class="rotate">Impact</span></td>
      <td>Attack Scale</td>
      <td>AS</td>
      <td class="border-thick-left border-thick-right">9</td>
      <td class="text-left">The number of people that could potentially be affected by this attack is maximum, i.e., everyone (even fictional people).</td>
    </tr>
    <tr>
      <td>Attack Detection</td>
      <td>AD</td>
      <td class="border-thick-left border-thick-right">8</td>
      <td class="text-left">This attack is significantly difficult to detect, given the lack of server-side checks on the personal information submitted.</td>
    </tr>

    <tr>
      <td rowspan="7" class="border-thick-right"><span class="rotate">IAS ECC</span></td>
      <td rowspan="5"><span class="rotate">Likelihood</span></td>
      <td>Technical Difficulty</td>
      <td>TD</td>
      <td class="border-thick-left border-thick-right">3</td>
      <td class="text-left">To develop a malicious application, the attacker is required to have advanced programming skills.</td>
    </tr>
    <tr>
      <td>Opportunity</td>
      <td>O</td>
      <td class="border-thick-left border-thick-right">2</td>
      <td class="text-left">To reach users, malicious applications can either be published on official marketplaces or distributed via APKs sent through links or attachments. In both cases, the opportunity of success is extremely low: in the former case, applications need to bypass the security checks performed by the marketplaces; in the latter case, users need to explicitly enable the “Install from Unknown Sources” setting on their device before they can install such unofficial applications.</td>
    </tr>
    <tr>
      <td>Attack Vector</td>
      <td>AV</td>
      <td class="border-thick-left border-thick-right">7</td>
      <td class="text-left"><i>Same as the MRTD scenario.</i></td>
    </tr>
    <tr>
      <td>User Interaction needed</td>
      <td>UI</td>
      <td class="border-thick-left border-thick-right">1</td>
      <td class="text-left">The user interaction is required, since the user needs to provide the PIN and place the eID card for NFC reading. Moreover, the interaction is required in a precise moment as the attacker needs the user’s eID card to sign the challenge before it expires.</td>
    </tr>
    <tr>
      <td>Spread of Attack</td>
      <td>SA</td>
      <td class="border-thick-left border-thick-right">4</td>
      <td class="text-left">According to official statistics [1], the number of mobile users attacked in 2020 has significantly decreased (a quarter lower than in 2019), reaching 0.69 million in December. Therefore, we assign a medium value to this factor.</td>
    </tr>
    <tr>
      <td rowspan="2"><span class="rotate">Impact</span></td>
      <td>Attack Scale</td>
      <td>AS</td>
      <td class="border-thick-left border-thick-right">8</td>
      <td class="text-left">The number of people that could potentially be affected by this attack is considerably high, i.e., whoever installs the malicious application and owns an eDocument.</td>
    </tr>
    <tr>
      <td>Attack Detection</td>
      <td>AD</td>
      <td class="border-thick-left border-thick-right">6</td>
      <td class="text-left">This attack is difficult to detect, but less than in the MRTD scenario. In fact, while in the MRTD scenario even fictional information could be used, in this scenario the attacker strictly needs to use real people’s information, thus making the detection slightly more likely (due to the misuse of personal data).</td>
    </tr>
  </tbody>
</table>

## With Mitigations
The following values are assigned to MA in case all the proposed mitigations are adopted (Table 5):
<table id="table-values-mitigations">
  <thead>
    <tr>
      <th rowspan="2">Scenario</th>
      <th rowspan="2" class="border-thick-left border-thick-right">Attacker</th>
      <th colspan="7">Likelihood</th>
      <th colspan="4" class="border-thick-left">Impact</th>
      <th rowspan="2" class="border-thick-left">Risk</th>
    </tr>
    <tr>
      <th><span title="Technical Difficulty">TD</span></th>
      <th><span title="Opportunity">O</span></th>
      <th><span title="Attack Vector">AV</span></th>
      <th><span title="User Interaction">UI</span></th>
      <th><span title="Spread of Attack">SA</span></th>
      <th colspan="2">Overall</th>
      <th class="border-thick-left"><span title="Attack Spread">AS</span></th>
      <th><span title="Attack Detection">AD</span></th>
      <th colspan="2">Overall</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>MRTD</td>
      <td class="border-thick-left border-thick-right">{MA}</td>
      <td><b>3</b></td>
      <td><b>1</b></td>
      <td>7</td>
      <td><b>1</b></td>
      <td><b>2</b></td>
      <td><b>2.80</b></td>
      <td><b>Low</b></td>
      <td class="border-thick-left"><b>8</b></td>
      <td><b>7</b></td>
      <td><b>7.50</b></td>
      <td><b>High</b></td>
      <td class="border-thick-left"><b>Medium</b></td>
    </tr>
    <tr>
      <td>IAS ECC</td>
      <td class="border-thick-left border-thick-right">{MA}</td>
      <td><b>2</b></td>
      <td><b>1</b></td>
      <td>7</td>
      <td>1</td>
      <td><b>2</b></td>
      <td><b>2.60</b></td>
      <td><b>Low</b></td>
      <td class="border-thick-left">8</td>
      <td><b>5</b></td>
      <td><b>6.50</b></td>
      <td>High</td>
      <td class="border-thick-left"><b>Medium</b> </td>
    </tr>
  </tbody>
</table>

Specifically, mitigations affect the following factors (whose values are highlighted in bold in the table):
<ul style="list-style-type: none;">
  <li>
    <u>MRTD Scenario</u>
    <ul style="list-style-type: none;">
      <li>
        Likelihood
        <ul>
          <li><b>Technical Difficulty (TD): 6 &rarr; 3</b> | In this case, only intercepting and replicating the communications between the official application and the server is no longer enough since fictional data cannot be used due to M4. Therefore, the attacker needs to develop a malicious application as in the IAS ECC scenario.</li>
          <li><b>Opportunity (O): 9 &rarr; 1</b> | As the attacker cannot rely on fictional personal information (due to M4), he needs to make the user install the malicious application to interact with her eID card. The considerations about installing malicious applications are the same as the IAS ECC without mitigations, thus leading to decrease the Opportunity value to 2. Moreover, this value is further reduced to 1 since M9 strictly restricts the attacker’s success: in fact, given the fresh data inserted in the selfie, the attacker must complete the attack within the lifetime of the session.</li>
          <li><b>User Interaction needed (UI): 7 &rarr; 1</b> | As the attacker cannot rely on fictional personal information (due to M4), he needs a user interaction in a precise moment, as in the IAS ECC scenario.</li>
          <li><b>Spread of Attack (SA): 6 &rarr; 2</b> | Since the attacker can no longer use fictional information (due to M4) and has to deal with advanced security countermeasures such as obfuscation of the official application (M2) and fresh information in the selfie (M9), the spread of the attack considerably decreases and has to be aligned with the value assigned to SA in the IAS ECC scenario with mitigations.</li>
        </ul>
      </li>

      <li>
        Impact
        <ul>
          <li><b>Attack Scale (AS): 9 &rarr; 8</b> | The implementation of server-side checks on the correctness of the SOD (M4) prevents the attacker from being able to send fictional information. Therefore, as in the IAS ECC scenario, the number of people that could potentially be affected by this attack is high (i.e., whoever installs the malicious application and owns an eDocument) but not maximum (fictional people’s information are no longer allowed).</li>
          <li><b>Attack Detection (AD): 8 &rarr; 7</b> | In case the malicious application manages to gain root access on the user’s smartphone, M1 allows a user opening the official application to be informed about the rooting of her mobile device and realise that an attack could have happened.</li>
        </ul>
      </li>
    </ul>  
  </li>

  <li>
    <u>IAS ECC Scenario</u>
    <ul style="list-style-type: none;">
      <li>
        Likelihood
        <ul>
          <li><b>Technical Difficulty (TD): 3 &rarr; 2</b> | Mitigations M2 and M3 make the attack more difficult to be carried out from a technical perspective. In fact, the malicious application should be able to replicate the key generation procedure (M3) without really understanding the original code, which is obfuscated due to M2.</li>
          <li><b>Opportunity (O): 2 &rarr; 1</b> | M9 strictly restricts the attacker’s success: in fact, given the fresh data inserted in the selfie, the attacker must complete the attack within the lifetime of the session.</li>
          <li><b>Spread of Attack (SA): 4 &rarr; 2</b> | Since the attacker has to deal with advanced security countermeasures such as obfuscation of the official application (M2), token binding (M3) and fresh information in the selfie (M9), the spread of the attack considerably decreases.</li>
        </ul>
      </li>

      <li>
        Impact
        <ul>
          <li><b>Attack Detection (AD): 6 &rarr; 5</b> | In case the malicious application manages to gain root access on the user’s smartphone, M1 allows a user opening the official application to be informed about the rooting of her mobile device and realise that an attack could have happened.</li>
        </ul>
      </li>
    </ul>  
  </li>
</ul>

## References
[1]	Kaspersky, <a href="https://securelist.com/mobile-malware-evolution-2020/101029/">"Mobile malware evolution 2020"</a>

<style>
  .rotate {
    -moz-transform: rotate(-90.0deg);
    -o-transform: rotate(-90.0deg);
    -webkit-transform: rotate(-90.0deg);
    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation=0.083);
    -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0.083)";
    transform: rotate(-90.0deg);
  }

  table {
    margin-bottom: 1em;
    border: 2px solid #dbdbdb !important;
  }

  table tr {
    border: 1px solid #dbdbdb !important;
  }

  table th {
    border-width: 2px 1px !important;
  }

  table td {
    border-width: 1px !important;
  }

  table th,
  table td {
    text-align: center !important;
    vertical-align: middle !important;
  }

  table th.text-left,
  table td.text-left {
    text-align: left !important;
  }

  table .border-thick-left {
    border-left-width: 2px !important;
  }

  table .border-thick-right {
    border-right-width: 2px !important;
  }
</style>