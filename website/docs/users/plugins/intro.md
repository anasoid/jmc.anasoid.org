---
sidebar_position: 0
---

# JMC Plugins

JMC Plugins add features to Jmeter, to integrate JMC also during Jmeter execution and not only to generate JMX file.


## Installation.

Download last [jmc-core-\*.jar](https://mvnrepository.com/artifact/org.anasoid.jmc/jmc-core) and [jmc-plugin-\*.jar](https://mvnrepository.com/artifact/org.anasoid.jmc/jmc-plugin).

Add [jmc-core-\*.jar](https://mvnrepository.com/artifact/org.anasoid.jmc/jmc-core) and  [jmc-plugin-\*.jar](https://mvnrepository.com/artifact/org.anasoid.jmc/jmc-plugin) jar to jmeter as plugin : two choice possible  : 

1. Add jmc-plugin-*.jar to jmeter plugin folder:  lib/ext.
1. Add property __search_paths__ to Jmeter with path to **jmc-core-\*.jar** and  **jmc-plugin-\*.jar** folder : see [Jmeter classpath](https://jmeter.apache.org/usermanual/properties_reference.html#classpath) .



Also your projects using plugin should be included to Jmeter as plugin, the same way as jmc-plugin-*.jar is installed

## Debug & Execution 

### Intellij

![jmeter-debug-Intellij](/img/jplugins/jmeter-debug-Intellij.png)

1. Download Jmeter to any folder on your Machine.
2. Install any plugins you need to jmeter and also install __jmc-core__ and __jmc-plugin__ as plugins.
3. Add run/debug configurations as __Jar Application__.
4. __Path to Jar__ : path to __ApacheJMeter.jar__ in Folder bin.
5. __VM options__ : -XX:MaxMetaspaceSize=256m -Xss256k -Dsun.awt.disablegrab=true -cp org.apache.jmeter.NewDriver 
6. __Program arguments__ : Add path to jar plugins and also your project classes with search_paths properties, Intellij can use Macro to replace variable from your project like $ProjectFileDir$ for root project dir,   ( ex : -Jsearch_paths=$ProjectFileDir$/myproject-plugin/build/classes/java/main;$ProjectFileDir$/myproject-core/build/classes/java/main ), You can also add any Jmeter arguments like run in non-gui mode.
7. __Before launch__  : Build your project to refresh the classes, for gradle you can add in agrument (-x check -x javadoc -x assemble) to have  a quick build and skip test, check, generating jar.
