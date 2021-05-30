---
sidebar_position: 2
---

# Builder

JMC is based on **[Lombok](https://projectlombok.org/features/experimental/SuperBuilder)** to generate builder.

## Test Tree

You can add testElement to tree on builder like you do using GUI.



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
