---
sidebar_position: 0
---

# Get Started

Let's Jmeter as code **JMC in less than 5 minutes**.

## Getting Started

Get started by **looking to [JMC Example](https://github.com/anasoid/jmc-examples)**.

## Create new project using Gradle (Or Maven)

Add dependency to last version of **org.anasoid.jmc:jmc-core**

### Dependencies

:::important Add dependency to Lombok.

```shell

    //LOMBOCK
    compileOnly 'org.projectlombok:lombok:1.18.20'
    annotationProcessor 'org.projectlombok:lombok:1.18.20'

```

:::

#### To access snapshot version use snapshot repository.

```shell
repositories {
    // Use JCenter for resolving dependencies.
    mavenCentral()
    maven {
        url = "https://s01.oss.sonatype.org/content/repositories/snapshots/"
    }
}
```

Last snapshot version is **master-SNAPSHOT**.

```shell

    implementation 'org.anasoid.jmc:jmc-core:master-SNAPSHOT'

```

To use Jmeter-plugins add dependency to **jmc-jmeter-plugins**.

```shell

    implementation 'org.anasoid.jmc:jmc-jmeter-plugins:master-SNAPSHOT'

```

It's recommended to use last stable version.

:::tip use last version ![Maven Central](https://img.shields.io/maven-central/v/org.anasoid.jmc/jmc-core?label=%20&style=flat-square)

implementation 'org.anasoid.jmc:jmc-core:![Maven Central](https://img.shields.io/maven-central/v/org.anasoid.jmc/jmc-core?label=%20&style=flat-square)'

implementation 'org.anasoid.jmc:jmc-jmeter-plugins:![Maven Central](https://img.shields.io/maven-central/v/org.anasoid.jmc/jmc-core?label=%20&style=flat-square)'

:::


## Write your test

Full support of Jmeter feature all node can be add config, assertion, listener, ... (Not all protocol are covered, but Http is 100% covered, next protocol to be add wil be JDBC).

Test an be executed as junit or main method. it's recommended to execute final test with command line from JMX.

## Reference

See reference of implemented component in **[Reference](/docs/reference/jmeter/jmeter-component)**.
