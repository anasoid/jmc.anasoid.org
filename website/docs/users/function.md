---
sidebar_position: 50
---

# Functions

JMC give a java way to call Jmeter functions, all Jmeter function are available as static method in the Class org.anasoid.jmc.core.wrapper.jmc.functions.**JmeterFunctions** . To see available functions see (**[jmeter-functions](/docs/reference/jmeter/jmeter-functions)**).

Functions can have multiple signature depend on optional parameters.

## Example



```java
JmeterFunctions.property("SERVER_PORT", "443"); // return ${__property(SERVER_PORT,,443)}

```
