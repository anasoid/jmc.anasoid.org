---
sidebar_position: 10
---

# JSR223 to Java.

### Why Replacing JSR223 by Java.

1. Java can be edit easily with IDE and also debugged as simple as any java application.
1. Using java we can use inheritance, and external library to reuse code and writing our library to be reused in future projects.
1. Java has better performance tha groovy.

# Java Implementation.

To Implement Java you can extends from AbstractJava**xx**Wrapper adn implement execute method, depend on type of testElement, execute has teh same input parameter as JSR223, expected the parameters witch is replaced by a map.

| Class                                | Type          | JSR223 equivalent   |
| ------------------------------------ | ------------- | ------------------- |
| **AbstractJavaSamplerWrapper**       | Sampler       | JSR223Sampler       |
| **AbstractJavaAssertionWrapper**     | Assertion     | JSR223Assertion     |
| **AbstractJavaPostProcessorWrapper** | PostProcessor | JSR223PostProcessor |
| **AbstractJavaPreProcessorWrapper**  | PreProcessor  | JSR223PreProcessor  |
| **AbstractJavaTimerWrapper**         | Timer         | JSR223Timer         |
| **AbstractJavaListenerWrapper**      | Listener      | JSR223Listener      |

## Extends

JMC is based on lombok, each wrapper class should be annotated with :

**@SuperBuilder(setterPrefix = "with", toBuilder = true)**

```java



@SuperBuilder(setterPrefix = "with", toBuilder = true)
public class TestJavaSampleListenerWrapperWithParametersKey
    extends AbstractJavaListenerWrapper {

  @Override
  public void execute(
      String label,
      JMeterContext ctx,
      JMeterVariables vars,
      Properties props,
      Map<String, String> parameters,
      Logger log,
      Sampler sampler,
      SampleResult prev,
      SampleEvent event) {

  .....
  }
  /**
  * @return list of valid parameters, null to not check validity.
  */
  @Override
  public List<String> getParametersKey() {

    return null;
  }
}

```

## Parameters

### Map

:::tip
Map Parameters is preferable than attributes.
:::

All JavaTest implementation can have parameter as Map < String,String > .

1. **addParameters(Map< String, String > parameters)** : add list of key/value.
2. **addParameter(String name, String value)** : add key/value.
3. **List< String > getParametersKey()** : implement this method to validate parameters key: null to skip validation and empty list to not accept parameters.

### Attributes (Beta)

1. **Simple attribute** (String,integer, boolean) can also be used for configuration.
2. **complex attribute** : complex attribute (List, Map , composed object, ..) can't be used to be persisted with JMX, but can be used during execution. All those attribute should be annotated with @JmcOmitField.

:::danger
Complex attribute should be skipped by annotation **@JmcOmitField**.
:::
