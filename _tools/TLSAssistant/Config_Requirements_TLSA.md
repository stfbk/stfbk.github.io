---
title: TLSAssistant
subtitle: Config Requirements TLSA
layout: page
---

{% include toc.md %}

# Definition

Each config file

* It **must**
  * have a name,
  * list all the modules used.
* it *can*
  * have personalized entries,
  * import other configurations,
  * explicit the args of each module.

For example: `Config with include`

````json
{
    'name':'AGID Compliance',
    'include':{
        		'file':'compliance.json',
        		'remove':{
					'modules':['android'],
                    			    'args',
                                                    },
        		'add':	{
                    			'modules':['TLS','stix'],
                    			'args':{
 								'TLS':['d','192.168.1.1','compliance'],
        					  'stix':['c://dkgd/file.out'],
        					  'Compliance': [ 'AGID' ]
                				}
                			}
              }
    #modules is disabled if we are using include.
}
````

`Config generic`

```json
{
    'name':'Compliance',
    'description':'Template for other configuration regarding Compliances',
    'modules':['Compliance','TLS'],
    'args':{	
        	'TLS':['d','127.0.0.1','compliance'],
        	  'Compliance': [ 'Generic' ]
                }
}
```



# Notes

* If `include` is used, `modules` and other entries are ignored, except for `name`, `include`.

* The execution priority is:

  1. `include file`
  2. `include remove`
  3. `include add`
  
* Everything inside `add` or `remove` is **optional** and it follows a generic configuration.

  * `add`: adds the entries to the already included;
  * `remove`: removes the entries received with the `include` statement.

* Every other unknown entry can be added in `add`.

* If an unknown entry is added and no modules processes it, nothing happens.