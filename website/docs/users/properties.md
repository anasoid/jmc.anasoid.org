---
sidebar_position: 80
---

# Properties

## JmcConfig:
JMC has it own properties files to manage properties for configuration see **[reference](/docs/reference/intro)**.

:::important

Class org.anasoid.jmc.core.config.**JmcConfig** give access to read property value.

:::

#### JMC read properties in order from the following inputs, last input can override values :

1. **JMC resource file** : Location org/anasoid/jmc/core/config/jmc.properties (Packaged with jmc-core.jar).
1. **User resource file** : Each project can have it's own property file : "jmc-user.properties".
1. **User file** : Each machine can have it's ow property file : "{user.home}/jmc-user.properties".
1. **Environnement variables files** : List of properties file are loaded from variable **JMC_CONFIGS**, File path separator is "**;**" .
1. **System properties files** : List of properties file are loaded from system properties file **jmc.configs**, File path separator is "**;**" it can also be add via cls argument (**-Djmc.config=**/../file1.properties**;**/../file2.properties) .
1. **System properties** : properties can also be add via cls argument (-Dname=value).

## Local JmcConfig:

The same test can generate many variants of JMX files, the best way is to use local context for jmc config.

Local context are created using method **JmcConfig.createLocalJmcConfig**, it can take in parameter map of keys/values and/ or files (files path are considered as resources file or system file)

```java

 // config use default values.

try (AutoCloseable c =    JmcConfig.createLocalJmcConfig(
        Map.of("key", "value1"),
        Arrays.asList("org/myproject/dev.properties"))) {
          // dev.properties override default values.
          // key =value1
          try (AutoCloseable c =    JmcConfig.createLocalJmcConfig(
                Map.of("key", "value2"),
                Arrays.asList("/home/user/prod.properties"))) {
                    // key =value2
                    // prod.properties override dev.properties
                }
        // key =value1
        // dev.properties override default values.


}

 // config use default values.

```
