---
sidebar_position: 1
---

# Tutorial Intro

Let's Jmeter as code **JMC in less than 5 minutes**.

## Getting Started

Get started by **looking to [JMC Example](https://github.com/anasoid/jmc-examples)**.

## Create a new project using Gradle (Or Maven).

Add a dependeny to the last version of **org.anasoid.jmc:jmc-core**

To access the snapshot version use snapshot reposiroty.

```shell
repositories {
    // Use JCenter for resolving dependencies.
    mavenCentral()
    maven {
        url = "https://s01.oss.sonatype.org/content/repositories/snapshots/"
    }
}
```

## Write your tests

Full support of Jmeter features, all nodes can add config, assertions, listeners, ... (Not all protocols are covered, but Http is 100% covered, and next protocol to be added will be JDBC).

Tests can be executed as junit or main method. it's recomanded to execute final tests with the command line from JMX.
