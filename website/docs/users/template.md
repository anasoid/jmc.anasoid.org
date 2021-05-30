---
sidebar_position: 3
---

# Template

Let's Jmeter as code **JMC in less than 5 minutes**.

## Getting Started

Get started by **looking to [JMC Example](https://github.com/anasoid/jmc-examples)**.

## Create new project using Gradle (Or Maven)

Add dependeny to last version of **org.anasoid.jmc:jmc-core**

To access snapshot version use snapshot reposiroty.

```shell
repositories {
    // Use JCenter for resolving dependencies.
    mavenCentral()
    maven {
        url = "https://s01.oss.sonatype.org/content/repositories/snapshots/"
    }
}
```

## Write your test

Full support of Jmeter feature all node can be  add config, assertion, listner, ... (Not all protocol are covered, but Http is 100% covered, next protocol to be add wil  be JDBC).

Test an be executed as junit or main method. it's recomanded to execute final test with command line from JMX.
