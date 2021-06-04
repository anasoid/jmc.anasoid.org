---
sidebar_position: 0
---

# Get Started

Let's Jmeter as code **JMC in less than 5 minutes**.

## Getting Started

Get started by **looking to [JMC Example](https://github.com/anasoid/jmc-examples)**.

## Create new project using Gradle (Or Maven)

Add dependency to last version of **org.anasoid.jmc:jmc-core**

To access snapshot version use snapshot repository.

```shell
repositories {
    // Use JCenter for resolving dependencies.
    mavenCentral()
    maven {
        url = "https://s01.oss.sonatype.org/content/repositories/snapshots/"
    }
}
```

## Configuration
To generate JMX file you don't need to have Jmeter installed, to execute Test with JMC you need Jmeter installed and the environnement variable **JMETER_HOME** to be configured.

## Write your test

Full support of Jmeter feature all node can be  add config, assertion, listener, ... (Not all protocol are covered, but Http is 100% covered, next protocol to be add wil  be JDBC).

Test an be executed as junit or main method. it's recommended to execute final test with command line from JMX.

## Reference

See reference of implemented component in **[Reference](/docs/reference/jmeter/jmeter-component)**.