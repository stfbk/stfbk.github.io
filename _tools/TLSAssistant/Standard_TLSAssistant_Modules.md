---
title: TLSAssistant
subtitle: Standard TLSAssistant Modules
layout: page
---

{% include toc.md %}

# Module Definition

## Module rules

A module:

* *Can*
  
  * have submodules;
  
  * be the union of some modules;
  
  * have more than one class;
  
  * have more than one object;
  
  * have `conf` attribute of type `Config_base()`
  
    * needed to enable APACHE/NGINX config parsing
  
    * Use inheritance to create a proper `condition()` method.
  
      > *Suggested implementation:*
      >
      > ```python
      > class My_conf(Config_Base):
      >  #override
      >  def condition(self,vhost):
      >      return '3DES' not in vhost['cipher']
      > 
      > class My_module:
      >     conf = My_conf()
      >  def __init__(self):
      > 	[...]
      > ```
      
  
  * Have a `stix` attribute of type `Bundled()`
  
    > *Suggested implementation:*
    >
    > ```python
    > class My_module:
    >     stix = Bundled(mitigation_object=load_mitigation("My_Module"))
    >     def __init__(self):
    >         [...]
    > ```
    >
    > The stix “Bundled” method doesn’t need overwriting.
  
* **Must**
  
  * have a configuration file;
  
  * have a main class, which must have
    *  `.input(*args)` method;
    
    * `.output(*args)` method;
    
    * `.run(*args)`method:
    
      > *Suggested Implementation:*
      >
      > ```python
      > def run(self, input):
      >     self.input(input)
      >     #logic of the module
      >     #self.scan()
      >     #...
      >     return self.output()
      > ```
    
      
    
  * be commented properly;
  
  * use the same file (except for submodules, these can be in different files);
  
  * (IF a module is `server` related):
  
    * have `hostname` parameter
    * have `port` parameter
  
  * (IF a module is `android` related):
  
    * have a `path` parameter
    
  * (IF a module is `wrapper` and IF possible)
  
    * have a caching system.
  
* ==Should==

  * have a mitigation in output if it is not a wrapper module[^1] ;
  * be as independent as possible;

## Configuration file

The configuration file **must** define:

* Input: can have multiple inputs
  * Short description of the input
  * Type (file, string, integer...)
  * `path` to the file, from the root folder of the project
  * `class_name` as the main class name (case sensitive)
* Output: must have a single output at time, should be mutual (OR only)
  * Short description of the output
  * Type (file, string, integer...)

> An example
>
> ```json
> {
>  'input': //AND or OR
>  [
>          {
> 
>              'name':'a',
>              'type': int,
>              'description': 'does x, y with z',
>              'required':'False'
> 
>      },
>      {
>              'name':'sum',
>              'type': Str,
>              'description': 'Needed for...',
>              'required':'True',
>              'args':['sum','s']
>      }
> ],
>  'description': 'Bla Bla Bla',
>  'path':'modules/android/super.py',
>  'class_name':'Super'
>  'output': //MUTUAL, only OR
>  [
>      {
> 	   'name':'x',
>             'type':Str,
>             'description':'Keks'
>      }
>  ]
> }
> ```

These files will be stored in `configs/modules` 

## How to communicate between modules

* Use JSON or
* Use ``dict()`` directly.

## Output of a module

The output:

* **Must** (unless it’s a wrapper module [^1])

  * have the problem title;

  * have the problem description;

  * have a mitigation;

  * follow this format:

    ```json
    {
        'title of the vulnerability':{
            'description':'desc',
            'mitigation':{
                [...]
            }
    	}
    }
  
  > *CVE and others personalized entities can be freely added to this structure. These are the required ones.*
  
* *Can*

  * have personalized entries.

> A wrapper module [^1] can have a generic output, because it won’t be put into the final report.
>
> A wrapper module output **should never reach the output modules** without being parsed.



## Footnotes

[^1]: A module that calls an external software/dependency.