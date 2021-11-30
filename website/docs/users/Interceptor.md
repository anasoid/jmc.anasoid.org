---
sidebar_position: 50
---

# Interceptor

org.anasoid.jmc.core.application.interceptors.**PrepareInterceptor** can change Wrappers tree before generating final JMX.

## Example

Add a default wait for each sampler having a tag "wait"

Ex

```java
public class WaitInterceptor implements PrepareInterceptor {

  @Override
  public boolean support(TestElementWrapper<?> testElementWrapper) {
    return testElementWrapper.getTags().contains("wait"))
        && testElementWrapper instanceof HTTPSamplerProxyWrapper;
  }

  @Override
  public void prepare(TestElementWrapper<?> testElementWrapper) {
    HTTPSamplerProxyWrapper sampler = (HTTPSamplerProxyWrapper) testElementWrapper;

    sampler.getChildren().add(
        UniformRandomTimerWrapper.builder()
            .withName("Wait default")
            .withDelay(0)
            .withRandom(20)
            .build());
  }
}

```

ApplicationTest accept a list of Interceptors.

```java

    ApplicationTest applicationTest = new ApplicationTest(new HelloTestPlan().generate(),
        Arrays.asList(new WaitInterceptor()));
```
