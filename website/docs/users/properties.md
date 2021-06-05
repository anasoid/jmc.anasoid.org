---
sidebar_position: 80
---

# Properties

JMC has it own properties files to manage properties for configuration see **[reference](/docs/reference/intro)**.

:::important 

Class org.anasoid.jmc.core.config.**JmcConfig** give access to read property value.

:::

#### JMC read properties in order from the following inputs, last input can override values :

1. **JMC resource file** : Location org/anasoid/jmc/core/config/jmc.properties (Packaged with jmc-core.jar).
1. **User resource file** : Each project can have it's own property file : "jmc-user.properties".
1. **User file** : Each machine can have it's ow property file : "{user.home}/jmc-user.properties".
1. **System properties** : properties can also be add via cls argument (-Dname=value).
